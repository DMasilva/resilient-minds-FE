# Contributing to Resilient Minds

Thank you for your interest in contributing to the Resilient Minds website!

## 📖 Getting Started

### For Developers

1. **Read the Documentation**
   - Start with the main [README.md](./README.md)
   - Review the [CHANGELOG.md](./CHANGELOG.md) for version history

2. **Setup Guides** (Internal)
   - All detailed setup and deployment guides are in the `md_files/` directory
   - Start with `md_files/tutorial_DEPLOYMENT_QUICKSTART.md`
   - Review `md_files/tutorial_GIT_WORKFLOW.md` for our workflow

## 🔄 Development Workflow

### Branch Strategy

We use a three-tier branching strategy:

```
feature → develop → staging → main
```

- **feature/** - Individual features or fixes
- **develop** - Development and integration
- **staging** - Pre-production testing
- **main** - Production

### Making Changes

1. **Create a Feature Branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow existing code style
   - Test locally
   - No console.log statements
   - Update tests if needed

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: description of your feature"
   ```

   Commit message format:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code formatting
   - `refactor:` - Code restructuring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

4. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a PR on GitHub targeting the `develop` branch.

## ✅ Pull Request Guidelines

- Fill out the PR template completely
- Include screenshots for UI changes
- Ensure all tests pass
- Get at least one approval before merging
- Keep PRs focused and reasonably sized

## 🧪 Testing

```bash
# Run tests
npm test

# Run linter
npm run lint

# Build for production
npm run build
```

## 📝 Code Style

- Use functional React components
- Follow existing Tailwind CSS patterns
- Keep components small and focused
- Use meaningful variable names
- Comment complex logic

## 🚀 Deployment

- Only project maintainers can deploy to production
- All deployments go through the develop → staging → main pipeline
- See `md_files/tutorial_GIT_WORKFLOW.md` for detailed deployment process

## 🐛 Reporting Bugs

1. Check if the bug has already been reported
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device information

## 💡 Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue describing:
   - The problem you're trying to solve
   - Your proposed solution
   - Any alternatives you've considered

## 📞 Questions?

- Check the documentation in `md_files/` first
- Ask in project discussions
- Contact the project maintainers

## 🙏 Thank You!

Your contributions help make mental health services more accessible!

---

**Note**: Detailed technical documentation and setup guides are available in the `md_files/` directory for project contributors.

