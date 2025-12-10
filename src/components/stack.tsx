const techStack = {
  primary: ["React.js", "Node.js", "TypeScript", "Next.js 14", "MongoDB"],
  frameworks: ["Express.js", "Laravel", "Flutter", "Prisma ORM"],
  infrastructure: ["PostgreSQL", "Docker", "Socket.io", "AWS/Vercel"],
};

export function Stack() {
  return (
    <section id="stack" className="py-16 sm:py-20 bg-foreground/5 dark:bg-white/[0.02]">
      <div className="section-container space-y-10">
        <div className="space-y-3 text-center">
          <div className="eyebrow mx-auto">Tech Stack</div>
          <h2 className="section-heading">The tools that matter</h2>
          <p className="section-subheading">
            Core technologies I use to ship production-grade applications.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 sm:p-10 space-y-8">
          <div>
            <p className="text-sm font-bold text-foreground mb-4">Primary Stack</p>
            <div className="flex flex-wrap gap-3">
              {techStack.primary.map((skill) => (
                <span key={skill} className="pill bg-foreground/10 font-semibold text-base px-4 py-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-[var(--border)]">
            <div>
              <p className="text-sm font-bold text-foreground mb-4">Frameworks & Libraries</p>
              <div className="flex flex-wrap gap-2">
                {techStack.frameworks.map((skill) => (
                  <span key={skill} className="pill bg-foreground/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-foreground mb-4">Infrastructure & Data</p>
              <div className="flex flex-wrap gap-2">
                {techStack.infrastructure.map((skill) => (
                  <span key={skill} className="pill bg-foreground/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

