/* =============================================================================
   VIEWS.JS — Render functions for all 5 dashboard sections
   All rendering from FA2_DATA in data.js
   ============================================================================= */

var Views = (function () {

  // ── Helpers ─────────────────────────────────────────────────────────────────

  function hex(w, h) {
    return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" class="hex-deco">' +
      '<path d="M' + (w/2) + ' 4L' + (w-4) + ' ' + (h*0.27) + 'V' + (h*0.73) + 'L' + (w/2) + ' ' + (h-4) + 'L4 ' + (h*0.73) + 'V' + (h*0.27) + 'Z" stroke="#2563EB" stroke-width="1.5" fill="rgba(37,99,235,0.04)"/>' +
      '</svg>';
  }

  function hexBg() {
    return '<div class="hero-hexbg">' +
      '<svg width="480" height="480" viewBox="0 0 480 480" fill="none">' +
        '<path d="M240 20L452 130V350L240 460L28 350V130Z" stroke="#2563EB" stroke-width="1.5" fill="none" opacity="0.6" class="hex-deco"/>' +
        '<path d="M240 60L420 150V330L240 420L60 330V150Z" stroke="#2563EB" stroke-width="1" fill="none" opacity="0.4"/>' +
        '<path d="M240 100L388 170V310L240 380L92 310V170Z" stroke="#2563EB" stroke-width="0.8" fill="rgba(37,99,235,0.02)" opacity="0.3"/>' +
      '</svg>' +
    '</div>';
  }

  function statusTag(status, color) {
    var cls = 'tag-' + (color || 'gray');
    return '<span class="tag ' + cls + '">' + status + '</span>';
  }

  function lensCallout(icon, text) {
    return '<div class="lens-callout"><span class="lens-icon">' + icon + '</span><div class="lens-text">' + text + '</div></div>';
  }

  function oSpaceColor(name) {
    var map = { "Sovereign DPI": "blue", "AI & Crypto Public Goods Funding": "purple", "Crypto-Native Governance": "green", "Decentralized Climate Infrastructure": "amber" };
    return map[name] || "gray";
  }

  function missionSpaceColor(ms) {
    var map = { "Sovereign DPI": "blue", "AI & Crypto Public Goods Funding": "purple", "Decentralized Climate Infrastructure": "amber" };
    return map[ms] || "gray";
  }

  // ── SECTION: GUIDE / START HERE ─────────────────────────────────────────────

  function guide() {
    var html = '';

    // Blue hero
    html += '<div class="guide-hero">';
    html += '<div class="guide-hero-eyebrow">FA2 · Economies &amp; Governance · Protocol Labs R&D</div>';
    html += '<h1 class="guide-hero-title">Welcome to the E&amp;G Strategic Dashboard</h1>';
    html += '<p class="guide-hero-sub">This is the shared strategic reference for FA2 co-leads. It synthesizes the field strategy, roadmap, and operational reality of the Economies &amp; Governance focus area into one navigable document — built for alignment, not reporting.</p>';
    html += '<div class="guide-hero-meta">';
    html += '<div class="guide-meta-chip">👤 Mili Santamaría · James Tunningley · David Dao</div>';
    html += '<div class="guide-meta-chip">📅 Updated March 2026</div>';
    html += '<div class="guide-meta-chip">🔒 Internal — co-leads only</div>';
    html += '</div>';
    html += '</div>';

    // What this is
    html += '<div class="guide-section">';
    html += '<div class="section-eyebrow">What This Is</div>';
    html += '<h2 class="section-title">The Dashboard, Explained</h2>';
    html += '<p class="section-desc">Three questions this answers. Three things it deliberately does not do.</p>';

    html += '<div class="grid-2" style="margin-bottom:32px;">';
    var whatIs = [
      { emoji: '🧭', title: 'It is a strategic reference', desc: 'A single place to answer: what are we building, why this way, what does success look like, and why doesn\'t the future we want already exist? Built for Mili, James, and David to stay aligned on the big picture — especially across conversations that happen weeks apart.' },
      { emoji: '🗺️', title: 'It is a shared language document', desc: 'FA2 touches sovereign policy, crypto infrastructure, multilateral finance, and climate tech. This dashboard gives the three co-leads a common vocabulary — opportunity spaces, inflection hypotheses, constraint names — so conversations start at a higher level.' },
      { emoji: '📊', title: 'It is a field synthesis', desc: 'Built from two primary source documents (PL R&D FA2 Definitions and E&G Field Strategy v1.0, Feb 2026) plus the full institutional analysis from the AGI Field Builder app — 12 reference institutions, 8 strategic playbooks, synthesized into contextual lens callouts throughout.' },
      { emoji: '🚫', title: 'What it is NOT', desc: 'Not a reporting tool. Not a task tracker. Not a pitch deck for external audiences. Not a learning path. It does not tell you what to do next — it tells you why what you\'re doing matters and what winning looks like. Use it to orient, not to manage.' }
    ];
    whatIs.forEach(function(w) {
      html += '<div class="guide-made-block">';
      html += '<div class="guide-made-title">' + w.emoji + ' ' + w.title + '</div>';
      html += '<div class="guide-made-desc">' + w.desc + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // Navigate the dashboard
    html += '<div class="guide-section guide-section-alt">';
    html += '<div class="section-eyebrow">Navigation Guide</div>';
    html += '<h2 class="section-title">7 Sections — When to Use Each</h2>';
    html += '<p class="section-desc">The tab order follows a logical arc: what we\'re building → why it\'s hard → how we respond → what winning looks like → what we can learn from. Use the top nav to move between them.</p>';
    html += '<div class="grid-2">';

    var sections = [
      { emoji: '🌐', href: '#overview', title: 'Overview', question: 'When to open it: "What is FA2 building, and what is PL\'s specific role?"', desc: 'The north star page. 4 opportunity spaces, the core reframe of what this is really about, and the 5 levers through which PL does what only PL can do. Start any onboarding conversation here.' },
      { emoji: '🗓️', href: '#roadmap', title: 'Roadmap', question: 'When to open it: "What are we doing in Year 1? What does Year 5 look like?"', desc: '6 ARIA-style missions with target deployment phases. 3-phase timeline (Foundation → Traction → Irreversible Shifts) with milestone lists and a full Gantt chart.' },
      { emoji: '🔬', href: '#diagnosis', title: 'Field Diagnosis', question: 'When to open it: "Why is this hard? What are we actually fighting?"', desc: '7 systemic constraints mapped by type and status. Each shows what suppresses the field, what resolves it, which FA2 missions address it directly, and how comparable institutions navigated the same obstacle.' },
      { emoji: '⚙️', href: '#howwework', title: 'How We Work', question: 'When to open it: "What does FA2 actually do, and how does it connect to strategy?"', desc: '6 activity streams with status labels and explicit links to the Evidence Engine metrics each one feeds. Includes the activity → inflection map and the 4-stage capital stack.' },
      { emoji: '✅', href: '#success', title: 'Success', question: 'When to open it: "How do we know if this is working?"', desc: '3-level measurement architecture: activity benchmarks (How We Work) → quarterly Evidence Engine metrics → strategic inflection signals. Also includes the 5–10 year future state conditions across 6 categories.' },
      { emoji: '📚', href: '#models', title: 'Reference Models', question: 'When to open it: "What can we learn from analogous institutions and real deployments?"', desc: '8 reference institutions and 10 real-world DPI deployments — each with an explicit FA2 application. Includes an executive synthesis mapping each institution to FA2\'s 4 opportunity spaces, and 5 strategic playbook chapters.' },
      { emoji: '📖', href: '#bibliography', title: 'Sources', question: 'When to open it: "Where does this content come from?"', desc: '100+ sources organized by domain — official government documents, academic research, institutional reports. Every statistic and institutional reference in the dashboard is sourced here.' }
    ];
    sections.forEach(function(s) {
      html += '<a class="guide-nav-card" href="' + s.href + '">';
      html += '<div class="guide-nav-top"><span class="guide-nav-emoji">' + s.emoji + '</span><span class="guide-nav-arrow">→</span></div>';
      html += '<div class="guide-nav-title">' + s.title + '</div>';
      html += '<div class="guide-nav-desc">' + s.desc + '</div>';
      html += '<div class="guide-nav-question">' + s.question + '</div>';
      html += '</a>';
    });
    html += '</div>';
    html += '</div>';

    // How it was made
    html += '<div class="guide-section">';
    html += '<div class="section-eyebrow">Provenance</div>';
    html += '<h2 class="section-title">How This Was Made</h2>';
    html += '<p class="section-desc">Every piece of content in this dashboard is sourced from official FA2 strategy documents or synthesized from the institutional analysis in the AGI Field Builder system. Nothing is invented.</p>';
    html += '<div style="display:flex;flex-direction:column;gap:0;">';
    var howMade = [
      { emoji: '📄', title: 'PL R&D FA2 Definitions Document', desc: 'Primary source for all field strategy content: opportunity spaces, ARIA-style missions, inflection hypotheses, future state conditions, and systemic constraints. This is the canonical FA2 strategy document.' },
      { emoji: '📋', title: 'E&G Field Strategy v1.0 (Feb 2026)', desc: 'Working draft of the field strategy, providing additional context on the 3-phase roadmap, sovereign partner pipeline, and evidence engine benchmarks. Cross-referenced with the definitions document throughout.' },
      { emoji: '🏛️', title: 'AGI Field Builder Institutional Analysis', desc: 'A separate analytical system Mili built to study 12 reference institutions (BIS Innovation Hub, MITRE, Rockefeller Foundation, IAS, RAND, Santa Fe Institute, Long Now, HELENA, and others). Their models appear throughout this dashboard as "Institutional Lens" callouts — showing how analogous organizations navigated the same challenges FA2 faces.' },
    ];
    howMade.forEach(function(h) {
      html += '<div class="guide-made-block">';
      html += '<div class="guide-made-title">' + h.emoji + ' ' + h.title + '</div>';
      html += '<div class="guide-made-desc">' + h.desc + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // How to use it
    html += '<div class="guide-section guide-section-alt">';
    html += '<div class="section-eyebrow">Practical Use</div>';
    html += '<h2 class="section-title">Suggested Ways to Use This</h2>';

    var howSteps = [
      { num: '1', title: 'First read — Overview → Diagnosis → How We Work → Success', desc: 'Follow the tab order: Overview (what we\'re building) → Field Diagnosis (why it\'s hard) → How We Work (how we respond) → Success (what winning looks like). This arc takes under 20 minutes and gives the complete strategic picture.' },
      { num: '2', title: 'Before a co-lead call — open Roadmap or Success', desc: 'Before alignment conversations with Mili, James, or David: pull up Roadmap to review the phase we\'re in and what the milestones are. Or pull up Success to review inflection hypotheses and Evidence Engine benchmarks — use the measurement architecture callout to anchor the conversation.' },
      { num: '3', title: 'When explaining FA2 to a new person — Overview + How We Work', desc: 'For onboarding a new partner, advisor, or team member: start on Overview (what are we building), then How We Work (what do we actually do and how it connects to strategy). These two sections are designed to be comprehensible without prior FA2 context.' },
      { num: '4', title: 'When a workstream feels stuck — Field Diagnosis', desc: 'If Fellowship recruiting is slow, or a sovereign partnership isn\'t converting, or a grants round isn\'t attracting the right applicants — open Field Diagnosis. Each constraint card now shows which FA2 missions and programs are directly targeting it.' },
      { num: '5', title: 'When you need evidence for a funder or partner — Success + Reference Models', desc: 'Success has the inflection hypotheses, future state conditions, and Evidence Engine targets. Reference Models has the institutional precedents and real-world deployment evidence. Together they answer: "Has anyone done this before, and how will we know when we\'re winning?"' }
    ];
    howSteps.forEach(function(s) {
      html += '<div class="guide-how-step">';
      html += '<div class="guide-step-num">' + s.num + '</div>';
      html += '<div><div class="guide-step-title">' + s.title + '</div><div class="guide-step-desc">' + s.desc + '</div></div>';
      html += '</div>';
    });
    html += '</div>';

    // Footer CTA
    html += '<div class="guide-section" style="text-align:center;padding-bottom:64px;">';
    html += '<div style="max-width:480px;margin:0 auto;">';
    html += '<div style="font-size:32px;margin-bottom:16px;">→</div>';
    html += '<h3 style="font-size:22px;font-weight:700;letter-spacing:-0.02em;margin-bottom:8px;">Ready? Start with the Overview.</h3>';
    html += '<p style="font-size:15px;color:var(--gray-500);line-height:1.7;margin-bottom:24px;">The Overview section lays out what FA2 is building, the 4 opportunity spaces, and PL\'s unique role. Five minutes there will make everything else in this dashboard make sense.</p>';
    html += '<a href="#overview" class="btn btn-primary" style="display:inline-flex;">Go to Overview →</a>';
    html += '</div>';
    html += '</div>';

    return html;
  }

  // ── SECTION: OVERVIEW ───────────────────────────────────────────────────────

  function overview() {
    var d = FA2_DATA;
    var html = '';

    // Hero
    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">' + d.meta.eyebrow + '</div>';
    html += '<h1 class="hero-title">What FA2 Is Building</h1>';
    html += '<p class="hero-subtitle">' + d.meta.mission + '</p>';
    html += '<div class="hero-reframe">' +
      '<span class="hero-reframe-label">Core Reframe</span>' +
      '<span class="hero-reframe-text">' + d.meta.reframe + '</span>' +
    '</div>';
    html += '<div class="hero-actions">';
    html += '<button class="btn btn-primary" data-nav="roadmap">→ Strategic Arc</button>';
    html += '<button class="btn btn-outline" data-nav="success">What success looks like</button>';
    html += '<button class="btn btn-outline" data-nav="howwework">How we work</button>';
    html += '<button class="btn btn-outline" data-nav="diagnosis">Field diagnosis</button>';
    html += '</div>';
    html += '</div>';

    // Opportunity Spaces
    html += '<div class="section">';
    html += '<div class="section-eyebrow">The Terrain</div>';
    html += '<h2 class="section-title">4 Opportunity Spaces</h2>';
    html += '<p class="section-desc">FA2 operates across four distinct but interconnected opportunity spaces, each representing a domain where crypto-enabled infrastructure can shift the trajectory of public systems.</p>';
    html += '<div class="grid-2">';
    d.opportunitySpaces.forEach(function(os, i) {
      var color = oSpaceColor(os.name);
      html += '<div class="card">';
      html += '<div class="card-label">' + ('0' + (i+1)).slice(-2) + ' · ' + os.name + '</div>';
      html += '<div class="card-title">' + os.name + '</div>';
      html += '<div class="card-body">' + os.description + '</div>';
      html += '<div style="margin-top:12px; padding-top:12px; border-top:1px solid var(--gray-200);">';
      html += '<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gray-400);margin-bottom:6px;">Current State</div>';
      html += '<div style="font-size:13px;color:var(--gray-500);line-height:1.55;">' + os.currentState + '</div>';
      html += '</div>';
      if (os.relatedAreas && os.relatedAreas.length) {
        html += '<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:6px;">';
        os.relatedAreas.forEach(function(a) {
          html += '<span class="tag tag-' + color + '">' + a + '</span>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // PL's Unique Role
    html += '<div class="section section-alt">';
    html += '<div class="section-eyebrow">PL\'s Strategic Role</div>';
    html += '<h2 class="section-title">5 Levers for Field Change</h2>';
    html += '<p class="section-desc">FA2 does not build everything — it builds the things that unlock everything else. These five levers define where PL\'s position creates irreplaceable leverage.</p>';
    html += '<div class="lever-strip">';
    d.plRole.forEach(function(r, i) {
      html += '<div class="lever-item" style="flex-direction:column;align-items:flex-start;">';
      html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">';
      html += '<div class="lever-dot"></div>';
      html += '<div class="lever-name">' + r.lever + '</div>';
      html += '</div>';
      html += '<div class="lever-desc">' + r.description + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    return html;
  }

  // ── SECTION: ROADMAP ────────────────────────────────────────────────────────

  function roadmap() {
    var d = FA2_DATA;
    var html = '';

    // Hero
    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Strategic Arc</div>';
    html += '<h1 class="hero-title">The Strategic Roadmap</h1>';
    html += '<p class="hero-subtitle">Where FA2 is going, in what order, and what irreversible shifts we are aiming for. Three phases over five years — each building the foundation for the next.</p>';
    html += '</div>';

    // ARIA Missions
    html += '<div class="section">';
    html += '<div class="section-eyebrow">ARIA-Style Missions</div>';
    html += '<h2 class="section-title">6 Missions</h2>';
    html += '<p class="section-desc">Each mission is a defined problem worth solving — with explicit success criteria, a named opportunity space, and a target deployment phase. Inspired by ARIA\'s mission-driven research model.</p>';
    html += '<div class="grid-2">';
    d.missions.forEach(function(m) {
      var color = missionSpaceColor(m.opportunitySpace);
      html += '<div class="mission-card">';
      html += '<div class="mission-phase-badge">' + m.phase + ' · ' + m.opportunitySpace + '</div>';
      html += '<div class="mission-name">' + m.name + '</div>';
      html += '<div class="mission-desc">' + m.description + '</div>';
      html += '<span class="tag tag-' + color + '">' + m.opportunitySpace + '</span>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // 3-Phase Timeline
    html += '<div class="section section-alt">';
    html += '<div class="section-eyebrow">3-Phase Arc</div>';
    html += '<h2 class="section-title">Year 1 → Year 3 → Year 5</h2>';
    html += '<p class="section-desc">Strategic milestones across the three-phase arc, with institutional lens callouts showing how analogous institutions built at each phase.</p>';
    html += '<div class="timeline">';
    d.roadmap.forEach(function(phase) {
      html += '<div class="timeline-phase">';
      html += '<div class="timeline-marker">';
      html += '<div class="timeline-circle">Y' + phase.year + '</div>';
      html += '<div class="timeline-year-label">Year ' + phase.year + '</div>';
      html += '</div>';
      html += '<div class="timeline-content">';
      html += '<div class="timeline-phase-title">' + phase.label + '</div>';
      html += '<div class="timeline-phase-sub">' + phase.subtitle + '</div>';
      html += '<ul class="milestone-list">';
      phase.milestones.forEach(function(m) {
        html += '<li>' + m + '</li>';
      });
      html += '</ul>';
      if (phase.institutionalLens) {
        html += lensCallout(phase.institutionalLens.icon, phase.institutionalLens.text);
      }
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // Gantt — Programs
    var g = FA2_DATA.gantt;
    html += '<div class="section">';
    html += '<div class="section-eyebrow">Programs &amp; Missions · 2026–2030</div>';
    html += '<h2 class="section-title">Strategic Timeline</h2>';
    html += '<p class="section-desc">Five-year view of program activities and ARIA mission deployment windows. Q1 2026 is the current quarter.</p>';
    html += buildGanttLegend();
    html += '<h3 style="font-size:15px;font-weight:700;color:var(--gray-700);margin-bottom:12px;">Program Activities</h3>';
    html += buildGanttTable(g.programs, g.yearLabels, g.quarters);
    html += '<h3 style="font-size:15px;font-weight:700;color:var(--gray-700);margin:28px 0 12px;">Mission Deployment Windows</h3>';
    html += buildGanttTable(g.missions, g.yearLabels, g.quarters);
    html += '</div>';

    return html;
  }

  // ── SECTION: SUCCESS ────────────────────────────────────────────────────────

  function success() {
    var d = FA2_DATA;
    var html = '';

    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Shared Alignment</div>';
    html += '<h1 class="hero-title">What Success Looks Like</h1>';
    html += '<p class="hero-subtitle">Clear, honest definition of progress across three horizons: inflection hypotheses that define the game-changing moments, future state conditions for the 5–10 year arc, and evidence benchmarks for quarterly traction reports.</p>';
    html += '</div>';

    // Inflection Hypotheses
    html += '<div class="section">';
    html += '<div class="section-eyebrow">The Game-Changing Moments</div>';
    html += '<h2 class="section-title">4 Inflection Hypotheses</h2>';
    html += '<p class="section-desc">These are not milestones — they are hypotheses about which transitions will be irreversible. When these happen, the field will be fundamentally different. Our job is to make them happen.</p>';
    html += '<div class="grid-2">';
    d.inflections.forEach(function(inf, i) {
      html += '<div class="inflection-card">';
      html += '<div class="inflection-number">Inflection ' + ('0' + (i+1)).slice(-2) + '</div>';
      html += '<div class="inflection-name">' + inf.name + '</div>';
      html += '<div class="inflection-transition">' + inf.transition + '</div>';
      html += '<div class="inflection-block">';
      html += '<div class="inflection-block-label">Observable Signals</div>';
      html += '<ul style="list-style:none;display:flex;flex-direction:column;gap:6px;">';
      inf.signals.forEach(function(s) {
        html += '<li style="display:flex;align-items:flex-start;gap:8px;font-size:13px;color:var(--gray-600);line-height:1.55;">' +
          '<span style="color:var(--blue-400);font-weight:700;flex-shrink:0;">·</span>' + s + '</li>';
      });
      html += '</ul>';
      html += '</div>';
      html += '<div class="inflection-block" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--gray-100);">';
      html += '<div class="inflection-block-label">Irreversible Shift</div>';
      html += '<div class="inflection-block-text">' + inf.irreversibleShift + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // Future State
    html += '<div class="section section-alt">';
    html += '<div class="section-eyebrow">5–10 Year Vision</div>';
    html += '<h2 class="section-title">Future State Conditions</h2>';
    html += '<p class="section-desc">What does the world look like if FA2 succeeds? Six categories of change — from capabilities deployed to norms shifted to capital markets formed. Click each to expand.</p>';
    d.futureState.forEach(function(fs, i) {
      html += '<div class="future-block">';
      html += '<div class="future-header' + (i === 0 ? ' open' : '') + '">';
      html += '<span class="future-header-title">' + fs.category + '</span>';
      html += '<span class="future-header-arrow">▾</span>';
      html += '</div>';
      html += '<div class="future-body' + (i === 0 ? ' open' : '') + '">';
      html += '<ul class="future-conditions">';
      fs.conditions.forEach(function(c) {
        html += '<li>' + c + '</li>';
      });
      html += '</ul>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Evidence Engine
    html += '<div class="section">';
    html += '<div class="section-eyebrow">Quarterly Accountability</div>';
    html += '<h2 class="section-title">Evidence Engine</h2>';
    html += '<p class="section-desc">What the quarterly "Undeniable Traction" reports need to show. These are the benchmarks against which FA2 holds itself accountable — not aspirations, but measurable thresholds.</p>';

    html += '<div class="measurement-arch">';
    html += '<div class="measurement-arch-title">How measurement works across the dashboard</div>';
    html += '<div class="measurement-arch-levels">';
    html += '<div class="measurement-level"><span class="measurement-level-label">Activity benchmarks</span><span class="measurement-level-desc">Is each program performing? (How We Work tab)</span></div>';
    html += '<div class="measurement-level-arrow">→</div>';
    html += '<div class="measurement-level"><span class="measurement-level-label">Evidence Engine metrics</span><span class="measurement-level-desc">Are we gaining quarterly traction? (this section)</span></div>';
    html += '<div class="measurement-level-arrow">→</div>';
    html += '<div class="measurement-level"><span class="measurement-level-label">Observable signals</span><span class="measurement-level-desc">Are the big bets materializing? (Inflection Hypotheses above)</span></div>';
    html += '</div>';
    html += '</div>';

    var metricDrivers = {
      'Real Users on Open Infrastructure':  ['Grants & Prizes'],
      'Sovereign Partner Depth':            ['Advisory & Partnerships', 'September UN Event', 'Fellowship'],
      'Field Map Coverage':                 ['Co-funded Initiatives', 'Advisory & Partnerships'],
      'Capital Leverage Ratio':             ['Grants & Prizes', 'Advisory & Partnerships'],
      'Fellowship Placement Quality':       ['Fellowship Program'],
      'Convening Decision Density':         ['Convenings & Dinners', 'September UN Event'],
      'Reference Stack Adoption':           ['Grants & Prizes', 'Co-funded Initiatives'],
      'AI4PG Benchmark':                    ['Co-funded Initiatives']
    };

    html += '<div class="evidence-grid">';
    d.evidenceEngine.forEach(function(e, i) {
      var drivers = metricDrivers[e.metric] || [];
      html += '<div class="evidence-item">';
      html += '<div class="evidence-num">' + (i+1) + '</div>';
      html += '<div style="flex:1;">';
      html += '<div class="evidence-metric">' + e.metric + '</div>';
      html += '<div class="evidence-target">' + e.target + '</div>';
      if (drivers.length) {
        html += '<div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:5px;">';
        html += '<span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gray-400);align-self:center;margin-right:2px;">Driven by</span>';
        drivers.forEach(function(drv) { html += '<span class="tag tag-gray" style="font-size:11px;">' + drv + '</span>'; });
        html += '</div>';
      }
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    return html;
  }

  // ── SECTION: HOW WE WORK ────────────────────────────────────────────────────

  function howwework() {
    var d = FA2_DATA;
    var html = '';

    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Operational Reality</div>';
    html += '<h1 class="hero-title">How We Build the Field</h1>';
    html += '<p class="hero-subtitle">FA2 operates across 6 activity streams — each designed to move the field in a specific way. Together, they form the field-building infrastructure that makes the strategic arc possible.</p>';
    html += '</div>';

    html += '<div class="section">';
    html += '<div class="section-eyebrow">Activity Streams</div>';
    html += '<h2 class="section-title">6 Programs &amp; Workstreams</h2>';
    html += '<p class="section-desc">Each workstream has a defined purpose, a clear definition of "good," and a status. These are not activities in isolation — they are coordinated moves toward the same strategic end.</p>';
    var activityMetrics = {
      'fellowship':  ['Fellowship Placement Quality', 'Sovereign Partner Depth'],
      'convenings':  ['Convening Decision Density'],
      'grants':      ['Real Users on Open Infrastructure', 'Capital Leverage Ratio', 'Reference Stack Adoption'],
      'advisory':    ['Sovereign Partner Depth', 'Capital Leverage Ratio', 'Field Map Coverage'],
      'cofunded':    ['AI4PG Benchmark', 'Reference Stack Adoption', 'Field Map Coverage'],
      'un-event':    ['Convening Decision Density', 'Sovereign Partner Depth']
    };

    html += '<div class="grid-2">';
    d.activities.forEach(function(act) {
      var metrics = activityMetrics[act.id] || [];
      html += '<div class="activity-card">';
      html += '<div class="activity-header">';
      html += '<div class="activity-name">' + act.emoji + ' ' + act.name + '</div>';
      html += statusTag(act.status, act.statusColor);
      html += '</div>';
      html += '<div class="activity-desc">' + act.description + '</div>';
      if (metrics.length) {
        html += '<div class="constraint-response">';
        html += '<div class="constraint-response-label">Tracked via Evidence Engine</div>';
        html += '<div class="constraint-response-tags">';
        metrics.forEach(function(m) { html += '<span class="tag tag-blue">' + m + '</span>'; });
        html += '</div>';
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // ── Inflection Connection Map ────────────────────────────────────────────
    html += '<div class="section">';
    html += '<div class="section-eyebrow">Strategic Connection</div>';
    html += '<h2 class="section-title">How Activities Build Toward Inflection</h2>';
    html += '<p class="section-desc">Each activity stream has an explicit job in the strategic arc — directly contributing to one or more of the four inflection hypotheses. This map closes the gap between "what we do" and "what we\'re building toward."</p>';

    var actInflectionMap = [
      { activity: '🎓 Fellowship', inflections: ['Multilateral Canonization', 'Treasury Embed', 'Crypto Governance as Necessity'], why: 'Fellows placed in sovereign and multilateral roles create the insider relationships that make each inflection politically viable — particularly the canonical endorsements and treasury embeds that require ministerial champions.' },
      { activity: '🤝 Convenings & Dinners', inflections: ['Multilateral Canonization', 'Treasury Embed'], why: 'Decision rooms with ministers and multilateral leads are where pilot commitments and canonical endorsements get initiated. The September UN Event is the highest-leverage instance of this.' },
      { activity: '💰 Grants & Prizes', inflections: ['Treasury Embed', 'DePIN Climate at Scale', 'Crypto Governance as Necessity'], why: 'The 4-stage capital stack de-risks the path from experiment to sovereign deployment — the mechanism that makes each inflection operationally achievable, not just strategically desirable.' },
      { activity: '🔗 Advisory & Partnerships', inflections: ['Multilateral Canonization', 'Treasury Embed'], why: 'Structured quarterly engagement with sovereigns and multilaterals surfaces the alignment conditions needed for canonical endorsements and operational treasury embedding to succeed.' },
      { activity: '🌐 Co-funded Initiatives', inflections: ['DePIN Climate at Scale', 'Crypto Governance as Necessity'], why: 'Partnerships with Ma Earth (DePIN MRV), Octant (mechanism design), and the AI4PG coalition build the technical credibility and ecosystem density both inflections require.' },
      { activity: '🇺🇳 September UN Event', inflections: ['Multilateral Canonization', 'Treasury Embed'], why: 'UNGA week is the highest-density moment for sovereign decision-makers globally. The FA2 convening is designed as the room where a Tier 2 partner relationship or multilateral declaration begins.' }
    ];

    html += '<div class="inflection-map">';
    actInflectionMap.forEach(function(row) {
      html += '<div class="inflection-map-row">';
      html += '<div class="inflection-map-activity">' + row.activity + '</div>';
      html += '<div class="inflection-map-tags">';
      row.inflections.forEach(function(inf) { html += '<span class="tag tag-blue">' + inf + '</span>'; });
      html += '</div>';
      html += '<div class="inflection-map-why">' + row.why + '</div>';
      html += '</div>';
    });
    html += '</div>'; // inflection-map
    html += '</div>'; // section

    // Capital Stack detail
    html += '<div class="section section-alt">';
    html += '<div class="section-eyebrow">Grants Architecture</div>';
    html += '<h2 class="section-title">4-Stage Capital Stack</h2>';
    html += '<p class="section-desc">The grants program is designed as a staged funnel — each stage has explicit criteria, kill switches, and is designed to produce clear go/no-go signals before the next investment.</p>';
    var stages = [
      { label: "Stage 1", name: "Seed Grants", range: "$5K – $10K", desc: "30-day sprints to validate a specific mechanism or approach. Maximum speed, minimum overhead. Output: clear proof-of-concept or documented failure.", color: "blue" },
      { label: "Stage 2", name: "Challenge Prizes", range: "$10K – $50K", desc: "Open competition for the best solution to a defined problem. Creates field-wide participation and surfaces unexpected actors. Output: working prototype or comparative analysis.", color: "purple" },
      { label: "Stage 3", name: "Pilot Funding", range: "$50K – $150K", desc: "Sovereign deployment funding for validated approaches. Requires Tier 1 sovereign partner at minimum. Output: live deployment evidence with documented attack surface.", color: "green" },
      { label: "Stage 4", name: "Blended Finance", range: "$150K+", desc: "Co-funded instruments combining FA2 capital with multilateral or institutional co-investors. Target: 1.5–2× leverage per FA2 dollar. Output: replicable deployment with external capital committed.", color: "amber" }
    ];
    html += '<div class="grid-2">';
    stages.forEach(function(s) {
      html += '<div class="card" style="border-left:3px solid var(--blue-600);">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">';
      html += '<div class="card-label">' + s.label + ' · ' + s.name + '</div>';
      html += '<span class="tag tag-blue">' + s.range + '</span>';
      html += '</div>';
      html += '<div class="card-body">' + s.desc + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    return html;
  }

  // ── SECTION: DIAGNOSIS ──────────────────────────────────────────────────────

  function diagnosis() {
    var d = FA2_DATA;
    var html = '';

    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Field Diagnosis</div>';
    html += '<h1 class="hero-title">Why Doesn\'t the Future Already Exist?</h1>';
    html += '<p class="hero-subtitle">The world we\'re building would be beneficial and technically possible — yet it doesn\'t exist. That is not an accident. Seven systemic constraints actively suppress its emergence. Understanding them is prerequisite to dismantling them.</p>';
    html += '</div>';

    // Framing
    html += '<div class="section">';
    html += '<div class="framing-text">';
    html += '<p>FA2 operates in a field shaped by seven interlocking constraints. These are not merely obstacles — they are the operating environment. Each suppresses the emergence of crypto-enabled sovereign DPI in a distinct way, and most are mutually reinforcing: trust deficits make pilots harder to fund; pilot-to-production gaps reinforce trust deficits; political risk asymmetry prevents the long-term investments that would close both.</p>';
    html += '<p>The diagnosis below is not a complaint about the difficulty of the work. It is a strategic map. Every FA2 activity can be traced back to one or more constraints it is designed to resolve. The constraint cards are organized by current status: active constraints we are directly fighting, those being addressed through FA2 programs, and those sufficiently mitigated to enable forward movement.</p>';
    html += '</div>';

    // Status summary strip
    html += '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:32px;">';
    var counts = { red: 0, amber: 0, green: 0 };
    d.constraints.forEach(function(c) { counts[c.statusColor]++; });
    html += '<div style="display:flex;align-items:center;gap:8px;padding:10px 16px;background:var(--red-100);border-radius:8px;">' +
      '<span style="font-size:20px;">🔴</span>' +
      '<div><div style="font-size:13px;font-weight:700;color:var(--red-700);">' + counts.red + ' Active Constraints</div>' +
      '<div style="font-size:12px;color:var(--red-700);opacity:0.8;">Directly suppressing field emergence</div></div></div>';
    html += '<div style="display:flex;align-items:center;gap:8px;padding:10px 16px;background:var(--amber-100);border-radius:8px;">' +
      '<span style="font-size:20px;">🟡</span>' +
      '<div><div style="font-size:13px;font-weight:700;color:var(--amber-700);">' + counts.amber + ' Being Addressed</div>' +
      '<div style="font-size:12px;color:var(--amber-700);opacity:0.8;">FA2 programs targeting these directly</div></div></div>';
    html += '<div style="display:flex;align-items:center;gap:8px;padding:10px 16px;background:var(--green-100);border-radius:8px;">' +
      '<span style="font-size:20px;">🟢</span>' +
      '<div><div style="font-size:13px;font-weight:700;color:var(--green-700);">' + counts.green + ' Mitigated</div>' +
      '<div style="font-size:12px;color:var(--green-700);opacity:0.8;">Sufficiently resolved to proceed</div></div></div>';
    html += '</div>';

    // Constraint cards
    var constraintResponses = {
      'pilot-production':      { missions: ['Sovereign DPI Reference Stack', 'Stage 3 Pilot Funding'],            activities: ['Grants & Prizes', 'Advisory & Partnerships'] },
      'trust-deficit':         { missions: ['RAND-style neutral artifacts', 'Chatham House Convenings'],          activities: ['Fellowship', 'Convenings & Dinners'] },
      'mechanism-scalability': { missions: ['Privacy-Preserving Eligibility', 'AI4PG Research Coalition'],        activities: ['Grants & Prizes', 'Co-funded Initiatives'] },
      'regulatory-moats':      { missions: ['Procurement Verifiability', 'Alliance Architecture Lever'],          activities: ['Advisory & Partnerships', 'Convenings & Dinners'] },
      'political-risk':        { missions: ['Sovereign DPI Reference Stack', 'Multilateral Canonization Arc'],    activities: ['Fellowship', 'September UN Event'] },
      'talent-fragmentation':  { missions: ['Capital Stack for Open Infrastructure', 'AI4PG Research Coalition'], activities: ['Fellowship', 'Co-funded Initiatives'] },
      'compliance-ambiguity':  { missions: ['Multilateral Canonization Inflection', 'Regulatory Mapping Artifact'], activities: ['Advisory & Partnerships', 'Grants (jurisdictional targeting)'] }
    };

    html += '<div class="grid-2">';
    d.constraints.forEach(function(c) {
      var resp = constraintResponses[c.id] || { missions: [], activities: [] };
      html += '<div class="constraint-card">';
      html += '<div class="constraint-header">';
      html += '<div class="constraint-name">' + c.emoji + ' ' + c.name + '</div>';
      html += statusTag(c.status, c.statusColor);
      html += '</div>';
      html += '<div class="constraint-tags">';
      c.types.forEach(function(t) {
        html += '<span class="tag tag-gray">' + t + '</span>';
      });
      html += '</div>';
      html += '<div class="constraint-suppression">' + c.suppression + '</div>';
      html += '<div class="constraint-resolution-label">What resolves it</div>';
      html += '<div class="constraint-resolution" style="margin-bottom:12px;">' + c.resolution + '</div>';
      html += lensCallout('💡', c.institutionalLens);
      if (resp.missions.length) {
        html += '<div class="constraint-response">';
        html += '<div class="constraint-response-label">FA2 Missions &amp; Programs targeting this</div>';
        html += '<div class="constraint-response-tags">';
        resp.missions.forEach(function(m) { html += '<span class="tag tag-blue">' + m + '</span>'; });
        resp.activities.forEach(function(a) { html += '<span class="tag tag-gray">' + a + '</span>'; });
        html += '</div>';
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    return html;
  }

  // ── SECTION: REFERENCE MODELS ───────────────────────────────────────────────

  function models() {
    var html = '';

    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Institutional Intelligence</div>';
    html += '<h1 class="hero-title">Reference Models</h1>';
    html += '<p class="hero-subtitle">Eight organizations that built fields analogous to what FA2 is attempting — each studied for what it got structurally right. Below: what each built, how they built it, and the specific move FA2 can make from their precedent.</p>';
    html += '</div>';

    // ── Executive Synthesis ──────────────────────────────────────────────────
    html += '<div class="section synth-section">';
    html += '<div class="section-eyebrow">Executive Synthesis</div>';
    html += '<h2 class="section-title">How These References Apply to FA2</h2>';
    html += '<p class="section-desc">The 8 institutions and 10 real-world deployments collectively answer three questions that define FA2\'s strategic posture: what kind of organization to be, what success at sovereign scale actually looks like, and the principles that apply across all four opportunity spaces.</p>';

    html += '<div class="grid-3">';
    html += '<div class="synth-block">';
    html += '<div class="synth-block-title">What Kind of Organization</div>';
    html += '<div class="synth-block-body">The institutions collectively define a singular archetype: the <strong>trusted neutral builder</strong>. Not an advocacy organization (RAND\'s lesson), not a vendor (MITRE\'s lesson), not a foundation deploying grants alone (Rockefeller\'s lesson on what field-building actually requires beyond capital). FA2 earns its position by being what no one else can be: technically credible in crypto-native architecture, institutionally trusted by sovereigns, and structurally conflict-free. BIS and MITRE prove this is possible; IAS and SFI prove it requires protecting the work from short-term pressure.</div>';
    html += '</div>';
    html += '<div class="synth-block">';
    html += '<div class="synth-block-title">What Sovereign Scale Looks Like</div>';
    html += '<div class="synth-block-body">The 10 deployments remove all theoretical uncertainty. India Stack (1.4B people), Estonia X-Road (full government data interoperability), Brazil Pix (150M users), and GovStack (replicated across 8 countries) prove open-standard DPI achieves national scale. Gitcoin and Optimism RPGF prove crypto-native PGF mechanisms can allocate real capital at meaningful volume. The question is not <em>whether</em> — it is which architecture, which governance model, and which sequencing. FA2\'s job is to produce that answer.</div>';
    html += '</div>';
    html += '<div class="synth-block">';
    html += '<div class="synth-block-title">Three Cross-Cutting Principles</div>';
    html += '<div class="synth-block-body"><strong>1. Build the prototype first, publish the analysis second</strong> — BISIH and India Stack both produced architecture that became a global reference before any formal standard was adopted. <strong>2. Neutrality is the product</strong> — MITRE and RAND\'s influence derives from the impossibility of accusing them of commercial interest; FA2 must build this structurally. <strong>3. The artifact outlives the funding</strong> — Long Now, OSI, and GovStack all created reference objects that sustained field momentum independently of any single funder.</div>';
    html += '</div>';
    html += '</div>'; // grid-3

    var spaceMappings = [
      {
        space: 'Sovereign DPI', color: 'blue',
        institutions: ['BIS Innovation Hub', 'MITRE', 'RAND'],
        deployments: ['India Stack', 'Estonia X-Road', 'GovStack', 'MOSIP', 'OpenG2P'],
        insight: 'The sovereign DPI stack already exists in fragments. FA2\'s job is to produce the open reference architecture that assembles them — the "mBridge for government services." BIS proves this works; India Stack and Estonia prove it scales to 1B+ users.'
      },
      {
        space: 'AI & Crypto PGF', color: 'purple',
        institutions: ['Rockefeller Foundation', 'Santa Fe Institute', 'IAS'],
        deployments: ['Gitcoin', 'Optimism RPGF', 'Brazil Pix'],
        insight: 'PGF mechanism design is a cross-disciplinary research problem first, a grant program second. SFI\'s workshop model + Rockefeller\'s challenge grant structure + Gitcoin/Optimism\'s live evidence = the design brief for FA2\'s AI4PG research coalition.'
      },
      {
        space: 'Crypto-Native Governance', color: 'green',
        institutions: ['HELENA', 'RAND', 'Long Now Foundation'],
        deployments: ['Optimism RPGF', 'Gitcoin', 'Estonia X-Road'],
        insight: 'Governance legitimacy is built in rooms before it is codified in rules. HELENA\'s curated convening + RAND\'s neutral multi-option analysis + Long Now\'s artifact-anchoring = the strategy for moving crypto governance from experiment to institutional norm.'
      },
      {
        space: 'DePIN Climate Infrastructure', color: 'amber',
        institutions: ['Long Now Foundation', 'Santa Fe Institute', 'Rockefeller Foundation'],
        deployments: ['Helium', 'DIMO', 'Brazil Pix'],
        insight: 'DePIN at climate scale requires the Long Now move: a civilizational-horizon artifact that anchors the case across 4-year political cycles. Helium and DIMO prove the infrastructure model; Rockefeller\'s challenge grant playbook is the funding architecture.'
      }
    ];

    html += '<div class="synth-map">';
    html += '<div class="synth-map-title">Reference Map by Opportunity Space</div>';
    html += '<div class="synth-map-grid">';
    spaceMappings.forEach(function(m) {
      html += '<div class="synth-map-item">';
      html += '<div class="synth-map-space synth-map-space-' + m.color + '">' + m.space + '</div>';
      html += '<div class="synth-map-refs">';
      html += '<div class="synth-map-group"><span class="synth-map-label">Institutions</span>';
      m.institutions.forEach(function(inst) { html += '<span class="tag tag-' + m.color + '">' + inst + '</span>'; });
      html += '</div>';
      html += '<div class="synth-map-group"><span class="synth-map-label">Deployments</span>';
      m.deployments.forEach(function(dep) { html += '<span class="tag tag-gray">' + dep + '</span>'; });
      html += '</div>';
      html += '</div>';
      html += '<div class="synth-map-insight">' + m.insight + '</div>';
      html += '</div>';
    });
    html += '</div>'; // synth-map-grid
    html += '</div>'; // synth-map
    html += '</div>'; // section

    // Institution cards
    html += '<div class="section">';
    html += '<div class="section-eyebrow">8 Curated Institutions</div>';
    html += '<h2 class="section-title">Institutions FA2 Is Learning From</h2>';
    html += '<p class="section-desc">Drawn from a full comparative analysis of 12 field-building organizations. These 8 were selected for direct applicability to FA2\'s four opportunity spaces, program architecture, and strategic constraints.</p>';

    var institutions = [
      {
        name: "BIS Innovation Hub",
        founded: "2019",
        category: "Applied Policy",
        tagline: "Central-bank R&D network — learn by building with sovereigns",
        framework: "For technologies that may eventually be deployed at national scale, hands-on experience is epistemically irreplaceable. BISIH changed the standard from 'publish analysis of what might work' to 'build prototypes and run experiments.' It produces working prototypes, technical reports, and policy summaries — open-source by default — and shares them across all member central banks. 70+ projects, 50+ reports, direct influence on G20 frameworks.",
        fa2label: "FA2 Application · Sovereign DPI & Programmable Treasury",
        fa2: "BISIH is the closest existing analogue to what FA2 is trying to build for sovereign DPI. The move: position FA2 as doing for sovereign digital infrastructure what BISIH does for central bank technology — conducting governed technical experiments on behalf of governments that lack internal capacity, publishing findings openly, and building a network of co-builders. The Sovereign DPI Reference Stack IS the BISIH 'mBridge' — the prototype that becomes the reference architecture."
      },
      {
        name: "MITRE Corporation",
        founded: "1958",
        category: "Applied Policy",
        tagline: "Government-embedded trusted advisor — honest broker at systems scale",
        framework: "MITRE invented a structurally new form: the nonprofit that works exclusively for government, holds no commercial interests, and can therefore occupy the 'honest broker' position that no vendor or academic institution can credibly claim. Trust is built by construction — MITRE literally cannot profit from its recommendations. This unlocks access, candor, and long-term relationships that no fee-for-service consultant can replicate. Its standards (CVE, ATT&CK) were adopted globally not because MITRE mandated them, but because they solved coordination problems.",
        fa2label: "FA2 Application · Regulatory Moats & Trust Deficit constraints",
        fa2: "The two hardest FA2 constraints — Institutional Trust Deficit and Regulatory Moats — are exactly the problems MITRE was designed to solve. The move: establish FA2's 'honest broker' credentials explicitly and structurally. No equity in the projects it advises. No commercial DPI products. Credibility through structural non-conflict. The first FA2 publications should be comparative, multi-option analyses — not advocacy — so any sovereign can adopt them regardless of political orientation."
      },
      {
        name: "RAND Corporation",
        founded: "1948",
        category: "Applied Policy",
        tagline: "Policy analysis without advocacy — credibility through neutrality",
        framework: "RAND invented modern policy analysis by separating analysis from advocacy. It produces options and evidence; it does not campaign for specific outcomes. This makes its analysis usable by actors across the political spectrum — Republican and Democrat administrations alike have relied on RAND. Paradoxically, analysis-without-advocacy is more influential than advocacy-with-analysis, because it can be adopted by anyone. A 75-year published corpus now functions as institutional memory and compound credibility.",
        fa2label: "FA2 Application · Political Risk Asymmetry & Multilateral Engagement",
        fa2: "FA2 needs the RAND posture for its most politically charged work — crypto governance, sovereign fiscal systems, and multilateral codification. The move: publish rigorous multi-option analyses (e.g., 'Three models for programmable treasury deployment') that sovereign actors can cite without political risk. Reserve FA2's own voice for clear field-defining statements, not policy preferences. Scenario planning and structured exercises with policymakers (a RAND invention) are direct tools for FA2's sovereign partner work."
      },
      {
        name: "Rockefeller Foundation",
        founded: "1913",
        category: "High-Trust Network",
        tagline: "Deliberate field creation — fund the proof, then fund the spread",
        framework: "Rockefeller didn't fund existing organizations. It asked: what field needs to exist that doesn't? Then it funded the institutions, trained the practitioners, published the standards, and created the associations — systematically building the infrastructure of a new discipline. The challenge grant (2:1 or 3:1 matching from other sources) extended capital while building the diverse funding base that makes a field self-sustaining. Green Revolution, modern medical education, public health, social science as disciplines — all Rockefeller field creations.",
        fa2label: "FA2 Application · Grants Architecture & Capital Leverage",
        fa2: "FA2's 4-stage capital stack IS the Rockefeller methodology operationalized: fund the proof (Seed), spread through competition (Challenge Prize), deploy at sovereign scale (Pilot), then mobilize co-capital (Blended Finance). The 1.5–2× leverage target is the challenge grant model. The specific Rockefeller move to make now: for each of the 4 opportunity spaces, ask explicitly — what institution needs to exist that doesn't? What training program? What standard? Then fund those gaps, not existing organizations."
      },
      {
        name: "Institute for Advanced Study",
        founded: "1930",
        category: "Field Research",
        tagline: "Protected sanctuary — long-horizon work insulated from short-term pressure",
        framework: "IAS invented the pure research sanctuary: a place with no teaching, no departmental politics, no grant applications, no commercial demands. Its founding insight was that some of the most important intellectual work requires freedom from all institutional friction, and creating those conditions IS the field-building act. Prestige compounds: early investments in intellectual quality create self-reinforcing excellence signals. Einstein, von Neumann, Gödel — IAS's output was not despite its freedom from obligation, but because of it.",
        fa2label: "FA2 Application · Fellowship Design & Year 5 Arc",
        fa2: "The FA2 Fellowship should be explicitly IAS-modeled: protected time, cross-disciplinary peers, no deliverable pressure, no output requirement except the work itself. The selection criterion should signal this: invite people because of what they've done, not what they'll produce for FA2. The compounding prestige dynamic means early cohort quality is disproportionately important. The Year 5 irreversibility goal — FA2's field identity self-sustaining beyond PL — requires building the kind of alumni institution that IAS has: a network whose members would defend the institution's importance independently."
      },
      {
        name: "Santa Fe Institute",
        founded: "1984",
        category: "Field Research",
        tagline: "Transdisciplinary convening — cross-disciplinary synthesis as institutional identity",
        framework: "SFI created complexity science by building the container for cross-disciplinary synthesis that no university could organize. Its insight: the most important questions are at disciplinary boundaries, and normal academic institutions systematically punish boundary-crossing work. SFI's workshop model (15–30 people, 2–5 days, cross-disciplinary, no pre-determined conclusions) is among the highest-ROI intellectual investments available. An external faculty of 150 researchers extends reach far beyond the 20-person permanent core.",
        fa2label: "FA2 Application · AI4PG Research Coalition & Crypto Governance",
        fa2: "FA2's talent fragmentation constraint — sovereign policy, cryptography, governance mechanism design, and DPI engineering in completely separate communities — is exactly the problem SFI was built to solve. The move: design the AI4PG research coalition explicitly as an SFI-style cross-disciplinary workshop series, not a traditional research program. Bring mechanism designers, political economists, cryptographers, and DeFi builders into the same room around a specific question. The Applied Complexity Network model (institutional members paying for early access) is also directly applicable as a revenue structure for FA2's practitioner network."
      },
      {
        name: "HELENA",
        founded: "2015",
        category: "High-Trust Network",
        tagline: "Curated merit convening — decision-grade rooms, not conferences",
        framework: "HELENA built the model of merit-based high-stakes convening: selecting participants exclusively by achievement and genuine expertise (not title or wealth), creating trust conditions (Chatham House rule, small groups, structured challenge question), and focusing on civilizational-scale problems. The resulting conversations produce insights that no individual in the room could reach alone and no formal institutional process could safely surface. Its 100-member network is the product — each new member adds value to all existing members.",
        fa2label: "FA2 Application · Convenings, Dinners & UN Event",
        fa2: "FA2's convening strategy should be explicitly HELENA-modeled: every gathering curated by consequence, not credential. The UN September event in particular should follow the HELENA format — 30–50 people maximum, challenge question framing, pre-briefing materials, Chatham House rule, structured small groups. The goal is documented decisions, not documented attendance. The Fellowship alumni network, as it matures, becomes FA2's equivalent of HELENA's '100-member roster' — a curated, trusted network that can be rapidly convened around specific sovereign challenges."
      },
      {
        name: "Long Now Foundation",
        founded: "1996",
        category: "Field Research",
        tagline: "Long-horizon framing — material anchors for civilizational time horizons",
        framework: "Long Now's insight: cultural change requires material anchors. Aspiring to think long-term doesn't produce long-term thinking — a physical clock engineered to outlast civilization changes the emotional and conceptual frame of everyone who encounters it. The artifact creates the conversation that creates the community that creates the field. The time-framing innovation (writing '01996,' speaking of '10,000 years') is a linguistic technology for shifting perception. Abstract intellectual work requires material instantiation to propagate into culture.",
        fa2label: "FA2 Application · DePIN Climate Arc & 5–10yr Vision",
        fa2: "The DePIN Climate inflection hypothesis and the Year 5 'irreversible shifts' framing both require the Long Now move: producing material artifacts that anchor long-horizon thinking for funders and sovereigns who operate on 4-year cycles. The Sovereign DPI Reference Stack is one such artifact — a published, open, forkable architecture that exists as a permanent field reference. FA2 should ask: what is our '10,000-year clock'? The candidate answer is the Reference Stack itself — the artifact that, once published, makes the field's vocabulary and architecture concrete regardless of who funds it next."
      }
    ];

    html += '<div class="grid-2">';
    institutions.forEach(function(inst, i) {
      html += '<div class="model-card">';
      html += '<div class="model-card-top">';
      html += '<div>';
      html += '<div class="model-name">' + inst.name + '</div>';
      html += '<div class="model-tagline">' + inst.tagline + '</div>';
      html += '</div>';
      html += '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">';
      html += '<span class="tag tag-gray">' + inst.category + '</span>';
      html += '<span style="font-size:11px;color:var(--gray-400);">est. ' + inst.founded + '</span>';
      html += '</div>';
      html += '</div>';
      html += '<div class="model-section-label">The Model</div>';
      html += '<div class="model-framework">' + inst.framework + '</div>';
      html += '<div class="model-fa2-label">' + inst.fa2label + '</div>';
      html += '<div class="model-fa2">' + inst.fa2 + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // Real-World DPI Deployments
    html += '<div class="section" style="background:var(--gray-50);">';
    html += '<div class="section-eyebrow">Live Evidence</div>';
    html += '<h2 class="section-title">10 Real-World Deployments & Initiatives</h2>';
    html += '<p class="section-desc">Active deployments of DPI, crypto-native public goods mechanisms, and DePIN networks — each studied for what it proves, what it teaches, and the specific move FA2 can make from the evidence it provides.</p>';
    html += '<div class="grid-2">';

    FA2_DATA.realWorldExamples.forEach(function(ex) {
      var colorMap = { blue: 'blue', purple: 'purple', amber: 'amber' };
      var tagColor = colorMap[ex.categoryColor] || 'gray';
      html += '<div class="model-card rw-card">';
      html += '<div class="model-card-top">';
      html += '<div>';
      html += '<div class="model-name">' + ex.name + '</div>';
      html += '<div class="model-tagline">' + ex.tagline + '</div>';
      html += '</div>';
      html += '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">';
      html += '<span class="tag tag-' + tagColor + '">' + ex.category + '</span>';
      html += '<span style="font-size:11px;color:var(--gray-400);">' + ex.country + '</span>';
      html += '</div>';
      html += '</div>';
      html += '<div class="rw-stats">';
      ex.stats.forEach(function(s) {
        html += '<div class="rw-stat"><span class="rw-stat-dot">•</span>' + s + '</div>';
      });
      html += '</div>';
      html += '<div class="model-section-label">What It Is</div>';
      html += '<div class="model-framework">' + ex.description + '</div>';
      html += '<div class="model-fa2-label">' + ex.fa2label + '</div>';
      html += '<div class="model-fa2">' + ex.fa2 + '</div>';
      html += '<div class="rw-sources">';
      html += '<a class="rw-source-link" href="' + ex.source + '" target="_blank" rel="noopener">↗ ' + ex.sourceLabel + '</a>';
      html += '<a class="rw-source-link" href="' + ex.altSource + '" target="_blank" rel="noopener">↗ ' + ex.altSourceLabel + '</a>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';
    html += '</div>';

    // Playbook Chapters
    html += '<div class="section section-alt">';
    html += '<div class="section-eyebrow">Strategic Playbook</div>';
    html += '<h2 class="section-title">5 Applicable Chapters</h2>';
    html += '<p class="section-desc">From the full 8-chapter playbook synthesized from the institutional analysis — these five are directly operative for FA2\'s current phase. Click each to expand the key principles and the FA2-specific application.</p>';

    var chapters = [
      {
        num: "Chapter 1",
        title: "Positioning & Identity",
        subtitle: "The quiet authority archetype — what you are before what you do",
        refs: ["BIS Innovation Hub", "MITRE", "RAND", "IAS"],
        principles: [
          "Define your singular function as a complete sentence — a verb, an object, and a constituency — and refuse all activities that don't serve it",
          "Prestige is a byproduct of quality, not a goal to pursue directly; the pursuit of recognition typically undermines the work that would generate it",
          "Structural integrity (how you are organized, who funds you, whether you have conflicts of interest) is more important than reputational management",
          "The quiet authority posture requires institutional confidence: the willingness to be misunderstood in the short term in favor of being recognized in the long term"
        ],
        fa2: "FA2's positioning question: what is the singular, non-negotiable thing that FA2 is? A candidate: FA2 is the program that builds the open infrastructure layer for sovereign fiscal and governance systems — operating at the intersection of crypto-native technology and state capacity, with an explicit mandate to produce replicable, vendor-neutral artifacts. Every activity should be testable against this: does this reflect what FA2 actually is, or only what it wants to be seen as?"
      },
      {
        num: "Chapter 2",
        title: "Convening Architecture",
        subtitle: "How to design gatherings that move fields — not conferences",
        refs: ["HELENA", "Bellagio Center", "Santa Fe Institute"],
        principles: [
          "Design for thinking, not networking: the goal is intellectual progress on a defined question, not relationship management",
          "Small is almost always better: 20–30 people who need to think together will outperform 200 people who need to be impressed",
          "Chatham House rule is the single most important structural feature — without it, participants optimize for public impression rather than honest dialogue",
          "Build a portfolio of convening modes — retreat, workshop, forum, public series — each calibrated for a different function in the field-building ecosystem",
          "The pre-work matters as much as the convening itself: invest in framing the challenge question and preparing participants before they arrive"
        ],
        fa2: "FA2 should design a distinct convening architecture for each opportunity space: (1) an annual Sovereign DPI convening with ministers, multilateral reps, and technical partners; (2) a quarterly AI4PG mechanism design circle; (3) a crypto governance practitioner workshop series; (4) the September UN Event as the flagship decision room. Each needs its own format, selection criterion, and output structure — not a single 'FA2 conference' model applied to all four."
      },
      {
        num: "Chapter 3",
        title: "Network Design",
        subtitle: "Membership, trust, and access — building the right room",
        refs: ["HELENA", "IAS", "Santa Fe Institute", "Rockefeller Foundation"],
        principles: [
          "Network quality degrades when selection criteria are relaxed — maintain standards even as the institution grows",
          "Trust is the unit of value in high-trust networks; every institutional practice should either build trust or be redesigned",
          "Cross-sector density — people who connect across disciplines, sectors, or geographies — is rarer and more valuable than within-sector depth",
          "The value proposition for network members must be explicit and credible: what do they get that they cannot get elsewhere?"
        ],
        fa2: "FA2's network should span four types: technical implementers (engineers, protocol designers), policy practitioners (government digital officers, regulators, multilateral staff), capital allocators (DFI officers, philanthropic program officers, DAO treasury managers), and intellectual leaders (researchers, academics, policy analysts). A curated fellowship cohort of 15–20 per year, sustained over 5 years, creates a 75–100 person high-trust network with global reach across all four. This IS the HELENA '100-member roster' — and the most durable FA2 asset."
      },
      {
        num: "Chapter 4",
        title: "Research Methodology",
        subtitle: "What to study and how — epistemic standards for field-builders",
        refs: ["BIS Innovation Hub", "MITRE", "RAND", "Santa Fe Institute"],
        principles: [
          "Build your research program around your unique epistemic position: what can you know that no other institution can, given your access, mandate, and relationships?",
          "Hands-on technical experimentation produces policy knowledge that analysis alone cannot — invest in a 'lab' function alongside the 'think' function",
          "Methodology itself is a field-building contribution: RAND, MITRE, and SFI each built their fields partly by introducing new research methods that others then adopted",
          "Maintain epistemic standards even under pressure to produce 'positive' findings — authority derives from known willingness to report inconvenient conclusions"
        ],
        fa2: "FA2's unique epistemic position: the intersection of Protocol Labs' crypto-native technical work, genuine expertise in sovereign infrastructure and governance, and relationships spanning Global South policy communities and frontier tech research. No other institution currently occupies all of these simultaneously. The research methodology question: what can FA2 know that no one else can? The BIS Innovation Hub answer — build the prototype, document the failure modes — is the right model for the Sovereign DPI Reference Stack and programmable treasury pilots."
      },
      {
        num: "Chapter 5",
        title: "Timeline & Sequencing",
        subtitle: "Field-building arcs — what happens when, and why order matters",
        refs: ["Rockefeller Foundation", "IAS", "RAND", "BIS Innovation Hub"],
        principles: [
          "Field-building is a 10–30 year project; design the institution for that time horizon even if early milestones are annual",
          "Sequence matters more than speed: establishing identity before programs, anchor relationships before network expansion — this is the correct order even under pressure to move faster",
          "The first defining publication or convening is disproportionately important — it sets the standard for everything that follows; invest accordingly",
          "The moment of field-defining influence is usually preceded by years of consistent, unrecognized quality work — sustain through that period"
        ],
        fa2: "FA2's sequencing maps directly to the Roadmap arc: Year 1 (establish identity, publish first defining artifact — the Reference Stack — launch inaugural Fellowship, secure 2 sovereign partners). Year 2–3 (deepen recurring programs, formalize multilateral engagement). Year 3–5 (transition from program-building to field influence — FA2's frameworks become reference documents adopted by practitioners, policymakers, and funders without FA2 needing to be in the room). The moment FA2's language appears in a World Bank DPI guidance document without attribution is when sequencing has worked."
      }
    ];

    chapters.forEach(function(ch, i) {
      html += '<div class="chapter-card">';
      html += '<div class="chapter-header' + (i === 0 ? ' open' : '') + '">';
      html += '<div class="chapter-title-block">';
      html += '<div class="chapter-number">' + ch.num + '</div>';
      html += '<div class="chapter-title">' + ch.title + '</div>';
      html += '<div class="chapter-subtitle">' + ch.subtitle + '</div>';
      html += '</div>';
      html += '<span class="chapter-arrow">▾</span>';
      html += '</div>';
      html += '<div class="chapter-body' + (i === 0 ? ' open' : '') + '">';
      html += '<div class="institution-refs">';
      ch.refs.forEach(function(r) {
        html += '<span class="tag tag-blue">' + r + '</span>';
      });
      html += '</div>';
      html += '<ul class="chapter-principles">';
      ch.principles.forEach(function(p) {
        html += '<li>' + p + '</li>';
      });
      html += '</ul>';
      html += '<div class="chapter-fa2-block">';
      html += '<div class="chapter-fa2-block-label">FA2 Application</div>';
      html += '<div class="chapter-fa2-block-text">' + ch.fa2 + '</div>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';

    return html;
  }

  // ── SECTION: TIMELINE (GANTT) ────────────────────────────────────────────────

  function timeline() {
    var g = FA2_DATA.gantt;
    var html = '';

    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Programs &amp; Missions · 2026–2030</div>';
    html += '<h1 class="hero-title">Strategic Timeline</h1>';
    html += '<p class="hero-subtitle">Five-year view of FA2\'s program activities and ARIA-style missions — from Foundation (Year 1) to Irreversible Shifts (Year 5). Current period: Q1 2026.</p>';
    html += '</div>';

    html += '<div class="section">';
    html += '<div class="section-eyebrow">Program Activities</div>';
    html += '<h2 class="section-title">When Programs Run</h2>';
    html += '<p class="section-desc">Active programs and their operational timelines across the 5-year arc. Activities are ongoing unless stage-gated or milestone-dependent.</p>';
    html += buildGanttLegend();
    html += buildGanttTable(g.programs, g.yearLabels, g.quarters);
    html += '</div>';

    html += '<div class="section" style="background:var(--gray-50);">';
    html += '<div class="section-eyebrow">ARIA-Style Missions</div>';
    html += '<h2 class="section-title">Mission Deployment Windows</h2>';
    html += '<p class="section-desc">Each ARIA-style mission is sequenced across the 3-phase roadmap arc. Phases indicate when missions move from design to active sovereign deployment.</p>';
    html += buildGanttTable(g.missions, g.yearLabels, g.quarters);
    html += '</div>';

    return html;
  }

  function buildGanttLegend() {
    return '<div class="gantt-legend">' +
      '<span class="gantt-legend-item"><span class="gantt-legend-dot" style="background:var(--blue-600)"></span>Fellowship &amp; Convenings</span>' +
      '<span class="gantt-legend-item"><span class="gantt-legend-dot" style="background:var(--green-700)"></span>Grants (stage-gated)</span>' +
      '<span class="gantt-legend-item"><span class="gantt-legend-dot" style="background:var(--purple-700)"></span>Advisory &amp; Co-funded</span>' +
      '<span class="gantt-legend-item"><span class="gantt-legend-dot" style="background:var(--amber-700)"></span>Events / DePIN Climate</span>' +
      '<span class="gantt-legend-item"><span class="gantt-legend-marker"></span>Point-in-time event</span>' +
    '</div>';
  }

  function buildGanttTable(items, yearLabels, totalQ) {
    var html = '<div class="gantt-outer">';

    // Year header
    html += '<div class="gantt-header-row">';
    html += '<div class="gantt-name-col"></div>';
    html += '<div class="gantt-bars-col">';
    yearLabels.forEach(function(y) {
      html += '<div class="gantt-year-block">';
      html += '<div class="gantt-year-title">' + y.year + '</div>';
      html += '<div class="gantt-year-sub">' + y.label + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // Quarter tick row
    html += '<div class="gantt-tick-row">';
    html += '<div class="gantt-name-col"></div>';
    html += '<div class="gantt-bars-col">';
    for (var t = 0; t < totalQ; t++) {
      var isNow = (t === 0);
      html += '<div class="gantt-tick-cell' + (isNow ? ' gantt-tick-now' : '') + '">Q' + ((t % 4) + 1) + '</div>';
    }
    html += '</div>';
    html += '</div>';

    // Data rows
    items.forEach(function(item) {
      html += '<div class="gantt-data-row">';
      html += '<div class="gantt-name-col">';
      html += '<div class="gantt-item-name">' + item.name + '</div>';
      if (item.note) html += '<div class="gantt-item-note">' + item.note + '</div>';
      if (item.opportunitySpace) html += '<div class="gantt-item-space">' + item.opportunitySpace + '</div>';
      html += '</div>';
      html += '<div class="gantt-bars-col">';
      html += '<div class="gantt-track">';

      // Grid cells (background)
      for (var q = 0; q < totalQ; q++) {
        var nowClass = (q === 0) ? ' gantt-cell-now' : '';
        html += '<div class="gantt-cell' + nowClass + '"></div>';
      }

      if (item.markers) {
        // Point markers (UN Event)
        item.markers.forEach(function(mq) {
          var pct = ((mq - 1) / totalQ * 100).toFixed(2);
          html += '<div class="gantt-marker-diamond" style="left:calc(' + pct + '% + ' + (100/totalQ/2).toFixed(2) + '% - 6px)"></div>';
        });
      } else {
        var leftPct = ((item.startQ - 1) / totalQ * 100).toFixed(2);
        var widthPct = ((item.endQ - item.startQ + 1) / totalQ * 100).toFixed(2);
        var colorMap = { blue: 'var(--blue-600)', green: 'var(--green-700)', purple: 'var(--purple-700)', amber: 'var(--amber-700)' };
        var barColor = colorMap[item.color] || 'var(--blue-600)';
        html += '<div class="gantt-bar" style="left:' + leftPct + '%;width:' + widthPct + '%;background:' + barColor + ';">';
        if (item.phase) html += '<span class="gantt-bar-text">' + item.phase + '</span>';
        html += '</div>';
      }

      html += '</div>'; // gantt-track
      html += '</div>'; // gantt-bars-col
      html += '</div>'; // gantt-data-row
    });

    html += '</div>'; // gantt-outer
    return html;
  }

  // ── SECTION: BIBLIOGRAPHY ────────────────────────────────────────────────────

  function bibliography() {
    var html = '';
    var bib = FA2_DATA.bibliography;

    var typeColors = {
      'Official': 'blue', 'Academic': 'purple', 'Research': 'blue',
      'Report': 'green', 'Regulation': 'red', 'Data': 'amber',
      'Media': 'gray', 'Internal': 'gray', 'Reference': 'blue'
    };

    html += '<div class="hero">' + hexBg();
    html += '<div class="hero-eyebrow">Sources &amp; References</div>';
    html += '<h1 class="hero-title">Bibliography</h1>';
    html += '<p class="hero-subtitle">All data, statistics, and institutional references used across this dashboard — organized by domain. Sources are official government bodies, peer-reviewed research, institutional reports, and reputable financial/policy media.</p>';
    html += '</div>';

    html += '<div class="section">';
    html += '<div class="section-eyebrow">All Sources</div>';
    html += '<h2 class="section-title">' + countBibEntries(bib) + ' Sources Across ' + bib.length + ' Categories</h2>';
    html += '<p class="section-desc">Click any source to open it directly. Internal documents are available from FA2 co-leads on request.</p>';

    bib.forEach(function(cat) {
      html += '<div class="bib-category">';
      html += '<div class="bib-cat-header">';
      html += '<div class="bib-cat-name">' + cat.category + '</div>';
      html += '<div class="bib-cat-count">' + cat.entries.length + ' source' + (cat.entries.length !== 1 ? 's' : '') + '</div>';
      html += '</div>';
      html += '<div class="bib-entries">';
      cat.entries.forEach(function(e) {
        var tColor = typeColors[e.type] || 'gray';
        html += '<div class="bib-entry">';
        if (e.url) {
          html += '<a class="bib-title" href="' + e.url + '" target="_blank" rel="noopener">' + e.title + ' ↗</a>';
        } else {
          html += '<span class="bib-title bib-title-internal">' + e.title + '</span>';
        }
        html += '<span class="tag tag-' + tColor + ' bib-type-tag">' + e.type + '</span>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';
    return html;
  }

  function countBibEntries(bib) {
    return bib.reduce(function(acc, cat) { return acc + cat.entries.length; }, 0);
  }

  // ── Public API ───────────────────────────────────────────────────────────────
  return {
    guide:        guide,
    overview:     overview,
    roadmap:      roadmap,
    success:      success,
    howwework:    howwework,
    diagnosis:    diagnosis,
    models:       models,
    timeline:     timeline,
    bibliography: bibliography
  };

})();
