/* =============================================================================
   APP.JS — Hash router, nav state, mobile menu
   file:// compatible — no ES modules, no server needed
   ============================================================================= */

var App = (function () {

  // ── Route map ───────────────────────────────────────────────────────────────
  var routes = {
    'guide':        function() { renderSection('guide'); },
    'overview':     function() { renderSection('overview'); },
    'roadmap':      function() { renderSection('roadmap'); },
    'success':      function() { renderSection('success'); },
    'howwework':    function() { renderSection('howwework'); },
    'diagnosis':    function() { renderSection('diagnosis'); },
    'models':       function() { renderSection('models'); },
    'bibliography': function() { renderSection('bibliography'); }
  };

  // ── Init ────────────────────────────────────────────────────────────────────
  function init() {
    window.addEventListener('hashchange', handleRoute);

    // Mobile hamburger
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('topnav-links');
    var overlay = document.getElementById('nav-overlay');

    if (hamburger) {
      hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        overlay.classList.toggle('open');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', function() {
        navLinks.classList.remove('open');
        overlay.classList.remove('open');
      });
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.addEventListener('click', function() {
        navLinks.classList.remove('open');
        overlay.classList.remove('open');
      });
    });

    handleRoute();
  }

  // ── Route handler ───────────────────────────────────────────────────────────
  function handleRoute() {
    var hash = window.location.hash.replace('#', '') || 'guide';
    var section = hash.split('/')[0];

    setActiveNav(section);
    window.scrollTo(0, 0);

    var fn = routes[section];
    if (fn) {
      fn();
    } else {
      routes['guide']();
    }
  }

  // ── Active nav ──────────────────────────────────────────────────────────────
  function setActiveNav(section) {
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.classList.remove('active');
      if (item.getAttribute('data-section') === section) {
        item.classList.add('active');
      }
    });
  }

  // ── Content setter ──────────────────────────────────────────────────────────
  function setContent(html) {
    var el = document.getElementById('content-inner');
    if (el) {
      el.innerHTML = html;
      bindEvents();
    }
  }

  // ── Section renderer ────────────────────────────────────────────────────────
  function renderSection(section) {
    var html = '';
    switch(section) {
      case 'guide':      html = Views.guide();      break;
      case 'overview':   html = Views.overview();   break;
      case 'roadmap':    html = Views.roadmap();    break;
      case 'success':    html = Views.success();    break;
      case 'howwework':    html = Views.howwework();    break;
      case 'diagnosis':    html = Views.diagnosis();    break;
      case 'models':       html = Views.models();       break;
      case 'bibliography': html = Views.bibliography(); break;
      default:             html = Views.guide();
    }
    setContent(html);
  }

  // ── Bind interactive events ─────────────────────────────────────────────────
  function bindEvents() {
    // Expandable future state blocks
    document.querySelectorAll('.future-header').forEach(function(header) {
      header.addEventListener('click', function() {
        var body = header.nextElementSibling;
        var isOpen = header.classList.contains('open');
        // Close all
        document.querySelectorAll('.future-header').forEach(function(h) {
          h.classList.remove('open');
          if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
        });
        // Toggle clicked
        if (!isOpen) {
          header.classList.add('open');
          if (body) body.classList.add('open');
        }
      });
    });

    // Expandable chapter blocks
    document.querySelectorAll('.chapter-header').forEach(function(header) {
      header.addEventListener('click', function() {
        var body = header.nextElementSibling;
        var isOpen = header.classList.contains('open');
        document.querySelectorAll('.chapter-header').forEach(function(h) {
          h.classList.remove('open');
          if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
        });
        if (!isOpen) {
          header.classList.add('open');
          if (body) body.classList.add('open');
        }
      });
    });

    // Nav quick buttons
    document.querySelectorAll('[data-nav]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var target = btn.getAttribute('data-nav');
        window.location.hash = target;
      });
    });
  }

  // ── Public API ──────────────────────────────────────────────────────────────
  return {
    init: init,
    navigate: function(hash) { window.location.hash = hash; }
  };

})();

// Boot
document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
