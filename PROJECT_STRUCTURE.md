# Project Structure & Documentation Guide

## 📁 File Organization

### Root Directory - Public Documentation
These files **WILL BE** committed to git and are visible to all developers:

- **`README.md`** - Project overview, quick start, and setup
- **`CHANGELOG.md`** - Version history and release notes
- **`CONTRIBUTING.md`** - Guidelines for contributors
- **`SETUP.md`** - Basic setup instructions
- **`WEBSITE_OVERVIEW.md`** - Website overview
- **`vercel.json`** - Vercel deployment configuration
- **`.gitignore`** - Git ignore rules

### `md_files/` Directory - Internal Tutorials
These files **WILL NOT BE** committed to git (excluded in `.gitignore`):

All files are prefixed with `tutorial_` and contain detailed internal documentation:

- **`tutorial_DEPLOYMENT_GUIDE.md`** - Comprehensive deployment guide
- **`tutorial_DEPLOYMENT_QUICKSTART.md`** - Quick deployment instructions
- **`tutorial_VERCEL_DEPLOYMENT_CHECKLIST.md`** - Step-by-step Vercel setup
- **`tutorial_GIT_WORKFLOW.md`** - Git branching strategy and workflow
- **`tutorial_PRODUCTION_CHECKLIST.md`** - Pre-deployment checklist
- **`tutorial_ENVIRONMENT_GUIDE.md`** - Environment variables guide
- **`tutorial_ADMIN_PORTAL.md`** - Admin portal documentation
- **`README.md`** - Index of all tutorial files (this IS committed)

### `.github/` Directory - CI/CD
- **`workflows/`** - GitHub Actions pipelines
  - `develop.yml` - Development branch automation
  - `staging.yml` - Staging branch automation
  - `production.yml` - Production deployment
- **`pull_request_template.md`** - Default PR template
- **`PULL_REQUEST_TEMPLATE/`** - Branch-specific PR templates

### `scripts/` Directory - Deployment Scripts
- **`pre-deploy-check.sh`** - Pre-deployment verification
- **`post-deploy-verify.sh`** - Post-deployment verification

## 🔒 Git Ignore Rules

The `.gitignore` file excludes:

```gitignore
# Tutorial files (internal use only)
md_files/tutorial_*.md

# Environment files
.env
.env.local
.env.production
.env.production.local

# Build output
/build
/node_modules

# Vercel
.vercel
```

## 📖 Documentation Categories

### For New Developers
Start here:
1. `README.md` - Project overview
2. `CONTRIBUTING.md` - How to contribute
3. `md_files/tutorial_DEPLOYMENT_QUICKSTART.md` - Quick setup guide

### For Deployment
1. `md_files/tutorial_VERCEL_DEPLOYMENT_CHECKLIST.md` - Deployment steps
2. `md_files/tutorial_ENVIRONMENT_GUIDE.md` - Environment configuration
3. `md_files/tutorial_PRODUCTION_CHECKLIST.md` - Pre-deployment checks

### For Workflow
1. `md_files/tutorial_GIT_WORKFLOW.md` - Git branching and process
2. `.github/pull_request_template.md` - PR guidelines

### For Reference
1. `CHANGELOG.md` - Version history
2. `md_files/tutorial_ADMIN_PORTAL.md` - Admin portal guide

## ✅ What Gets Committed

### ✅ Committed (Public)
- Source code (`src/`)
- Public assets (`public/`)
- Configuration files (`package.json`, `vercel.json`, etc.)
- CI/CD workflows (`.github/`)
- Deployment scripts (`scripts/`)
- Public documentation (`README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`)
- Tutorial index (`md_files/README.md`)

### ❌ Not Committed (Private/Internal)
- Tutorial documentation (`md_files/tutorial_*.md`)
- Environment files (`.env*`)
- Build output (`build/`)
- Dependencies (`node_modules/`)
- Vercel config (`.vercel/`)

## 🎯 Why This Structure?

### Benefits:
1. **Clean Repository** - Public repo doesn't have verbose internal docs
2. **Security** - Detailed deployment instructions not exposed
3. **Organization** - Clear separation of public vs internal docs
4. **Flexibility** - Tutorials can be detailed without cluttering repo
5. **Maintainability** - Easy to update internal docs without commits

### Guidelines:
- **Public docs** should be concise and user-focused
- **Tutorial docs** can be verbose and step-by-step
- Keep `md_files/README.md` up-to-date with all tutorials
- Link to tutorials from public docs when needed

## 📝 Adding New Documentation

### New Public Documentation
```bash
# Create in root directory
touch NEW_GUIDE.md
# Will be committed to git
```

### New Tutorial/Internal Documentation
```bash
# Create in md_files with tutorial_ prefix
touch md_files/tutorial_NEW_GUIDE.md
# Will be ignored by git
```

## 🔄 Current State

As of now:
- ✅ All tutorial files moved to `md_files/`
- ✅ All tutorial files prefixed with `tutorial_`
- ✅ `.gitignore` updated to exclude `md_files/tutorial_*.md`
- ✅ `README.md` updated with new structure
- ✅ `CONTRIBUTING.md` created for public contributors
- ✅ `md_files/README.md` created as tutorial index

---

**Note**: The `md_files/README.md` index file IS committed to git so developers know what tutorials are available locally.

