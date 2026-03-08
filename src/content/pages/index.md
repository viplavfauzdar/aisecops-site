---
title: "AISecOps — Security for Agentic AI Systems"
description: "AISecOps is the emerging discipline for securing agentic AI in production. Runtime policy enforcement, least-privilege tool access, audit logging, and containment — for AI that acts."
---


  <!-- ── HERO ── -->
  <section class="py-14 md:py-24">
    <div class="grid gap-12 md:grid-cols-12 items-center">

      <!-- Left: copy -->
      <div class="md:col-span-6">
        <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-mono tracking-widest uppercase text-[#c94f1e]">
          <span class="h-1.5 w-1.5 rounded-full bg-[#c94f1e] animate-pulse"></span>
          AISecOps · aisecops.net
        </div>

        <h1 class="mt-6 font-serif text-4xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
          Your AI agent<br/>is acting.<br/>
          <em class="text-[#c94f1e]">Is it governed?</em>
        </h1>

        <p class="mt-5 text-lg text-[#6b6460] leading-relaxed max-w-lg">
          Agentic AI systems retrieve data, call tools, and take real actions — with your credentials, on your behalf.
          AISecOps is the emerging discipline for securing them at runtime: policy enforcement,
          least-privilege tool access, audit trails, and containment.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a href="/whitepaper"
             class="px-5 py-3 rounded-2xl bg-ink text-white font-medium text-sm hover:bg-[#c94f1e] transition-colors">
            Download the Framework →
          </a>
          <a href="/definition"
             class="px-5 py-3 rounded-2xl border border-black/15 bg-white text-ink text-sm font-medium hover:border-black/30 transition-colors">
            What Is AISecOps?
          </a>
        </div>

        <!-- Trust pills -->
        <div class="mt-8 flex flex-wrap gap-2 text-xs text-[#6b6460]">
          <span class="px-3 py-1 rounded-full border border-black/10 bg-white">Prompt injection</span>
          <span class="px-3 py-1 rounded-full border border-black/10 bg-white">Tool abuse</span>
          <span class="px-3 py-1 rounded-full border border-black/10 bg-white">Memory poisoning</span>
          <span class="px-3 py-1 rounded-full border border-black/10 bg-white">Policy enforcement</span>
          <span class="px-3 py-1 rounded-full border border-black/10 bg-white">Audit &amp; telemetry</span>
          <span class="px-3 py-1 rounded-full border border-black/10 bg-white">Multi-tenant isolation</span>
        </div>
      </div>

      <!-- Right: terminal (always dark) -->
      <div class="md:col-span-6">
        <div class="rounded-2xl border border-black/10 bg-[#0d1117] overflow-hidden shadow-2xl">
          <div class="flex items-center gap-1.5 px-4 py-3 bg-[#161b22] border-b border-white/10">
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
            <span class="ml-3 font-mono text-xs text-slate-500">aisecops-gateway · audit.jsonl</span>
          </div>
          <div class="p-5 font-mono text-xs leading-7 text-slate-400">
            <div class="text-slate-600">// Retrieval sanitizer — chunk inspected</div>
            <div><span class="text-slate-500">&#123;</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"event"</span><span class="text-slate-500">:</span> <span class="text-amber-300">"retrieval_poisoning_detected"</span><span class="text-slate-500">,</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"severity"</span><span class="text-slate-500">:</span> <span class="text-red-400">"high"</span><span class="text-slate-500">,</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"action"</span><span class="text-slate-500">:</span> <span class="text-emerald-400">"chunk_removed"</span><span class="text-slate-500">,</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"tenant"</span><span class="text-slate-500">:</span> <span class="text-amber-300">"acme-corp"</span></div>
            <div><span class="text-slate-500">&#125;</span></div>
            <div class="mt-1 text-slate-600">// Tool gateway — policy evaluated</div>
            <div><span class="text-slate-500">&#123;</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"tool"</span><span class="text-slate-500">:</span> <span class="text-amber-300">"send_email"</span><span class="text-slate-500">,</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"policy_decision"</span><span class="text-slate-500">:</span> <span class="text-red-400">"DENY"</span><span class="text-slate-500">,</span></div>
            <div>&nbsp;&nbsp;<span class="text-blue-300">"reason"</span><span class="text-slate-500">:</span> <span class="text-amber-300">"recipient_not_allowlisted"</span></div>
            <div><span class="text-slate-500">&#125;</span></div>
            <div class="mt-1 text-emerald-400">aisecops_tool_block_total&#123;policy="email"&#125; 1</div>
            <div class="text-slate-600">prometheus scrape → grafana dashboard ✓</div>
            <div class="mt-1 text-slate-600">$ <span class="inline-block w-2 h-3.5 bg-emerald-400 align-middle animate-pulse"></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PROBLEM SECTION ── -->
  <section class="py-10 border-t border-black/10">
    <div class="mb-8">
      <div class="kicker mb-2">The Problem</div>
      <h2 class="font-serif text-2xl md:text-3xl font-normal text-ink">Agentic AI changed the threat model.<br class="hidden md:block"/> Most teams haven't caught up.</h2>
      <p class="mt-3 text-[#6b6460] max-w-xl">Enterprises are deploying AI agents that browse the web, read email, query databases, and execute code. The traditional security stack was not built for this.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/10">
      <div class="bg-white p-6">
        <div class="kicker mb-3">Before AISecOps</div>
        <p class="text-sm text-[#6b6460] leading-relaxed">Your AI agent calls a tool. You see a log entry. There's no policy engine — the call either succeeds or fails at the API level. You have no visibility into what the model was instructed to do, why it chose that tool, or whether the retrieved context was clean.</p>
      </div>
      <div class="bg-[#fdf4f0] p-6">
        <div class="kicker mb-3">With AISecOps</div>
        <p class="text-sm text-[#2a2a2a] leading-relaxed">Every tool call passes through a policy gateway. Retrieved context is sanitized before the model sees it. Every decision emits a structured audit event. Prometheus tracks attack velocity. The agent is governed — not just deployed.</p>
      </div>
      <div class="bg-white p-6">
        <div class="kicker mb-3">What attackers exploit</div>
        <p class="text-sm text-[#6b6460] leading-relaxed">Indirect prompt injection via RAG. Tool parameter manipulation. Memory context poisoning. Policy drift as models and prompts evolve. These are not theoretical — they have been demonstrated in production agentic systems.</p>
      </div>
      <div class="bg-[#fdf4f0] p-6">
        <div class="kicker mb-3">What this framework provides</div>
        <p class="text-sm text-[#2a2a2a] leading-relaxed">A layered control architecture: context validation, capability containment, execution sandboxing, and observability. Open-source reference implementations. Enterprise adoption guide. Threat model mapped to OWASP LLM Top 10.</p>
      </div>
    </div>
  </section>

  <!-- ── FOUR LAYERS ── -->
  <section class="py-10 border-t border-black/10">
    <div class="mb-6">
      <div class="kicker mb-2">The Framework</div>
      <h2 class="font-serif text-2xl font-normal text-ink">Four layers. No single one is enough.</h2>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="rounded-2xl border border-black/10 bg-white p-5">
        <div class="flex items-center gap-3 mb-2">
          <span class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-orange-50 text-orange-600 border border-orange-200">L1</span>
          <span class="font-medium text-ink">Context</span>
        </div>
        <p class="text-sm text-[#6b6460] leading-relaxed">Validate and sanitize all external data before it enters the model's context window. Treat every retrieved document, memory chunk, and tool response as untrusted input.</p>
      </div>
      <div class="rounded-2xl border border-black/10 bg-white p-5">
        <div class="flex items-center gap-3 mb-2">
          <span class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">L2</span>
          <span class="font-medium text-ink">Capability</span>
        </div>
        <p class="text-sm text-[#6b6460] leading-relaxed">Enforce explicit tool allowlists and parameter validation before any external call executes. The policy engine — not the model — decides what actions are permitted.</p>
      </div>
      <div class="rounded-2xl border border-black/10 bg-white p-5">
        <div class="flex items-center gap-3 mb-2">
          <span class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">L3</span>
          <span class="font-medium text-ink">Execution</span>
        </div>
        <p class="text-sm text-[#6b6460] leading-relaxed">Run high-risk tool execution in isolated environments. Define thresholds for irreversible actions that require human approval before proceeding.</p>
      </div>
      <div class="rounded-2xl border border-black/10 bg-white p-5">
        <div class="flex items-center gap-3 mb-2">
          <span class="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-600 border border-purple-200">L4</span>
          <span class="font-medium text-ink">Observability</span>
        </div>
        <p class="text-sm text-[#6b6460] leading-relaxed">Emit structured security events at every decision point. Export Prometheus metrics for real-time attack visibility. Enable forensic replay.</p>
      </div>
    </div>
  </section>

  <!-- ── RESOURCE CARDS ── -->
  <section class="py-10 border-t border-black/10">
    <div class="mb-6">
      <div class="kicker mb-2">Resources</div>
      <h2 class="font-serif text-2xl font-normal text-ink">Everything is open and free.</h2>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <a href="/definition" class="group block rounded-md border border-black/10 bg-white hover:bg-[#fdfbf8] transition p-6 no-underline">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="font-semibold text-ink group-hover:text-[#c94f1e]">What Is AISecOps?</div>
            <p class="mt-2 text-sm text-[#6b6460] leading-relaxed">The disambiguation page — how AISecOps for agentic AI differs from legacy \"AI for SecOps\" definitions.</p>
          </div>
          <span class="text-[#8a837f] group-hover:text-[#c94f1e]">→</span>
        </div>
      </a>
      <a href="/threat-model" class="group block rounded-md border border-black/10 bg-white hover:bg-[#fdfbf8] transition p-6 no-underline">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="font-semibold text-ink group-hover:text-[#c94f1e]">Agentic AI Threat Model</div>
            <p class="mt-2 text-sm text-[#6b6460] leading-relaxed">MCP, A2A, swarm systems — structured threat vectors with OWASP LLM Top 10 mapping.</p>
          </div>
          <span class="text-[#8a837f] group-hover:text-[#c94f1e]">→</span>
        </div>
      </a>
      <a href="/reference-architecture" class="group block rounded-md border border-black/10 bg-white hover:bg-[#fdfbf8] transition p-6 no-underline">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="font-semibold text-ink group-hover:text-[#c94f1e]">Reference Architecture</div>
            <p class="mt-2 text-sm text-[#6b6460] leading-relaxed">A layered blueprint: context validation, capability controls, execution boundaries, and observability.</p>
          </div>
          <span class="text-[#8a837f] group-hover:text-[#c94f1e]">→</span>
        </div>
      </a>
      <a href="/enterprise-adoption" class="group block rounded-md border border-black/10 bg-white hover:bg-[#fdfbf8] transition p-6 no-underline">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="font-semibold text-ink group-hover:text-[#c94f1e]">Enterprise Adoption</div>
            <p class="mt-2 text-sm text-[#6b6460] leading-relaxed">How to roll out AISecOps in regulated environments: governance, auditability, and operating model.</p>
          </div>
          <span class="text-[#8a837f] group-hover:text-[#c94f1e]">→</span>
        </div>
      </a>
      <a href="https://github.com/viplavfauzdar/aisecops-lab" class="group block rounded-md border border-black/10 bg-white hover:bg-[#fdfbf8] transition p-6 no-underline">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="font-semibold text-ink group-hover:text-[#c94f1e]">aisecops-lab (GitHub)</div>
            <p class="mt-2 text-sm text-[#6b6460] leading-relaxed">Reference implementation: FastAPI gateway, YAML policy engine, retrieval sanitizer, Prometheus metrics, CI gates.</p>
          </div>
          <span class="text-[#8a837f] group-hover:text-[#c94f1e]">→</span>
        </div>
      </a>
      <a href="https://github.com/viplavfauzdar/aisecops-openclaw-plugin" class="group block rounded-md border border-black/10 bg-white hover:bg-[#fdfbf8] transition p-6 no-underline">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="font-semibold text-ink group-hover:text-[#c94f1e]">OpenClaw Plugin (GitHub)</div>
            <p class="mt-2 text-sm text-[#6b6460] leading-relaxed">Enterprise tool adapter routing OpenClaw tool execution through the AISecOps policy gateway with audit and correlation IDs.</p>
          </div>
          <span class="text-[#8a837f] group-hover:text-[#c94f1e]">→</span>
        </div>
      </a>
    </div>
  </section>

  <!-- ── EMAIL CAPTURE ── -->
  <section class="py-12 border-t border-black/10">
    <div class="rounded-2xl border border-black/10 bg-ink p-8 md:p-12 text-center max-w-2xl mx-auto">
      <div class="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-3">AISecOps Bulletin</div>
      <h2 class="font-serif text-2xl md:text-3xl font-normal text-white mb-3">The field is moving fast.<br/>Stay ahead of it.</h2>
      <p class="text-slate-400 mb-8 leading-relaxed text-sm">
        Monthly: new threat patterns, framework updates, and curated signal on agentic AI security.
        Whitepaper included on signup.
      </p>
      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <input type="hidden" name="bot-field" />
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          class="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#c94f1e] transition-colors"
          style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); color: white;"
        />
        <button
          type="submit"
          class="px-6 py-3 rounded-xl bg-[#c94f1e] hover:bg-[#a83d12] text-white font-medium text-sm transition-colors whitespace-nowrap"
        >
          Subscribe →
        </button>
      </form>
      <p class="mt-4 text-xs text-slate-600 font-mono">No spam. Unsubscribe anytime.</p>
    </div>
  </section>

  <!-- ── AUTHOR STRIP ── -->
  <section class="py-8 border-t border-black/10">
    <div class="flex items-center gap-4">
      <div class="h-10 w-10 rounded-full bg-[#fdf4f0] border border-[#c94f1e]/20 flex items-center justify-center text-[#c94f1e] font-semibold text-sm flex-shrink-0">V</div>
      <div>
        <div class="text-sm font-medium text-ink">Built by Viplav Fauzdar</div>
        <div class="text-xs text-[#6b6460] mt-0.5 flex gap-3">
          <a href="https://medium.com/@viplav.fauzdar" class="hover:text-[#c94f1e] transition-colors">Medium</a>
          <span class="text-black/20">·</span>
          <a href="https://github.com/viplavfauzdar" class="hover:text-[#c94f1e] transition-colors">GitHub</a>
          <span class="text-black/20">·</span>
          <a href="https://linkedin.com/in/viplavfauzdar" class="hover:text-[#c94f1e] transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
