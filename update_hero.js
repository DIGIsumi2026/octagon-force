const fs = require('fs');
let code = fs.readFileSync('frontend/src/components/home/Hero.tsx', 'utf8');

// Add ChevronLeft and ChevronRight
code = code.replace(
  'import { ArrowRight } from "lucide-react";',
  'import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";'
);

// Add Navigation module
code = code.replace(
  'import { Autoplay, EffectFade, Pagination } from "swiper/modules";',
  'import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";'
);

// Update Swiper modules
code = code.replace(
  'modules={[Autoplay, EffectFade, Pagination]}',
  'modules={[Autoplay, EffectFade, Pagination, Navigation]}'
);

// Add navigation config
code = code.replace(
  'pagination={{ clickable: true }}',
  'pagination={{ clickable: true }}\n        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}'
);

// Add the controls before closing Swiper
const controlsCode = `
        {/* Mobile controls */}
        <div className="hero-controls-mobile">
          <button className="hero-prev" aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className="hero-next" aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>
      </Swiper>`;

code = code.replace('</Swiper>', controlsCode);

fs.writeFileSync('frontend/src/components/home/Hero.tsx', code);
console.log('Hero.tsx updated');
