# Portfolio 2.0 - Aman Toppo

A modern, high-performance portfolio website showcasing production-grade full-stack engineering work. Built with cutting-edge technologies and featuring advanced animations, glassmorphism UI, and a unique MySQL-themed terminal interface.

🌐 **Live Demo:** [aman-toppo-portfolio.vercel.app](https://aman-toppo-portfolio.vercel.app)

---

## ✨ Features

### 🎨 Design
- **Deep Dark Mode** with enhanced glassmorphism effects
- **Light Mode** optimized for clarity and professionalism
- **Ambient Glows** and radial gradients for spatial depth
- **Minimalist UI** focused on content and impact
- **Fully Responsive** design for all devices
- **Custom Scrollbar** styling (hidden for clean aesthetics)

### 🚀 Technical Highlights
- **Next.js 16** with App Router and React Compiler
- **React 19** with latest optimizations
- **Tailwind CSS v4** (CSS-first configuration)
- **TypeScript** for type safety
- **Framer Motion** for smooth animations and micro-interactions
- **Zero Vulnerabilities** in dependencies

### 🎯 Unique Sections

#### 1. **MySQL Terminal Hero**
- Animated terminal boot sequence showing developer info
- MySQL-themed syntax highlighting (teal, orange, green)
- Real-time typing effect with query execution
- Shows role, location, experience, stack, and availability

#### 2. **Sticky Stack Projects**
- Full-screen project cards that stack on scroll
- 3D-tilted screenshot previews
- Distinct gradient backgrounds per project
- Live preview and source code links
- Featured projects:
  - **Leadlink CRM** - Handling 10k+ leads/month
  - **NEK Brand** - Luxury e-commerce with zero downtime
  - **Adventura** - Real-time rider platform with 50+ users
  - **CaptionCraft AI** - Flutter app with Gemini AI integration

#### 3. **Minimalist About Section**
- Clean two-card layout (60/40 split)
- Left: Product-focused narrative
- Right: Hard metrics (1.5 years, 3 products, BCA graduate)
- Professional copy emphasizing system architecture

#### 4. **Code Philosophy**
- Live code snippet with VS Code-style syntax highlighting
- Showcases Zod validation and type-safe architecture
- Demonstrates commitment to code quality

#### 5. **Project Impact Metrics**
- Infinite scrolling metrics showcase
- Real production statistics (50% faster APIs, 10k+ leads, etc.)
- Icons and project attribution

#### 6. **Curated Tech Stack**
- Grouped by Primary, Frameworks, and Infrastructure
- Focus on "money skills" (removed basic tools)
- Clean pill-style badges

#### 7. **Mega Footer**
- Large typography headline
- 4-column navigation grid
- Email and GitHub CTA buttons
- Dynamic copyright year

---

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.8** - React framework with Turbopack
- **React 19.2.1** - Latest stable release
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS v4** - Utility-first CSS with CSS variables
- **Framer Motion 12** - Animation library
- **Lucide React** - Icon library

### Build Tools
- **ESLint 9** - Code linting
- **Babel React Compiler** - Optimized compilation
- **PostCSS** - CSS processing

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/amantoppo1739/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📦 Project Structure

```
portfolio_2.0/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & CSS variables
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Main page orchestration
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx        # Reusable button with Framer Motion
│   │   ├── navbar.tsx            # Responsive nav with theme toggle
│   │   ├── hero.tsx              # MySQL terminal animation
│   │   ├── bento-grid.tsx        # Minimalist about section
│   │   ├── projects.tsx          # Sticky stack project showcase
│   │   ├── testimonials.tsx      # Project impact metrics
│   │   ├── stack.tsx             # Curated tech stack
│   │   ├── why.tsx               # Code philosophy section
│   │   ├── footer.tsx            # Mega footer with navigation
│   │   └── theme-toggle.tsx      # Light/dark mode switcher
│   └── lib/
│       └── utils.ts              # Utility functions (cn)
├── public/
│   └── projects/                 # Project screenshots
│       ├── leadlink.png
│       ├── nek-brand.png
│       └── captioncraft.png
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration (removed for v4)
└── package.json                  # Dependencies
```

---

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/hero.tsx`):
   - Update name, description, and MySQL terminal data
   - Update social links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/bento-grid.tsx`):
   - Update experience metrics and narrative

3. **Projects** (`src/components/projects.tsx`):
   - Update the `projects` array with your own projects
   - Add screenshots to `public/projects/`

4. **Tech Stack** (`src/components/stack.tsx`):
   - Modify the `techStack` object with your skills

5. **Footer** (`src/components/footer.tsx`):
   - Update contact links and information

6. **Metadata** (`src/app/layout.tsx`):
   - Update SEO title and description

---

## 🏗️ Build & Deploy

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amantoppo1739/portfolio)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy automatically

---

## 🔧 Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

---

## 🎯 Key Design Decisions

### Why These Choices?

1. **MySQL Terminal**: Demonstrates technical identity and backend expertise
2. **Sticky Stack Projects**: Premium feel with focused storytelling per project
3. **Minimalist About**: Reduces clutter, emphasizes narrative + metrics
4. **Code Philosophy**: Shows commitment to architecture and quality
5. **No Testimonials**: Replaced with real project impact metrics for credibility
6. **Curated Stack**: Focus on production-grade skills, not basics

---

## 📊 Performance

- ✅ **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 2.5s
- ✅ **Fully Static**: Pre-rendered at build time
- ✅ **Zero Client-Side JS** (except for interactions)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/amantoppo1739/portfolio/issues).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Aman Toppo**
- Portfolio: [aman-toppo-portfolio.vercel.app](https://aman-toppo-portfolio.vercel.app)
- GitHub: [@amantoppo1739](https://github.com/amantoppo1739)
- LinkedIn: [Aman Toppo](https://www.linkedin.com/in/aman-toppo-b54a43305)
- Email: amantoppo1739@gmail.com

---

## 🙏 Acknowledgments

- **Next.js Team** for the incredible framework
- **Vercel** for seamless deployment
- **Tailwind Labs** for Tailwind CSS v4
- **Framer** for Framer Motion
- **Lucide** for beautiful icons

---

**Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.**
