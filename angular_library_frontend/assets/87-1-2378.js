(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initScreen87() {
    /** Initializes static screen 87 assets. Currently no interactive bindings are specified in the JSON. */
    // Reserved for future interactions. Ensure no errors on load.
    try {
      const artboard = document.getElementById('artboard-1-2378');
      if (!artboard) return;
      // Example: Toggle popover visibility if needed in future
      // const popover = artboard.querySelector('.popover');
      // popover?.setAttribute('aria-hidden', 'true');
    } catch (e) {
      // Fail-safe: do not throw to avoid breaking host page
      console.warn('Screen 87 init encountered a non-fatal issue:', e);
    }
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScreen87);
  } else {
    initScreen87();
  }
})();
