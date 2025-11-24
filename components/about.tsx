const focusHighlights = [
  "Designing end-to-end experiences that feel cohesive across breakpoints",
  "Shipping reliable features with clean architecture and thoughtful DX",
  "Balancing performance budgets with visually rich design systems",
];

const exploringNow = [
  "AI-assisted workflows to accelerate prototyping",
  "Real-time collaboration patterns for product teams",
  "Better ways to measure product usability at scale",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-container space-y-10">
        <div className="space-y-4">
          <div className="section-heading">About Me</div>
          <p className="section-subheading">
            A cross-functional developer who bridges product thinking with strong
            engineering fundamentals.
          </p>
        </div>
        <div className="space-y-6 text-base sm:text-lg text-muted-strong leading-relaxed">
          <p>
            I&apos;m a Full Stack Developer crafting responsive, scalable
            applications across web and mobile. My toolkit includes Next.js,
            TypeScript, React, Flutter, and modern backend frameworks that allow
            me to go from concept to deploy with confidence.
          </p>
          <p>
            My projects span luxury e-commerce experiences with custom admin tooling,
            community platforms with live tracking and collaboration, and
            AI-powered mobile apps that help people tell richer stories. Regardless
            of the stack, I obsess over details that make products genuinely
            enjoyable to use on any screen size.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-subtle">
              What drives me
            </p>
            <ul className="space-y-3 text-sm text-muted-strong">
              {focusHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-subtle">
              Currently exploring
            </p>
            <ul className="space-y-3 text-sm text-muted-strong">
              {exploringNow.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

