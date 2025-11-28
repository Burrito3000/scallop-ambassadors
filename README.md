# Scallop Ambassadors Page

A beautiful, modern ambassadors page for Scallop built with Next.js, TypeScript, and Tailwind CSS. Inspired by the ZAR ambassadors page with a sophisticated staggered gallery layout.

## Features

- **Sticky Navigation**: Glass-blur effect navigation bar
- **Hero Section**: Gradient background with parallax animation
- **Feature Cards**: Three frosted-glass cards showcasing benefits
- **Ambassador Gallery**: ZAR-style staggered masonry layout with 10+ images
- **Subtle Animations**: 5-second gentle drift animations on gallery images
- **Hover Effects**: Soft white gradient overlays with ambassador titles
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Next.js Image optimization, lazy loading, code splitting

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- React 19

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000/ambassadors](http://localhost:3000/ambassadors) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── ambassadors/
│   │   └── page.tsx          # Main ambassadors page
│   ├── globals.css           # Global styles and utilities
│   └── layout.tsx            # Root layout
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx    # Sticky navigation
│   │   └── Footer.tsx        # Footer component
│   └── sections/
│       ├── Hero.tsx           # Hero section
│       ├── FeatureCards.tsx  # Three feature cards
│       ├── AmbassadorGallery.tsx  # Main gallery (ZAR-style)
│       ├── MidPageCTA.tsx    # Mid-page call-to-action
│       ├── HowItWorks.tsx    # How it works section
│       ├── Perks.tsx         # Perks section
│       └── TwoColumnSection.tsx  # Two-column layout
├── lib/
│   ├── ambassadorImages.ts   # Image metadata and layout config
│   └── animations.ts         # Animation utilities
└── public/
    └── images/
        └── ambassadors/       # Ambassador images (1.jpg - 10.jpg)
```

## Image Setup

Place ambassador images in `public/images/ambassadors/` as:
- `1.jpg` through `10.jpg` (or more)

The gallery layout is configured in `lib/ambassadorImages.ts` where you can specify:
- Image layout type (tall-portrait, landscape, wide-cinematic, etc.)
- Image titles
- Layout positioning

## Customization

### Colors & Gradients
Edit `app/globals.css` to customize:
- Brand colors
- Gradient variants
- Glass-blur effects
- Shadow system

### Animations
Modify `lib/animations.ts` to adjust:
- Animation speeds
- Parallax intensity
- Fade-in effects

### Gallery Layout
Update `lib/ambassadorImages.ts` to:
- Add/remove images
- Change layout positions
- Modify image metadata

## Performance

- Images are automatically optimized by Next.js
- Lazy loading is enabled for gallery images
- Code splitting for optimal bundle sizes
- AVIF and WebP formats supported

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

