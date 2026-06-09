/**
 * PYYNE PLAYBOOK - Content Configuration
 * =========================================
 * Template version: 1.0
 * Playbook: Interviewer Playbook
 */

const PLAYBOOK_CONFIG = {

  meta: {
    title: "Interviewer Playbook",
    description: "A guide for Pyyne interviewers: what to look for, why it matters, and how to run the session.",
    version: "v1.1",
    lastUpdated: "June 2025",
    tags: ["Technical Hiring", "Engineering", "Data", "Global"],
    htmlTitle: "Pyyne · Interviewer Playbook",
    favicon: "📋",
  },

  nav: [
    {
      label: "Getting Started",
      items: [
        { id: "overview",    label: "Overview",            icon: "book" },
        { id: "purpose",     label: "Purpose & Scope",     icon: "target" },
      ]
    },
    {
      label: "The Interview",
      items: [
        { id: "before",      label: "Before",              icon: "clock" },
        { id: "during",      label: "During",              icon: "microphone" },
        { id: "after",       label: "After",               icon: "clipboard-check" },
      ]
    },
    {
      label: "Reference",
      items: [
        { id: "ai-tools",    label: "AI & Tools",          icon: "robot" },
        { id: "evaluation",  label: "Evaluation Matrix",   icon: "chart-bar" },
        { id: "star",        label: "STAR Framework",      icon: "bulb" },
      ]
    },
    {
      label: "Team Knowledge",
      items: [
        { id: "learnings",   label: "Team Learnings",      icon: "users" },
        { id: "changelog",   label: "Changelog",           icon: "history" },
      ]
    },
  ],

  sections: {

    // ── OVERVIEW ────────────────────────────────────────────────────
    overview: {
      eyebrow: "Pyyne Digital · Tech Hiring",
      title: "Interviewer Playbook",
      subtitle: "A guide for Pyyne interviewers: what to look for, why it matters, and how to run the session.",
      hero: {
        eyebrow: "The real question",
        title: "Would I want to work through a hard problem with this person?",
        body: "Every interview reflects who Pyyne is as a company. This playbook brings knowledge from other interviewers to help you answer one question: does this candidate have the posture, reasoning, and communication to contribute on a real team? The code is evidence. The conversation is the interview. Here, you will find what the team has learned, so that knowledge transfers to every interviewer, new or experienced. Use it as a reference before, during, and after each session."
      },
      meta: ["Live Coding", "Take-Home", "Data Roles", "v1.1"],
      overviewCards: [
        {
          iconClass: "icon-teal",
          iconSvg: "target",
          title: "The core question",
          items: [
            "You are evaluating fit for a real team, not exam performance",
            "The technical challenge is a context for observation, not the measure itself",
            "A candidate who codes correctly but can't explain, debate, or take feedback is a risk",
            "A candidate who struggles technically but thinks clearly and communicates well is worth a serious look"
          ]
        },
        {
          iconClass: "icon-blue",
          iconSvg: "users",
          title: "Who this playbook is for",
          items: [
            "New interviewers: use it alongside your shadowing sessions",
            "Experienced interviewers: use it as a shared reference for calibration",
            "This playbook does not replace shadowing. The responsible interviewer teaches the tool. This teaches what to look for."
          ]
        }
      ],
      timeline: [
        { label: "Preparation", badge: { text: "~15 min before", cls: "badge-gray" }, body: "Read the CV. Choose or confirm the challenge. Set up CoderPad or the take-home link. Turn on Gemini in Google Meet." },
        { label: "Opening", badge: { text: "~5–10 min", cls: "badge-teal" }, body: "Introduce yourself and Pyyne. Warm up with non-technical questions. State the agenda for the session." },
        { label: "Assessment", badge: { text: "~30–40 min", cls: "badge-blue" }, body: "Run the challenge. Ask behavioral questions using STAR. Follow up throughout. This is where you observe posture, reasoning, and communication." },
        { label: "Candidate Q&A", badge: { text: "~5 min", cls: "badge-amber" }, body: "Give the candidate space to ask. Write down their questions. They reveal how the candidate thinks about the role and the team." },
        { label: "Wrap-up", badge: { text: "~2 min", cls: "badge-gray" }, body: "Give a specific date for feedback. Leave the candidate with a clear next step." },
        { label: "Debrief", badge: { text: "Right after", cls: "badge-teal" }, body: "Fill your evaluation before talking to anyone. Share impressions with the team." }
      ]
    },

    // ── PURPOSE ─────────────────────────────────────────────────────
    purpose: {
      eyebrow: "Foundation",
      title: "Purpose & Scope",
      subtitle: "This playbook instruments the interviewer. It answers what to observe, why it matters, and how to structure the session.",
      alert: {
        type: "alert-success",
        icon: "info",
        body: "<strong>This is a living document.</strong> It captures what the team has learned from real sessions. Every interviewer can contribute. See Team Learnings."
      },
      blocks: [
        {
          iconClass: "icon-teal", iconSvg: "scope",
          title: "In scope",
          items: [
            "Technical interview sessions: software engineering, data science, data engineering",
            "Live coding via CoderPad and take-home test reviews",
            "Behavioral assessment within the technical session",
            "Post-interview evaluation and team debriefing"
          ]
        },
        {
          iconClass: "icon-amber", iconSvg: "scope-off",
          title: "Out of scope",
          items: [
            "HR screening and cultural fit interviews, covered by the People team",
            "Salary negotiation and offer process",
            "Tool training: the shadow interviewer teaches CoderPad and take-home tooling directly",
            "Role-specific deep technical assessments handled per role brief"
          ]
        }
      ]
    },

    // ── BEFORE ──────────────────────────────────────────────────────
    before: {
      eyebrow: "Phase 1",
      title: "Before the Interview",
      subtitle: "Preparation shapes what you can see. A rushed interviewer misses the signals a prepared one catches.",
      checklist: [
        "Read the candidate's CV and any prior evaluation notes",
        "Confirm which challenge you will use, or create one if none exists for this role",
        "Set up CoderPad or send the take-home link",
        "Enable Gemini AI in Google Meet",
        "Open a blank doc for impressions and observations",
        "Block 15 min before the call. Enter calm."
      ],
      challengeNote: {
        title: "Choosing the challenge",
        body: "Pyyne maintains a shared library of challenges in CoderPad and a separate set for take-home assignments. For a given role, use the same challenge across all candidates. Consistency makes your evaluations comparable. You can reuse a challenge for a different role if the competencies align. If no challenge exists for the role, create one and add it to the library. The responsible interviewer in your shadow sessions will walk you through the tooling."
      },
      formats: [
        {
          dot: "#679747",
          title: "Live coding",
          desc: "Real-time problem-solving in CoderPad. Lets you observe how the candidate thinks, communicates, and handles pressure as it happens.",
          note: "If they freeze, ask them to explain their reasoning out loud before writing code."
        },
        {
          dot: "#99BA82",
          title: "Take-home test",
          desc: "The candidate works independently and presents during the session. Richer output, more candidate autonomy. Requires a clear brief upfront.",
          note: "The presentation tells you as much as the code. Watch how they explain their choices."
        },
        {
          dot: "#B1CAA0",
          title: "Case presentation",
          desc: "For data roles. Candidate completes an analysis or data viz and presents live. Tests analytical thinking, business reasoning, and storytelling.",
          note: "Recommended addition for DS/DE roles alongside live coding."
        }
      ],
      roleNote: {
        title: "Adapting to the role",
        items: [
          "<strong>Data Science / Data Engineering:</strong> add a take-home analysis before live coding, presented during the session",
          "<strong>Software Engineering:</strong> state upfront whether AI tools are permitted",
          "<strong>All roles:</strong> this stage assesses technical profile. Cultural fit is assessed in other stages."
        ]
      }
    },

    // ── DURING ──────────────────────────────────────────────────────
    during: {
      eyebrow: "Phase 2",
      title: "During the Interview",
      subtitle: "The technical challenge is the context. Your job is to observe how the candidate behaves inside it.",
      openingCard: {
        title: "Opening: set the tone",
        items: [
          "Introduce yourself and give brief context on Pyyne and the tech team. You are the candidate's first impression of the engineering culture.",
          "Start with non-technical questions. This establishes a baseline for how the candidate communicates when relaxed. Compare it to how they communicate under pressure.",
          "State the agenda and timing at the start. Candidates who know what to expect manage themselves better."
        ]
      },
      coreCard: {
        title: "The real question you are answering",
        intro: "As you run the session, you are building an answer to: would I want to work through a hard problem with this person at Pyyne? Observe:",
        signals: [
          { label: "Posture under adversity", desc: "When they hit a wall, do they get defensive, shut down, or work through it? How they respond to friction is how they will respond to production incidents." },
          { label: "Problem-solving conduct", desc: "Do they state the problem before jumping to a solution? Do they communicate their reasoning as they go, or disappear into their head?" },
          { label: "Proactivity beyond the prompt", desc: "Do they ask about edge cases, error handling, or how this would behave in production, without being prompted? That curiosity signals how they work on a real team." },
          { label: "Critical thinking on real scenarios", desc: "Can they reason about trade-offs? Do they question assumptions, or take the prompt at face value?" },
          { label: "Debate without conflict", desc: "If you push back on their approach, do they defend it calmly with reasoning, or fold immediately? Can they hold a position and still hear yours?" },
          { label: "Openness to feedback", desc: "Offer a redirect mid-session. How they receive it tells you more than the code. Candidates who update gracefully and keep moving are low-maintenance team members." }
        ]
      },
      conversationCard: {
        title: "Keep it conversational",
        items: [
          "Rigid formats produce performed answers. A conversation produces the real candidate.",
          "Use STAR questions for behavioral signals. See the STAR Framework section.",
          "Follow-up questions are where the interview happens. Ask them throughout, not just at the end."
        ]
      },
      stuckCard: {
        title: "When the candidate freezes",
        body: "Ask them to explain their approach before writing code. This surfaces reasoning that the code alone would hide. It also often breaks the freeze.",
        items: ["You learn more from a stuck candidate who communicates than from one who codes silently and gets it right"]
      },
      notesCard: {
        title: "Notes during the session",
        body: "Gemini captures the transcript. Use that for recall. Write your own notes for observations that won't appear in a transcript:",
        pills: ["Body language and composure", "How they reacted to pushback", "Questions they asked unprompted", "Moments of hesitation or confidence"]
      }
    },

    // ── AFTER ───────────────────────────────────────────────────────
    after: {
      eyebrow: "Phase 3",
      title: "After the Interview",
      subtitle: "The 30 minutes after the call determine the quality of the hiring decision.",
      alert: {
        type: "alert-warning",
        icon: "clock",
        body: "<strong>Fill your evaluation before talking to anyone.</strong> Group discussion anchors people to the first opinion they hear. Write your assessment independently first."
      },
      debriefCard: {
        title: "Team debrief",
        items: [
          "Share written notes before the group discussion. Specifics, not summaries.",
          "Name what was strong and what raised questions",
          "Send impressions right after the call, before the formal meeting"
        ]
      },
      feedbackCard: {
        title: "Candidate feedback",
        items: [
          "Give a specific date at the end of the interview",
          "Keep that date",
          "Every candidate deserves a reply, including rejections"
        ]
      }
    },

    // ── AI & TOOLS ──────────────────────────────────────────────────
    "ai-tools": {
      eyebrow: "Reference",
      title: "AI & Tools",
      subtitle: "How to use the available tooling, and how to evaluate candidates who use AI themselves.",
      alert: {
        type: "alert-warning",
        icon: "warning",
        body: "<strong>Blocking AI no longer reflects how engineers work.</strong> For most roles, the relevant question is whether the candidate can use AI well, not whether they use it."
      },
      aiAllowedCard: {
        title: "Evaluating AI usage",
        items: [
          "Evaluate how the candidate uses AI, not whether they use it",
          "Ask them to explain and justify the generated code",
          "C# challenge example: allow AI, ask for a REST API in 30 min. Tests decision-making and comprehension, not memorization.",
          "For modern roles, efficient AI use is a skill worth evaluating in its own right"
        ]
      },
      tools: [
        {
          iconClass: "icon-teal", iconSvg: "brand-google",
          title: "Gemini in Google Meet",
          body: "Enable before the call. It captures the full transcript, so you can focus on the candidate during the session. Your manual notes go on top of that: behavioral observations the transcript will not catch."
        },
        {
          iconClass: "icon-purple", iconSvg: "code",
          title: "CoderPad",
          body: "Hosts the challenge library. All live coding sessions run here. After the session, review the interview stats, useful if you suspect AI use in a test where it was not permitted."
        }
      ],
      dataRolesCard: {
        title: "Data roles: DS and DE",
        body: "Live coding alone misses most of what matters for data roles. Consider adding a take-home analysis before the live session. The candidate presents during the call. Tests:",
        items: [
          "Analytical thinking and data visualization choices",
          "Business reasoning: does the analysis answer a real question?",
          "Storytelling: can they explain findings to a non-technical audience?",
          "For Data Engineering specifically: allow AI and search tools. The role works that way."
        ]
      }
    },

    // ── EVALUATION MATRIX ────────────────────────────────────────────
    evaluation: {
      eyebrow: "Reference",
      title: "Evaluation Matrix",
      subtitle: "Use this after the session to structure your assessment. Each dimension maps to a real working behavior, not a test result.",
      scoringNote: "Score 1–4: 1 = Below expectations · 2 = Partial · 3 = Meets · 4 = Exceeds",
      table: [
        {
          dim: "Posture under adversity",
          what: "Behavior when they hit a wall, make a mistake, or face an unfamiliar problem",
          signal: "Works through friction without shutting down or getting defensive"
        },
        {
          dim: "Problem-solving conduct",
          what: "Structures the problem before jumping to a solution. Communicates reasoning as they go.",
          signal: "You can follow their thinking without asking them to explain it"
        },
        {
          dim: "Proactivity beyond the prompt",
          what: "Asks about edge cases, error handling, or production behavior without being prompted",
          signal: "Thinks about the system, not just the function"
        },
        {
          dim: "Critical thinking",
          what: "Questions assumptions, reasons about trade-offs, considers alternative approaches",
          signal: "Pushes back on the prompt when it makes sense to"
        },
        {
          dim: "Debate and conflict",
          what: "Holds a position calmly under pushback. Listens and updates when the argument warrants it.",
          signal: "Defends reasoning without turning disagreement into friction"
        },
        {
          dim: "Feedback reception",
          what: "Receives a redirect or challenge mid-session and keeps moving",
          signal: "Updates without defensiveness. Keeps momentum."
        },
        {
          dim: "Technical execution",
          what: "Code quality, solution structure, appropriate use of tools and language",
          signal: "Produces something that works or gets close, and knows where it falls short"
        },
        {
          dim: "Communication",
          what: "Explains reasoning clearly. Adapts language. Asks good questions.",
          signal: "You would understand them in a code review or incident call"
        },
        {
          dim: "AI and tool usage",
          what: "When applicable: uses AI deliberately, understands generated output, explains choices",
          signal: "Uses tools to move faster, not to avoid thinking"
        }
      ]
    },

    // ── STAR FRAMEWORK ───────────────────────────────────────────────
    star: {
      eyebrow: "Reference",
      title: "The STAR Framework",
      subtitle: "A structured format for behavioral questions. Produces comparable answers across candidates and cuts through prepared scripts.",
      intro: "Behavioral questions ask the candidate to describe something that already happened. Past behavior is the best predictor of future behavior in similar situations. STAR gives you a consistent structure for asking and for evaluating what you hear. It is a follow-up tool, not a script: ask the question, then use S, T, A, R as probes when the answer is vague.",
      dimensions: [
        {
          letter: "S",
          word: "Situation",
          question: "Set the context for me.",
          look: "How much context do they give? Do they frame it in a way that makes the stakes clear?"
        },
        {
          letter: "T",
          word: "Task",
          question: "What were you responsible for in that situation?",
          look: "Do they distinguish their role from the team's role? Do they own their part clearly?"
        },
        {
          letter: "A",
          word: "Action",
          question: "Walk me through what you did.",
          look: "Do they describe their reasoning, or just their actions? Did they take initiative or wait to be told?"
        },
        {
          letter: "R",
          word: "Result",
          question: "What happened? What did you learn?",
          look: "Do they take responsibility for the outcome, good or bad? Do they reflect, or just report?"
        }
      ],
      usageNote: "STAR works best as a follow-up structure, not a rigid script. Ask the behavioral question, then use S, T, A, R as probes when the answer stays vague. The goal is to move past rehearsed answers into specific, real situations. If the answer is already concrete and complete, do not force the structure.",
      examples: [
        { q: "Tell me about a time you disagreed with a technical decision your team made.", why: "Tests debate, conflict handling, and whether they follow blindly or engage" },
        { q: "Describe a situation where you had to deliver something without having all the information you needed.", why: "Tests proactivity, comfort with ambiguity, and judgment under uncertainty" },
        { q: "Tell me about a time you received feedback you disagreed with.", why: "Tests feedback reception and self-awareness" },
        { q: "Walk me through a production problem you helped diagnose.", why: "Tests problem-solving conduct, communication under pressure, and ownership" }
      ]
    },

    // ── LEARNINGS ────────────────────────────────────────────────────
    learnings: {
      eyebrow: "Team Knowledge",
      title: "Team Learnings",
      subtitle: "Direct contributions from Pyyne interviewers, from real sessions.",
      keepDoingLabel: "Keep doing",
      keepDoing: [
        { author: "Gabriel Cattaruzzi", text: "Use Gemini to capture the transcript. Stay focused on the candidate. Manual notes for behavioral observations only." },
        { author: "Gabriel Cattaruzzi", text: "State the agenda and timing at the start. Candidates who know what's coming manage themselves better." },
        { author: "Gabriel Cattaruzzi", text: "When candidates freeze during live coding, ask them to explain their reasoning out loud before writing code." },
        { author: "Gabriel Cattaruzzi", text: "If AI use is not permitted and behavior is suspicious, ask follow-up questions about the code. Review CoderPad stats after." },
        { author: "Murilo Ferreira",    text: "Conversational interviews show the real candidate. Rigid formats produce performed answers." },
        { author: "Guilherme Moresco",  text: "Open with non-technical questions. It gives you a baseline for authenticity before the pressure starts." },
        { author: "Guilherme Moresco",  text: "Assess technical profile in the casual conversation, not culture fit. Keep it brief. The difference between a consultant and a developer mindset is a useful probe." },
        { author: "Guilherme Moresco",  text: "Prompt reflection throughout the coding session. Good candidates update their reasoning periodically. That's a signal of how they work on a team." },
        { author: "Guilherme Moresco",  text: "Take-home tests produce richer deliveries. Candidates report more control over their experience. Setup takes more time than CoderPad, and it is worth it for senior roles." },
        { author: "Antonio Martins",    text: "Start with Pyyne context. You are the first impression of the tech team. That tends to stick." },
        { author: "Pedro Mihael",       text: "The playbook does not replace shadowing. Read it before your shadow sessions so you know what to watch for. The shadow is where it becomes intuition." },
        { author: "Anderson Vianna",    text: "Calibration between interviewers matters as much as the interview itself. Compare notes before the group debrief to check whether you are evaluating the same things." },
      ],
      changeLabel: "What could change",
      change: [
        { author: "Caio Naim",          text: "C# challenge solutions looked too similar across candidates, likely due to AI use. Allow AI and ask for a REST API in 30 min. Tests how they use AI, whether they understand what it produces, and how they make technical decisions." },
        { author: "Murilo Ferreira",    text: "Data Engineering tests should allow search and AI. That reflects how the role works. Testing without those tools measures memorization, not engineering." },
        { author: "Gabriel Cattaruzzi", text: "For data roles, add a take-home analysis before live coding. Candidate presents in the session. Captures analytical thinking and storytelling that live coding alone misses." },
        { author: "Guilherme Moresco",  text: "Start evaluating AI tool use as a competency in its own right, not as something to police." },
      ]
    },

    // ── CHANGELOG ────────────────────────────────────────────────────
    changelog: {
      eyebrow: "Version History",
      title: "Changelog",
      subtitle: "A record of how this playbook has evolved.",
      entries: [
        {
          version: "v1.1",
          date: "June 2025",
          type: "badge-teal",
          typeLabel: "Content revision",
          changes: [
            "Recentered the playbook on what to observe and why, not just how to run the session",
            "Added Evaluation Matrix with behavioral dimensions mapped to real working signals",
            "Added STAR Framework section with usage guidance and example questions",
            "Added challenge selection guidance: shared library in CoderPad, same challenge per role, create if missing",
            "Clarified scope: tool training stays with the shadow interviewer"
          ]
        },
        {
          version: "v1.0",
          date: "June 2025",
          type: "badge-gray",
          typeLabel: "Initial release",
          changes: [
            "First version published, compiled from Miro board team inputs",
            "Contributors: Gabriel Cattaruzzi, Murilo Ferreira, Guilherme Moresco, Antonio Martins, Caio Naim, Pedro Mihael, Anderson Vianna"
          ]
        }
      ],
      contribute: "To contribute a learning or suggest a change, open a pull request or add a card to the team Miro board."
    }
  }
};
