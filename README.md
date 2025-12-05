# Resilient Minds - Mental Health Services Website

A fully responsive, modern React website for Resilient Minds, a comprehensive mental health services organization. Built with React and Tailwind CSS.

## 🌟 Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Comprehensive Pages**:
  - Home - Hero section with service highlights
  - About - Mission, vision, values, and team information
  - Services - Detailed service descriptions (ARMHS, Housing Stabilization, Therapy, Crisis Intervention)
  - Contact - Contact form with location information
  - Careers - Job listings with application process
  - Resources - Mental health resources, crisis hotlines, and support networks
  - Admin Portal - Dashboard for managing submissions (at `/admin`)
- **Backend Integration**: Connected to Rails API for managing form submissions
- **Accessibility**: Crisis resources prominently displayed
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized `build` folder ready for deployment.

## 📦 Deployment

This project is configured with a complete CI/CD pipeline:

```
develop → staging → main (production)
```

### Quick Deployment Guide

1. **Read the Documentation**:
   - 📖 [Deployment Quick Start](./DEPLOYMENT_QUICKSTART.md) - **START HERE**
   - 📖 [Git Workflow](./GIT_WORKFLOW.md) - Detailed workflow guide
   - 📖 [Production Checklist](./PRODUCTION_CHECKLIST.md) - Pre-deployment checklist

2. **Set Up Branches**:
   ```bash
   git checkout -b develop
   git push -u origin develop
   
   git checkout -b staging
   git push -u origin staging
   ```

3. **Configure GitHub Secrets** (in repo settings):
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `STAGING_API_URL`
   - `PRODUCTION_API_URL`

4. **Deploy**:
   ```bash
   # Run pre-deployment check
   ./scripts/pre-deploy-check.sh
   
   # Create PR and merge: staging → main
   # GitHub Actions will automatically deploy to production
   ```

## 🛠️ Technology Stack

- **React 19.2.0** - UI library
- **React Router DOM 7.9.6** - Client-side routing
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library
- **Axios** - HTTP client for API calls

## 📂 Project Structure

```
resilient-minds-webpage/
├── .github/
│   ├── workflows/              # CI/CD pipelines
│   │   ├── develop.yml
│   │   ├── staging.yml
│   │   └── production.yml
│   └── PULL_REQUEST_TEMPLATE/ # PR templates
├── public/
│   ├── index.html
│   ├── manifest.json          # PWA manifest (updated branding)
│   └── robots.txt             # SEO configuration
├── scripts/
│   ├── pre-deploy-check.sh    # Pre-deployment verification
│   └── post-deploy-verify.sh  # Post-deployment verification
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   └── Footer.js          # Footer with links
│   ├── pages/
│   │   ├── Home.js            # Homepage
│   │   ├── About.js           # About page
│   │   ├── Services.js        # Services page
│   │   ├── Contact.js         # Contact page
│   │   ├── Careers.js         # Careers page
│   │   ├── Resources.js       # Resources page
│   │   └── Admin.js           # Admin dashboard
│   ├── services/
│   │   └── api.js             # Centralized API service
│   ├── App.js                 # Main app component
│   └── index.js               # Entry point
├── CHANGELOG.md               # Version history
├── DEPLOYMENT_QUICKSTART.md   # Quick start guide
├── GIT_WORKFLOW.md            # Git workflow guide
├── PRODUCTION_CHECKLIST.md    # Pre-deployment checklist
└── README.md                  # This file
```

## 🎨 Customization

### Colors

Customize in `tailwind.config.js`:
- **Primary**: Blue tones (main brand color)
- **Secondary**: Purple tones (accent color)
- **Accent**: Red tones (call-to-action and crisis alerts)

### Content

Update content in respective page files in `src/pages/`

### API Configuration

Set environment variables:
```bash
# Development
REACT_APP_API_URL=http://localhost:4000/api/v1

# Production
REACT_APP_API_URL=https://your-api.com/api/v1
```

## 🔒 Security

- Admin route (`/admin`) blocked in `robots.txt`
- No console.log statements in production
- Environment variables for sensitive data
- CORS configuration in backend
- Security scanning in CI/CD pipeline

## 📝 Development Workflow

```bash
# 1. Create feature branch
git checkout -b feature/my-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push and create PR
git push origin feature/my-feature
# Create PR on GitHub: feature → develop

# 4. After approval, merge to develop
# GitHub Actions will automatically test and deploy to dev environment

# 5. When ready for staging
# Create PR: develop → staging

# 6. When ready for production
# Run pre-deployment check
./scripts/pre-deploy-check.sh

# Create PR: staging → main (requires 2+ approvals)
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run linting
npm run lint
```

## 📊 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `./scripts/pre-deploy-check.sh` | Pre-deployment verification |
| `./scripts/post-deploy-verify.sh <url>` | Post-deployment verification |

## 🚢 CI/CD Pipeline

Three automated pipelines:

1. **Develop** - Runs on every push to `develop`
   - Linting, testing, building
   - Deploys to development preview

2. **Staging** - Runs on push to `staging`
   - All develop checks + code coverage
   - Deploys to staging environment

3. **Production** - Runs on push to `main`
   - Comprehensive security checks
   - Deploys to production
   - Creates deployment tags
   - Post-deployment verification

## 📞 Support

For technical support or questions:
- Check documentation in `docs/` folder
- Review `GIT_WORKFLOW.md` for workflow questions
- Check GitHub Actions logs for deployment issues

## 📝 License

This project is proprietary software for Resilient Minds.

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Test responsiveness on all device sizes
4. Submit a pull request to `develop`

## 📖 Documentation

### Essential Documentation
- **[Changelog](./CHANGELOG.md)** - Version history and release notes

### Setup & Deployment Guides (Internal)
For detailed setup and deployment instructions, see the `md_files/` directory:
- `md_files/tutorial_DEPLOYMENT_QUICKSTART.md` - Get started with deployment
- `md_files/tutorial_GIT_WORKFLOW.md` - Complete workflow documentation
- `md_files/tutorial_PRODUCTION_CHECKLIST.md` - Pre-deployment checklist
- `md_files/tutorial_ENVIRONMENT_GUIDE.md` - Environment configuration
- `md_files/tutorial_VERCEL_DEPLOYMENT_CHECKLIST.md` - Vercel-specific setup
- `md_files/tutorial_DEPLOYMENT_GUIDE.md` - Complete deployment guide
- `md_files/tutorial_ADMIN_PORTAL.md` - Admin portal documentation

---

Built with ❤️ for mental health awareness

**Version**: 1.0.0  
**Last Updated**: December 5, 2025
