const groups = [
  {
    label: "NARRATIVE NEIGHBORS: CLOSEST POSITIONING",
    note: "These own language close to ours. Respect them in conversation; the difference is what the product actually verifies.",
    players: [
      {
        name: "MindBridge",
        what:
          "Long-established financial risk analytics. Positions as \"autonomous financial oversight for the agentic era\", the independent oversight layer for AI-driven finance. Strong enterprise base; analyzes 100% of transactions across ERP/accounting systems for anomalies and control breakdowns.",
        differ:
          "Their verification object is transaction data in the ERP. Ours is the output of a finance-AI agent: the dismissed alert, the matched reconciliation, the filed figure, each recomputed and policy-checked at output level. As of mid-2026, no public technical evidence they verify third-party AI-agent outputs specifically; their \"guardian agents\" language is positioning ahead of shipped capability. They are enterprise-focused; we serve the mid-market NL/EU institution.",
      },
      {
        name: "BlackLine",
        what:
          "Financial close incumbent. April 2026: \"Agentic Financial Operations\" with a glass-box architecture so finance leaders can validate AI outputs. June 2026: Finance Control Console (preview) with stated oversight of BlackLine-native, partner, customer-developed, and third-party AI agents on open standards.",
        differ:
          "The strongest convergence threat, and a credible company. Say so. Their announced capabilities are governance and observability: audit trails, explainable decision records, human-in-the-loop monitoring. That answers \"what did the agent do?\" Ours answers \"was the agent right?\" through independent re-computation and policy conformance of the outputs themselves. Their validation layer grew out of their own agent platform; our independence is structural: we run no agents that do the finance work on the workflows we verify.",
      },
    ],
  },
  {
    label: "MODEL GOVERNANCE & TESTING: CONVERGING FROM SYSTEM LEVEL",
    note: "They validate the AI system; we verify the AI's outputs. Different layer, often complementary.",
    players: [
      {
        name: "LatticeFlow AI",
        what:
          "Zurich. July 2026 unified platform: continuous monitoring that re-evaluates AI systems as models, data, and threats change. AI Atlas maps 40+ frameworks (EU AI Act, FINMA, NIST, ISO 42001) into technical evaluations; FINMA-aligned agentic-AI blueprint with Unique AI (used by major private banks).",
        differ:
          "System-level assurance: is the model reliable, safe, compliant as a system. No verification of business-output correctness: whether a specific reconciliation, filing figure, or AML disposition is right. A bank could sensibly run both: LatticeFlow to evidence the system, Verify to evidence the outputs.",
      },
      {
        name: "QuantPi",
        what:
          "Saarbrücken. Horizontal, model-agnostic AI testing (\"the validation layer for enterprise AI\"): models, agents and systems validated before release, mapped to 100+ standards. EU-funded work on continuous monitoring of generative AI systems.",
        differ:
          "Pre-release quality gate for any AI in any industry. We are post-deployment, in-production, finance-specific, output-level. Their check happens before go-live; ours happens on every output after it.",
      },
      {
        name: "Calvin Risk",
        what:
          "ETH Zurich spinoff, ~$4M seed. AI GRC for regulated enterprises: AI inventory, pre-deployment quality testing, EU AI Act compliance and evidence management. Exploratory engagements with major insurers and banks (Aviva, Lloyds named in their materials).",
        differ:
          "The name a European insurer is most likely to raise. Their engagements are model-risk assessment and governance transformation: adoption criteria, portfolio-level safeguarding. Not runtime verification of individual finance outputs, no NL/mid-market focus, no DNB SAFEST positioning. Same honest answer as for LatticeFlow: governance layer, not output verification.",
      },
      {
        name: "Validaitor / Modulos",
        what:
          "Karlsruhe / Zurich. Horizontal trustworthy-AI platforms: red teaming, AI inventory, compliance automation (EU AI Act, ISO 42001, NIST), risk registers, audit-trail documentation. Modulos (CHF 8.7M) added metric-based runtime tests in 2026.",
        differ:
          "Compliance documentation and testing workflow for AI systems generally. Finance appears as one vertical among many. No finance-output verification, no AML/reconciliation/filing domain depth.",
      },
    ],
  },
  {
    label: "AGENTS THAT DO THE WORK, WITH SELF-CHECK FEATURES",
    note: "Vendors whose AI performs the finance work and also monitors itself. Never disparage the products; the structural point makes itself.",
    players: [
      {
        name: "Safebooks AI",
        what:
          "$15M seed (Dec 2025). Agentic finance automation: AI agents that close books, reconcile systems, validate transactions for enterprise finance teams, with continuous controls monitoring across their own work.",
        differ:
          "Capable product on the doing side. The outputs they check are their own agents' work. An audit trail written by the system being audited evidences what that system says it did. That is the same reason external audit exists. We verify anyone's agents, including agents like theirs, and we don't compete for the workflow itself.",
      },
      {
        name: "Workiva",
        what:
          "GRC incumbent. March 2026: AI-powered Controls, Audit and Risk Management with continuous real-time controls monitoring: AI performing and automating assurance work.",
        differ:
          "Their continuous monitoring object is internal controls; the AI is the auditor doing the work faster. We are not automating assurance work. We are independently checking what finance AI produced, and evidencing that check.",
      },
      {
        name: "Definite (YC S2026)",
        what:
          "Three-person US startup: AI agents that generate regulatory reports for banks, with an internal verification engine that recomputes every line from ledger records before filing.",
        differ:
          "Validation that output-level recomputation is the right idea, built in as a self-check on their own generator, for US filings. Ours is a third-party layer over any vendor's agents, for EU/NL supervisory context.",
      },
    ],
  },
  {
    label: "SERVICES, ADJACENT & REGIONAL",
    note: "Different mechanisms for the same trust problem, or nearby geographies.",
    players: [
      {
        name: "Big 4 AI assurance (KPMG et al.)",
        what:
          "AI Trust/assurance services mapped to proprietary frameworks; SOC-style attestations, EU AI Act / ISO 42001 readiness. Predominantly point-in-time professional-services engagements.",
        differ:
          "Consulting hours produce a report about a moment; software produces evidence about every output, continuously. Not mutually exclusive: an attestation can sit on top of our register, and the Big 4 are potential channel partners as much as competitors.",
      },
      {
        name: "Deeploy (NL)",
        what:
          "Utrecht/Rotterdam, ~€8.5M Series A. AI oversight platform: real-time model monitoring, explainability, decision traceability, EU AI Act evidence, targeting regulated industries including financial services.",
        differ:
          "The closest NL-native player and the one to watch at home. Public positioning is model-behavior level (drift, explainability, traceability), not correctness of finance outputs against source data and policy. Their scope in FS accounts remains partly unverified. Treat respectfully and stay current.",
      },
      {
        name: "Aveni (UK) / Ruleguard (UK)",
        what:
          "Aveni: Agent Assure, conduct-risk oversight of consumer-facing AI agents in FS. Ruleguard: continuous regulatory assurance platform (July 2026), moving compliance from periodic to real-time.",
        differ:
          "Same spirit (ongoing assurance rather than point-in-time), different objects: conversations and compliance obligations respectively, not finance-output correctness. UK-focused today; both could cross the channel.",
      },
      {
        name: "AIUC",
        what:
          "US, $15M seed. Insurance plus standards plus independent audits for AI agents, transferring AI-agent risk via underwriting.",
        differ:
          "Insurance prices residual risk; verification reduces it and evidences it. An insurer of AI agents needs exactly the evidence layer we produce.",
      },
    ],
  },
];

