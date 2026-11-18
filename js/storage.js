/**
 * WebTech Learning - Storage Manager
 * Handles localStorage persistence for topic tests, scores, and overall course progress.
 */
(function(window) {
  'use strict';

  var STORAGE_KEY = 'webtech_course_records_v1';

  function getRecords() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { tests: {} };
    } catch (e) {
      console.warn('localStorage not accessible:', e);
      return { tests: {} };
    }
  }

  function saveRecords(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('webtech:progress_updated', { detail: data }));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  }

  var WebTechStorage = {
    saveResult: function(testKey, score, total, answers) {
      var records = getRecords();
      if (!records.tests) records.tests = {};

      var current = records.tests[testKey] || { attempts: 0, bestScore: 0 };
      var pct = Math.round((score / total) * 100);
      var best = Math.max(current.bestScore || 0, score);
      var bestPct = Math.round((best / total) * 100);

      records.tests[testKey] = {
        testKey: testKey,
        score: score,
        total: total,
        percentage: pct,
        bestScore: best,
        bestPercentage: bestPct,
        attempts: (current.attempts || 0) + 1,
        completed: true,
        lastAttemptAt: new Date().toISOString()
      };

      saveRecords(records);
      return records.tests[testKey];
    },

    getResult: function(testKey) {
      var records = getRecords();
      return (records.tests && records.tests[testKey]) ? records.tests[testKey] : null;
    },

    isCompleted: function(testKey) {
      var res = this.getResult(testKey);
      return res && res.completed === true;
    },

    getUnitStats: function(unitNum) {
      var searchIndex = window.SEARCH_INDEX || [];
      var unitTopics = searchIndex.filter(function(item) {
        return item.unit === unitNum;
      });

      var records = getRecords();
      var tests = records.tests || {};
      var completedCount = 0;
      var totalScore = 0;
      var totalQuestions = 0;

      unitTopics.forEach(function(item) {
        var res = tests[item.testKey];
        if (res && res.completed) {
          completedCount++;
          totalScore += res.bestScore;
          totalQuestions += res.total;
        }
      });

      var totalTopics = unitTopics.length || 1;
      var completionRate = Math.round((completedCount / totalTopics) * 100);
      var avgScore = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

      return {
        unit: unitNum,
        totalTopics: totalTopics,
        completedTopics: completedCount,
        completionRate: completionRate,
        avgScore: avgScore
      };
    },

    getOverallStats: function() {
      var searchIndex = window.SEARCH_INDEX || [];
      var totalTopics = searchIndex.length || 51;
      var records = getRecords();
      var tests = records.tests || {};

      var completedCount = 0;
      var totalBestScore = 0;
      var totalPossible = 0;

      searchIndex.forEach(function(item) {
        var res = tests[item.testKey];
        if (res && res.completed) {
          completedCount++;
          totalBestScore += res.bestScore;
          totalPossible += res.total;
        }
      });

      var completionRate = Math.round((completedCount / totalTopics) * 100);
      var overallGrade = totalPossible > 0 ? Math.round((totalBestScore / totalPossible) * 100) : 0;

      return {
        totalTopics: totalTopics,
        completedTopics: completedCount,
        completionRate: completionRate,
        overallGrade: overallGrade,
        totalTestsAttempted: Object.keys(tests).length
      };
    },

    resetTest: function(testKey) {
      var records = getRecords();
      if (records.tests && records.tests[testKey]) {
        delete records.tests[testKey];
        saveRecords(records);
      }
    },

    resetAll: function() {
      saveRecords({ tests: {} });
    }
  };

  window.WebTechStorage = WebTechStorage;
})(window);
