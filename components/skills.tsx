const skillCategories = [
  {
    category: "Frontend & Mobile",
    skills: ["React", "Next.js 14", "TypeScript", "Flutter", "Dart", "TailwindCSS", "HTML/CSS", "Responsive Design", "Zustand", "Framer Motion", "Material 3"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express.js", "Next.js API Routes", "PostgreSQL", "MongoDB", "Supabase", "Prisma ORM", "Mongoose", "REST APIs", "Socket.io"],
  },
  {
    category: "Tools & Services",
    skills: ["Git", "Vercel", "Cloudinary", "Resend", "Neon", "Mapbox", "Google Maps API", "Google Gemini AI", "Figma"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-foreground/10 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-foreground/10 rounded-md text-sm"
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

