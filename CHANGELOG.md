# Changelog

All notable changes to the Resilient Minds website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Git workflow and branching strategy (develop → staging → main)
- GitHub Actions CI/CD pipelines for all branches
- Pre-deployment verification scripts
- Post-deployment verification scripts
- Pull request templates for each branch
- Comprehensive deployment documentation

### Changed
- Updated `manifest.json` with Resilient Minds branding
- Updated `robots.txt` to block `/admin` route from search engines
- Removed `console.log` statements from production code

### Fixed
- N/A

## [1.0.0] - 2025-12-05

### Added
- Initial release of Resilient Minds website
- Home page with hero section and service highlights
- About page with mission, vision, values, and team information
- Services page with detailed service descriptions (ARMHS, Housing Stabilization, Therapy, Crisis Intervention)
- Contact page with contact form and location information
- Careers page with job listings and application process
- Resources page with mental health resources and crisis hotlines
- Admin portal for managing submissions (accessible at `/admin`)
- Backend API integration for contact forms, appointment requests, and job applications
- Centralized API service (`src/services/api.js`)
- Fully responsive design for all devices
- Modern UI with Tailwind CSS
- React Router for client-side navigation

### Technical Stack
- React 19.2.0
- React Router DOM 7.9.6
- Tailwind CSS 3.4.18
- React Icons 5.5.0

---

## Release Notes Template

### [Version Number] - YYYY-MM-DD

#### Added
- New features

#### Changed
- Changes to existing features

#### Deprecated
- Features that will be removed in upcoming releases

#### Removed
- Removed features

#### Fixed
- Bug fixes

#### Security
- Security patches and updates

---

## Version History

| Version | Date | Type | Description |
|---------|------|------|-------------|
| 1.0.0 | 2025-12-05 | Major | Initial release |

---

## Upcoming Releases

### v1.1.0 (Planned)
- Admin authentication
- Email notifications for form submissions
- Google Maps integration
- Google Analytics integration

### v1.2.0 (Planned)
- Status update functionality in admin portal
- Enhanced form validation
- Performance optimizations

### v2.0.0 (Future)
- CMS integration for dynamic content
- Multi-language support
- Advanced analytics dashboard

---

**Note**: Update this file with every production deployment!

