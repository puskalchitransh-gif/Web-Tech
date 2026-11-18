/**
 * WebTech Learning - Navigation, ScrollSpy, and UI Utilities
 */
(function(window) {
  'use strict';

  function initScrollSpy() {
    var sidebarLinks = document.querySelectorAll('.wt-toc-link');
    if (!sidebarLinks.length) return;

    var sections = [];
    sidebarLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf('#') !== -1) {
        var id = href.split('#')[1];
        var section = document.getElementById(id);
        if (section) {
          sections.push({ id: id, link: link, element: section });
        }
      }
    });

    if (!sections.length) return;

    function onScroll() {
      var scrollPos = window.scrollY || window.pageYOffset;
      var buffer = 140; // Navbar offset

      var current = null;
      for (var i = 0; i < sections.length; i++) {
        var top = sections[i].element.offsetTop - buffer;
        if (scrollPos >= top) {
          current = sections[i];
        } else {
          break;
        }
      }

      if (!current && sections.length > 0) {
        current = sections[0];
      }

      if (current) {
        sidebarLinks.forEach(function(l) { l.classList.remove('active'); });
        current.link.classList.add('active');

        // Scroll sidebar if needed
        var sidebar = document.querySelector('.wt-sidebar-nav');
        if (sidebar) {
          var linkTop = current.link.offsetTop;
          if (linkTop < sidebar.scrollTop || linkTop > sidebar.scrollTop + sidebar.clientHeight) {
            sidebar.scrollTop = linkTop - 80;
          }
        }
      }
    }

    window.addEventListener('scroll', throttle(onScroll, 50), { passive: true });
    onScroll();
  }

  function initMobileMenu() {
    var toggleBtn = document.getElementById('wt-mobile-menu-btn');
    var sidebar = document.getElementById('wt-sidebar');
    var overlay = document.getElementById('wt-sidebar-overlay');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
        document.body.classList.toggle('sidebar-locked');
      });

      if (overlay) {
        overlay.addEventListener('click', function() {
          sidebar.classList.remove('open');
          overlay.classList.remove('active');
          document.body.classList.remove('sidebar-locked');
        });
      }

      // Close when clicking any link inside sidebar on mobile
      sidebar.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 992) {
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('sidebar-locked');
          }
        });
      });
    }
  }

  function initCodeCopy() {
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
      var pre = codeBlock.parentElement;
      if (pre.querySelector('.wt-copy-btn')) return;

      var btn = document.createElement('button');
      btn.className = 'wt-copy-btn';
      btn.setAttribute('aria-label', 'Copy code snippet');
      btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span>Copy</span>';

      btn.addEventListener('click', function() {
        var text = codeBlock.innerText;
        navigator.clipboard.writeText(text).then(function() {
          btn.classList.add('copied');
          btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Copied!</span>';
          setTimeout(function() {
            btn.classList.remove('copied');
            btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span>Copy</span>';
          }, 2000);
        });
      });

      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  function throttle(func, limit) {
    var inThrottle;
    return function() {
      var args = arguments;
      var context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() { inThrottle = false; }, limit);
      }
    };
  }

  function init() {
    initScrollSpy();
    initMobileMenu();
    initCodeCopy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
