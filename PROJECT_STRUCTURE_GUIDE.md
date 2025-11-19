# TheCodec Systems Project Structure Guide

## 📋 Project Overview

This is a **React + TypeScript + Vite** project using **shadcn/ui** components and **Tailwind CSS** for styling. It's a company website showcasing TheCodec Systems' fintech and communication technology solutions.

**Key Technologies:**

- **Frontend Framework:** React 18.3.1 + TypeScript
- **Build Tool:** Vite 5.4.19
- **UI Components:** shadcn/ui (based on Radix UI)
- **Styling:** Tailwind CSS 3.4.17 + PostCSS
- **Icons:** lucide-react (SVG icons)
- **Routing:** React Router DOM v6
- **State Management:** TanStack React Query
- **Form Handling:** React Hook Form + Zod validation
- **Notifications:** Sonner (toast notifications)

---

## 📁 Project Directory Structure

```
/home/blank/Downloads/codec-systems-launch-main/
├── public/                          # Static assets served directly
│   ├── favicon.ico                 # Website favicon
│   ├── robots.txt                  # SEO robots configuration
│   └── placeholder.svg             # Placeholder graphics
│
├── src/                            # Main source code
│   ├── assets/                     # Images and illustrations (IMAGES GO HERE!)
│   │   ├── hero-illustration.png
│   │   ├── about-illustration.png
│   │   ├── contact-illustration.png
│   │   ├── recalo-illustration.png
│   │   ├── recalolite-illustration.png
│   │   ├── sivvar-illustration.png
│   │   ├── intellio-illustration.png
│   │   └── verivo-illustration.png
│   │
│   ├── components/                 # Reusable React components
│   │   ├── Navbar.tsx              # Navigation bar with dropdown products menu
│   │   ├── Hero.tsx                # Hero section with call-to-action
│   │   ├── Services.tsx            # 6 services displayed in grid
│   │   ├── Clients.tsx             # Client logos carousel (placeholder images)
│   │   ├── Newsletter.tsx          # Email subscription form
│   │   ├── Footer.tsx              # Footer with links and contact info
│   │   ├── Team.tsx                # Team members grid (placeholder images)
│   │   ├── ProductNav.tsx          # Product navigation component
│   │   ├── NavLink.tsx             # Navigation link component
│   │   │
│   │   └── ui/                     # shadcn/ui component library
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── calendar.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── drawer.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── use-toast.ts
│   │       └── alert.tsx
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Responsive mobile detection hook
│   │   └── use-toast.ts            # Toast notification hook
│   │
│   ├── lib/                        # Utility functions
│   │   └── utils.ts                # Helper functions and utilities
│   │
│   ├── pages/                      # Page components (routes)
│   │   ├── Index.tsx               # Home page (routes to /)
│   │   ├── About.tsx               # About page (routes to /about)
│   │   ├── Contact.tsx             # Contact page (routes to /contact)
│   │   ├── NotFound.tsx            # 404 error page (routes to /*)
│   │   │
│   │   └── products/               # Product pages
│   │       ├── Recalo.tsx          # Routes to /products/recalo
│   │       ├── RecaloLite.tsx      # Routes to /products/recalolite
│   │       ├── Sivvar.tsx          # Routes to /products/sivvar
│   │       ├── Intellio.tsx        # Routes to /products/intellio
│   │       └── Verivo.tsx          # Routes to /products/verivo
│   │
│   ├── App.tsx                     # Main app component with routing setup
│   ├── main.tsx                    # React DOM render entry point
│   ├── index.css                   # Global styles and design system
│   └── vite-env.d.ts              # Vite environment type definitions
│
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and npm scripts
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json              # TypeScript app-specific config
├── tsconfig.node.json             # TypeScript Node.js config
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js               # ESLint configuration
└── components.json                # shadcn/ui components metadata
```

---

## 🎨 Design System & Colors

**Custom Color Palette** (defined in `src/index.css`):

