# GVERIFY.MD — Gaigentic Verify: what we build

**One sentence:** Software that sits outside a financial institution's finance-AI agents,
continuously re-verifies what those agents produce, and turns every check into evidence a
regulator accepts.

**The pitch line:** Your AI does the work. You're still the one who signs it. We're the
independent check between those two facts.

**Decided:** 2026-07-21/22 (strategy) · This document: 2026-07-22
**Market:** Mid-market banks and insurers, Netherlands first, then wider EU.
**Regulatory anchors:** DNB SAFEST principles · EU AI Act Art. 12 (logging) & Art. 14 (human
oversight; high-risk obligations Dec 2027) · AMLA supervision from 2026.

---

## 1. What Verify is — and is not

| Verify IS | Verify IS NOT |
| --- | --- |
| An independent verification layer over *other vendors'* (or in-house) finance-AI agents | Another finance-AI agent that does the work |
| Output-level: checks the dismissed alert, the matched reconciliation, the filed figure | Model-level governance, testing, or certification (LatticeFlow/Calvin Risk territory) |
| Continuous, in production, every output or a defensible sample | A point-in-time audit, attestation, or readiness assessment |
| Read-only against source systems and agent outputs | A system with write access to any book of record |
| Structurally separate from every system it checks | A bundled self-check inside an agent platform |

**The structural argument (never compromise it):** the system that verifies execution must not be
the system performing the execution. We run no agents that do the finance work on any workflow we
verify. This is the moat; bundled "glass box" self-validation cannot copy it without giving up
their agent business.

---

## 2. The four layers (build order within each workflow)

### Layer 1 — Connect
- Read-only connectors to **source systems**: core banking, ERP, general ledger, payment logs.
- Read-only ingestion of **agent outputs**: alert dispositions, reconciliation results, journal
  entries, draft filings — via API, database view, file drop, or event stream.
- **Vendor-agnostic adapters**: one interface, per-vendor mappings. No write access anywhere,
  no changes to the client's stack. Deployable in the client's infrastructure (their cloud or
  on-prem); EU data residency respected.

### Layer 2 — Verify (three check types, descending certainty)
1. **Deterministic re-computation.** Wherever an output is derivable from source data, derive it
   independently and compare. Re-match "matched" reconciliations; recompute filing figures from
   the GL; re-total, re-age, re-tie. Binary result, no ML judgment involved.
2. **Policy conformance.** Encode the institution's own documented policies and thresholds as
   executable rules; test every agent decision against them. An AML disposition outside policy
   is flagged regardless of what the agent's own rationale says. Explainable by construction.
