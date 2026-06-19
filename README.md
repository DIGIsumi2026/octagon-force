# 🛡️ Octagon Force Website

A modern, responsive corporate website developed for **Octagon Force**, showcasing professional services such as security, cleaning, cash transport, transport operations, logistics support, solid waste management, projects, and contact information.

The website is built with **React + TypeScript + Vite** and deployed on **Hostinger**.

---

## 🚀 Live Website

```txt
https://octagonforce.com
```

---

## 🧰 Technologies Used

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-0F172A?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-1E1E2E?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-111827?style=for-the-badge&logo=reactrouter&logoColor=CA4245" alt="React Router" />
  <img src="https://img.shields.io/badge/Framer_Motion-020617?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lenis-000000?style=for-the-badge&logo=scrollreveal&logoColor=white" alt="Lenis" />
  <img src="https://img.shields.io/badge/CSS3-0F172A?style=for-the-badge&logo=css3&logoColor=1572B6" alt="CSS3" />
  <img src="https://img.shields.io/badge/PHP-1F2937?style=for-the-badge&logo=php&logoColor=777BB4" alt="PHP" />
  <img src="https://img.shields.io/badge/Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white" alt="Hostinger" />
</p>

---

## ✨ Features

- Fully responsive design for desktop, laptop, tablet, and mobile
- Modern corporate UI for Octagon Force
- Smooth scrolling with Lenis
- Route-based lazy loading
- Branded animated preloader
- Responsive service cards
- Dedicated service pages
- Projects/client showcase
- Client logo strip
- Contact page with inquiry form
- PHP-powered contact form endpoint
- React Router support with `.htaccess`
- Hostinger-ready production build

---

## 📄 Pages

```txt
Home
About Us
Services
Security Services
Cleaning & Housekeeping
Cash Transport
Transport Operations
Logistics Support
Solid Waste Management
Projects
Contact
```

---

## 📁 Project Structure

```txt
frontend/
├── public/
│   ├── contact.php
│   ├── .htaccess
│   ├── favicon.png
│   ├── videos/
│   │   └── preloader-transparent.webm
│   └── images/
│       └── preloader-fallback.png
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── services/
│   │   └── projects/
│   │
│   ├── data/
│   │   └── imageAssets.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── service pages
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation

Clone the project:

```bash
git clone <your-repository-url>
```

Go to the frontend folder:

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
npm run build
```

Then upload the new `dist` contents to Hostinger `public_html`.

When extracting the ZIP in Hostinger, enable:

```txt
Overwrite existing files
```

After uploading, hard refresh the browser:

```txt
Ctrl + F5
```

---

## 📩 Contact Form

The contact form sends inquiries to:

```txt
info@octagonforce.lk
```

The frontend submits to:

```txt
/contact.php
```

Flow:

```txt
React Contact Form
↓
POST /contact.php
↓
PHP validates fields
↓
Email sent to info@octagonforce.lk
↓
Success/error message shown to user
```

Required fields:

```txt
Name
Phone
Email
Service
Message
```

The form also includes a hidden honeypot field for basic spam protection.

---

## ⚠️ Contact Form Notes

For successful delivery:

- `info@octagonforce.lk` must exist and receive emails.
- PHP mail must work on Hostinger.
- Emails may go to spam depending on domain/mail configuration.
- If delivery is unreliable, upgrade `contact.php` to SMTP using PHPMailer.

---

## 🔐 React Router Support

The website uses React Router.

The `.htaccess` file is required on Hostinger so direct page refreshes do not show 404 errors.

Example supported routes:

```txt
/about
/services
/services/security
/projects
/contact
```

---

## 🎬 Preloader

The website includes a branded preloader using:

```txt
public/videos/preloader-transparent.webm
public/images/preloader-fallback.png
```

The preloader appears on:

- Page refresh
- Route navigation

The page background is blurred while the preloader animation plays.

---

## ✅ Deployment Checklist

Before uploading to Hostinger:

```txt
1. Run npm run build
2. Confirm dist folder is created
3. Confirm dist contains index.html
4. Confirm dist contains assets folder
5. Confirm dist contains contact.php
6. Confirm dist contains .htaccess
7. Upload dist contents to public_html
8. Test homepage
9. Test /about
10. Test /services
11. Test /projects
12. Test /contact
13. Test contact form
```

---

## 👨‍💻 Developer

Developed by **Digital Team**

---

## 📄 License

This project is developed for Octagon Force.  
All branding, company assets, logos, images, and content belong to their respective owners.