- **Primary Green:** `hsl(142 93% 40%)` - Main brand color
- **Dark Green:** `hsl(142 94% 31%)`
- **Darker Green:** `hsl(142 93% 28%)`
- **Black:** `hsl(0 0% 7%)`
- **Dark Gray:** `hsl(0 0% 20%)`
- **Medium Gray:** `hsl(0 0% 42%)`
- **Light Gray:** `hsl(0 0% 96%)`

**Tailwind Color Classes:**

```tsx
// Usage examples:
className = "text-codec-black"; // Darkest color
className = "bg-codec-lightGray"; // Light background
className = "text-primary"; // Green accent color
className = "hover:bg-primary"; // Hover state
```

---

## 🖼️ Images & Assets Management

### **Where to Add Images:**

All images go in: **`/src/assets/`**

### **Current Product Illustrations:**

- `hero-illustration.png` - Used in Hero component
- `about-illustration.png` - Used in About page
- `contact-illustration.png` - Used in Contact page
- `recalo-illustration.png` - Used in Recalo product page
- `recalolite-illustration.png` - Used in RecaloLite product page
- `sivvar-illustration.png` - Used in Sivvar product page
- `intellio-illustration.png` - Used in Intellio product page
- `verivo-illustration.png` - Used in Verivo product page

### **How Images Are Imported:**

```tsx
// ES6 import (recommended - allows Vite optimization)
import heroImage from "@/assets/hero-illustration.png";

// Then use in JSX:
<img src={heroImage} alt="Description" className="w-full h-auto" />;
```

### **Placeholder Images Being Used:**

Currently, **two components use placeholder URLs** that you can replace:

1. **Clients.tsx** - Client logos (lines with `https://via.placeholder.com/`)
2. **Team.tsx** - Team member photos (lines with `https://via.placeholder.com/`)

---

## 🔌 Icons Integration

**Icon Source:** `lucide-react` - A collection of 460+ SVG icons

### **Icons Used Throughout the Project:**

```tsx
import { ArrowRight, Menu, X, ChevronDown, Phone, CreditCard, Radio,
         Lightbulb, Network, Headphones, Mail, MapPin } from "lucide-react";

// Usage in components:
<ArrowRight className="ml-2 group-hover:translate-x-1" />
<Phone size={16} className="text-primary" />
```

### **Available Icon Categories:**