const objections = [
  {
    q: "\"Our AI vendor already gives us audit trails.\"",
    a: "An audit trail written by the system being audited proves what that system says it did. Independence is structural, not a feature. Ask your external auditor whether they would accept management's self-audit.",
  },
  {
    q: "\"BlackLine / MindBridge already say they're the independent oversight layer.\"",
    a: "Both are strong companies moving toward this space. Read their announcements closely and ask what is verified. Governance and observability answer what the agent did. We answer whether the output was right: recomputed from source, tested against your policy, challenged where judgment is involved. And neither positions on DNB SAFEST or serves the mid-market EU institution.",
  },
  {
    q: "\"We already have an AI governance platform (LatticeFlow / Calvin Risk type).\"",
    a: "Keep it: that evidences the system. Supervisors also ask about outcomes: how do you know this quarter's dismissed alerts were dismissed correctly? That is output-level evidence, which system-level governance does not produce. The two layers stack.",
  },
  {
    q: "\"Why not wait for our auditor to cover this?\"",
    a: "An annual attestation is a photograph; monitoring runs daily. Evidence cannot be backfilled: when the AI Act's high-risk obligations apply in December 2027, the register needs to already exist.",
  },
  {
    q: "\"You're a seed-stage company. Why trust you with this?\"",
    a: "We're read-only by design, deploy in your infrastructure, and every claim we make is inspectable in the register. The design-partner model means your compliance team shapes the checks, and the independence argument doesn't depend on our size.",
  },
];

