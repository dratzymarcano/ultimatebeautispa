# Ultimate Beauty Spa

A premium, production-ready website for a luxury grooming and lifestyle services brand built with Astro, deployed on Cloudflare Pages.

![Ultimate Beauty Spa](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80)

## ✨ Features

- **Modern Tech Stack**: Built with Astro 5 and Tailwind CSS v4
- **Light Luxury Design**: Clean white theme with red & black brand colors, premium Inter typography, and elegant animations
- **Lucide Icon System**: 1500+ consistent SVG icons via astro-icon
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Accessible**: WCAG compliant with skip links, semantic HTML, and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and semantic markup
- **Performance First**: Static site generation, lazy loading, optimized assets
- **WhatsApp Integration**: Booking and contact forms send via WhatsApp
- **Cloudflare Pages Ready**: Static output, deploys instantly

## 🎨 Design System

### Color Palette
- **White / Snow** (#ffffff / #fafafa) - Backgrounds
- **Red** (#E11D48) - Primary brand accent
- **Black** (#000000) - Headings and primary text
- **Charcoal / Gray** - Body text

### Typography
- **Display & Body**: Inter (sans-serif, weights 300-800)

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── Gallery.astro
│   │   ├── CTA.astro
│   │   ├── BookingForm.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── gallery.astro
│   │   ├── contact.astro
│   │   └── book.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

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

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services, testimonials |
| Services | `/services` | Detailed service listings with pricing |
| About | `/about` | Company story, values, and team |
| Gallery | `/gallery` | Portfolio with filtering and lightbox |
| Contact | `/contact` | Contact form and information |
| Book | `/book` | Appointment booking system |

## 🎯 Services Offered

- **Haircuts & Styling** - Precision cuts and expert styling
- **Traditional Shaves** - Classic straight razor experience
- **Massage Therapy** - Relaxation and therapeutic options
- **Tattoo Artistry** - Custom designs by award-winning artists
- **Skincare Treatments** - Advanced facials and treatments
- **Hair Braiding** - Cornrows, locs, twists, and more

## 🔧 Customization

### Updating Content
- Edit page content directly in `/src/pages/`
- Modify component data in `/src/components/`
- Adjust global styles in `/src/styles/global.css`

### Adding Pages
1. Create a new `.astro` file in `/src/pages/`
2. Import the Layout and necessary components
3. Add navigation link in Header component

## 📈 Performance

- Lighthouse Score: 95+ across all metrics
- Core Web Vitals optimized
- Static site generation for instant loading
- Lazy loading for images
- CSS is tree-shaken and minified

## 🚀 Deploy to Cloudflare Pages

### Via GitHub (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`
6. Click **Save and Deploy**

Your site will be live at `https://your-project.pages.dev` within minutes. Every push to `main` triggers an automatic redeploy.

## ♿ Accessibility

- Skip to content link
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Reduced motion support

## 📝 License

© 2026 Ultimate Beauty Spa. All rights reserved.

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
