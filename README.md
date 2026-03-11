# The Grind — Specialty Coffee Shop Website

A modern, responsive website for **The Grind**, a specialty coffee shop with two locations in New Hampshire (Derry and Durham). Built to showcase handcrafted beverages, food offerings, and community vibes while providing essential business information.

---

## About The Grind

The Grind is a community-focused specialty coffee shop that brings together students, locals, and coffee enthusiasts. The website serves as a digital storefront highlighting:

- **Two Locations**: Historic downtown Derry and student-friendly Durham near UNH
- **Signature Drinks**: NH Latte, Churro Latte, Cookie Crush, Beach Day, and more
- **Food Menu**: Classic Chick, Hot Chick breakfast sandwiches, and Avocado Toast
- **Community Space**: A cozy environment for studying, socializing, and remote work
- **Gift Cards & Online Ordering**: Direct integration with Square for purchases

---

## How It's Made

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | **React 19** — Component-based UI architecture |
| Build Tool | **Vite** — Fast development server and optimized production builds |
| Routing | **React Router DOM** — Client-side navigation with smooth transitions |
| Animations | **Framer Motion** — Page transitions, scroll-triggered reveals, and micro-interactions |
| Icons | **Lucide React** — Modern, consistent iconography |
| Styling | **Custom CSS** — Glassmorphism effects, dark theme, responsive design |
| Fonts | **Playfair Display** (headings) + **Inter** (body) via Google Fonts |

### Key Features Implemented

- **Smooth Page Transitions**: `AnimatePresence` from Framer Motion provides fade transitions between routes
- **Scroll-Triggered Animations**: Elements fade up as they enter the viewport using `whileInView`
- **Marquee Gallery**: Auto-scrolling image gallery showcasing café atmosphere
- **Menu Ticker**: Horizontal scrolling text displaying drink and food names
- **Glassmorphism Design**: Frosted glass effects on cards and navigation using `backdrop-filter`
- **Mobile-First Responsive**: Hamburger menu, flexible grids, and touch-friendly interactions
- **Dark Theme**: Permanently enforced dark mode with warm accent colors (caramel, cream)

### Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Glass-pill navigation with scroll effects
│   ├── Navbar.css
│   ├── Footer.jsx        # Newsletter signup, hours, social links
│   └── Footer.css
├── pages/
│   ├── Home.jsx          # Hero, gallery, locations, community, CTA
│   ├── Home.css
│   ├── About.jsx         # Story and mission
│   ├── About.css
│   ├── Careers.jsx       # Job listings and application
│   ├── Careers.css
│   ├── Contact.jsx       # Contact info, map links, socials
│   └── Contact.css
├── images/               # Logo, hero, gallery photos
├── App.jsx               # Router setup with scroll-to-top
├── index.css             # Global styles, CSS variables, animations
└── main.jsx              # React entry point
```

### External Integrations

- **Square Gift Cards**: `https://app.squareup.com/gift/ML4FKKB8H0ZD4/order`
- **Online Ordering (Toast)**: `https://tpgo.ca/bjfMhn`
- **Social Links**: Instagram, TikTok, Facebook
- **Google Maps**: Direct links to both locations

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

The site is configured for static hosting (Netlify, Vercel, GitHub Pages). The `public/_redirects` file handles client-side routing for SPAs.

---

Built with ☕ and React.
