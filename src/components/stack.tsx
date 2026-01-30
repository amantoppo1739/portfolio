// --- The Core Stack and Supporting Tools Display ---

// Core daily driver stacks
const heroStack = [
  { label: "React.js", category: "Frontend" },
  { label: "JavaScript (ES6+)", category: "Frontend" },
  { label: "HTML5", category: "Frontend" },
  { label: "CSS3/Sass", category: "Frontend" },

  { label: "Node.js", category: "Backend" },
  { label: "Express.js", category: "Backend" },

  { label: "MongoDB", category: "Database" },
  { label: "MySQL", category: "Database" },

  { label: "Flutter", category: "Mobile" },
  { label: "Dart", category: "Mobile" },
];

// Development & DevOps
const devOpsStack = [
  { label: "Git & GitHub", category: "Version Control" },
  { label: "Docker", category: "Containerization" },
  { label: "Linux (WSL2)", category: "Operating Systems" },
  { label: "Windows", category: "Operating Systems" },
  { label: "AWS (Cloud Essentials)", category: "Cloud Infrastructure" },
];

// API & Integration
const apiStack = [
  { label: "REST APIs", category: "Communication" },
  { label: "GraphQL", category: "Communication" },
  { label: "JWT (JSON Web Tokens)", category: "Authentication" },
  { label: "OAuth", category: "Authentication" },
  { label: "Redux (Web)", category: "State Management" },
  { label: "Provider/Bloc (Mobile)", category: "State Management" },
];

// Secondary expertise
const secondaryStack = [
  { label: "Laravel", category: "PHP Ecosystem" },
  { label: "TypeScript", category: "Scripting" },
  { label: "Python", category: "Scripting" },
  { label: "Figma", category: "UI/UX Tools" },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="py-16 sm:py-20 bg-foreground/5 dark:bg-white/[0.02]"
    >
      <div className="section-container space-y-10">
        <div className="space-y-3 text-center">
          <div className="eyebrow mx-auto">Tech Stack</div>
          <h2 className="section-heading">The Core Stack</h2>
          <p className="section-subheading">
            These are my daily drivers—the backbone tools I use for real-world software that scales.
          </p>
        </div>

        {/* --- Hero/Core Stack --- */}
        <div className="glass rounded-3xl p-8 sm:p-10 space-y-8">
          {/* Frontend/Backend/DB/Mobile Section */}
          <div>
            <p className="text-sm font-bold text-foreground mb-4">
              <span className="mr-2">🚀</span>Core Stack (Daily Drivers)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">Frontend</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {heroStack
                    .filter(t => t.category === "Frontend")
                    .map(t => (
                      <span
                        key={t.label}
                        className="pill bg-blue-500/10 font-semibold text-base px-4 py-2"
                      >
                        {t.label}
                      </span>
                    ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">Backend</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {heroStack
                    .filter(t => t.category === "Backend")
                    .map(t => (
                      <span
                        key={t.label}
                        className="pill bg-green-500/10 font-semibold text-base px-4 py-2"
                      >
                        {t.label}
                      </span>
                    ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">Database</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {heroStack
                    .filter(t => t.category === "Database")
                    .map(t => (
                      <span
                        key={t.label}
                        className="pill bg-orange-500/10 font-semibold text-base px-4 py-2"
                      >
                        {t.label}
                      </span>
                    ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">Mobile</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {heroStack
                    .filter(t => t.category === "Mobile")
                    .map(t => (
                      <span
                        key={t.label}
                        className="pill bg-cyan-500/10 font-semibold text-base px-4 py-2"
                      >
                        {t.label}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- Dev & DevOps --- */}
          <div className="pt-4 border-t border-[var(--border)] space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground mb-4">
                <span className="mr-2" role="img" aria-label="tools">🛠️</span>
                Development &amp; DevOps
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Version Control",
                  "Containerization",
                  "Operating Systems",
                  "Cloud Infrastructure",
                ].map(cat => (
                  <div key={cat}>
                    <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">
                      {cat}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {devOpsStack
                        .filter(s => s.category === cat)
                        .map(s => (
                          <span key={s.label} className="pill bg-foreground/10">
                            {s.label}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- API & Integration --- */}
          <div className="pt-4 border-t border-[var(--border)] space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground mb-4">
                <span className="mr-2" role="img" aria-label="plug">🔌</span>
                API &amp; Integration
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "Communication",
                  "Authentication",
                  "State Management",
                ].map(cat => (
                  <div key={cat}>
                    <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">
                      {cat}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {apiStack
                        .filter(s => s.category === cat)
                        .map(s => (
                          <span key={s.label} className="pill bg-foreground/10">
                            {s.label}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Secondary Expertise --- */}
          <div className="pt-4 border-t border-[var(--border)] space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground mb-4">
                <span className="mr-2" role="img" aria-label="hourglass">⏳</span>
                Secondary Expertise
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "PHP Ecosystem",
                  "Scripting",
                  "UI/UX Tools",
                ].map(cat => (
                  <div key={cat}>
                    <h4 className="text-xs font-semibold uppercase mb-2 text-muted-strong">
                      {cat}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {secondaryStack
                        .filter(s => s.category === cat)
                        .map(s => (
                          <span key={s.label} className="pill bg-foreground/5">
                            {s.label}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
