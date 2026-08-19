const fs = require('fs');

let heroCode = fs.readFileSync('frontend/src/components/home/Hero.tsx', 'utf8');
heroCode = heroCode.replace(
  "pagination={{ el: '.custom-hero-pagination', clickable: true, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}",
  "pagination={{ clickable: true }}"
);
const wrapperHtml = `        {/* Pagination overlay perfectly aligned vertically with hero-content */}
        <div className="container hero-content custom-pagination-wrapper" style={{ pointerEvents: 'none', zIndex: 10 }}>
          <div className="custom-hero-pagination" style={{ pointerEvents: 'auto' }}></div>
        </div>

`;
heroCode = heroCode.replace(wrapperHtml, "");
fs.writeFileSync('frontend/src/components/home/Hero.tsx', heroCode);


let css = fs.readFileSync('frontend/src/App.css', 'utf8');

css = css.replace(/\.custom-hero-pagination/g, '.hero-swiper .swiper-pagination');
css = css.replace(/\.swiper-pagination-bullet/g, '.hero-swiper .swiper-pagination-bullet');
css = css.replace(/\.hero-swiper \.hero-swiper \.swiper-pagination-bullet/g, '.hero-swiper .swiper-pagination-bullet');

// Undo the padding/height changes
css = css.replace('padding-top: 130px;', 'padding-top: 170px;');
css = css.replace('padding-top: 110px;\r\n    padding-bottom: 50px;', 'padding-top: 142px;\r\n    padding-bottom: 72px;');
css = css.replace('padding-top: 110px;\n    padding-bottom: 50px;', 'padding-top: 142px;\n    padding-bottom: 72px;');
css = css.replace('padding-top: 90px;', 'padding-top: 120px;');

css = css.replace('min-height: 600px;', 'min-height: 760px;');
css = css.replace('min-height: 520px;', 'min-height: 680px;');

// Restore PC alignment CSS from second turn
const pcCssRegex = /@media \(min-width: 1025px\) \{[\s\S]*?\.hero-swiper \.swiper-pagination \{[\s\S]*?\}[\s\S]*?\.hero-swiper \.swiper-pagination-bullet \{/;

const newPcCcss = `@media (min-width: 1025px) {
  .hero-swiper .swiper-pagination {
    bottom: auto !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    flex-direction: column;
    justify-content: center;
    width: var(--container) !important;
    padding-left: 0 !important;
  }

  .hero-swiper .swiper-pagination-bullet {`;

css = css.replace(pcCssRegex, newPcCcss);

fs.writeFileSync('frontend/src/App.css', css);

console.log('Revert done');
