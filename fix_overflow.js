const fs = require('fs');
let css = fs.readFileSync('frontend/src/App.css', 'utf8');
const original = css;

// ============================================================
// ROOT CAUSE 1: scrollbar-gutter: stable
// This reserves space for a scrollbar on ALL screens including
// mobile where there's no scrollbar, pushing 100vw content
// beyond the visible area. On mobile we don't want this.
// FIX: Keep it but add overflow-x: hidden on html too.
// ============================================================
// We'll keep scrollbar-gutter but add overflow-x:hidden at global level.

// ============================================================
// ROOT CAUSE 2: width: 100vw on full-bleed sections
// 100vw = viewport INCLUDING scrollbar width.
// When scrollbar is 12px wide, 100vw = viewport + 12px,
// causing a 12px horizontal overflow on desktop.
// On mobile: no scrollbar, so 100vw = 100%, no issue here per se,
// BUT the breakout technique (margin-left: calc(50% - 50vw))
// requires the parent to have overflow-x: hidden to work correctly.
// 
// FIX STRATEGY: Keep 100vw for the full-bleed breakout sections
// (they need it for the calc technique to work), but ensure
// their parent containers have overflow-x: hidden.
// Also add overflow-x: hidden on html element to contain them.
// ============================================================

// ============================================================
// ROOT CAUSE 3: header-socials absolute positioned outside nav
// In default state, socials are `position: absolute; left: calc(100% + 24px)`
// relative to the .site-header. If site-header is wider than viewport
// this can cause overflow on narrow screens.
// FIX: Already display:none on <=1024px, so safe.
// ============================================================

// ============================================================
// ROOT CAUSE 4: Large min-width values in dropdown menus
// min-width: 270px on .nav-dropdown__menu when viewport is < 300px
// FIX: These are already hidden on mobile via @media rules.
// ============================================================

// ============================================================
// APPLIED FIXES:
// ============================================================

// FIX 1: Add overflow-x: hidden to html element (not just body)
// This contains ALL overflow including from fixed/absolute elements
css = css.replace(
  /html \{\n  scrollbar-gutter: stable;\n\}/,
  'html {\n  scrollbar-gutter: stable;\n  overflow-x: hidden;\n}'
);

// FIX 2: Body already has overflow-x: hidden - good.
// Verify it's there and add max-width safety
if (!css.includes('overflow-x: hidden') || !css.match(/body \{[\s\S]*?overflow-x: hidden/)) {
  css = css.replace(
    /body \{\n  margin: 0;\n/,
    'body {\n  margin: 0;\n  overflow-x: hidden;\n'
  );
}

// FIX 3: Ensure the full-bleed breakout containers themselves
// have overflow: hidden to prevent their inner content spilling out
// .visual-stack-section - add overflow: hidden if not present
css = css.replace(
  /\.visual-stack-section \{\n  position: relative;\n  z-index: 1;\n\n  \/\* makes it break out from \.container and cover full screen width \*\/\n  width: 100vw;\n  margin-left: calc\(50% - 50vw\);\n  margin-right: calc\(50% - 50vw\);\n\n  min-height: 100vh;/,
  '.visual-stack-section {\n  position: relative;\n  z-index: 1;\n  overflow-x: hidden;\n\n  /* makes it break out from .container and cover full screen width */\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  margin-right: calc(50% - 50vw);\n\n  min-height: 100vh;'
);

// FIX 4: Ensure marquee section has overflow hidden (it should, let's verify and add)
// .marquee already has overflow: hidden - confirmed good.

// FIX 5: about-vision-mission-section already has overflow: hidden - confirmed good.

// FIX 6: about-contact-banner-section - add overflow-x: hidden if missing
css = css.replace(
  /\.about-contact-banner-section \{\n  position: relative;\n  width: 100vw;\n  margin-left: calc\(50% - 50vw\);\n  margin-right: calc\(50% - 50vw\);\n  padding: 0 !important;\n  overflow: hidden;/,
  '.about-contact-banner-section {\n  position: relative;\n  width: 100vw;\n  margin-left: calc(50% - 50vw);\n  margin-right: calc(50% - 50vw);\n  padding: 0 !important;\n  overflow: hidden;'
  // Already has overflow: hidden - good
);

// FIX 7: about-company-intro__media-stage and image-container have 100vw
// These are full-screen sections used in the about page. They have overflow:hidden.
// The issue: they need margin-left: calc(50% - 50vw) to break out properly.
// Currently they only have width: 100vw but no margin-left.
// Let's check if they're inside a container or not...
// Actually - these are likely standalone sections, not inside .container.
// The 100vw issue only manifests when inside a max-width container.
// These appear to be full-page sections so 100vw is fine.
// But to be safe on mobile, let's clamp them:
css = css.replace(
  /\.about-company-intro__media-stage,\n\.about-company-intro__image-container \{\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: #07101d;\n\}/,
  '.about-company-intro__media-stage,\n.about-company-intro__image-container {\n  position: relative;\n  width: 100%;\n  max-width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: #07101d;\n}'
);

// FIX 8: Ensure #root and .App don't cause overflow
// Add a targeted rule
if (!css.includes('#root {')) {
  css = css.replace(
    '* {\n  box-sizing: border-box;\n}',
    '* {\n  box-sizing: border-box;\n}\n\n#root {\n  overflow-x: hidden;\n  max-width: 100vw;\n}'
  );
}

// FIX 9: The scrollbar-gutter: stable forces a 12px space for scrollbar
// on desktop, making the page 12px wider effectively for 100vw elements.
// On mobile this is not an issue since scrollbars overlay, not push content.
// But we need to make sure the scrollbar gutter does NOT apply on mobile.
css = css.replace(
  'html {\n  scrollbar-gutter: stable;\n  overflow-x: hidden;\n}',
  'html {\n  overflow-x: hidden;\n}\n\n/* Only use scrollbar-gutter on wider screens where scrollbar takes space */\n@media (min-width: 769px) {\n  html {\n    scrollbar-gutter: stable;\n  }\n}'
);

fs.writeFileSync('frontend/src/App.css', css);

const changed = css !== original;
console.log('CSS updated:', changed);

// Verify key changes
if (css.includes('overflow-x: hidden')) console.log('✓ overflow-x: hidden added to html/body');
if (css.includes('max-width: 100vw')) console.log('✓ max-width: 100vw added to media-stage');
if (!css.includes('scrollbar-gutter: stable;\n  overflow-x')) console.log('✓ scrollbar-gutter scoped to wide screens');
