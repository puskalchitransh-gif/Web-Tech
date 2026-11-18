/**
 * WebTech Learning - Universal Search Engine
 * Provides instant live modal search across all units, syllabus topics, and practice tests.
 */
(function(window) {
  'use strict';

  function createSearchModalDOM() {
    if (document.getElementById('wt-search-modal')) return;

    var html = [
      '<div id="wt-search-modal" class="wt-search-modal" role="dialog" aria-modal="true" aria-label="Search Syllabus Topics">',
      '  <div class="wt-search-backdrop" id="wt-search-backdrop"></div>',
      '  <div class="wt-search-container">',
      '    <div class="wt-search-box">',
      '      <svg class="wt-search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
      '      <input type="text" id="wt-search-input" placeholder="Search syllabus topics, protocols, code concepts (e.g. HTTP, AJAX, DOM, RDF)..." autocomplete="off" spellcheck="false" />',
      '      <kbd class="wt-search-kbd">ESC</kbd>',
      '    </div>',
      '    <div class="wt-search-results" id="wt-search-results">',
      '      <div class="wt-search-empty">Type at least 2 characters to search across all 5 units and 46 topics.</div>',
      '    </div>',
      '    <footer class="wt-search-footer">',
      '      <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>',
      '      <span><kbd>↵</kbd> to select</span>',
      '      <span><kbd>ESC</kbd> to dismiss</span>',
      '    </footer>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.body.insertAdjacentHTML('beforeend', html);

    // Event listeners
    document.getElementById('wt-search-backdrop').addEventListener('click', WebTechSearch.close);

    var input = document.getElementById('wt-search-input');
    input.addEventListener('input', function(e) {
      renderResults(e.target.value.trim());
    });

    // Arrow navigation
    input.addEventListener('keydown', function(e) {
      var resultsContainer = document.getElementById('wt-search-results');
      var items = resultsContainer.querySelectorAll('.wt-search-result-item');
      if (!items.length) return;

      var activeIndex = -1;
      items.forEach(function(item, idx) {
        if (item.classList.contains('active')) activeIndex = idx;
      });

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var nextIdx = activeIndex + 1 < items.length ? activeIndex + 1 : 0;
        updateActiveItem(items, nextIdx);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        var prevIdx = activeIndex - 1 >= 0 ? activeIndex - 1 : items.length - 1;
        updateActiveItem(items, prevIdx);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) {
          items[activeIndex].click();
        }
      }
    });

    // Global keyboard shortcut ('/' or 'Ctrl+K')
    document.addEventListener('keydown', function(e) {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) && 
          document.activeElement.tagName !== 'INPUT' && 
          document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        WebTechSearch.open();
      }
      if (e.key === 'Escape' && document.getElementById('wt-search-modal').classList.contains('active')) {
        WebTechSearch.close();
      }
    });
  }

  function updateActiveItem(items, newIndex) {
    items.forEach(function(item) { item.classList.remove('active'); });
    if (items[newIndex]) {
      items[newIndex].classList.add('active');
      items[newIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  function renderResults(query) {
    var container = document.getElementById('wt-search-results');
    if (!query || query.length < 2) {
      container.innerHTML = '<div class="wt-search-empty">Type at least 2 characters to search across all 5 units and 46 topics.</div>';
      return;
    }

    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var index = window.SEARCH_INDEX || [];

    var matches = index.filter(function(item) {
      var target = (item.title + ' ' + item.keywords + ' ' + item.unitTitle).toLowerCase();
      return terms.every(function(term) {
        return target.indexOf(term) !== -1;
      });
    });

    if (matches.length === 0) {
      container.innerHTML = '<div class="wt-search-empty">No syllabus topics found matching "<strong>' + escapeHTML(query) + '</strong>". Try searching for HTML, CSS, JavaScript, SOAP, RSS, or RDF.</div>';
      return;
    }

    var html = '';
    matches.slice(0, 15).forEach(function(item, idx) {
      var targetUrl = item.url + '#' + item.topicId;
      html += [
        '<a href="' + targetUrl + '" class="wt-search-result-item ' + (idx === 0 ? 'active' : '') + '">',
        '  <div class="wt-result-badge">Unit ' + item.unit + '</div>',
        '  <div class="wt-result-info">',
        '    <div class="wt-result-title">' + highlightText(item.title, terms) + '</div>',
        '    <div class="wt-result-unit">' + escapeHTML(item.unitTitle) + '</div>',
        '  </div>',
        '  <div class="wt-result-action">',
        '    <span>Open Topic</span>',
        '    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
        '  </div>',
        '</a>'
      ].join('');
    });

    container.innerHTML = html;

    // Attach click to close search modal on navigation
    container.querySelectorAll('.wt-search-result-item').forEach(function(link) {
      link.addEventListener('click', function() {
        WebTechSearch.close();
      });
    });
  }

  function highlightText(text, terms) {
    var escaped = escapeHTML(text);
    terms.forEach(function(term) {
      if (!term) return;
      var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      escaped = escaped.replace(regex, '<mark>$1</mark>');
    });
    return escaped;
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var WebTechSearch = {
    open: function() {
      createSearchModalDOM();
      var modal = document.getElementById('wt-search-modal');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      var input = document.getElementById('wt-search-input');
      input.value = '';
      input.focus();
      renderResults('');
    },

    close: function() {
      var modal = document.getElementById('wt-search-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    init: function() {
      createSearchModalDOM();
      // Attach to any search button or input on page
      document.querySelectorAll('[data-action="open-search"]').forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          WebTechSearch.open();
        });
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', WebTechSearch.init);
  } else {
    WebTechSearch.init();
  }

  window.WebTechSearch = WebTechSearch;
})(window);
