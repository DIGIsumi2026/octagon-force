# OpenHome Portfolio Full-Stack Project

This version keeps the same one-page portfolio design from the video demo, but the React frontend is reorganized into page-level containers and grouped components.

## Frontend highlights

- React + TypeScript + Vite
- Sticky/fixed rounded navigation bar
- Smooth anchor scrolling
- Active navigation link while scrolling
- Improved reveal animations with reduced-motion support
- Improved image hover animation and hero zoom animation
- User-friendly font through `App.css`
- All main CSS stored in `src/App.css`
- Easy image replacement through `src/data/imageAssets.ts`

## Backend highlights

- Express + TypeScript API
- MongoDB lead storage with Mongoose
- Zod validation
- Nodemailer email notifications
- Helmet, CORS, Morgan, and rate limiting

## Frontend structure

```text
frontend/src/
├── assets/
│   └── images/
│       └── README.md
├── components/
│   ├── common/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollTop.tsx
│   │   └── SectionHeader.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── SupportCards.tsx
│   ├── home/
│   │   ├── AboutBanner.tsx
│   │   ├── Hero.tsx
│   │   └── Marquee.tsx
│   ├── products/
│   │   ├── LocationShowcase.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── ProductFeature.tsx
│   │   ├── Stats.tsx
│   │   └── VideoShowcase.tsx
│   ├── projects/
│   │   ├── BrandStrip.tsx
│   │   ├── Process.tsx
│   │   └── ProjectsCarousel.tsx
│   ├── reviews/
│   │   ├── CallToAction.tsx
│   │   └── Testimonials.tsx
│   └── services/
│       ├── BenefitCards.tsx
│       ├── ExperienceTimeline.tsx
│       └── FeatureCollage.tsx
├── data/
│   ├── imageAssets.ts
│   └── siteData.tsx
├── hooks/
│   └── useActiveSection.ts
├── pages/
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── Projects.tsx
│   ├── Reviews.tsx
│   └── Services.tsx
├── types/
│   └── index.ts
├── App.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Install and run frontend

```bash
cd frontend
npm install
npm run dev
```

Build frontend:

```bash
npm run build
```

## Install and run backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Create this file for frontend API connection:

```bash
frontend/.env
```

```env
VITE_API_URL=http://localhost:5000/api
```

## Change images easily

All image URLs are centralized here:

```text
frontend/src/data/imageAssets.ts
```

To use local images:

1. Put images inside `frontend/src/assets/images/`.
2. Import them in `frontend/src/data/imageAssets.ts`.
3. Replace the matching image value.

Example:

```ts
import heroHome from "../assets/images/hero-home.jpg";

export const images = {
  hero: {
    monitoring: heroHome
  }
};
```

## Main libraries/plugins

Frontend:

```bash
npm install motion swiper lucide-react
```

Backend:

```bash
npm install express mongoose zod nodemailer cors helmet morgan express-rate-limit dotenv
```