- Navigation: Menu, X, ChevronDown, ArrowRight, etc.
- Communication: Phone, Mail, MessageSquare
- Business: CreditCard, TrendingUp, BarChart, Users
- Technology: Radio, Network, Code, Server, Database
- Utilities: Lightbulb, Settings, Plus, Minus
- [View all 460+ icons at lucide.dev](https://lucide.dev)

---

## 📄 Page Routing Map

```
/
├── /               → Index page (Hero + Services + Clients + Newsletter + Footer)
├── /about          → About page with Team component
├── /contact        → Contact page with form
│
├── /products/recalo
├── /products/recalolite
├── /products/sivvar
├── /products/intellio
└── /products/verivo

/* (catch-all) → NotFound page (404)
```

---

## 🎯 Key Components Breakdown

### **Navbar.tsx** (`/src/components/`)

- Fixed header with logo and navigation
- Desktop menu with Products dropdown
- Mobile hamburger menu
- Uses: Routing (Link), Icons (Menu, X, ChevronDown), Dropdown UI

### **Hero.tsx**

- Main landing section with title and CTA buttons
- Uses imported illustration: `hero-illustration.png`
- Uses: Button component, lucide-react icons

### **Services.tsx**

- Grid of 6 services (Call Center, CodecPay, IVR, Consultancy, IP-PBX, VoIP)
- Each service has icon, title, and description
- Uses: lucide-react icons (Phone, CreditCard, Radio, Lightbulb, Network, Headphones)

### **Clients.tsx**

- Infinite scroll carousel of client logos
- **⚠️ Currently using placeholder URLs - needs real logo images**
- Images: `https://via.placeholder.com/150x150?text=...`

### **Team.tsx**

- Grid display of team members with photos and roles
- **⚠️ Currently using placeholder URLs - needs real team photos**
- Images: `https://via.placeholder.com/300x300?text=...`

### **Footer.tsx**

- Company info, quick links, products, contact details
- Uses: Icons (Mail, Phone, MapPin) from lucide-react

### **Product Pages** (Recalo, RecaloLite, Sivvar, Intellio, Verivo)

- Consistent layout with title, description, and product illustration
- Uses imported images from `/src/assets/`

---

## 📝 Configuration Files

### **vite.config.ts**

- Port: 8080
- Path alias: `@` → `./src/`
- React and component tagger plugins

### **tailwind.config.ts**

- Custom colors (codec-green, codec-black, etc.)
- Custom font: Urbanist
- Animation utilities (accordion, levitate)
- Extends with animate-scroll for carousels

### **src/index.css**

- Design system root CSS variables
- Custom animations: `.levitate`, `.hover-scale`, `.hover-arrow`
- Global Tailwind imports

### **package.json Scripts**

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

---

## 🎬 Custom Animations

Defined in `src/index.css`:

1. **Levitate Animation** (`@apply levitate`)

   - Images float up/down continuously
   - Used on all product illustrations
   - Effect: 3-second smooth vertical movement

2. **Hover Scale** (`@apply hover-scale`)

   - Elements scale up 5% on hover
   - Used on service cards

3. **Hover Arrow** (`@apply hover-arrow`)

   - Arrow icons shift right on hover
   - Smooth 0.3s transition

4. **Scroll Animation** (Clients carousel)
   - Custom keyframe animation
   - Continuous horizontal scroll

---

## ✏️ Making Modifications

### **To Add/Replace Images:**

1. Save your image file to `/src/assets/`
2. Import it: `import myImage from "@/assets/my-image.png";`
3. Use in JSX: `<img src={myImage} alt="Description" />`

### **To Add/Replace Client Logos:**

Edit `/src/components/Clients.tsx`:

```tsx
const clients = [
  { name: "Company Name", logo: "https://your-logo-url.png" },
  // ... more clients
];
```

### **To Add/Replace Team Photos:**

Edit `/src/components/Team.tsx`:

```tsx
const team = [
  {
    name: "Person Name",
    role: "Their Role",
    image: "https://your-photo-url.png",
  },
  // ... more team members
];
```

### **To Add New Icons:**

1. Find icon at [lucide.dev](https://lucide.dev)
2. Import: `import { IconName } from "lucide-react";`
3. Use: `<IconName size={24} className="text-primary" />`

### **To Add New Pages:**

1. Create file in `/src/pages/PageName.tsx`
2. Add route in `/src/App.tsx`
3. Include Navbar and Footer components

---

## 🚀 Development Tips

1. **Responsive Design:** Uses Tailwind's mobile-first breakpoints (sm, md, lg)
2. **Hover Effects:** Most cards use hover animations defined in index.css
3. **Path Alias:** Use `@/` instead of `../../../` for cleaner imports
4. **Icons:** lucide-react icons are preferred over image-based icons
5. **Colors:** Always use defined CSS variables for consistency

---

## 📦 Important Dependencies

- **React 18.3.1** - UI framework
- **React Router 6.30.1** - Page routing
- **shadcn/ui** - Pre-built accessible components
- **Tailwind CSS 3.4.17** - Utility-first styling
- **lucide-react 0.462.0** - SVG icons
- **React Hook Form 7.61.1** - Form handling
- **TanStack React Query 5.83.0** - Data fetching
- **Sonner 1.7.4** - Toast notifications
- **Zod 3.25.76** - Data validation

---

## 🔗 Useful Paths for Quick Reference

| Need to...               | Go to...                       |
| ------------------------ | ------------------------------ |
| Add an image             | `/src/assets/`                 |
| Update navbar            | `/src/components/Navbar.tsx`   |
| Update hero section      | `/src/components/Hero.tsx`     |
| Update services          | `/src/components/Services.tsx` |
| Update team              | `/src/components/Team.tsx`     |
| Update clients           | `/src/components/Clients.tsx`  |
| Change colors/animations | `/src/index.css`               |
| Modify styling           | `/tailwind.config.ts`          |
| Update routes            | `/src/App.tsx`                 |
| Update product pages     | `/src/pages/products/`         |

---

This guide covers everything you need to know about the project structure! Ready to make modifications? 🚀