3. **Challenge-model sampling.** An independent model (different provider/architecture from the
   client's agent) re-scores a risk-weighted sample of judgment decisions — with deliberate
   over-sampling of **negative decisions** ("no alert", "dismissed"), where false negatives and
   supervisory risk hide. Disagreement ⇒ escalation, never silent override.
   Plus **drift and coverage monitors**: threshold coverage, population drift, volume anomalies,
   "the agent stopped flagging category X" detection.

### Layer 3 — Evidence
- Every check writes a **tamper-evident register entry**: input refs, method, result, versions
  (of policy, rules, models), timestamps. Append-only with hash chaining.
- Entries are **mapped field-by-field to the regulatory frame**: DNB SAFEST principles, EU AI Act
  Art. 12 (automatic logging) and Art. 14 (human oversight), and the institution's own control
  framework references.
- **Evidence pack export**: a standing, versioned bundle (per workflow, per period) a compliance
  officer hands to DNB/AFM or the external auditor. Nothing has to be reconstructed after the fact
  — evidence cannot be backfilled, so it accrues from day one.

### Layer 4 — Oversee
- **Escalation queue**: flagged outputs route to named human reviewers with SLA tracking.
- **Sign-off workflow**: reviewer decisions recorded into the same register (who, when, on what
  basis) — this queue *is* the Art. 14 human oversight, productized, not a bolt-on dashboard.
- Role model: reviewer, approver, compliance admin, read-only auditor seat for the external
  auditor / supervisor visit.

---

## 3. Workflow roadmap (wedge order)

1. **AML transaction monitoring verification** — FIRST. Dutch buyer psychology peaks here
   (AML fine history, bunq ruling legalizing AI in monitoring, DNB attention). Scope: alert
   disposition re-checks, threshold/coverage checks, false-negative probes on samples,
   drift detection, evidence pack.
2. **Reconciliations & close** — independent re-matching, exception re-testing, lineage from
   every closed number to source.
3. **Regulatory filings** — every AI-generated figure recomputed from the ledger before it
   reaches the regulator, with a versioned record of what was checked and how.

Later candidates (demand-driven): sanctions screening QA, credit-decision conformance
(fair-lending style checks on agent decisions), ESG/reporting figures.

---

## 4. Who buys it and why

**The frame: the Office of the CFO.** The buyer category is the finance function as a whole —
everything the CFO's team runs: AP/AR, month-end close, reconciliation, FP&A, treasury,
regulatory reporting, and compliance. AI is entering that office workflow by workflow, usually
from different vendors, each with its own dashboard. Verify positions as **the one trust layer
across the CFO office's entire AI stack**: same three checks, same register, one evidence pack
for the whole finance function. This is the framing Auke leads with — "CFO office" is the
category; independent output verification is our wedge into it. (CardOS extends the same
discipline to the cost side of the CFO office: recompute the acquirer invoice from the contract.)

- **Economic buyer:** CFO / CRO / Head of Compliance at a mid-market NL/EU bank or insurer.
  Personal accountability is the driver — the signer's problem, not the innovation team's.
- **Budget line:** compliance/assurance (non-discretionary), not innovation (discretionary).
- **Why now (three dates):** DNB SAFEST expectations live today; AMLA supervision from 2026;
  AI Act high-risk obligations Dec 2027 — and an audit trail cannot be backfilled.
- **Pricing model:** per-verified-workflow subscription (e.g., per monitoring system, per
  reconciliation stream). Scales with their AI adoption; every new agent they deploy increases
  our value.
- **Objection killer:** "An audit trail written by the system being audited proves what the
  system *says* it did. Independence is structural, not a feature."

## 5. Go-to-market frame

- Dutch BV entity; Auke as the face (40 years Dutch BFSI); design-partner motion before sales
  motion: a small number of NL banks/insurers shape the checks against real workflows.
- Discovery question that opens doors: *"If AI does your transaction monitoring — how do you
  prove to DNB that it's working?"*
- Positioning sentence: "Your finance agents are covered by the AI Act's human-oversight
  obligation — we're that oversight, productized, with an audit trail a regulator accepts."
- Competitive posture: never bash anyone; the category distinctions (system-level vs output-level,
  self-check vs independent, attestation vs continuous) do the work. Internal defense reference:
  `/competition` route (unlinked) in the marketing site.

## 6. Non-goals (hold the line)

- We do **not** build agents that perform finance work on workflows we verify.
- We do **not** certify models or issue attestations (that's governance platforms and the Big 4 —
  potential partners, and our register can sit underneath their attestation).
- We do **not** claim to *guarantee* compliance — we produce evidence that supports the client's
  own demonstration of compliance. All public copy must keep this framing (see honesty rules in
  the site's design/claims standards).
- No US-first expansion until NL/EU wedge holds.

## 7. Engineering ground rules

- Read-only is a hard invariant; any connector requiring write access is rejected by design.
- Every claim in the UI must be backed by a register entry; no dashboard number without lineage.
- Challenge models must be provider-diverse from the client's agent stack (no shared-model
  blind spots).
- Register: append-only, hash-chained, exportable in open formats (CSV/JSON + signed PDF pack).
- Deployment: client cloud or on-prem; hosted only as an explicit client choice; EU data residency.
- The product itself must pass the standard it sells: our own pipeline logs, versions, and
  evidences every verification run (we are auditable about auditing).
