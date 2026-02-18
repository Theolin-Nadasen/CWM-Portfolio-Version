# Code With Me - Portfolio

A sleek, modern portfolio website built with React, Vite, TypeScript, and Tailwind CSS. Features a black/gold/red color scheme with smooth animations and a responsive design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
codewithme-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── ProjectPrivacy.tsx
│   │   └── About.tsx
│   ├── data/               # Data files
│   │   └── projects.ts     # Project listings
│   ├── App.tsx
│   ├── App.css             # Custom styles & theme
│   └── main.tsx
├── public/                 # Static assets
├── index.html
└── package.json
```

## ➕ Adding New Projects

Edit `src/data/projects.ts` and add a new project object to the `projects` array:

### Option 1: Project with External Link (like PDF Builder)

```typescript
{
  id: "my-external-app",
  name: "My External App",
  description: "A brief description of what this app does...",
  image: "/app_image.png",  // Place image in public/ folder
  tags: ["Tag1", "Tag2", "Tag3"],
  hasDetailPage: false,      // Links directly to external URL
  externalUrl: "https://myapp.com",
  hasPrivacyPolicy: false
}
```

### Option 2: Project with Detail Page

```typescript
{
  id: "my-detailed-app",
  name: "My Detailed App",
  description: "A brief description shown on the projects grid...",
  image: "/app_image.png",
  tags: ["Tag1", "Tag2"],
  hasDetailPage: true,       // Has its own page on this site
  hasPrivacyPolicy: true,    // Optional: includes privacy policy
  detailContent: {
    overview: "Detailed description shown on the project page...",
    features: [
      "Feature one description",
      "Feature two description",
      "Feature three description"
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    privacyPolicy: `Privacy Policy Title

This is the privacy policy content.

Data Collection
We collect XYZ data for ABC purposes.

Contact
For questions, email us at...`
  }
}
```

### Option 3: External Privacy Policy

```typescript
{
  id: "my-app",
  name: "My App",
  description: "...",
  image: "/app_image.png",
  tags: ["Tag1", "Tag2"],
  hasDetailPage: true,
  hasPrivacyPolicy: true,
  privacyPolicyUrl: "https://myapp.com/privacy",  // External link
  detailContent: {
    overview: "...",
    features: ["..."],
    technologies: ["..."]
    // No privacyPolicy field - uses external URL instead
  }
}
```

## 🎨 Color Scheme

The site uses a custom black/gold/red theme:

- **Black**: `#000000`, `#111111`, `#1a1a1a`
- **Gold**: `#FFD700` (primary accent)
- **Red**: `#FF4444` (secondary accent)

## 📝 Notes

- Images should be placed in the `public/` folder
- All projects with `hasDetailPage: true` will be accessible at `/projects/:id`
- The site is optimized for Netlify deployment (see `netlify.toml`)
- No backend required - completely static site
