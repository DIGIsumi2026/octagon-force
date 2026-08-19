const fs = require('fs');
let css = fs.readFileSync('frontend/src/App.css', 'utf8');

const pcCssRegex = /@media \(min-width: 1025px\) \{[\s\S]*?\.custom-hero-pagination \{[\s\S]*?\}[\s\S]*?\.swiper-pagination-bullet \{/;

const newPcCcss = `@media (min-width: 1025px) {
  .custom-hero-pagination {
    position: relative !important;
    bottom: auto !important;
    top: auto !important;
    left: auto !important;
    transform: none !important;
    flex-direction: column;
    justify-content: center;
    width: auto !important;
    margin: 0 !important;
    padding-left: 0 !important;
  }

  .swiper-pagination-bullet {`;

css = css.replace(pcCssRegex, newPcCcss);

fs.writeFileSync('frontend/src/App.css', css);
console.log('updated');
