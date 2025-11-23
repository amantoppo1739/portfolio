export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-sm text-foreground/60">
        <p>&copy; {currentYear} Aman Toppo. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js, TypeScript, and TailwindCSS
        </p>
      </div>
    </footer>
  );
}

