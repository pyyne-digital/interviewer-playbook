/**
 * PYYNE PLAYBOOK — Content Configuration
 * =========================================
 * This file contains all the text content for this specific playbook.
 * To create a new playbook, duplicate this file and edit the values below.
 *
 * Template version: 1.0
 * Playbook: Interviewer Playbook
 */

const PLAYBOOK_CONFIG = {

  /* ── Identity ─────────────────────────────────────── */
  meta: {
    title: "Interviewer Playbook",
    description: "A practical guide for conducting consistent, high-quality technical interviews at Pyyne.",
    version: "v1.0",
    lastUpdated: "June 2025",
    tags: ["Technical Hiring", "Engineering", "Data", "Global"],
    htmlTitle: "Pyyne · Interviewer Playbook",
    favicon: "📋",
  },

  /* ── Sidebar Navigation ────────────────────────────── */
  // Each nav item maps to a section id defined in PLAYBOOK_SECTIONS below
  nav: [
    {
      label: "Getting Started",
      items: [
        { id: "overview",    label: "Overview",         icon: "book" },
        { id: "purpose",     label: "Purpose & Scope",  icon: "target" },
      ]
    },
    {
      label: "The Interview",
      items: [
        { id: "before",      label: "Before",           icon: "clock" },
        { id: "during",      label: "During",           icon: "microphone" },
        { id: "after",       label: "After",            icon: "clipboard-check" },
      ]
    },
    {
      label: "Advanced Topics",
      items: [
        { id: "ai-tools",    label: "AI & Tools",       icon: "robot" },
        { id: "evaluation",  label: "Evaluation Matrix", icon: "chart-bar" },
      ]
    },
    {
      label: "Team Knowledge",
      items: [
        { id: "learnings",   label: "Team Learnings",   icon: "bulb" },
        { id: "changelog",   label: "Changelog",        icon: "history" },
      ]
    },
  ],

  /* ── Sections ──────────────────────────────────────── */
  sections: {

    overview: {
      eyebrow: "Pyyne Digital · Tech Hiring",
      title: "Interviewer Playbook",
      subtitle: "A living guide built from real team experience — for conducting technical interviews with consistency, clarity, and quality.",
      hero: {
        eyebrow: "You are the first impression",
        title: "Every interview reflects who Pyyne is as a company.",
        body: "This playbook codifies what the team has learned, so that knowledge transfers to every interviewer — new or experienced. Use it as a reference before, during, and after each interview."
      },
      meta: ["Technical Interviews", "Live Coding", "Take-Home", "Data Roles"],
      overviewCards: [
        {
          iconClass: "icon-teal",
          iconSvg: "target",
          title: "Why this playbook exists",
          items: [
            "Standardize interview quality without making it rigid",
            "Preserve and transfer accumulated team knowledge",
            "Ensure a positive, respectful candidate experience",
            "Evaluate consistently and reduce interviewer bias"
          ]
        },
        {
          iconClass: "icon-blue",
          iconSvg: "users",
          title: "Who it is for",
          items: [
            "New interviewers joining Pyyne",
            "Experienced interviewers looking for a reference",
            "Anyone conducting technical tests (live coding, take-home, data challenges)",
            "Hiring managers aligning on standards"
          ]
        }
      ],
      timeline: [
        { label: "Preparation", badge: { text: "~15 min before", cls: "badge-gray" }, body: "Review the candidate's profile, define the agenda, set up tools (CoderPad, Google Meet with Gemini, take-home link)." },
        { label: "Opening & rapport", badge: { text: "~5–10 min", cls: "badge-teal" }, body: "Personal intro, brief Pyyne context, icebreaker non-technical questions. Explain the session timeline and time-boxing." },
        { label: "Technical assessment", badge: { text: "~30–40 min", cls: "badge-blue" }, body: "Structured behavioral questions, live coding or take-home presentation, follow-up questions to probe reasoning." },
        { label: "Candidate Q&A", badge: { text: "~5 min", cls: "badge-amber" }, body: "Give the candidate space to ask questions. Write them down — they reveal genuine interest and maturity." },
        { label: "Wrap-up & next steps", badge: { text: "~2 min", cls: "badge-gray" }, body: "State the expected timeline for feedback. Never leave candidates without a clear next step." },
        { label: "Notes & debriefing", badge: { text: "Immediately after", cls: "badge-teal" }, body: "Complete your evaluation while the session is fresh. Share initial impressions with the team." }
      ]
    },

    purpose: {
      eyebrow: "Foundation",
      title: "Purpose & Scope",
      subtitle: "What this playbook covers, and what falls outside of it.",
      alert: {
        type: "alert-success",
        icon: "info",
        body: "<strong>This is a living document.</strong> It reflects the current best practices of the Pyyne tech team. Every interviewer is encouraged to contribute learnings — see the Team Learnings section."
      },
      blocks: [
        {
          iconClass: "icon-teal", iconSvg: "scope",
          title: "In scope",
          items: [
            "Technical interview sessions (software engineering, data science, data engineering)",
            "Live coding interviews via CoderPad",
            "Take-home test reviews and presentations",
            "Behavioral and profile-fit questions within technical interviews",
            "Post-interview evaluation and team debriefing"
          ]
        },
        {
          iconClass: "icon-amber", iconSvg: "scope-off",
          title: "Out of scope",
          items: [
            "HR screening calls and cultural fit interviews (covered by People team)",
            "Salary negotiation and offer processes",
            "Onboarding after hiring",
            "Role-specific deep technical assessments (handled per role brief)"
          ]
        }
      ]
    },

    before: {
      eyebrow: "Phase 1",
      title: "Before the Interview",
      subtitle: "Preparation is half the interview. The more structured your prep, the more bandwidth you have to actually listen.",
      checklist: [
        "Read the candidate's CV and any previous evaluation notes",
        "Understand the role and the specific competencies to assess",
        "Prepare your behavioral questions (STAR framework)",
        "Set up the testing tool — CoderPad session, take-home link, or slide link",
        "Enable Gemini AI in Google Meet to auto-capture the discussion summary",
        "Open a blank notes doc for key observations and impressions",
        "Block 15 min before to review — do not enter the call rushed"
      ],
      formats: [
        {
          dot: "#679747",
          title: "Live coding",
          desc: "Real-time coding in CoderPad. Best for evaluating problem-solving and reasoning under pressure. Use follow-up questions throughout.",
          note: "Tip: ask candidates to explain their thinking before coding if they get stuck."
        },
        {
          dot: "#99BA82",
          title: "Take-home test",
          desc: "Greater autonomy for the candidate — reported as a better experience. Deliveries tend to be richer. Requires more setup time than CoderPad.",
          note: "Tip: best results come when the brief is clear about what will be evaluated."
        },
        {
          dot: "#B1CAA0",
          title: "Case presentation (Data roles)",
          desc: "Candidate completes an analysis or data viz exercise and presents it live. Evaluates analytical thinking, business reasoning, and storytelling.",
          note: "Recommended addition for DS/DE roles alongside live coding."
        }
      ],
      roleNote: {
        title: "Adapting to the role",
        items: [
          "<strong>Data Science / Data Engineering:</strong> consider adding a take-home analysis prior to live coding, presented during the session",
          "<strong>Software Engineering:</strong> be explicit upfront whether AI tools are allowed or not",
          "<strong>All roles:</strong> this stage evaluates technical profile — not cultural fit. Other stages cover that. Keep profile-fit probing brief."
        ]
      }
    },

    during: {
      eyebrow: "Phase 2",
      title: "During the Interview",
      subtitle: "The conversation is as important as the test result. How you run the session shapes what you actually see.",
      openingCard: {
        title: "Opening — the first minutes matter",
        items: [
          "Introduce yourself and briefly describe Pyyne and the tech team — we are the candidate's first impression of the engineering culture",
          "Start with non-technical questions to help the candidate 'come out of their shell' before the pressure begins",
          "Explain the session timeline and time-boxing for each stage at the very start — candidates feel more in control when they know what's coming",
          "Use casual technical profile questions as a warm-up (e.g., differences between a consultant and a developer mindset)"
        ]
      },
      conversationCard: {
        title: "Keep it conversational, not interrogative",
        items: [
          "Conversational interviews capture candidates' real attitude better than rigid formats",
          "Use structured behavioral questions (STAR method) to probe reasoning depth",
          "Ask follow-up questions — they reveal depth of thinking and communication quality",
          "Prompt reflection throughout the coding: good candidates can periodically update their reasoning — a signal of good team communication"
        ]
      },
      stuckCard: {
        title: "Candidate stuck during live coding?",
        body: "Ask them to explain their thought process out loud <em>before</em> translating it into code. This helps them:",
        items: ["Organize their reasoning", "Communicate their approach more clearly", "Regain confidence and momentum"]
      },
      aiSuspectCard: {
        title: "Suspicious behavior in a no-AI test?",
        body: "If AI tools are not permitted and you notice suspicious patterns (e.g., repeatedly looking toward a second screen while coding):",
        items: [
          "Ask follow-up questions about the candidate's code and their reasoning process",
          "Review the interview statistics available in CoderPad after the session"
        ]
      },
      notesCard: {
        title: "Taking notes during the interview",
        body: "Enable Gemini AI in Google Meet to capture an automatic session summary. This frees you to stay fully engaged with the candidate. Use your manual notes only for:",
        pills: ["Overall impressions", "Behavioral observations", "Red flags or highlights", "Questions the candidate asked"]
      }
    },

    after: {
      eyebrow: "Phase 3",
      title: "After the Interview",
      subtitle: "What happens in the 30 minutes after the call shapes the quality of the hiring decision.",
      alert: {
        type: "alert-warning",
        icon: "clock",
        body: "<strong>Memory fades fast.</strong> Complete your evaluation notes within 30 minutes of the session — detail and accuracy drop significantly after that."
      },
      debriefCard: {
        title: "Team debriefing",
        items: [
          "Share detailed notes to support the collective discussion",
          "Don't wait for the formal debrief — send initial impressions in the team channel",
          "Highlight both strengths and open questions or inconsistencies you noticed"
        ]
      },
      feedbackCard: {
        title: "Candidate feedback",
        items: [
          "Always inform the candidate of the expected response timeline at the end of the interview",
          "Honor the timeline you stated — it directly reflects Pyyne's reputation",
          "Even rejection messages should be delivered with respect and care"
        ]
      }
    },

    "ai-tools": {
      eyebrow: "Advanced",
      title: "AI & Tools",
      subtitle: "How to work with modern tooling in the interview process — as an interviewer and as an evaluator.",
      alert: {
        type: "alert-warning",
        icon: "warning",
        body: "<strong>The market has changed.</strong> Blocking AI in tests may no longer be the most relevant approach to evaluate how candidates will actually work. The team has identified this gap — see the Team Learnings section."
      },
      aiAllowedCard: {
        title: "When AI is permitted in the test",
        items: [
          "Evaluate <em>how</em> the candidate uses AI, not just whether they use it",
          "Ask the candidate to explain and justify the generated code",
          "Applied example (team input): instead of blocking AI in the C# challenge, allow it and ask for a REST API in 30 min — evaluates technical decision-making + AI usage",
          "For modern roles, efficient use of AI tools is itself a competency worth evaluating"
        ]
      },
      tools: [
        {
          iconClass: "icon-teal", iconSvg: "brand-google",
          title: "Gemini in Google Meet",
          body: "Enable before the call to capture an automatic session summary. This frees you to focus on the candidate instead of transcribing the conversation. Manual notes are for impressions and behavioral cues only."
        },
        {
          iconClass: "icon-purple", iconSvg: "code",
          title: "CoderPad",
          body: "After each live coding session, review the interview statistics available in CoderPad — especially in cases of suspicious behavior. The data helps inform post-interview discussions objectively."
        }
      ],
      dataRolesCard: {
        title: "Tests for Data roles (DS / DE)",
        body: "For Data Science and Data Engineering, live coding alone may not capture the full competency set. Consider:",
        items: [
          "Take-home analysis or data viz exercise <em>before</em> live coding, presented during the session",
          "Evaluates: analytical thinking, visualization, business reasoning, and data storytelling",
          "For Data Engineering: more complex tests that allow search and AI usage, simulating real work conditions"
        ]
      }
    },

    evaluation: {
      eyebrow: "Reference",
      title: "Evaluation Matrix",
      subtitle: "Use this framework to structure your post-interview assessment. Fill it out while the session is still fresh.",
      table: [
        { dim: "Technical reasoning",  what: "Problem approach, solution structure, design choices, trade-off awareness",    signal: "Clearly explains trade-offs; considers alternatives" },
        { dim: "Communication",        what: "Clarity of explanation, ability to update reasoning, response to follow-ups",  signal: "Thinks out loud; adapts language to context" },
        { dim: "Authenticity",         what: "Consistency between warm-up and technical section",                             signal: "Maintains genuine posture under pressure" },
        { dim: "Technical profile",    what: "Consultant vs. developer mindset, tooling familiarity, problem context",       signal: "Shows curiosity and awareness of real-world use" },
        { dim: "Learning orientation", what: "Questions asked, openness to feedback, intellectual curiosity",                signal: "Candidate questions reveal genuine engagement" },
        { dim: "AI & tool usage",      what: "When applicable: efficiency, judgment, understanding of generated output",     signal: "Uses tools intentionally; can explain results" },
      ],
      scoringNote: "Score each dimension 1–4: 1 = Below expectations · 2 = Meets partially · 3 = Meets expectations · 4 = Exceeds expectations"
    },

    learnings: {
      eyebrow: "Team Knowledge",
      title: "Team Learnings",
      subtitle: "Direct contributions from Pyyne interviewers — unedited content, grounded in real sessions.",
      keepDoingLabel: "Keep doing — what works",
      keepDoing: [
        { author: "Gabriel Cattaruzzi", text: "Use Gemini AI in Google Meet to summarize the discussion, so you can stay fully engaged and focused on the candidate throughout the interview. Concentrate manual notes on key observations and impressions only." },
        { author: "Gabriel Cattaruzzi", text: "Explain the interview timeline and time-boxing at the beginning of the session so the candidate has a clear overview of the process, expectations, and pacing for each stage." },
        { author: "Gabriel Cattaruzzi", text: "When candidates get nervous or stuck during live coding, ask them to explain their thought process before translating it into code — this helps them organize their reasoning and regain confidence." },
        { author: "Gabriel Cattaruzzi", text: "For tests where AI is not allowed, when there is suspicious behavior (e.g., repeatedly looking at a second screen), ask follow-up questions about the candidate's code and review the CoderPad interview statistics after the session." },
        { author: "Murilo Ferreira",    text: "Keeping interviews conversational instead of overly rigid. I felt like I could capture more of a candidate's real attitude this way." },
        { author: "Guilherme Moresco", text: "Opening the interview with non-technical questions helps candidates break out of their shell and provides information that helps assess whether they are being genuine as they work." },
        { author: "Guilherme Moresco", text: "In casual conversation, assess for a technical 'profile fit'. Other stages already assess for cultural fit. Keep this brief. Example: pondering the differences between a consultant and a developer." },
        { author: "Guilherme Moresco", text: "Instigate reflection throughout their coding. The best candidates can provide periodic updates on their thinking, and the best interviewers can inquire without overwhelming them — a signal of good team communication skills." },
        { author: "Guilherme Moresco", text: "Take-home tests have shown strong results. Candidates reported feeling more in control of their experience, and the best deliveries I have received were take-homes — though they require more setup time than CoderPad." },
        { author: "Antonio Martins",   text: "Starting friendly, building rapport, and talking about Pyyne at the start helps build the company's image. We are the first impression of the tech team, and that tends to stick." },
      ],
      changeLabel: "What could change — team suggestions",
      change: [
        { author: "Caio Naim",         text: "C# challenge solutions looked very similar across candidates, likely due to AI usage. Instead of blocking AI, allow it and ask candidates to build a small REST API in 30 minutes. This evaluates how they use AI, understand the generated code, and make technical decisions." },
        { author: "Murilo Ferreira",   text: "For data challenges, especially Data Engineering, I would like to introduce more complex tests that allow search engine and AI usage — for a more realistic evaluation of the candidate's problem-solving method." },
        { author: "Gabriel Cattaruzzi", text: "For data roles where a coding test alone may not be sufficient, consider adding a take-home exercise prior to live coding, with candidates presenting it during the session. This would allow us to evaluate analytical thinking, data viz, business reasoning, and storytelling." },
        { author: "Guilherme Moresco", text: "We ought to start testing for more modern roles, including the ability to employ AI tools efficiently as an evaluated competency." },
      ]
    },

    changelog: {
      eyebrow: "Version History",
      title: "Changelog",
      subtitle: "A record of how this playbook has evolved over time.",
      entries: [
        {
          version: "v1.0",
          date: "June 2025",
          type: "badge-teal",
          typeLabel: "Initial release",
          changes: [
            "First version published, compiled from Miro board team inputs",
            "Sections: Overview, Purpose, Before / During / After, AI & Tools, Evaluation Matrix, Team Learnings",
            "Contributors: Gabriel Cattaruzzi, Murilo Ferreira, Guilherme Moresco, Antonio Martins, Caio Naim"
          ]
        }
      ],
      contribute: "To contribute a learning or suggest a change, open a pull request or add a card to the team Miro board."
    }
  }
};
