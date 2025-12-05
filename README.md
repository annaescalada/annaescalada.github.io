# Anna Escalada - Personal Portfolio

Modern, professional personal website built with React and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

### Option 1: Using gh-pages package

# Deploy:
```bash
npm run deploy
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