const Competition = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero: paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-flag">Internal · not linked from navigation</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">research verified 2026-07-22 · short shelf life</span>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              The landscape, <span className="text-ledger">honestly</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Who else works on trust in finance-AI, what they actually sell today, and where we sit
              differently. For internal use when the question comes up, never to disparage anyone.
              Every claim here traces to verified public sources; unverified items are marked.
            </p>
            <div className="mt-10 pt-6 border-t border-rule">
              <p className="font-mono text-xs text-ink-faint max-w-3xl leading-relaxed">
                THE ONE-SENTENCE POSITION: no player we verified combines (1) output-level
                correctness verification, (2) structural independence from the executing agent, and
                (3) mid-market NL/EU focus with DNB SAFEST / AI Act Art. 12+14 evidence. Adjacent
                positioning is crowding fast: the window is speed, not secrecy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groups: dark index rows */}
      {groups.map((group) => (
        <section key={group.label} className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
          <div className="eyebrow text-paper/45 mb-2">{group.label}</div>
          <p className="font-mono text-xs text-paper/35 mb-8 max-w-2xl leading-relaxed">{group.note}</p>
          <div className="border-t border-paper/10">
            {group.players.map((player) => (
              <div
                key={player.name}
                className="grid lg:grid-cols-[240px_1fr_1fr] gap-4 lg:gap-10 py-8 border-b border-paper/10"
              >
                <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                  {player.name}
                </h3>
                <div>
                  <div className="eyebrow text-paper/40 mb-2.5">What they sell</div>
                  <p className="text-paper/60 leading-relaxed text-[15px]">{player.what}</p>
                </div>
                <div>
                  <div className="eyebrow text-tick mb-2.5">Where we differ</div>
                  <p className="text-paper/60 leading-relaxed text-[15px]">{player.differ}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Objection handling: paper */}
      <section className="px-3 md:px-5 py-12 md:py-16">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="eyebrow text-ink-faint mb-10">If they say, you say</div>
            <div className="space-y-0 border-t border-rule">
              {objections.map((o) => (
                <div key={o.q} className="grid lg:grid-cols-2 gap-4 lg:gap-12 py-7 border-b border-rule">
                  <p className="font-sans font-bold text-lg text-ink leading-snug">{o.q}</p>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{o.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 font-mono text-xs text-ink-faint leading-relaxed max-w-3xl">
              CAVEATS: MindBridge/BlackLine capability statements are positioning from their own
              materials. Verify current product before quoting. Deeploy's FS scope, Claire
              (letsaskclaire.com), and Big-4 NL productization were not fully verified. This
              landscape repositioned three times in the six months before the research date.
              Re-check before any high-stakes meeting.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competition;
