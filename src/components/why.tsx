"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function WhyMe() {
  return (
    <section id="why" className="relative py-16 sm:py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/8 via-[var(--background)] to-[var(--background)]">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[20%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#6366f1]/20 blur-[140px]" />
      </div>

      <div className="section-container space-y-10 relative z-10">
        <div className="space-y-3 text-center">
          <div className="eyebrow mx-auto">Code Philosophy</div>
          <h2 className="section-heading">Stability by default</h2>
          <p className="section-subheading">
            Type-safe systems where the frontend never has to guess.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left Column: Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Architecture First.
              </h3>
              <p className="text-base sm:text-lg text-muted-strong leading-relaxed">
                I build systems where <span className="font-semibold text-foreground">stability is the default</span>. 
                From strict Zod validation to fully typed API responses, I ensure the frontend 
                <span className="font-semibold text-foreground"> never has to guess</span> what the backend is sending.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">End-to-end type safety</h4>
                  <p className="text-sm text-muted">
                    Zod schemas shared between client and server eliminate runtime surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Validated at the edge</h4>
                  <p className="text-sm text-muted">
                    Invalid data never reaches your database. Catch errors early, fix them once.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Self-documenting code</h4>
                  <p className="text-sm text-muted">
                    TypeScript + Zod = API contracts that developers trust.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#6366f1] rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity blur-sm" />
            
            {/* Code Window */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[#1e1e2e] backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#181825]">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <Terminal size={14} className="text-muted-subtle" />
                  <span className="text-xs text-muted-subtle font-mono">useUser.ts</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-[#c678dd]">import</span>
                    <span className="text-[#abb2bf]"> {'{'} z {'}'} </span>
                    <span className="text-[#c678dd]">from</span>
                    <span className="text-[#98c379]"> &apos;zod&apos;</span>
                    <span className="text-[#abb2bf]">;</span>
                    {'\n\n'}
                    <span className="text-[#5c6370]">{'// Strict validation schema'}</span>
                    {'\n'}
                    <span className="text-[#c678dd]">export const</span>
                    <span className="text-[#e5c07b]"> UserSchema</span>
                    <span className="text-[#abb2bf]"> = z.</span>
                    <span className="text-[#61afef]">object</span>
                    <span className="text-[#abb2bf]">({"{"}</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">  id: z.</span>
                    <span className="text-[#61afef]">string</span>
                    <span className="text-[#abb2bf]">().</span>
                    <span className="text-[#61afef]">uuid</span>
                    <span className="text-[#abb2bf]">(),</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">  email: z.</span>
                    <span className="text-[#61afef]">string</span>
                    <span className="text-[#abb2bf]">().</span>
                    <span className="text-[#61afef]">email</span>
                    <span className="text-[#abb2bf]">(),</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">  role: z.</span>
                    <span className="text-[#61afef]">enum</span>
                    <span className="text-[#abb2bf]">([</span>
                    <span className="text-[#98c379]">&apos;admin&apos;</span>
                    <span className="text-[#abb2bf]">, </span>
                    <span className="text-[#98c379]">&apos;user&apos;</span>
                    <span className="text-[#abb2bf]">]),</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">  createdAt: z.coerce.</span>
                    <span className="text-[#61afef]">date</span>
                    <span className="text-[#abb2bf]">(),</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">{"}"});</span>
                    {'\n\n'}
                    <span className="text-[#5c6370]">{'// Type-safe API response'}</span>
                    {'\n'}
                    <span className="text-[#c678dd]">export type</span>
                    <span className="text-[#e5c07b]"> User </span>
                    <span className="text-[#abb2bf]">= z.</span>
                    <span className="text-[#61afef]">infer</span>
                    <span className="text-[#abb2bf]">{"<"}</span>
                    <span className="text-[#c678dd]">typeof</span>
                    <span className="text-[#e5c07b]"> UserSchema</span>
                    <span className="text-[#abb2bf]">{">"}</span>
                    <span className="text-[#abb2bf]">;</span>
                    {'\n\n'}
                    <span className="text-[#5c6370]">{'// Custom hook with full type safety'}</span>
                    {'\n'}
                    <span className="text-[#c678dd]">export function</span>
                    <span className="text-[#61afef]"> useUser</span>
                    <span className="text-[#abb2bf]">(</span>
                    <span className="text-[#e06c75]">id</span>
                    <span className="text-[#abb2bf]">: </span>
                    <span className="text-[#e5c07b]">string</span>
                    <span className="text-[#abb2bf]">) {"{"}</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">  </span>
                    <span className="text-[#c678dd]">return</span>
                    <span className="text-[#abb2bf]"> UserSchema.</span>
                    <span className="text-[#61afef]">parse</span>
                    <span className="text-[#abb2bf]">(data);</span>
                    {'\n'}
                    <span className="text-[#abb2bf]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

