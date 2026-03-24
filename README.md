# Landmine Soft Web

A modern, animation-rich marketing website for Landmine Soft built with React, Vite, Framer Motion, and React Three Fiber.

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- Three.js + React Three Fiber + Drei
- Tailwind CSS
- React Router
- Lucide React

## Preferred Tech Stack Alignment

This project follows your requested stack and frontend standards:

- React.js (primary framework)
- HTML5 + CSS3
- Tailwind CSS for utility-first styling
- Fully responsive behavior for Mobile, Tablet, and Desktop

If needed, components can be adapted to plain CSS modules or Bootstrap patterns, but Tailwind is currently the active styling system.

## UI / UX Expectations

The implementation is designed to match your UI/UX requirements:

- Modern and clean visual design
- Fully responsive layout across breakpoints
- Consistent color palette and visual language
- Professional typography hierarchy
- Smooth hover effects and animations
- Reusable component-based architecture
- Clean and readable code style

## Project Guidelines Followed

The codebase is maintained using the following practices:

- Proper folder and component structure (`src/components`, `src/pages`)
- Meaningful file and component names
- Minimal duplication with reusable components
- Comments added where useful for non-obvious logic
- Maintainable, readable component composition and styling

## Pages

- `/` Home
- `/about` About
- `/services` Services
- `/careers` Careers
- `/contact` Contact
- `/faq` FAQ
- `/privacy-policy` Privacy Policy
- `/terms-and-conditions` Terms & Conditions
- `/login` Login
- `/register` Register

## Branding Assets

- Header logo and favicon use: `public/landminelogo-CMvDdIuP.png`

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run preview` - Preview built app
- `npm run lint` - Run ESLint

## Project Structure

```text
landmine-soft-web/
  public/
  src/
    components/
    pages/
    App.jsx
    main.jsx
    index.css
  vite.config.js
```

## Notes

- The site includes optimized 3D backgrounds and hero objects with reduced GPU load for smoother runtime performance.
- Vendor chunking is configured in `vite.config.js` for better caching and load behavior.
