const skillCategories = [
  {
    category: "Frontend & Mobile",
    description:
      "Design systems, responsive layouts, and immersive mobile experiences.",
    skills: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Flutter",
      "Dart",
      "TailwindCSS",
      "HTML/CSS",
      "Responsive Design",
      "Zustand",
      "Framer Motion",
      "Material 3",
    ],
  },
  {
    category: "Backend & Database",
    description: "Secure APIs, real-time data, and scalable infrastructure.",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Prisma ORM",
      "Mongoose",
      "REST APIs",
      "Socket.io",
    ],
  },
  {
    category: "Tools & Services",
    description: "Deployment pipelines, cloud services, and product delivery.",
    skills: [
      "Git",
      "Vercel",
      "Cloudinary",
      "Resend",
      "Neon",
      "Mapbox",
      "Google Maps API",
      "Google Gemini AI",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-foreground/5">
      <div className="section-container space-y-10">
        <div>
          <div className="section-heading">Skills & Technologies</div>
          <p className="section-subheading">
            A versatile stack tailored for responsive, data-rich products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="surface-card space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
                <p className="text-sm text-muted">
                  {category.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-md bg-foreground/5 text-xs font-medium text-muted-strong"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

