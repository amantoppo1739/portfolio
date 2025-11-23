# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- 🚀 Built with Next.js 14 App Router
- 💻 TypeScript for type safety
- 🎨 TailwindCSS for modern styling
- 📱 Fully responsive design
- 🌙 Dark mode support (via system preference)
- ⚡ Optimized performance
- ♿ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description and tagline
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/about.tsx`):
   - Replace the placeholder text with your own story

3. **Projects Section** (`components/projects.tsx`):
   - Update the `projects` array with your actual projects
   - Add/remove projects as needed
   - Update GitHub and live URLs

4. **Skills Section** (`components/skills.tsx`):
   - Modify the `skillCategories` array with your skills

5. **Contact Section** (`components/contact.tsx`):
   - Update email address
   - Update social media links

6. **Metadata** (`app/layout.tsx`):
   - Update the title and description in the metadata

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and TailwindCSS
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── ui/              # Reusable UI components
│   │   └── button.tsx
│   ├── navbar.tsx       # Navigation bar
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── projects.tsx     # Projects showcase
│   ├── skills.tsx       # Skills section
│   ├── contact.tsx      # Contact section
│   └── footer.tsx       # Footer
└── lib/
    └── utils.ts         # Utility functions
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## License

This project is open source and available under the MIT License.

