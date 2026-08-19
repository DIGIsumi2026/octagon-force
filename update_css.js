const fs = require('fs');
let css = fs.readFileSync('frontend/src/App.css', 'utf8');

const swiperCssBlock = `
.hero-swiper .swiper-pagination {
  position: absolute;
  bottom: 46px !important;
  left: 50% !important;
  transform: translateX(-50%);
  width: var(--container) !important;
  display: flex !important;
  gap: 12px;
  z-index: 10;
  text-align: left;
}

.hero-swiper .swiper-pagination-bullet {
  width: 14px;
  height: 6px;
  border-radius: 12px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.4);
  transition: width 0.3s ease, background 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 0 !important;
  display: block;
}

.hero-swiper .swiper-pagination-bullet-active {
  width: 60px; /* Expand like a process bar */
  background: rgba(255, 255, 255, 0.2);
}

.hero-swiper .swiper-pagination-bullet-active::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0%;
  background: linear-gradient(90deg, #ffd36a 0%, #A67212 100%);
  animation: heroProgress 4.5s linear forwards;
}

@keyframes heroProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}

/* Mobile navigation controls */
.hero-controls-mobile {
  display: none;
}

@media (max-width: 1024px) {
  .hero-controls-mobile {
    display: flex;
    position: absolute;
    bottom: 38px;
    right: 22px;
    gap: 12px;
    z-index: 20;
  }
  
  .hero-prev, .hero-next {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
  }
  
  .hero-prev:active, .hero-next:active {
    background: #A67212;
    border-color: #A67212;
    transform: scale(0.95);
  }
  
  /* Make sure pagination doesn't overlap controls on small screens */
  .hero-swiper .swiper-pagination {
    width: calc(var(--container) - 120px) !important;
    left: 22px !important;
    transform: none;
  }
}
`;

css = css.replace(/\.hero-swiper \.swiper-pagination \{[\s\S]*?\.hero-swiper \.swiper-pagination-bullet-active \{[\s\S]*?\}/, swiperCssBlock);

fs.writeFileSync('frontend/src/App.css', css);
console.log('App.css updated');
