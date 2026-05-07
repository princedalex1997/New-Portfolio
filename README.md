# 🚀 Prince D Alex - Portfolio

> A cutting-edge, high-performance portfolio showcasing 3+ years of frontend expertise with interactive animations, smooth scrolling, and modern web technologies.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)

---

## 🌐 Live Demo

Experience the project live:
👉 **[Portfolio](https://princedalexander.vercel.app/)**

---



## 📸 Preview


<img width="1440" height="814" alt="Screen Shot 2026-05-07 at 10 27 46 PM" src="https://github.com/user-attachments/assets/e11f21e3-6dba-4f08-b26f-fc7ab1154c5b" />

---



## ✨ Features

### 🎨 **Visual Excellence**
- **Smooth Scroll Experience** - Powered by Lenis for buttery-smooth scrolling
- **Advanced Animations** - Framer Motion for fluid, performance-optimized animations
- **3D Elements** - React Three Fiber & Three.js for immersive experiences
- **Responsive Design** - Pixel-perfect on all devices (mobile → desktop)
- **Dark Aesthetic** - Modern slate theme with gradient accents

### ⚡ **Performance First**
- **60 FPS Scrolling** - Optimized with GPU acceleration
- **Zero Jank** - Carefully tuned animation timings (tween-based, not spring)
- **Lazy Loading** - Images load on-demand
- **Code Splitting** - Efficient bundle size
- **SEO Optimized** - Server-ready meta tags

### 🛠️ **Tech Stack Integration**
- **Frontend**: React 19, TypeScript, Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: GSAP, Framer Motion
- **Build Tool**: Vite with SWC compilation
- **Email Service**: EmailJS for contact forms
- **Smooth Scroll**: Lenis

### 📧 **Contact Integration**
- **Email Notifications** - Direct emails via EmailJS
- **Form Validation** - Client-side validation
- **Real-time Feedback** - Success/error messages
- **Loading States** - User-friendly submission feedback

---

## 🎯 Sections

### **1. Hero Section**
```
┌─────────────────────────────────────┐
│  FRONTEND DEVELOPER Introduction    │
│  3+ Years | 7+ Projects | 10K+ Hrs  │
│  Smooth animations & Canvas effects │
└─────────────────────────────────────┘
```
- Animated heading with gradient text
- Dynamic stats counter
- Three.js canvas background
- Mobile-responsive layout

### **2. About**
- Professional highlights with emoji markers
- Floating image gallery with scroll animations
- Glassmorphism card design
- Scroll reveal text effects

### **3. Skills**
- **Frontend**: JavaScript, TypeScript, React, Next.js, Redux, Tailwind, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, MySQL, PostgreSQL
- Skill level indicators
- Hover glow effects

### **4. Experience** (Flexiapps)
- 3+ years at Flexiapps Solutions
- 4 major project showcase cards
- Project descriptions with scroll animations
- Role-based color theming

### **5. Projects**
- 5 flagship projects showcased
- **E-Commerce Web App** - Redux state management
- **Inventory Dashboard** - Data visualization
- **Headphones Website** - Animation-driven UI
- **School ERP System** - Full-stack enterprise
- **Chat App (MERN)** - Real-time messaging
- Live demo & GitHub links for each

### **6. Tech Cloud**
- **Interactive 3D visualization**
- Rotating tech badges
- 13+ technologies displayed
- Trackball controls for exploration

### **7. Contact**
- Email contact form with validation
- EmailJS integration
- Resume download button
- Social media links

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/princedalex1997/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your EmailJS credentials:
# VITE_EMAILJS_PUBLIC_KEY=your_public_key
# VITE_EMAILJS_SERVICE_ID=your_service_id
# VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### Development

```bash
# Start dev server with HMR
npm run dev

# Opens http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# TypeScript check
npm run lint
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with animations
│   ├── About.tsx             # About section with scroll reveal
│   ├── Skills.tsx            # Tech stack showcase
│   ├── Flexiapps.tsx         # Experience & projects
│   ├── ProjectsGallery.tsx   # Project showcase with carousel
│   ├── TechCloud.tsx         # 3D tech visualization
│   ├── Contact.tsx           # Contact form with EmailJS
│   ├── Connections.tsx       # Social media sidebar
│   └── UI/                   # Reusable UI components
│       ├── Cards.tsx
│       ├── DecryptedText.jsx
│       ├── ScrollReveal.jsx
│       ├── TextAnimation.tsx
│       └── RotatingText.jsx
├── hooks/
│   ├── CanvasCursor.tsx      # Custom cursor animation
│   └── useCanvasCursor.tsx
├── assets/
│   ├── images/               # Project screenshots
│   ├── ic/                   # Tech icons
│   └── pro/                  # Project images
├── App.tsx                   # Main app with Lenis scroll
├── main.tsx                  # React entry point
└── index.css                 # Global Tailwind styles
```

---

## 🎯 Performance Optimizations

### Animation Tweaks
- **Tween-based transitions** (no physics calculations)
- **Reduced stagger delays** (50ms vs 200ms)
- **GPU acceleration** via `will-change`
- **Backface visibility hidden** for 3D transforms

### Code Optimization
- **Component memoization** with `memo()`
- **useMemo** for expensive calculations
- **useCallback** for event handlers
- **Lazy loading images** with native HTML attributes

### Bundle Optimization
- **Code splitting** with dynamic imports
- **Tree-shaking** enabled
- **SWC compiler** for faster builds
- **Minification** and gzip compression

**Result**: 60 FPS constant scrolling, <1s initial load

---

## 📧 EmailJS Setup

### Quick Setup (5 minutes)

1. **Create EmailJS Account**
   ```
   https://www.emailjs.com/ → Sign Up
   ```

2. **Connect Gmail**
   - Email Services → Connect Account
   - Authorize with Gmail

3. **Create Template**
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   Body:
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

4. **Get Credentials**
   - Account → API Keys → Copy Public Key
   - Save Service ID & Template ID

5. **Add to .env.local**
   ```
   VITE_EMAILJS_PUBLIC_KEY=pk_xxx
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   ```

---

## 🎨 Customization

### Change Colors
Edit `src/index.css`:
```css
@theme {
  --color-primary: #3b82f6;    /* Blue */
  --color-secondary: #1e293b;  /* Slate */
  --color-background: #030712; /* Dark */
  --color-foreground: #f9fafb; /* Light */
}
```

### Update Content
- **Hero**: Edit `src/components/Hero.tsx`
- **Projects**: Modify array in `src/components/ProjectsGallery.tsx`
- **Skills**: Update in `src/components/Skills.tsx`
- **Experience**: Change in `src/components/Flexiapps.tsx`

### Modify Animations
- **Lenis settings**: `src/App.tsx`
- **Framer Motion**: Individual component files
- **Canvas cursor**: `src/components/hooks/useCanvasCursor.tsx`

---

## 📊 Tech Details

### Frontend Stack
| Tech | Purpose | Version |
|------|---------|---------|
| React | UI Library | 19.2 |
| TypeScript | Type Safety | 6.0 |
| Vite | Build Tool | 8.0 |
| Tailwind CSS | Styling | 4.2 |
| Framer Motion | Animations | 12.38 |
| Three.js | 3D Graphics | 0.184 |
| GSAP | Advanced Animation | 3.15 |
| Lenis | Smooth Scroll | 1.3 |

### Dependencies
```json
{
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "framer-motion": "^12.38.0",
  "motion": "^12.38.0",
  "@react-three/fiber": "^9.6.1",
  "@react-three/drei": "^10.7.7",
  "three": "^0.184.0",
  "gsap": "^3.15.0",
  "lenis": "^1.3.23",
  "tailwindcss": "^4.2.4",
  "@emailjs/browser": "^4.4.1"
}
```

---

## 🔗 Links

- **Live Portfolio**: [Portfolio](https://princedalexander.vercel.app/)
- **GitHub**: [@princedalex1997](https://github.com/princedalex1997)
- **LinkedIn**: [prince-d-alex](https://www.linkedin.com/in/prince-d-alex/)
- **Email**: princedalex.dev@gmail.com
- **WhatsApp**: [Message on WhatsApp](https://wa.me/7034628878)

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or have an improvement:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙌 Acknowledgments

- **Framer Motion** - Animation library excellence
- **Three.js** - 3D graphics magic
- **Tailwind CSS** - Utility-first styling
- **Lenis** - Smooth scrolling library
- **Vite** - Lightning-fast build tool
- **EmailJS** - Seamless email integration

---

## 📞 Get In Touch

Have a project in mind? Let's build something amazing together!

**Available for:**
- ✅ Full-time opportunities
- ✅ Freelance projects
- ✅ Contract work
- ✅ Collaboration

Drop a message through the [contact form](https://tajmirul.site/#contact) or reach out on [LinkedIn](https://www.linkedin.com/in/prince-d-alex/)

---

<div align="center">

### Made with ❤️ by Prince D Alex

**⭐ If you like this portfolio, please consider giving it a star!**

</div>
