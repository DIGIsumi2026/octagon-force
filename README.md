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
```

Install dependencies:

```bash
npm install
```

---

## 🧪 Run Locally

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

---

## 🏗️ Build for Production

Create the production build:

```bash
npm run build
```

This will generate:

```txt
dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Hostinger Deployment

After running:

```bash
npm run build
```

Upload only the **contents inside** the `dist` folder to Hostinger:

```txt
Hostinger → Websites → octagonforce.com → Dashboard → File Manager → public_html
```

Correct final structure:

```txt
public_html/
├── index.html
├── contact.php
├── .htaccess
├── favicon.png
└── assets/
```

Do **not** upload:

```txt
src/
node_modules/
backend/
package.json
vite.config.ts
```

---

## 🔁 Updating the Live Website

After making changes locally:

```bash
npm install motion swiper lucide-react
```

Backend:

```bash
npm install express mongoose zod nodemailer cors helmet morgan express-rate-limit dotenv
```

