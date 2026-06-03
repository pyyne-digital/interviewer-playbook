# Pyyne Playbook — Template System

A lightweight, zero-dependency static site template for creating internal playbooks at Pyyne Digital. No build step, no framework — just HTML, CSS, and JavaScript. Deployable anywhere, including GitHub Pages.

---

## Live Instances

| Playbook | URL | Status |
|---|---|---|
| Interviewer Playbook | `https://pyynedigital.github.io/interviewer-playbook` | ✅ Active |

---

## Repository Structure

```
pyyne-playbook/
├── index.html              ← Shell (do not edit for content changes)
├── assets/
│   ├── css/
│   │   └── playbook.css    ← Design system (edit for visual changes only)
│   └── js/
│       └── playbook.js     ← Renderer engine (do not edit)
├── content/
│   └── config.js           ← ✏️  ALL CONTENT LIVES HERE — edit this file
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Pages auto-deploy
└── README.md
```

---

## How to Edit This Playbook

All content is in **`content/config.js`**. It is a single JavaScript object (`PLAYBOOK_CONFIG`) with clearly labeled sections. No programming knowledge required — just edit the text values.

### Editing text content

Open `content/config.js` and find the section you want to change. All sections follow this pattern:

```js
sectionId: {
  eyebrow: "Short label above the title",
  title: "Main heading",
  subtitle: "Subtitle / description text",
  // ... section-specific content
}
```

For example, to update the Evaluation Matrix, find `evaluation:` in the config and edit the `table` array.

### Adding a new checklist item (Before section)

```js
before: {
  checklist: [
    "Existing item",
    "Your new checklist item here",  // ← add here
  ]
}
```

### Adding a team learning

```js
learnings: {
  keepDoing: [
    { author: "Your Name", text: "What you learned..." },
    // add new entries here
  ]
}
```

---

## How to Create a New Playbook

1. **Duplicate this repository** (or create a new repo and copy the files)
2. **Edit `content/config.js`** — change the `meta`, `nav`, and `sections` to match your new playbook topic
3. **Remove sections you don't need** from the `nav` array and the `sections` object
4. **Add new sections** by:
   - Adding an entry to `nav`
   - Adding a matching entry to `sections`
   - Adding a renderer function to `assets/js/playbook.js` (see existing renderers for reference)
5. **Deploy to GitHub Pages** (see below)

### Minimal new playbook config

```js
const PLAYBOOK_CONFIG = {
  meta: {
    title: "My New Playbook",
    description: "What this playbook is about.",
    version: "v1.0",
    lastUpdated: "Month Year",
    tags: ["Tag 1", "Tag 2"],
    htmlTitle: "Pyyne · My New Playbook",
  },
  nav: [
    {
      label: "Getting Started",
      items: [
        { id: "overview", label: "Overview", icon: "book" },
      ]
    }
  ],
  sections: {
    overview: {
      eyebrow: "Pyyne Digital",
      title: "My New Playbook",
      subtitle: "A short description.",
      hero: { ... },
      // ...
    }
  }
};
```

---

## Deploying to GitHub Pages

### First-time setup

1. Push the repository to GitHub under the Pyyne organization
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`
4. Set **Branch** to `main` and folder to `/ (root)`
5. Save — the site will be live at `https://pyynedigital.github.io/<repo-name>/`

### Auto-deploy (recommended)

The included `.github/workflows/deploy.yml` automatically deploys on every push to `main`.

---

## Design System

The visual design lives entirely in `assets/css/playbook.css`. CSS custom properties (variables) at the top of the file control all colors, spacing, and typography.

### Changing the brand color

```css
:root {
  --brand: #1D9E75;        /* Main accent */
  --brand-dark: #0F6E56;   /* Darker shade */
  --brand-light: #E1F5EE;  /* Light tint */
  --brand-mid: #5DCAA5;    /* Mid tone */
}
```

### Available icon names

Icons are inline SVGs defined in `assets/js/playbook.js` in the `ICONS` object. Available: `book`, `target`, `users`, `clock`, `microphone`, `clipboard-check`, `robot`, `chart-bar`, `bulb`, `history`, `info`, `warning`, `scope`, `scope-off`, `code`, `brand-google`, `menu`, `close`, `check`, `external-link`.

---

## Contributing

1. Create a branch: `git checkout -b update/interviewer-playbook`
2. Edit `content/config.js` with your changes
3. Open a pull request with a clear description of what changed and why
4. Tag a reviewer from the tech team

---

## Template Version

This is **Pyyne Playbook Template v1.0**.

Built by the Pyyne tech team, June 2025.
