/**
 * WebTech Learning - Interactive Test Engine
 * Full MCQ Test Runner with Question Navigation Palette, 
 * Progress Bar, State Persistence, and Comprehensive Review System.
 */
(function(window) {
  'use strict';

  var currentTest = {
    unitNumber: 1,
    testKey: '',
    testTitle: '',
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // index: optionIndex (0..3)
    state: 'intro'   // 'intro', 'testing', 'results'
  };

  function getQuestionsForTest(unitNumber, testKey) {
    var bank = window['UNIT' + unitNumber + '_QUESTIONS'];
    if (bank && bank[testKey]) {
      return bank[testKey];
    }
    // Fallback search across all unit globals if not found
    for (var u = 1; u <= 5; u++) {
      var b = window['UNIT' + u + '_QUESTIONS'];
      if (b && b[testKey]) return b[testKey];
    }
    return [];
  }

  function createModalDOM() {
    if (document.getElementById('wt-test-modal')) return;

    var modalHtml = [
      '<div id="wt-test-modal" class="wt-test-modal" role="dialog" aria-modal="true" aria-labelledby="wt-modal-title">',
      '  <div class="wt-test-overlay" id="wt-test-overlay"></div>',
      '  <div class="wt-test-dialog">',
      '    <header class="wt-test-header">',
      '      <div class="wt-header-info">',
      '        <span class="wt-unit-badge" id="wt-modal-badge">Unit Test</span>',
      '        <h3 class="wt-modal-title" id="wt-modal-title">Topic Examination</h3>',
      '      </div>',
      '      <button class="wt-modal-close" id="wt-modal-close-btn" aria-label="Close Test">&times;</button>',
      '    </header>',
      '    <div class="wt-test-body" id="wt-test-body">',
      '      <!-- Dynamic views injected here -->',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    document.getElementById('wt-test-overlay').addEventListener('click', function() {
      if (currentTest.state === 'testing') {
        if (confirm('Are you sure you want to exit? Your current test progress will be lost.')) {
          WebTechTestEngine.closeTest();
        }
      } else {
        WebTechTestEngine.closeTest();
      }
    });

    document.getElementById('wt-modal-close-btn').addEventListener('click', function() {
      if (currentTest.state === 'testing') {
        if (confirm('Are you sure you want to exit? Your current test progress will be lost.')) {
          WebTechTestEngine.closeTest();
        }
      } else {
        WebTechTestEngine.closeTest();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.getElementById('wt-test-modal').classList.contains('active')) {
        if (currentTest.state === 'testing') {
          if (confirm('Are you sure you want to exit? Your current test progress will be lost.')) {
            WebTechTestEngine.closeTest();
          }
        } else {
          WebTechTestEngine.closeTest();
        }
      }
    });
  }

  function renderIntroView() {
    var previous = window.WebTechStorage ? window.WebTechStorage.getResult(currentTest.testKey) : null;
    var bestBadgeHtml = '';

    if (previous && previous.completed) {
      bestBadgeHtml = [
        '<div class="wt-prev-record">',
        '  <span class="wt-record-icon">🏆</span>',
        '  <div>',
        '    <strong>Previous Best Score: ' + previous.bestScore + ' / ' + previous.total + ' (' + previous.bestPercentage + '%)</strong>',
        '    <p>Completed in ' + previous.attempts + ' attempt' + (previous.attempts > 1 ? 's' : '') + '. You can retake this test anytime to improve your score.</p>',
        '  </div>',
        '</div>'
      ].join('');
    }

    var html = [
      '<div class="wt-intro-view">',
      '  <div class="wt-intro-card">',
      '    <div class="wt-intro-icon">📝</div>',
      '    <h4>' + currentTest.testTitle + '</h4>',
      '    <p class="wt-intro-subtitle">Formal Topic Evaluation • Quantum University Syllabus (CS35302)</p>',
      '    ' + bestBadgeHtml,
      '    <div class="wt-test-specs">',
      '      <div class="wt-spec-item"><span class="wt-spec-val">20</span><span class="wt-spec-lbl">Multiple Choice Questions</span></div>',
      '      <div class="wt-spec-item"><span class="wt-spec-val">4</span><span class="wt-spec-lbl">Options Per Question</span></div>',
      '      <div class="wt-spec-item"><span class="wt-spec-val">1</span><span class="wt-spec-lbl">Single Correct Answer</span></div>',
      '      <div class="wt-spec-item"><span class="wt-spec-val">100%</span><span class="wt-spec-lbl">Instant Explanations</span></div>',
      '    </div>',
      '    <ul class="wt-instructions-list">',
      '      <li>Questions test conceptual mastery, working mechanisms, and practical code understanding.</li>',
      '      <li>You can navigate freely between questions using <strong>Previous</strong>, <strong>Next</strong>, or the question palette.</li>',
      '      <li>You can change your selected answers at any time before submitting.</li>',
      '      <li>Correct answers and detailed pedagogical explanations are revealed immediately after submission.</li>',
      '    </ul>',
      '    <div class="wt-intro-actions">',
      '      <button class="wt-btn wt-btn-primary wt-btn-lg" id="wt-btn-start-test">',
      '        <span>Start Examination</span>',
      '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
      '      </button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.getElementById('wt-test-body').innerHTML = html;

    document.getElementById('wt-btn-start-test').addEventListener('click', function() {
      currentTest.state = 'testing';
      currentTest.currentIndex = 0;
      currentTest.userAnswers = {};
      renderTestingView();
    });
  }

  function renderTestingView() {
    var q = currentTest.questions[currentTest.currentIndex];
    var total = currentTest.questions.length;
    var answeredCount = Object.keys(currentTest.userAnswers).length;
    var pct = Math.round(((currentTest.currentIndex + 1) / total) * 100);

    var optionsHtml = '';
    var letters = ['A', 'B', 'C', 'D'];
    q.options.forEach(function(optText, optIdx) {
      var isSelected = currentTest.userAnswers[currentTest.currentIndex] === optIdx;
      optionsHtml += [
        '<label class="wt-option-card ' + (isSelected ? 'selected' : '') + '">',
        '  <input type="radio" name="wt_q_option" value="' + optIdx + '" ' + (isSelected ? 'checked' : '') + ' />',
        '  <span class="wt-opt-letter">' + letters[optIdx] + '</span>',
        '  <span class="wt-opt-text">' + escapeHTML(optText) + '</span>',
        '</label>'
      ].join('');
    });

    // Palette items 1 to 20
    var paletteHtml = '';
    for (var i = 0; i < total; i++) {
      var isCurrent = (i === currentTest.currentIndex);
      var isAnswered = currentTest.userAnswers[i] !== undefined;
      var classes = 'wt-pal-btn';
      if (isCurrent) classes += ' current';
      if (isAnswered) classes += ' answered';

      paletteHtml += '<button class="' + classes + '" data-qidx="' + i + '" title="Question ' + (i + 1) + '">' + (i + 1) + '</button>';
    }

    var isLast = (currentTest.currentIndex === total - 1);

    var html = [
      '<div class="wt-testing-view">',
      '  <div class="wt-progress-strip">',
      '    <div class="wt-progress-bar" style="width: ' + pct + '%"></div>',
      '  </div>',
      '  <div class="wt-testing-grid">',
      '    <main class="wt-q-main">',
      '      <div class="wt-q-meta">',
      '        <span class="wt-q-counter">Question ' + (currentTest.currentIndex + 1) + ' of ' + total + '</span>',
      '        <span class="wt-answered-status">' + answeredCount + ' of ' + total + ' Attempted</span>',
      '      </div>',
      '      <h4 class="wt-q-text">' + escapeHTML(q.question) + '</h4>',
      '      <div class="wt-options-list" id="wt-options-container">',
      '        ' + optionsHtml,
      '      </div>',
      '      <div class="wt-nav-toolbar">',
      '        <button class="wt-btn wt-btn-secondary" id="wt-btn-prev" ' + (currentTest.currentIndex === 0 ? 'disabled' : '') + '>',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
      '          <span>Previous</span>',
      '        </button>',
      '        <div class="wt-toolbar-right">',
      (isLast 
        ? '        <button class="wt-btn wt-btn-submit" id="wt-btn-submit-exam">Submit Test</button>' 
        : '        <button class="wt-btn wt-btn-primary" id="wt-btn-next"><span>Next</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>'
      ),
      '        </div>',
      '      </div>',
      '    </main>',
      '    <aside class="wt-palette-sidebar">',
      '      <div class="wt-palette-header">',
      '        <h5>Question Navigator</h5>',
      '        <span class="wt-pal-legend">',
      '          <span class="dot answered"></span> Attempted',
      '          <span class="dot unattempted"></span> Unattempted',
      '        </span>',
      '      </div>',
      '      <div class="wt-palette-grid">',
      '        ' + paletteHtml,
      '      </div>',
      '      <div class="wt-palette-footer">',
      '        <button class="wt-btn wt-btn-outline-danger wt-btn-sm wt-btn-block" id="wt-palette-submit-btn">Submit Test</button>',
      '      </div>',
      '    </aside>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.getElementById('wt-test-body').innerHTML = html;

    // Attach option listeners
    var radioInputs = document.querySelectorAll('input[name="wt_q_option"]');
    radioInputs.forEach(function(radio) {
      radio.addEventListener('change', function(e) {
        var selectedIdx = parseInt(e.target.value, 10);
        currentTest.userAnswers[currentTest.currentIndex] = selectedIdx;
        
        // Visual radio card highlight
        document.querySelectorAll('.wt-option-card').forEach(function(card) {
          card.classList.remove('selected');
        });
        e.target.closest('.wt-option-card').classList.add('selected');

        // Update palette button class
        var palBtn = document.querySelector('.wt-pal-btn[data-qidx="' + currentTest.currentIndex + '"]');
        if (palBtn) palBtn.classList.add('answered');

        // Update status text
        var statusEl = document.querySelector('.wt-answered-status');
        if (statusEl) {
          statusEl.textContent = Object.keys(currentTest.userAnswers).length + ' of ' + total + ' Attempted';
        }
      });
    });

    // Previous button
    var prevBtn = document.getElementById('wt-btn-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        if (currentTest.currentIndex > 0) {
          currentTest.currentIndex--;
          renderTestingView();
        }
      });
    }

    // Next button
    var nextBtn = document.getElementById('wt-btn-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        if (currentTest.currentIndex < total - 1) {
          currentTest.currentIndex++;
          renderTestingView();
        }
      });
    }

    // Submit buttons
    var submitBtn = document.getElementById('wt-btn-submit-exam');
    if (submitBtn) {
      submitBtn.addEventListener('click', confirmAndSubmitTest);
    }

    var palSubmitBtn = document.getElementById('wt-palette-submit-btn');
    if (palSubmitBtn) {
      palSubmitBtn.addEventListener('click', confirmAndSubmitTest);
    }

    // Palette jump buttons
    document.querySelectorAll('.wt-pal-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var targetIdx = parseInt(this.getAttribute('data-qidx'), 10);
        currentTest.currentIndex = targetIdx;
        renderTestingView();
      });
    });
  }

  function confirmAndSubmitTest() {
    var total = currentTest.questions.length;
    var answered = Object.keys(currentTest.userAnswers).length;
    var unanswered = total - answered;

    var message = 'Are you ready to submit your test?';
    if (unanswered > 0) {
      message = 'You have ' + unanswered + ' unattempted question' + (unanswered > 1 ? 's' : '') + ' out of ' + total + '.\n\nAre you sure you want to submit now?';
    }

    if (confirm(message)) {
      evaluateAndShowResults();
    }
  }

  function evaluateAndShowResults() {
    currentTest.state = 'results';
    var total = currentTest.questions.length;
    var correctCount = 0;
    var incorrectCount = 0;
    var unansweredCount = 0;

    currentTest.questions.forEach(function(q, idx) {
      var userChoice = currentTest.userAnswers[idx];
      if (userChoice === undefined) {
        unansweredCount++;
      } else if (userChoice === q.answer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    var pct = Math.round((correctCount / total) * 100);

    // Persist result
    if (window.WebTechStorage) {
      window.WebTechStorage.saveResult(currentTest.testKey, correctCount, total, currentTest.userAnswers);
    }

    // Determine performance grade
    var gradeText = '';
    var gradeClass = '';
    if (pct >= 85) {
      gradeText = 'Excellent! Mastery Achieved';
      gradeClass = 'grade-excellent';
    } else if (pct >= 65) {
      gradeText = 'Good Understanding • Keep Practicing';
      gradeClass = 'grade-good';
    } else {
      gradeText = 'Revision Recommended • Review Explanations Below';
      gradeClass = 'grade-needs-work';
    }

    // Build question-by-question review items
    var letters = ['A', 'B', 'C', 'D'];
    var reviewItemsHtml = '';

    currentTest.questions.forEach(function(q, idx) {
      var userChoice = currentTest.userAnswers[idx];
      var isCorrect = (userChoice === q.answer);
      var isUnanswered = (userChoice === undefined);

      var badgeText = isCorrect ? 'Correct' : (isUnanswered ? 'Unattempted' : 'Incorrect');
      var badgeClass = isCorrect ? 'badge-correct' : (isUnanswered ? 'badge-unanswered' : 'badge-incorrect');

      var optionsReviewHtml = '';
      q.options.forEach(function(optText, optIdx) {
        var optClass = 'wt-rev-opt';
        var indicator = '';

        if (optIdx === q.answer) {
          optClass += ' opt-correct';
          indicator = '<span class="wt-rev-indicator correct">✓ Correct Answer</span>';
        }

        if (userChoice === optIdx) {
          if (isCorrect) {
            optClass += ' opt-user-correct';
          } else {
            optClass += ' opt-user-wrong';
            indicator = '<span class="wt-rev-indicator wrong">✗ Your Selection</span>';
          }
        }

        optionsReviewHtml += [
          '<div class="' + optClass + '">',
          '  <span class="wt-rev-letter">' + letters[optIdx] + '</span>',
          '  <span class="wt-rev-text">' + escapeHTML(optText) + '</span>',
          '  ' + indicator,
          '</div>'
        ].join('');
      });

      reviewItemsHtml += [
        '<div class="wt-review-card ' + (isCorrect ? 'card-correct' : 'card-incorrect') + '">',
        '  <div class="wt-review-top">',
        '    <span class="wt-rev-qnum">Question ' + (idx + 1) + '</span>',
        '    <span class="wt-rev-badge ' + badgeClass + '">' + badgeText + '</span>',
        '  </div>',
        '  <h5 class="wt-rev-question">' + escapeHTML(q.question) + '</h5>',
        '  <div class="wt-rev-options-grid">' + optionsReviewHtml + '</div>',
        '  <div class="wt-explanation-box">',
        '    <div class="wt-exp-header">',
        '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
        '      <strong>Explanation &amp; Concept Insight:</strong>',
        '    </div>',
        '    <p>' + escapeHTML(q.explanation) + '</p>',
        '  </div>',
        '</div>'
      ].join('\n');
    });

    var html = [
      '<div class="wt-results-view">',
      '  <div class="wt-score-banner ' + gradeClass + '">',
      '    <div class="wt-score-circle">',
      '      <span class="wt-score-number">' + correctCount + '</span>',
      '      <span class="wt-score-denom">/ ' + total + '</span>',
      '    </div>',
      '    <div class="wt-score-details">',
      '      <span class="wt-pct-label">' + pct + '% Final Score</span>',
      '      <h4 class="wt-grade-heading">' + gradeText + '</h4>',
      '      <p class="wt-score-desc">Topic: <strong>' + currentTest.testTitle + '</strong></p>',
      '    </div>',
      '  </div>',
      '  <div class="wt-stat-boxes">',
      '    <div class="wt-stat-box stat-correct">',
      '      <span class="stat-count">' + correctCount + '</span>',
      '      <span class="stat-label">Correct</span>',
      '    </div>',
      '    <div class="wt-stat-box stat-incorrect">',
      '      <span class="stat-count">' + incorrectCount + '</span>',
      '      <span class="stat-label">Incorrect</span>',
      '    </div>',
      '    <div class="wt-stat-box stat-unanswered">',
      '      <span class="stat-count">' + unansweredCount + '</span>',
      '      <span class="stat-label">Unattempted</span>',
      '    </div>',
      '  </div>',
      '  <div class="wt-results-actions">',
      '    <button class="wt-btn wt-btn-primary" id="wt-btn-retake">',
      '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>',
      '      <span>Retake Test</span>',
      '    </button>',
      '    <button class="wt-btn wt-btn-secondary" id="wt-btn-back-topic">',
      '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
      '      <span>Back to Topic Study Material</span>',
      '    </button>',
      '  </div>',
      '  <div class="wt-review-section">',
      '    <div class="wt-review-heading">',
      '      <h4>Detailed Answer Analysis &amp; Explanations</h4>',
      '      <p>Review every question to understand the correct answers and core principles.</p>',
      '    </div>',
      '    <div class="wt-review-list">',
      '      ' + reviewItemsHtml,
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.getElementById('wt-test-body').innerHTML = html;

    // Retake handler
    document.getElementById('wt-btn-retake').addEventListener('click', function() {
      currentTest.state = 'testing';
      currentTest.currentIndex = 0;
      currentTest.userAnswers = {};
      renderTestingView();
    });

    // Back to topic handler
    document.getElementById('wt-btn-back-topic').addEventListener('click', function() {
      WebTechTestEngine.closeTest();
      // Scroll to topic anchor if exists
      var el = document.getElementById(currentTest.testKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Trigger badge update on host page
    updatePageTestBadges();
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function updatePageTestBadges() {
    // Scan all test trigger buttons on the page and update their best score badges
    document.querySelectorAll('[data-test-key]').forEach(function(btn) {
      var testKey = btn.getAttribute('data-test-key');
      var badgeContainer = document.querySelector('.wt-score-badge[data-badge-key="' + testKey + '"]');
      if (window.WebTechStorage && badgeContainer) {
        var res = window.WebTechStorage.getResult(testKey);
        if (res && res.completed) {
          badgeContainer.innerHTML = '<span class="badge-done">✓ Best: ' + res.bestScore + '/' + res.total + ' (' + res.bestPercentage + '%)</span>';
          badgeContainer.style.display = 'inline-flex';
        } else {
          badgeContainer.innerHTML = '<span class="badge-pending">Not Attempted</span>';
        }
      }
    });
  }

  var WebTechTestEngine = {
    openTest: function(unitNumber, testKey, testTitle) {
      createModalDOM();
      var questions = getQuestionsForTest(unitNumber, testKey);

      if (!questions || questions.length === 0) {
        alert('Question set for topic "' + (testTitle || testKey) + '" is being prepared.');
        return;
      }

      currentTest.unitNumber = unitNumber;
      currentTest.testKey = testKey;
      currentTest.testTitle = testTitle || testKey;
      currentTest.questions = questions;
      currentTest.currentIndex = 0;
      currentTest.userAnswers = {};
      currentTest.state = 'intro';

      document.getElementById('wt-modal-badge').textContent = 'Unit ' + unitNumber + ' • 20 MCQs';
      document.getElementById('wt-modal-title').textContent = currentTest.testTitle;

      var modal = document.getElementById('wt-test-modal');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      renderIntroView();
    },

    closeTest: function() {
      var modal = document.getElementById('wt-test-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
      updatePageTestBadges();
    },

    initPageListeners: function() {
      createModalDOM();

      // Delegate clicks on all test trigger buttons
      document.addEventListener('click', function(e) {
        var btn = e.target.closest('[data-test-key]');
        if (btn) {
          e.preventDefault();
          var unit = parseInt(btn.getAttribute('data-unit') || '1', 10);
          var key = btn.getAttribute('data-test-key');
          var title = btn.getAttribute('data-test-title') || btn.textContent.trim();
          WebTechTestEngine.openTest(unit, key, title);
        }
      });

      // Update badges initially
      updatePageTestBadges();

      // Listen for progress updates
      window.addEventListener('webtech:progress_updated', function() {
        updatePageTestBadges();
      });
    }
  };

  // Auto initialize on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', WebTechTestEngine.initPageListeners);
  } else {
    WebTechTestEngine.initPageListeners();
  }

  window.WebTechTestEngine = WebTechTestEngine;
})(window);
