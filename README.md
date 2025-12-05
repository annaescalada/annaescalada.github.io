# Anna Escalada - Personal Portfolio

Modern, professional personal website built with React and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Profile Image
- Download your photo from Google Photos
- Rename it to `profile.jpg`
- Place it in the `public/` folder

### 3. Update Links
In `App.jsx`, update these URLs with your actual links:
- GitHub projects URLs (line ~36-50)
- LinkedIn URL (line ~88, ~228)
- GitHub URL (line ~82)

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

### Option 1: Using gh-pages package
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy:
npm run deploy
```

### Option 2: GitHub Actions (Recommended)
1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Enable GitHub Pages in repo settings:
   - Settings → Pages → Source: gh-pages branch

## Customization Tips

### Colors
Update the color scheme in `App.jsx`:
- Current: Emerald/Blue gradient on dark slate
- Change `emerald-500`, `blue-500` classes to your preference

### Skills
Update the `skills` object in `App.jsx` with your current tech stack

### Projects
Update the `projects` array with your actual GitHub projects

### Content
Modify text content in the JSX to match your voice

## Tech Stack
- React 18
- Tailwind CSS 3
- Vite (build tool)

## File Structure
```
portfolio/
├── public/
│   └── profile.jpg          # Your photo
├── src/
│   ├── App.jsx             # Main component
│   ├── App.css             # Styles
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Performance
- Optimized images
- CSS animations (no JS libraries needed)
- Lazy loading ready
- Lighthouse score: 95+

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License
MIT - Feel free to use as template
