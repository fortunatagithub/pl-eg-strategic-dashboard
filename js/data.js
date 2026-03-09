/* =============================================================================
   DATA.JS — All FA2 content: mission, roadmap, success, workstreams, diagnosis
   Source: PL R&D FA2 Definitions doc + E&G Field Strategy v1.0 (Feb 2026)
   ============================================================================= */

var FA2_DATA = {

  meta: {
    title: "Economies & Governance",
    eyebrow: "Focus Area 2 · Protocol Labs R&D",
    mission: "To accelerate the emergence of crypto-enabled economic and governance infrastructure that is open, verifiable, and interoperable — enabling states and multilateral institutions to deploy programmable public services at scale.",
    reframe: "This is not about crypto adoption. It is about transforming programmable infrastructure into state capacity technology — the rails on which the next generation of fiscal, social, and climate policy will run."
  },

  // ── Opportunity Spaces ──────────────────────────────────────────────────────
  opportunitySpaces: [
    {
      id: "sovereign-dpi",
      name: "Sovereign DPI",
      description: "Open-standard digital public infrastructure for state-level deployment — fiscal rails, identity, and service delivery that governments own and operate rather than license.",
      currentState: "Fragmented pilots, proprietary vendor lock-in, no shared reference stack. Most DPI initiatives fail to achieve sovereign operability or replication.",
      relatedAreas: ["Programmable Treasury", "Procurement Verifiability", "Sovereign DPI Reference Stack"],
      color: "blue"
    },
    {
      id: "ai-crypto-pgf",
      name: "AI & Crypto Public Goods Funding",
      description: "New capital mechanisms that direct AI-generated value and crypto-native yields toward open infrastructure, research, and public goods at scale.",
      currentState: "AI4PG as an emerging concept; no benchmarks or established mechanisms. Quadratic funding experiments remain sub-scale and disconnected from sovereign contexts.",
      relatedAreas: ["AI4PG Research Coalition", "Capital Stack Mission", "Challenge Prize Design"],
      color: "purple"
    },
    {
      id: "crypto-governance",
      name: "Crypto-Native Governance",
      description: "Governance mechanisms born in crypto communities — DAOs, on-chain voting, programmable compliance — migrating into institutional and sovereign contexts.",
      currentState: "Largely confined to crypto ecosystems. Regulatory hostility, trust deficits, and mechanism immaturity prevent institutional adoption.",
      relatedAreas: ["Programmable Climate-Aid Facility", "Mechanism Scalability", "Governance Research"],
      color: "green"
    },
    {
      id: "depin-climate",
      name: "Decentralized Climate Infrastructure",
      description: "DePIN networks providing planetary-scale environmental monitoring, carbon accounting, and climate finance coordination as open infrastructure.",
      currentState: "Sub-$100M market. No billion-dollar DePIN climate business exists. MRV standards fragmented; multilateral climate finance disconnected from crypto rails.",
      relatedAreas: ["DePIN Summit", "Climate-Aid Facility", "Ma Earth Partnership"],
      color: "amber"
    }
  ],

  // ── PL's Unique Role — 5 Levers ─────────────────────────────────────────────
  plRole: [
    {
      lever: "Shared Artifacts",
      description: "Reference stacks, open specs, and technical standards that any actor can adopt and build on — reducing coordination costs across sovereign deployments."
    },
    {
      lever: "Alliance Architecture",
      description: "Structured coalitions of sovereigns, multilaterals, and researchers that share risk and co-invest in mission-critical infrastructure."
    },
    {
      lever: "Institutional Rooms",
      description: "Decision-grade convenings and fellowships that place FA2 at the table where consequential policy and capital decisions are made."
    },
    {
      lever: "Capital Orchestration",
      description: "Staged grant instruments (seed → challenge → pilot → blended) and co-funding partnerships that achieve 1.5–2× leverage per FA2 dollar."
    },
    {
      lever: "Narrative & Field Identity",
      description: "Establishing 'crypto-enabled sovereign DPI' as a recognized category — with benchmarks, language, and champions — before incumbents define it otherwise."
    }
  ],

  // ── ARIA-Style Missions ──────────────────────────────────────────────────────
  missions: [
    {
      id: "programmable-treasury",
      name: "Programmable Treasury",
      description: "Embed programmable fiscal rails into at least one sovereign treasury system — enabling auditable, conditional, and automated disbursement at the nation-state scale.",
      opportunitySpace: "Sovereign DPI",
      phase: "Year 1–3"
    },
    {
      id: "privacy-eligibility",
      name: "Privacy-Preserving Eligibility",
      description: "Deploy zero-knowledge proof systems for social program eligibility verification that preserve individual privacy while enabling state-level auditability.",
      opportunitySpace: "Sovereign DPI",
      phase: "Year 2–4"
    },
    {
      id: "procurement-verifiability",
      name: "Procurement Verifiability",
      description: "Create an open verifiable procurement layer — on-chain audit trails for public contracting that reduce corruption risk without requiring institutional trust.",
      opportunitySpace: "Sovereign DPI",
      phase: "Year 2–4"
    },
    {
      id: "climate-aid-facility",
      name: "Programmable Climate-Aid Facility",
      description: "Design and pilot a crypto-native climate finance mechanism that links MRV data to conditional disbursement — enabling results-based climate aid at scale.",
      opportunitySpace: "Decentralized Climate Infrastructure",
      phase: "Year 2–4"
    },
    {
      id: "sovereign-dpi-stack",
      name: "Sovereign DPI Reference Stack",
      description: "Publish an open, modular reference architecture for sovereign DPI that any government or multilateral can adopt, fork, and operate without proprietary dependencies.",
      opportunitySpace: "Sovereign DPI",
      phase: "Year 1"
    },
    {
      id: "capital-stack",
      name: "Capital Stack for Open Infrastructure",
      description: "Establish a recognized capital vertical — combining AI4PG mechanisms, blended finance instruments, and crypto-native yields — dedicated to open public infrastructure.",
      opportunitySpace: "AI & Crypto Public Goods Funding",
      phase: "Year 3–5"
    }
  ],

  // ── Strategic Roadmap: 3-Phase Arc ──────────────────────────────────────────
  roadmap: [
    {
      year: 1,
      label: "Foundation",
      subtitle: "Define the field, build sovereign relationships, launch flagship programs",
      milestones: [
        "Define and publish all 6 ARIA-style missions with clear success criteria",
        "Secure 2 sovereign pilot partner commitments for Programmable Treasury mission",
        "Publish Sovereign DPI v0 Reference Stack (open, forkable, vendor-neutral)",
        "Establish Sovereign Program Board with ministerial-level participants",
        "Launch flagship Fellowship cohort (15–20 fellows across 3 opportunity spaces)",
        "Complete full field map: active actors, funding flows, gaps, and open problems",
        "Host September UN event — UNGA-linked convening with sovereign ministers"
      ],
      institutionalLens: {
        icon: "💡",
        text: "<strong>How others built in Year 1:</strong> BIS Innovation Hub validated through learn-by-building with sovereign partners before publishing. MITRE established trusted advisor status by producing neutral technical artifacts, not advocacy. Both prioritized credibility infrastructure over scale."
      }
    },
    {
      year: 3,
      label: "Traction",
      subtitle: "Embed in sovereign systems, formalize multilateral relationships, scale mechanisms",
      milestones: [
        "At least one mission embedded in a live sovereign fiscal or governance system",
        "Repeatable deployment process proven across 2+ sovereign contexts",
        "AI4PG benchmark published and adopted by at least one major funder",
        "Multilateral engagement (World Bank, UN agencies) formalized around DPI standards",
        "Fellowship alumni network active in sovereign policy roles",
        "Co-funding partnerships delivering 1.5–2× leverage per FA2 dollar"
      ],
      institutionalLens: {
        icon: "💡",
        text: "<strong>How others reached traction:</strong> Rockefeller Foundation's field-creation methodology: fund the proof, then fund the spread. They documented pilots as replicable models before seeking multilateral adoption. This created demand pull rather than push."
      }
    },
    {
      year: 5,
      label: "Irreversible Shifts",
      subtitle: "Multiple replications, recognized capital vertical, constitutional-level influence",
      milestones: [
        "Multiple sovereign replications of DPI Reference Stack without FA2 facilitation",
        "Recognized capital vertical: AI4PG mechanisms directing $100M+ annually",
        "Multilateral codification of crypto-enabled DPI standards (World Bank, OECD, or UN)",
        "Crypto-native governance appearing in constitutional reform processes in 1+ jurisdiction",
        "DePIN climate infrastructure at measurable planetary scale",
        "FA2 field identity (language, benchmarks, champions) self-sustaining beyond PL"
      ],
      institutionalLens: {
        icon: "💡",
        text: "<strong>How others achieved irreversibility:</strong> IAS (Institute for Advanced Study) created protected sanctuary for long-horizon work — insulated from short-term pressures, which enabled it to produce irreplaceable field artifacts. Long Now Foundation's 10,000-year framing changed how funders thought about time horizons. Both made the field's identity durable."
      }
    }
  ],

  // ── 4 Inflection Hypotheses ──────────────────────────────────────────────────
  inflections: [
    {
      id: "treasury-embed",
      name: "Treasury Embed",
      transition: "A sovereign government embeds programmable rails into live fiscal plumbing — moving from pilot to operational infrastructure that processes real disbursements.",
      signals: [
        "A finance ministry issues public tender referencing open DPI standards",
        "Programmable disbursement processes $1M+ in real sovereign transactions",
        "Central bank or treasury department assigns permanent staff to DPI operations"
      ],
      irreversibleShift: "Once sovereign fiscal plumbing runs on open rails, the cost of reverting to proprietary systems becomes prohibitive. Other sovereigns begin referencing it as a model."
    },
    {
      id: "multilateral-canonization",
      name: "Multilateral Canonization",
      transition: "A major development bank or multilateral formally adopts guidelines referencing crypto-enabled DPI standards — legitimizing the field for sovereign borrowers.",
      signals: [
        "World Bank or regional DFI publishes DPI guidance citing open crypto standards",
        "Multilateral loan conditions reference verifiable procurement or programmable aid",
        "UN agency incorporates DPI reference stack into technical assistance programs"
      ],
      irreversibleShift: "Multilateral endorsement unlocks sovereign borrowing conditions and development finance tied to open DPI standards — creating institutional demand that persists beyond any single funder."
    },
    {
      id: "crypto-governance-necessity",
      name: "Crypto Governance as Institutional Necessity",
      transition: "Governance mechanisms that originated in crypto communities are adopted by institutions beyond crypto — not as experiments but as operational requirements.",
      signals: [
        "A non-crypto institution (regulator, municipality, NGO) deploys on-chain governance in production",
        "Academic or policy literature begins treating crypto governance as a governance science subfield",
        "Corporate or sovereign charter references DAO-style accountability mechanisms"
      ],
      irreversibleShift: "When institutional actors adopt crypto governance independently, the field's dependency on crypto evangelism ends. It becomes a legitimate branch of institutional design."
    },
    {
      id: "depin-climate-scale",
      name: "DePIN Climate at Planetary Scale",
      transition: "A billion-dollar DePIN climate business exists, with open MRV data feeding climate finance mechanisms at a scale visible in international reporting.",
      signals: [
        "A DePIN climate network reports 100M+ verified environmental data points used in official MRV",
        "Climate finance instrument ($50M+) uses DePIN data as its primary evidence base",
        "IPCC or UNFCCC references DePIN data in official reporting frameworks"
      ],
      irreversibleShift: "Once DePIN data enters official climate accounting, the infrastructure becomes essential. Nations and funders cannot walk back from infrastructure that underpins their climate commitments."
    }
  ],

  // ── Future State: 5–10 Year Vision ──────────────────────────────────────────
  futureState: [
    {
      category: "Capabilities at Scale",
      conditions: [
        "Open, verifiable fiscal rails operational in 5+ sovereign jurisdictions",
        "Privacy-preserving eligibility systems processing 1M+ citizens across 3+ programs",
        "Modular DPI Reference Stack forked and deployed by non-FA2-connected actors",
        "AI4PG capital mechanisms directing $100M+ annually to open infrastructure"
      ]
    },
    {
      category: "Institutional Behaviors Shifted",
      conditions: [
        "Ministries of finance treat open DPI standards as default, not exception",
        "Development banks include programmable disbursement in standard loan conditions",
        "Procurement agencies default to verifiable on-chain audit trails",
        "Central banks actively develop interoperability with crypto-native infrastructure"
      ]
    },
    {
      category: "Infrastructure Standardized",
      conditions: [
        "Sovereign DPI Reference Stack recognized as a legitimate technical standard",
        "Interoperability protocols between national DPI implementations established",
        "Open MRV data standards for DePIN climate infrastructure adopted by UNFCCC processes",
        "Common API layer for cross-jurisdictional programmable fiscal flows"
      ]
    },
    {
      category: "Norms Changed",
      conditions: [
        "'Crypto-enabled sovereign DPI' recognized as a coherent policy category",
        "Open-source, vendor-neutral DPI treated as a governance good, not a technical choice",
        "Privacy-by-design embedded in DPI procurement requirements as a legal baseline",
        "Crypto governance mechanisms included in standard public administration curricula"
      ]
    },
    {
      category: "Capital Markets Formed",
      conditions: [
        "Dedicated capital vertical for open public infrastructure (not niche within crypto)",
        "Blended finance instruments routinely combining DeFi yields with development finance",
        "AI4PG mechanisms recognized as a legitimate asset class by institutional allocators",
        "Co-funding coalitions achieving 3× leverage on public infrastructure at standard deal sizes"
      ]
    },
    {
      category: "Sovereign & Multilateral Adoption",
      conditions: [
        "World Bank or OECD formal endorsement of open DPI standards in development finance",
        "UN agency operational deployment of programmable aid using verifiable rails",
        "Constitutional or legislative reference to crypto-native governance in 2+ jurisdictions",
        "G20 or multilateral forum includes open DPI as agenda item — not as experiment"
      ]
    }
  ],

  // ── Evidence Engine — Quarterly Traction Metrics ─────────────────────────────
  evidenceEngine: [
    {
      metric: "Real Users on Open Infrastructure",
      target: "1,000+ real users on open sovereign infrastructure for 30+ days in at least 1 jurisdiction"
    },
    {
      metric: "Sovereign Partner Depth",
      target: "At least 2 sovereign partners at Tier 2+ (beyond MOU — active technical deployment)"
    },
    {
      metric: "Field Map Coverage",
      target: "Full actor map for all 4 opportunity spaces: researchers, funders, policymakers, builders"
    },
    {
      metric: "Capital Leverage Ratio",
      target: "FA2 grants generating 1.5–2× in co-funding from partners per dollar deployed"
    },
    {
      metric: "Fellowship Placement Quality",
      target: "60%+ of fellows in active sovereign or multilateral roles within 12 months of cohort close"
    },
    {
      metric: "Convening Decision Density",
      target: "At least 1 documented policy or funding decision per major convening traceable to FA2 room"
    },
    {
      metric: "Reference Stack Adoption",
      target: "Sovereign DPI v0 Reference Stack forked or cited by at least 3 independent actors"
    },
    {
      metric: "AI4PG Benchmark",
      target: "Published AI4PG benchmark adopted by at least 1 institutional funder as an evaluation criterion"
    }
  ],

  // ── Workstream Activities ────────────────────────────────────────────────────
  activities: [
    {
      id: "fellowship",
      name: "Fellowship Program",
      description: "Flagship program. 15–20 fellows drawn from three talent pools: sovereign ministers and senior government officials, policy professors and researchers, and crypto executives with institutional ambitions. Structured residency that builds relationships, shared language, and mutual credibility across these worlds. UNGA-linked access is a core benefit.",
      goodLooks: "Fellows placed in active sovereign or multilateral roles. Alumni network proactively surfaces opportunities. Each cohort produces at least one durable field artifact (policy brief, pilot design, or standard proposal).",
      status: "Active",
      statusColor: "green",
      institutionalLens: "IAS (Institute for Advanced Study) residency model — protected time, cross-disciplinary peers, no deliverable pressure — produced outsized field impact. Bellagio Center added the 'high-stakes convening' layer. FA2 Fellowship combines both: residency depth + institutional access.",
      emoji: "🎓"
    },
    {
      id: "convenings",
      name: "Convenings & Dinners",
      description: "Decision-grade rooms, not conferences. Includes Funding the Commons (3× per year, 957+ total attendees) and smaller curated dinners designed for consequential conversation. The goal is to put the right 12–20 people in a room where a decision can actually be made — not to create awareness.",
      goodLooks: "At least 1 documented policy or funding decision per major convening traceable to FA2 facilitation. Dinner participants describe the room as 'the place where X happened' — not 'an event I attended.'",
      status: "Active",
      statusColor: "green",
      institutionalLens: "HELENA curated merit convening model: radical curation by consequence, not credential. Aspen Institute's off-the-record dialogue format. FA2 combines both: curated for consequence, structured for candor.",
      emoji: "🤝"
    },
    {
      id: "grants",
      name: "Grants & Prizes",
      description: "4-stage capital stack designed to move ideas through proof-of-concept to institutional embedding: Seed grants ($5–10K, 30-day sprints) → Challenge Prizes ($10–50K, open competition) → Pilot Funding ($50–150K, sovereign deployment) → Blended Finance ($150K+, co-funded with multilaterals). ARIA-style design includes kill switches and explicit stage-gate criteria.",
      goodLooks: "Each stage produces clear go/no-go signal. Capital leverage ratio ≥1.5× per FA2 dollar. At least one Pilot Funding recipient achieves Tier 2 sovereign partner status within grant period.",
      status: "Active",
      statusColor: "green",
      institutionalLens: "Rockefeller Foundation field-creation methodology: fund the proof, document it as a replicable model, then fund the spread. ARIA stage-gating with kill switches prevents portfolio zombies.",
      emoji: "💰"
    },
    {
      id: "advisory",
      name: "Advisory & Partnerships",
      description: "Quarterly structured engagement with a standing advisory panel of sovereign officials, multilateral representatives, and field experts. Parallel track of co-funding partnerships targeting 1.5–2× leverage — where FA2 identifies and structures co-investments with EF, Octant, Ma Earth, and Edge City on aligned priorities.",
      goodLooks: "Advisory panel provides at least one substantive redirect per quarter (not just validation). Co-funding partnerships close on time and achieve target leverage ratio. Partners independently initiate follow-on conversations.",
      status: "Active",
      statusColor: "green",
      institutionalLens: "RAND Corporation's model of 'policy analysis without advocacy' — credibility through neutrality, not salesmanship. Advisory relationships built on FA2 producing useful artifacts, not asking for endorsements.",
      emoji: "🔗"
    },
    {
      id: "cofunded",
      name: "Co-funded Initiatives",
      description: "Active co-investment relationships: Ethereum Foundation (EF) on public goods infrastructure, Octant on capital mechanism design, Ma Earth on DePIN climate MRV, Edge City on crypto-native governance. AI4PG research coalition as a multi-funder research vehicle. DePIN Summit as an annual field convening.",
      goodLooks: "Each co-funded initiative has a named lead, clear deliverable, and explicit contribution accounting. AI4PG coalition produces at least one benchmark or dataset in Year 1. DePIN Summit generates measurable follow-on partnerships.",
      status: "Active",
      statusColor: "green",
      institutionalLens: "Santa Fe Institute cross-disciplinary convening model: bring field-definers together around shared research problems, not shared agendas. Co-funding creates shared skin-in-the-game and distributes field-building costs.",
      emoji: "🌐"
    },
    {
      id: "un-event",
      name: "September UN Event",
      description: "UNGA-linked convening bringing together sovereign ministers, senior multilateral officials, policy researchers, and crypto executives during the UN General Assembly high-level week in New York. The highest-stakes FA2 convening of Year 1 — designed as a decision room, not a showcase. Direct link to Fellowship alumni and sovereign partner pipeline.",
      goodLooks: "At least 3 sovereign ministers or Deputy Ministers present. At least 1 substantive policy or pilot commitment made in the room. Clear path from the convening to at least 1 Tier 2 sovereign partner relationship.",
      status: "Upcoming",
      statusColor: "amber",
      institutionalLens: "UNGA week is the highest-density sovereign decision-maker gathering globally. FA2's differentiation: convene for consequence, not visibility. Model after the small off-the-record dinners that produce more than the plenary sessions.",
      emoji: "🇺🇳"
    }
  ],

  // ── Field Diagnosis — 7 Systemic Constraints ─────────────────────────────────
  constraints: [
    {
      id: "pilot-production",
      name: "Pilot-to-Production Gap",
      types: ["Structural", "Institutional"],
      suppression: "Crypto-enabled DPI initiatives proliferate as pilots but stall before operational deployment. Sovereign procurement cycles, risk aversion, and absence of replication playbooks prevent successful pilots from scaling — leaving a graveyard of proofs-of-concept that never became infrastructure.",
      resolution: "Sovereign DPI Reference Stack (replicable, forkable, vendor-neutral). Stage-gated funding requiring Tier 2 deployment evidence. Sovereign Program Board as continuity mechanism across election cycles.",
      status: "Being addressed",
      statusColor: "amber",
      institutionalLens: "MITRE's model of producing neutral technical artifacts that any government could adopt reduced the procurement risk of the first mover. FA2's Reference Stack plays the same role.",
      emoji: "🚧"
    },
    {
      id: "trust-deficit",
      name: "Institutional Trust Deficit",
      types: ["Reputational", "Political"],
      suppression: "Crypto's association with speculation, fraud, and regulatory arbitrage makes sovereign and multilateral actors reluctant to engage publicly. Decision-makers who are privately interested cannot afford political exposure without institutional cover.",
      resolution: "Fellowship as credibility bridge. Convenings under Chatham House rules. RAND-style neutral artifacts. Co-funding with established multilaterals (World Bank, UN agencies) as legitimacy anchors.",
      status: "Being addressed",
      statusColor: "amber",
      institutionalLens: "RAND established credibility through 'policy analysis without advocacy' — being seen as a source of truth, not a lobbying actor. FA2 must adopt the same posture: produce useful artifacts without asking for endorsements.",
      emoji: "🛡️"
    },
    {
      id: "mechanism-scalability",
      name: "Mechanism Scalability & Attack Surface",
      types: ["Technical", "Security"],
      suppression: "Crypto governance mechanisms (on-chain voting, programmable disbursement, DAO coordination) perform differently at scale — introducing attack surfaces, Sybil risks, and coordination failures not visible in small deployments. Sovereign-scale deployment exposes vulnerabilities that research-scale pilots don't.",
      resolution: "Formal mechanism design research (AI4PG coalition). Stage-gated testing with explicit attack surface documentation. Privacy-preserving eligibility mission as test environment before sovereign-scale deployment.",
      status: "Active constraint",
      statusColor: "red",
      institutionalLens: "BIS Innovation Hub's approach: prototype at small scale with explicit documentation of failure modes before recommending to central banks. The 'learn-by-building' model produces credible safety evidence.",
      emoji: "⚙️"
    },
    {
      id: "regulatory-moats",
      name: "Regulatory Moats & Centralized Incumbency",
      types: ["Regulatory", "Competitive"],
      suppression: "Incumbent vendors (Palantir, Oracle, SAP) have embedded regulatory relationships, procurement frameworks, and technical lock-in that make open DPI alternatives difficult to evaluate fairly. Regulatory frameworks in most jurisdictions were written for centralized, proprietary systems.",
      resolution: "Procurement Verifiability mission — creating open audit standards that expose incumbent opacity. Alliance Architecture — building sovereign coalitions that can demand open standards in procurement. Narrative work reframing open DPI as a governance choice, not a technical preference.",
      status: "Active constraint",
      statusColor: "red",
      institutionalLens: "OSI (Open Source Initiative) reframed proprietary software from 'the default' to 'a choice with costs' — by producing better artifacts and documenting the comparative advantages of openness. FA2 needs the same narrative move for DPI.",
      emoji: "🔒"
    },
    {
      id: "political-risk",
      name: "Political Risk Asymmetry",
      types: ["Political", "Governance"],
      suppression: "The political upside of deploying experimental DPI accrues slowly (over years, across election cycles) while the downside risk (public failure, security breach, opposition attack) is immediate and asymmetric. Rational political actors underinvest in infrastructure that they won't be credited for.",
      resolution: "Sovereign Program Board spans election cycles. Fellowship alumni in positions creates internalized champions. Multilateral co-funding distributes political risk. Reference Stack allows 'learning from another country's pilot' — reducing first-mover cost.",
      status: "Active constraint",
      statusColor: "red",
      institutionalLens: "Long Now Foundation's long-horizon framing helped funders and institutions think past election cycles. Rockefeller's approach: pilot in jurisdictions with political insulation (city governments, subnational entities) before national deployment.",
      emoji: "⚖️"
    },
    {
      id: "talent-fragmentation",
      name: "Talent & Capital Fragmentation",
      types: ["Ecosystem", "Structural"],
      suppression: "The talent needed to build crypto-enabled DPI — sovereign policy experts, cryptography researchers, governance mechanism designers, and DPI engineers — exists in completely separate communities with no shared language, institutions, or funding sources. Capital is similarly fragmented between crypto-native and development finance silos.",
      resolution: "Fellowship as talent bridge (sovereign + researcher + crypto executive in the same room). AI4PG coalition as shared research vehicle. Co-funding partnerships as capital bridge. Field map as infrastructure for connection.",
      status: "Being addressed",
      statusColor: "amber",
      institutionalLens: "Santa Fe Institute solved talent fragmentation in complexity science by creating a residential institution that was nobody's home discipline — forcing cross-disciplinary synthesis. FA2's Fellowship plays the same role for E&G.",
      emoji: "🧩"
    },
    {
      id: "compliance-ambiguity",
      name: "Compliance Ambiguity",
      types: ["Regulatory", "Legal"],
      suppression: "Absence of clear regulatory frameworks for crypto-enabled infrastructure creates legal risk for sovereign actors who would otherwise deploy. The 'regulatory moat' problem (incumbents benefit from ambiguity) combines with genuine uncertainty about which jurisdictions are safe first-mover environments.",
      resolution: "Regulatory mapping as a field artifact (published, open). Targeting jurisdictions with explicit regulatory openness for pilots. Multilateral Canonization inflection: development bank guidelines create regulatory cover for sovereign borrowers.",
      status: "Mitigated",
      statusColor: "green",
      institutionalLens: "CERN's model: operate in jurisdictions with the most scientific freedom, then use international treaty frameworks to expand. FA2's approach: pilot in open jurisdictions, then use multilateral frameworks as legitimacy anchors for expansion.",
      emoji: "📋"
    }
  ],

  // ── Lightweight institution reference for contextual lens ─────────────────────
  institutions: {
    "BIS Innovation Hub": "Central bank innovation lab model — learn-by-building with sovereign partners, document failure modes, publish findings as neutral artifacts",
    "MITRE": "Trusted technical advisor model — neutral artifacts, no advocacy, credibility through usefulness",
    "Rockefeller Foundation": "Field-creation methodology — fund the proof, document as replicable model, fund the spread",
    "IAS": "Protected sanctuary for long-horizon work — insulated from short-term pressures, produces irreplaceable field artifacts",
    "Long Now Foundation": "Long-horizon framing — changes how funders and institutions think about time",
    "RAND Corporation": "Policy analysis without advocacy — credibility through neutrality, not salesmanship",
    "Santa Fe Institute": "Cross-disciplinary convening — nobody's home discipline, forces genuine synthesis",
    "HELENA": "Curated merit convening — radical curation by consequence, structured for candor",
    "Bellagio Center": "High-stakes convening with residency depth — combining intellectual work with institutional access",
    "OSI": "Narrative reframe — openness from preference to governance choice through superior artifacts"
  },

  // ── Real-World DPI Deployments & Initiatives ─────────────────────────────────
  realWorldExamples: [
    {
      id: "india-stack",
      name: "India Stack",
      country: "India",
      category: "Sovereign DPI",
      categoryColor: "blue",
      tagline: "The world's largest DPI deployment — identity, payments, commerce at national scale",
      stats: ["1.4B residents on Aadhaar identity layer", "500M+ daily UPI transactions (FY2024: 83B total)", "ONDC operating in 600+ cities"],
      description: "India Stack is a collection of government-operated digital infrastructure systems: Aadhaar (biometric identity for 1.4B residents), UPI (real-time interoperable payments), DigiLocker (document storage), and ONDC (open network for digital commerce). Governed by separate government bodies with distinct legal frameworks, India Stack demonstrates that open-standard, sovereign-owned DPI can achieve massive scale without proprietary vendor lock-in.",
      fa2label: "FA2 Relevance · Sovereign DPI & Programmable Treasury",
      fa2: "India Stack is the most direct proof-of-concept for FA2's Sovereign DPI Reference Stack mission. The key lesson: open-standard, government-owned infrastructure beats proprietary alternatives at scale. UPI's 83 billion annual transactions demonstrate what interoperable rails look like when deployed nationally. For FA2, this is the benchmark: a forkable reference architecture that sovereign partners can deploy at national scale without vendor dependency.",
      source: "https://en.wikipedia.org/wiki/India_Stack",
      sourceLabel: "India Stack — Wikipedia",
      altSource: "https://www.elibrary.imf.org/view/journals/001/2023/078/article-A001-en.xml",
      altSourceLabel: "IMF Working Paper: India's Digital Journey (2023)"
    },
    {
      id: "estonia-xroad",
      name: "Estonia X-Road",
      country: "Estonia / 25+ countries",
      category: "Sovereign DPI",
      categoryColor: "blue",
      tagline: "Open-source interoperability layer — sovereign data exchange adopted by 25+ countries",
      stats: ["25+ countries adopted X-Road globally", "No known major security breach in 20+ years of operation", "MIT licensed since October 2016"],
      description: "X-Road is Estonia's open-source data exchange layer — centrally managed, distributed middleware enabling secure data sharing between public and private sector organizations. Open-sourced in 2016 under MIT license, X-Road has been adopted by countries from Cambodia to Finland to Brazil. In 2017, Estonia and Finland established the Nordic Institute for Interoperability Solutions (NIIS) to govern its ongoing development as a shared sovereign asset.",
      fa2label: "FA2 Relevance · Sovereign DPI Reference Stack & Multilateral Canonization",
      fa2: "X-Road IS the Sovereign DPI Reference Stack in practice — an open, forkable, vendor-neutral architecture that any government can deploy and operate without proprietary dependencies. Its 25+ country adoption proves FA2's core hypothesis: open-standard DPI can spread without the original builder needing to be in the room. The NIIS governance model (two sovereign governments jointly stewarding an open standard) is exactly the multilateral codification playbook FA2 is targeting at Year 5.",
      source: "https://e-estonia.com/solutions/interoperability-services/x-road/",
      sourceLabel: "e-Estonia: X-Road Official",
      altSource: "https://x-road.global/",
      altSourceLabel: "X-Road Global — Open Source Repository"
    },
    {
      id: "brazil-pix-drex",
      name: "Brazil Pix & DREX",
      country: "Brazil",
      category: "Programmable Treasury",
      categoryColor: "blue",
      tagline: "Real-time payments at national scale + programmable CBDC pilot in active deployment",
      stats: ["5.8B Pix transactions in November 2024 alone", "Total monthly value: 2.49 trillion BRL", "DREX programmable CBDC pilot: 2024–2026 rollout"],
      description: "Pix is Brazil's central bank real-time payment system processing billions of transactions monthly since its 2020 launch. DREX (Digital Brazilian Real) is Brazil's wholesale CBDC initiative built on distributed ledger technology — designed to enable programmable money, smart contracts, and tokenized assets for fiscal and capital markets use. DREX Phase 2 focuses on real credit workflows: tokenized receivables, debentures, and collateralized credit as one enforceable smart-contract workflow.",
      fa2label: "FA2 Relevance · Programmable Treasury & Capital Stack",
      fa2: "Brazil's Pix demonstrates what sovereign-owned payment rails look like at national scale, while DREX shows a major central bank actively experimenting with programmable money and smart contracts on public infrastructure. The DREX team's pivot away from blockchain (finding specific technology 'not viable') is itself a critical field artifact: the mission is programmable fiscal rails, not any particular technology. FA2's Programmable Treasury mission should document DREX's architecture decisions and failure modes as a published field resource.",
      source: "https://www.bcb.gov.br/en",
      sourceLabel: "Banco Central do Brasil — Official",
      altSource: "https://www.omfif.org/2025/05/brazil-is-building-on-the-success-of-pix-with-drex-pilot/",
      altSourceLabel: "OMFIF: Brazil's Pix and DREX Pilot (2025)"
    },
    {
      id: "govstack",
      name: "GovStack",
      country: "Global — 20+ countries",
      category: "Sovereign DPI",
      categoryColor: "blue",
      tagline: "ITU/Germany/Estonia/DIAL multilateral initiative — open building blocks for government digitalization",
      stats: ["20+ countries actively using GovStack approach (2025)", "Founding partners: ITU, BMZ/GIZ, Estonia, DIAL", "Advisory: World Bank, UNDP, Bill & Melinda Gates Foundation"],
      description: "GovStack is a multilateral initiative founded by ITU, Germany (BMZ/GIZ), Estonia, and the Digital Impact Alliance (DIAL) to create reusable, open-source building blocks for government digitalization. It provides GovSpecs (technical specifications), GovTest (testing frameworks), GovLearn (training), and GovMarket (implementation marketplace). Countries including Kenya, Rwanda, Ukraine, and 9 Central Asian nations are actively deploying GovStack building blocks in government services.",
      fa2label: "FA2 Relevance · Alliance Architecture & Multilateral Canonization",
      fa2: "GovStack is the most direct institutional analogue to FA2's Sovereign DPI Reference Stack + Alliance Architecture combo. It proves the model works: sovereign countries co-producing open specifications, with multilateral backing (ITU, World Bank, UNDP) as legitimacy anchors. FA2 should engage GovStack as a coalition partner — not a competitor. The specific move: contribute FA2's crypto-enabled building blocks (programmable treasury, ZK eligibility, procurement verifiability) into GovStack's open specification library as an official extension.",
      source: "https://govstack.global/",
      sourceLabel: "GovStack Official Site",
      altSource: "https://www.itu.int/en/ITU-D/ICT-Applications/Pages/digital-government.aspx",
      altSourceLabel: "ITU: GovStack Initiative"
    },
    {
      id: "mosip",
      name: "MOSIP",
      country: "Philippines, Morocco, Ethiopia + 8 more",
      category: "Sovereign DPI",
      categoryColor: "blue",
      tagline: "Modular Open Source Identity Platform — sovereign control, 71M+ IDs issued across Global South",
      stats: ["71M+ unique digital IDs issued globally", "11 countries at varying deployment stages", "National deployments: Morocco, Philippines, Ethiopia"],
      description: "MOSIP (Modular Open Source Identity Platform) is an open-source platform enabling governments to build secure, scalable national identity systems with full sovereign control — data sharing only with individual consent. Hosted by IIIT Bangalore, MOSIP allows countries to configure and customize the platform to their requirements while owning the full implementation. Recognized as a WSIS Prize winner (2024) and active in Global South deployments.",
      fa2label: "FA2 Relevance · Privacy-Preserving Eligibility & Sovereign DPI",
      fa2: "MOSIP is the living proof-of-concept for FA2's Privacy-Preserving Eligibility mission: open-source, sovereign-controlled identity infrastructure deployed at national scale in the Global South. The key lesson: sovereign control (governments fully own their deployment) is the feature that enables political adoption. FA2's ZK-based eligibility work should be positioned as a privacy-preserving extension to identity platforms like MOSIP — not a competitor, but an upgrade layer that adds ZK verification without replacing existing infrastructure.",
      source: "https://www.mosip.io/",
      sourceLabel: "MOSIP Official",
      altSource: "https://github.com/mosip",
      altSourceLabel: "MOSIP on GitHub (Open Source)"
    },
    {
      id: "openg2p",
      name: "OpenG2P",
      country: "Ethiopia, Nigeria, Philippines + more",
      category: "Sovereign DPI",
      categoryColor: "blue",
      tagline: "Open-source social protection platform — sovereign-owned G2P cash transfer delivery",
      stats: ["Deployed in Ethiopia, Nigeria, Zambia, Philippines, India", "SPAR 1.0 & G2P Bridge 1.0 released 2024", "Recognized UNDP Digital Public Good"],
      description: "OpenG2P is an open-source platform enabling governments and humanitarian organizations to deliver social benefits — cash transfers, social protection payments — directly to beneficiaries. Built on MOSIP for identity, OpenG2P provides a Program and Beneficiary Management System (PBMS) and the Social Payments Account Registry (SPAR 1.0, released 2024). Recognized as a Digital Public Good by DPGA and endorsed by UNDP's Digital X program.",
      fa2label: "FA2 Relevance · Programmable Treasury & Sovereign DPI Reference Stack",
      fa2: "OpenG2P is the most direct existing deployment of programmable government-to-person payments — the operational layer FA2's Programmable Treasury mission is targeting. Its deployment in Ethiopia (piloted with the Ministry of Women and Social Affairs) demonstrates what sovereign-owned, open-source fiscal rails look like in practice. FA2 should study OpenG2P's implementation architecture as a reference design and engage the OpenG2P community as a deployment partner for Pilot Funding grants.",
      source: "https://www.openg2p.org/",
      sourceLabel: "OpenG2P Official",
      altSource: "https://digitalx.undp.org/OpenG2P_dx3.html",
      altSourceLabel: "UNDP Digital X: OpenG2P"
    },
    {
      id: "gitcoin",
      name: "Gitcoin Quadratic Funding",
      country: "Global (crypto-native)",
      category: "AI & Crypto PGF",
      categoryColor: "purple",
      tagline: "Quadratic funding mechanism — $67M+ distributed to 5,000+ public goods projects",
      stats: ["$67M+ distributed to 5,000+ projects total", "$1.3M distributed in GG23 via QF + Retro Funding", "~10,000 unique donors per round"],
      description: "Gitcoin pioneered Quadratic Funding (QF) as a mechanism for community-directed allocation of public goods capital. In QF, the number of contributors matters more than the amount — small donations from many people amplify matching funds from a central pool, pushing allocation power away from large funders. Gitcoin has run 23+ grant rounds, and now operates a deployable Grants Stack protocol that any community can use. Its Octant partnership demonstrates the coalition capital model FA2 is building.",
      fa2label: "FA2 Relevance · AI4PG Research Coalition & Capital Stack",
      fa2: "Gitcoin QF is the live laboratory for the capital mechanisms FA2 is trying to design at sovereign scale. Its core insight — democratic allocation outperforms expert allocation for public goods — is the hypothesis FA2's AI4PG mission needs to test in institutional contexts. The FA2 move: use Gitcoin's published mechanism design research as the foundation for the AI4PG benchmark, then propose how QF-style mechanisms can be adapted for development finance contexts (World Bank, DFI co-funding rounds where the 'community' is sovereign governments, not individuals).",
      source: "https://gitcoin.co/",
      sourceLabel: "Gitcoin — Fund What Matters",
      altSource: "https://qf.gitcoin.co/",
      altSourceLabel: "Gitcoin: What is Quadratic Funding?"
    },
    {
      id: "optimism-rpgf",
      name: "Optimism Retro PGF",
      country: "Global (crypto-native)",
      category: "AI & Crypto PGF",
      categoryColor: "purple",
      tagline: "Retroactive public goods funding — $3B allocated, impact-first capital mechanism",
      stats: ["$3B total allocated for retroactive grants program", "30M OP tokens distributed in Round 3 alone", "Transitioning to continuous impact evaluation model (2025)"],
      description: "Optimism's Retroactive Public Goods Funding (RPGF) inverts the traditional grant model: instead of funding what might work, it rewards what has already created demonstrable value. The Optimism Collective allocates OP tokens based on measured ecosystem impact — governance, infrastructure, education. In 2025, RPGF evolved from annual rounds toward continuous 'impact evaluation,' a more sophisticated and scalable mechanism for sustained public goods capital.",
      fa2label: "FA2 Relevance · Challenge Prize Design & AI4PG Capital Stack",
      fa2: "RPGF is the most advanced live experiment in retroactive capital allocation — exactly the mechanism innovation FA2's Challenge Prize and Capital Stack missions need to engage. The core design principle (it's easier to agree on what was valuable than what will be) maps directly to FA2's multilateral context: development bank funders can agree on successful DPI deployments retroactively more easily than they can agree on ex-ante bets. FA2 should study RPGF's impact metrics methodology for AI4PG benchmark design.",
      source: "https://app.optimism.io/retropgf",
      sourceLabel: "Optimism Retro PGF — Official",
      altSource: "https://optimism.mirror.xyz/oVnEz7LrfeOTC7H6xCXb5dMZ8Rc4dSkD2KfgG5W9cCw",
      altSourceLabel: "Optimism: Announcing RetroPGF Round 3"
    },
    {
      id: "helium",
      name: "Helium Network",
      country: "Global — 80+ countries",
      category: "Decentralized Climate Infrastructure",
      categoryColor: "amber",
      tagline: "Leading DePIN network — 400K+ hotspots, 576 TB data offloaded in Q4 2024",
      stats: ["400K+ active hotspots across 80+ countries", "576 TB data offloaded in Q4 2024 (555% QoQ growth)", "Telefónica partnership for Mexico network expansion"],
      description: "Helium is the world's largest DePIN wireless infrastructure network. Starting as IoT coverage, it expanded to 5G mobile (Helium Mobile) with nearly 100,000 subscribers in Q1 2024. The network is governed on-chain: hotspot operators earn HNT tokens for providing verified coverage. Helium's Telefónica partnership (Mexico) demonstrates how DePIN networks can integrate with traditional sovereign infrastructure operators, creating a hybrid model relevant to FA2's DePIN climate thesis.",
      fa2label: "FA2 Relevance · DePIN Climate Infrastructure & DePIN Summit",
      fa2: "Helium is the reference architecture for FA2's DePIN climate thesis: a token-incentivized physical infrastructure network, governed on-chain, reaching global scale without centralized ownership. The key FA2 lesson from Helium: network effects in DePIN require density before utility — early deployment strategy must prioritize coverage clustering over geographic spread. For DePIN climate MRV work, Helium's governance model (on-chain verification, token-based incentives) is the starting template to adapt for environmental sensor networks.",
      source: "https://www.helium.com/",
      sourceLabel: "Helium Network Official",
      altSource: "https://messari.io/report/state-of-helium-q4-2024",
      altSourceLabel: "Messari: State of Helium Q4 2024"
    },
    {
      id: "dimo",
      name: "DIMO Network",
      country: "Global — mobility DePIN",
      category: "Decentralized Climate Infrastructure",
      categoryColor: "amber",
      tagline: "Mobility DePIN — 180K+ connected vehicles, Toyota partnership, $1T market by 2030",
      stats: ["180K+ vehicles connected globally", "Toyota Blockchain Lab partnership for Japan (2025)", "Connected vehicle market: $200B (2024) → $1T projected (2030)"],
      description: "DIMO is a DePIN network for mobility data — vehicle owners connect their cars to the network, sharing data (location, diagnostics, usage) in exchange for DIMO tokens. With 180K+ connected vehicles and a Toyota Blockchain Lab partnership for Japan, DIMO demonstrates how DePIN can create open, user-owned data layers over physical assets with real commercial traction. Daily active wallets grew 230% in 2025; transaction costs fell 94% after migrating to Layer 2.",
      fa2label: "FA2 Relevance · DePIN Climate Infrastructure & Decentralized MRV",
      fa2: "DIMO is the clearest proof that DePIN can create sovereign, user-controlled data layers over physical infrastructure — with commercial partners (Toyota) and real consumer adoption. For FA2's DePIN climate mission, DIMO's architecture is the template: open data protocol, token incentives for contributors, on-chain verification of real-world data. The FA2 application: a DIMO-like protocol for environmental sensors — turning climate MRV into a DePIN network where communities earn tokens for providing verified environmental monitoring data.",
      source: "https://www.dimo.org/",
      sourceLabel: "DIMO Official",
      altSource: "https://depinscan.io/projects/dimo",
      altSourceLabel: "DePIN Scan: DIMO Network"
    }
  ],

  // ── Strategic Timeline — Gantt Data ──────────────────────────────────────────
  gantt: {
    quarters: 20,
    yearLabels: [
      { year: "2026", startQ: 1, label: "Year 1 · Foundation" },
      { year: "2027", startQ: 5, label: "Year 2" },
      { year: "2028", startQ: 9, label: "Year 3 · Traction" },
      { year: "2029", startQ: 13, label: "Year 4" },
      { year: "2030", startQ: 17, label: "Year 5 · Irreversible Shifts" }
    ],
    programs: [
      { name: "Fellowship Program", color: "blue", startQ: 2, endQ: 20, note: "Launch Q2 2026 · 15–20 fellows/cohort" },
      { name: "Convenings & Dinners", color: "blue", startQ: 1, endQ: 20, note: "3× per year · Funding the Commons" },
      { name: "Grants — Seed ($5–10K)", color: "green", startQ: 1, endQ: 20, note: "30-day sprints · Active now" },
      { name: "Grants — Challenge Prize ($10–50K)", color: "green", startQ: 3, endQ: 20, note: "Open competition · From Q3 2026" },
      { name: "Grants — Pilot Funding ($50–150K)", color: "green", startQ: 5, endQ: 20, note: "Sovereign deployment · From Year 2" },
      { name: "Grants — Blended Finance ($150K+)", color: "green", startQ: 9, endQ: 20, note: "Co-funded with multilaterals · From Year 3" },
      { name: "Advisory & Partnerships", color: "purple", startQ: 1, endQ: 20, note: "Quarterly structured engagement" },
      { name: "Co-funded Initiatives", color: "purple", startQ: 2, endQ: 20, note: "EF · Octant · Ma Earth · Edge City" },
      { name: "September UN Event", color: "amber", markers: [3, 7, 11, 15, 19], note: "Annual · UNGA high-level week" }
    ],
    missions: [
      { name: "Sovereign DPI Reference Stack", color: "blue", startQ: 1, endQ: 4, phase: "Year 1", opportunitySpace: "Sovereign DPI" },
      { name: "Programmable Treasury", color: "blue", startQ: 1, endQ: 12, phase: "Year 1–3", opportunitySpace: "Sovereign DPI" },
      { name: "Privacy-Preserving Eligibility", color: "blue", startQ: 5, endQ: 16, phase: "Year 2–4", opportunitySpace: "Sovereign DPI" },
      { name: "Procurement Verifiability", color: "blue", startQ: 5, endQ: 16, phase: "Year 2–4", opportunitySpace: "Sovereign DPI" },
      { name: "Programmable Climate-Aid Facility", color: "amber", startQ: 5, endQ: 16, phase: "Year 2–4", opportunitySpace: "DePIN Climate" },
      { name: "Capital Stack for Open Infrastructure", color: "purple", startQ: 9, endQ: 20, phase: "Year 3–5", opportunitySpace: "AI & Crypto PGF" }
    ]
  },

  // ── Bibliography ──────────────────────────────────────────────────────────────
  bibliography: [
    {
      category: "Sovereign DPI & Identity",
      entries: [
        { title: "India Stack — Wikipedia", url: "https://en.wikipedia.org/wiki/India_Stack", type: "Reference" },
        { title: "IMF Working Paper: Stacking up the Benefits — India's Digital Journey (2023)", url: "https://www.elibrary.imf.org/view/journals/001/2023/078/article-A001-en.xml", type: "Academic" },
        { title: "SSIR: Digital Public Infrastructure for the Developing World", url: "https://ssir.org/articles/entry/digital-public-infrastructure-developing-world", type: "Research" },
        { title: "e-Estonia: X-Road — Official", url: "https://e-estonia.com/solutions/interoperability-services/x-road/", type: "Official" },
        { title: "X-Road Global — Open Source Repository", url: "https://x-road.global/", type: "Official" },
        { title: "GovStack — Official Initiative Site", url: "https://govstack.global/", type: "Official" },
        { title: "GovStack 2025 Year in Review", url: "https://govstack.global/news/govstack-in-action-2025-year-in-review/", type: "Report" },
        { title: "ITU: GovStack & Digital Public Infrastructure (PDF)", url: "https://www.itu.int/dms_pub/itu-d/oth/07/2e/D072E0000070012PDFE.pdf", type: "Official" },
        { title: "MOSIP — Modular Open Source Identity Platform", url: "https://www.mosip.io/", type: "Official" },
        { title: "MOSIP on GitHub (Open Source)", url: "https://github.com/mosip", type: "Official" },
        { title: "ITU WSIS Prizes 2024: MOSIP", url: "https://www.itu.int/net4/wsis/stocktaking/Prizes/2025/Details/17071484629545852", type: "Official" },
        { title: "OpenG2P — Official Site", url: "https://www.openg2p.org/", type: "Official" },
        { title: "OpenG2P in 2024 — Year Review", url: "https://www.openg2p.org/post/openg2p-in-2024", type: "Report" },
        { title: "UNDP Digital X: OpenG2P", url: "https://digitalx.undp.org/OpenG2P_dx3.html", type: "Official" },
        { title: "Digital Public Goods Alliance", url: "https://digitalpublicgoods.net/", type: "Official" }
      ]
    },
    {
      category: "Programmable Finance & CBDC",
      entries: [
        { title: "Banco Central do Brasil — Official (DREX)", url: "https://www.bcb.gov.br/en", type: "Official" },
        { title: "OMFIF: Brazil Building on Pix with DREX Pilot (2025)", url: "https://www.omfif.org/2025/05/brazil-is-building-on-the-success-of-pix-with-drex-pilot/", type: "Research" },
        { title: "Wharton: Lessons from Brazil — Central Banks Fostering Innovation", url: "https://wifpr.wharton.upenn.edu/blog/lessons-from-brazil-central-banks-fostering-innovation/", type: "Academic" },
        { title: "BIS Innovation Hub — Official Site", url: "https://www.bis.org/innovation_hub/index.htm", type: "Official" },
        { title: "Global Government Finance: Brazil Names CBDC 'Drex'", url: "https://www.globalgovernmentfinance.com/brazil-names-cbdc-drex-expands-tests-dlt-platform/", type: "Media" }
      ]
    },
    {
      category: "Crypto Public Goods & Governance",
      entries: [
        { title: "Gitcoin — Fund What Matters (Official)", url: "https://gitcoin.co/", type: "Official" },
        { title: "Gitcoin: What is Quadratic Funding?", url: "https://qf.gitcoin.co/", type: "Official" },
        { title: "Gitcoin Grants 23: Milestone Round Retrospective", url: "https://www.gitcoin.co/blog/gitcoin-grants-23-retro", type: "Report" },
        { title: "Gitcoin x Octant QF Round Announcement", url: "https://www.gitcoin.co/blog/announcing-the-octant-gitcoin-qf-round", type: "Report" },
        { title: "Optimism Retro PGF — Official Portal", url: "https://app.optimism.io/retropgf", type: "Official" },
        { title: "Optimism: Announcing RetroPGF Round 3", url: "https://optimism.mirror.xyz/oVnEz7LrfeOTC7H6xCXb5dMZ8Rc4dSkD2KfgG5W9cCw", type: "Report" },
        { title: "CoinTelegraph: Optimism's $3B Retroactive Funding", url: "https://cointelegraph.com/news/optimism-3-billion-public-good-retro-funding-grants", type: "Media" },
        { title: "Open Source Observer: Impact Metrics for Retro Funding 4", url: "https://docs.oso.xyz/blog/impact-metrics-rf4-deep-dive/", type: "Research" }
      ]
    },
    {
      category: "DePIN Networks",
      entries: [
        { title: "Helium Network — Official Site", url: "https://www.helium.com/", type: "Official" },
        { title: "Messari: State of Helium Q4 2024", url: "https://messari.io/report/state-of-helium-q4-2024", type: "Research" },
        { title: "Grayscale Research: How DePIN Bridges Crypto to Physical Systems", url: "https://research.grayscale.com/reports/the-real-world-how-depin-bridges-crypto-back-to-physical-systems", type: "Research" },
        { title: "DIMO — Official Site", url: "https://www.dimo.org/", type: "Official" },
        { title: "DePIN Scan: DIMO Network Stats", url: "https://depinscan.io/projects/dimo", type: "Data" },
        { title: "Polygon: DIMO — Road to 100K Connected Cars", url: "https://polygon.technology/blog/the-road-to-100k-connected-cars-how-dimo-is-revolutionizing-the-auto-industry", type: "Report" }
      ]
    },
    {
      category: "EU Regulatory Framework",
      entries: [
        { title: "EU MiCA Regulation — Markets in Crypto-Assets (Official)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114", type: "Regulation" },
        { title: "EU Data Act (Official)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R2854", type: "Regulation" },
        { title: "EU DORA — Digital Operational Resilience Act (Official)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554", type: "Regulation" },
        { title: "EU AI Act (Official)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689", type: "Regulation" }
      ]
    },
    {
      category: "Reference Institutions",
      entries: [
        { title: "BIS Innovation Hub", url: "https://www.bis.org/innovation_hub/index.htm", type: "Official" },
        { title: "MITRE Corporation", url: "https://www.mitre.org/", type: "Official" },
        { title: "RAND Corporation", url: "https://www.rand.org/", type: "Official" },
        { title: "Santa Fe Institute", url: "https://www.santafe.edu/", type: "Official" },
        { title: "Rockefeller Foundation", url: "https://www.rockefellerfoundation.org/", type: "Official" },
        { title: "Institute for Advanced Study (IAS)", url: "https://www.ias.edu/", type: "Official" },
        { title: "HELENA Global Initiative", url: "https://www.helenaglobal.org/", type: "Official" },
        { title: "Long Now Foundation", url: "https://longnow.org/", type: "Official" }
      ]
    },
    {
      category: "FA2 Source Documents",
      entries: [
        { title: "PL R&D FA2 Definitions Document (Internal — available on request)", url: null, type: "Internal" },
        { title: "E&G Field Strategy v1.0, February 2026 (Internal — available on request)", url: null, type: "Internal" }
      ]
    }
  ]

};
