# 🛡️ SecureHub — Cybersecurity & ML Project Showcase

**SecureHub** is a comprehensive suite of security and machine learning projects developed as a **Semester VI Mini Project** at **Adamas University**. It features a unified landing page and project showcase hub for five innovative security solutions.

## 📑 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Tech Stack](#tech-stack)
- [Team](#team)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

SecureHub serves as a portal and showcase for five cutting-edge cybersecurity and machine learning projects:

1. **Phishing Email Sentinel** — Layered rule-based + deep learning phishing detection
2. **SilentDrop** — Privacy-first, zero-knowledge file sharing platform
3. **PatchSense** — AI-driven vulnerability prioritization and patch planning
4. **HoneyShield** — Honeypot monitoring with ML threat intelligence
5. **IntelliScan** — AI-powered static code security analysis

The hub provides:
- Landing page with team showcase and project overview
- Project cards with descriptions and direct links
- Responsive design with dark mode support
- Modern UI/UX with smooth animations

---

## Projects

### 1. 🎣 Phishing Email Sentinel
**URL:** https://phishingemailsentinel.netlify.app/

Detects phishing emails using layered rule-based analysis and deep learning techniques.

- **Features:** Multi-layer detection pipeline, confidence scoring, report generation
- **Tech:** Python (backend), React (frontend), TensorFlow

### 2. 🔐 SilentDrop
**URL:** https://silent-frontend-gamma.vercel.app/

Silent Drop is a privacy-first, zero-knowledge file sharing platform with end-to-end encryption.

- **Features:** Zero-knowledge architecture, end-to-end encryption, expiring shares
- **Tech:** Node.js, React, Crypto libraries

### 3. 🔧 PatchSense
**URL:** https://patchsense.vercel.app/

AI-driven vulnerability prioritization and intelligent patch planning system.

- **Features:** CVE analysis, patch recommendations, risk scoring
- **Tech:** Python, FastAPI, ML models, React

### 4. 🍯 HoneyShield
**URL:** http://localhost:3000/projects/honeyshield/

Honeypot monitoring and threat intelligence platform with ML-powered risk scoring.

- **Features:** Real-time attack dashboard, risk scoring, attack classification, anomaly detection
- **Tech:** Python (FastAPI), React, MongoDB, scikit-learn
- **Documentation:** See [HoneyShield README](./HoneyShield-README.md)

### 5. 🔍 IntelliScan
**URL:** https://intelliscan-frontend.onrender.com/

AI-powered static code security analysis with hybrid detection capabilities.

- **Features:** Hybrid vulnerability detection (regex, AST, ML), risk scoring, report generation
- **Tech:** Python (FastAPI), React + TypeScript, MongoDB, transformers
- **Documentation:** See [IntelliScan README](./IntelliScan-README.md)

---

## Tech Stack

### Frontend (SecureHub Hub)
- **React 18** — UI framework
- **TypeScript** — Type-safe development
- **Vite 6** — Fast build tool
- **Tailwind CSS 3** — Utility-first styling
- **Lucide Icons** — Icon library
- **React Router** — Client-side routing

### Build & Development
- **ESLint** — Code linting
- **PostCSS** — CSS processing
- **npm** — Package management

---

## Team

| Name | Role | Expertise |
|------|------|-----------|
| **Mrinal Sahoo** | Security & Analysis | Vulnerability assessment, penetration testing |
| **Soma Chatterjee** | UI/UX Implementation & PM | Frontend design, project coordination |
| **Ashwani Kumar** | ML Implementation | Machine learning, model optimization |
| **Ankita Biswas** | UI/UX & Documentation | Design systems, technical writing |

---

## Getting Started

### Prerequisites

- **Node.js** 20+ and **npm** 9+
- **Python** 3.11+ (for backend services)
- **Git** for version control
- **MongoDB Atlas** connection (for HoneyShield/IntelliScan)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/securehub.git
   cd securehub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your settings
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   Access the hub at `http://localhost:5173`

### Running Individual Projects

Each project has its own setup instructions. See individual project documentation:
- [HoneyShield Setup](./HoneyShield-README.md#getting-started-local-development)
- [IntelliScan Setup](./IntelliScan-README.md#quick-start)

---

## Project Structure

```
securehub/
├── src/
│   ├── App.jsx              # Main app router
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── App.css              # App styles
│   ├── pages/
│   │   ├── LandingPage.jsx  # Hero landing page with team
│   │   └── ProjectsPage.jsx # Projects showcase grid
│   ├── components/          # Reusable components
│   └── assets/
│       ├── logo/            # SecureHub logo
│       └── team/            # Team member photos
├── public/
│   └── site.webmanifest
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
├── eslint.config.js         # ESLint config
├── package.json
├── index.html
└── README.md
```

---

## Development

### Development Server
```bash
npm run dev
```
Starts Vite dev server with HMR on `http://localhost:5173`

### Build
```bash
npm run build
```
Generates optimized production build in `dist/` directory

### Preview
```bash
npm run preview
```
Serves the production build locally

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality

---

## Deployment

### Frontend Deployment (SecureHub Hub)

The SecureHub hub is designed to be deployed as a static site:

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

**Option 3: GitHub Pages**
```bash
npm run build
# Push dist/ to gh-pages branch
```

### Individual Project Deployment

Each project has its own deployment strategy:
- **Phishing Email Sentinel:** Netlify
- **SilentDrop:** Vercel
- **PatchSense:** Vercel
- **HoneyShield:** Docker + Kubernetes / Docker Compose
- **IntelliScan:** Render (currently deployed)

See individual project documentation for detailed deployment guides.

---

## Contributing

1. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** with a clear description

### Code Style

- Follow ESLint rules (checked automatically)
- Use meaningful variable and component names
- Add comments for complex logic
- Format code with consistent indentation

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Optional: API endpoints for individual projects
VITE_HONEYSHIELD_API=http://localhost:8000/api/v1
VITE_INTELLISCAN_API=https://intelliscan-q1rk.onrender.com/api/v1
```

---

## Performance & Security

- **Code splitting** — Route-based lazy loading
- **Tree shaking** — Unused code elimination in production build
- **CORS** — Configured for project API domains
- **Content Security Policy** — Configured in deployment
- **Environment isolation** — Production/development configurations

---

## Troubleshooting

### Port 5173 already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Vite HMR not working
- Check firewall settings
- Ensure browser console is not blocked
- Verify `--host 0.0.0.0` is set for network access

---

## License

Internal use — SecureHub Platform  
© 2026 Adamas University · Semester VI Mini Project

---

## Support & Documentation

For detailed documentation on individual projects:
- 🍯 [HoneyShield Documentation](./HoneyShield-README.md)
- 🔍 [IntelliScan Documentation](./IntelliScan-README.md)

For issues or questions about the hub, open an issue on the repository.
