# Clever Moving & Storage 🚚

A fully responsive, modern, and production-ready moving company website built with React, Tailwind CSS, and more. This site offers a clean UI, dynamic form handling with Google Maps integration, and smooth user experience across all pages.

## 🧱 Tech Stack

- **React 19** – SPA architecture and component-based frontend
- **Vite** – blazing-fast dev server and build tool
- **Tailwind CSS** – utility-first CSS styling
- **Google Places API** – for address autocomplete in forms
- **Formspree** – simple email-based form submission
- **Netlify** – deployment and CI/CD
- **Lucide React** – for clean, scalable icons
- **Custom Scroll & Animation Utility** – `scrollAnimations.js`

## 📁 Folder Structure

```
src/
│
├── assets/                 # Images and logo files
│   └── aboutUs/            # Images for services & about sections
│
├── components/             # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Services.jsx        # Landing page services
│   ├── Testimonials.jsx
│   ├── ContactForm.jsx     # Integrated with Google Maps + Formspree
│   └── PlaceAutocomplete.jsx
│
├── pages/                  # Page-level routes
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx        # Full services breakdown
│   └── Contact.jsx
│
├── utils/
│   └── scrollAnimations.js
│
├── App.jsx
├── main.jsx
└── index.css               # Tailwind + custom styles
```

## ✅ Features

### 🔗 Navigation
- Sticky navbar with scroll-based shrink effect
- Fully responsive menu with hamburger toggle on mobile
- Smooth scroll-to-top behavior on all page transitions

### 🏠 Home Page
- Hero section with a call to action
- Services preview with animation on scroll
- Testimonials carousel
- Footer with contact info and hours

### 📦 Services Page
- Alternating image + text layout
- Clean modern cards with your own assets

### 🧍 About Page
- Company story, founder spotlight with image
- Rich descriptive layout with visuals

### ✉️ Contact Page
- Multi-section form:
  - Contact info
  - Address autocomplete for `current` & `new` address
  - Option for stairs vs elevator (with flight count)
  - Move date (validated to only allow future dates)
  - Preferred time of day (morning, afternoon, etc)
- Integrated with Google Maps JavaScript API (new `gmp-place-autocomplete`)
- Submits directly to [Formspree](https://formspree.io)
- Shows confirmation alert and resets after submission

## 🛠️ Setup & Development

### 1. Clone and Install
```bash
git clone https://github.com/Otabek0111/CleverMoving
cd clever-moving
npm install
```

### 2. Configure Environment
Create a `.env` file:
```
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Make sure you **do NOT** push this `.env` to GitHub (listed in `.gitignore`).

### 3. Start Dev Server
```bash
npm run dev
```

## 🚀 Deployment

### ⚡ Netlify (Recommended)
1. Push to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Select "New Site from Git"
4. Set build command: `npm run build`
5. Set publish directory: `dist/`
6. Add environment variable for your Google Maps API key

## 🌎 Live Features

- **Image Hosting:** All images are moved to `public/` and referenced by public path
- **Form Handling:** Submits to `Formspree.io` endpoint
- **Autocomplete:** Uses Google's new `<gmp-place-autocomplete>` component
- **SEO-ready:** Semantic HTML and performant build via Vite
- **Responsive:** Fully mobile-friendly UI

## 🔐 Security & Best Practices

- API keys are kept in `.env` (not pushed to GitHub)
- You’ve restricted your Google API key by API service (✅)
- Autocomplete inputs are fully decoupled from textareas to prevent overwriting

## ✍️ Author

Built by [Otabek Islomjonov](mailto:clevermovingnyc@gmail.com)