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
- **Accessibility**: Crisis resources prominently displayed
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or ensure you're in the project directory

2. Install dependencies:
```bash
npm install
```

This will install:
- React and React DOM
- React Router DOM (for navigation)
- Tailwind CSS (for styling)
- React Icons (for icon components)
- All other required dependencies

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- **Primary**: Blue tones (main brand color)
- **Secondary**: Purple tones (accent color)
- **Accent**: Red tones (call-to-action and crisis alerts)

### Content

Update content in the respective page files in `src/pages/`:
- `Home.js` - Homepage content
- `About.js` - Organization information
- `Services.js` - Service descriptions
- `Contact.js` - Contact information and form
- `Careers.js` - Job listings and benefits
- `Resources.js` - Mental health resources

### Contact Information

Update phone numbers, emails, and addresses in:
- `src/components/Header.js`
- `src/components/Footer.js`
- `src/pages/Contact.js`

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components use Tailwind's responsive classes (`sm:`, `md:`, `lg:`, `xl:`) to ensure optimal display on all devices.

## 🛠️ Technology Stack

- **React 19.2.0** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Google Fonts** - Inter and Poppins fonts

## 📂 Project Structure

```
resilient-minds-webpage/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation header
│   │   └── Footer.js       # Footer with links and info
│   ├── pages/
│   │   ├── Home.js         # Homepage
│   │   ├── About.js        # About page
│   │   ├── Services.js     # Services page
│   │   ├── Contact.js      # Contact page
│   │   ├── Careers.js      # Careers page
│   │   └── Resources.js    # Resources page
│   ├── App.js              # Main app component with routing
│   ├── index.js            # Entry point
│   └── index.css           # Global styles with Tailwind
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚢 Deployment

This website can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 🔒 Environment Variables

For production, you may want to set up environment variables for:
- Form submission endpoints
- Analytics tracking IDs
- API keys (if needed)

Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url
REACT_APP_FORM_ENDPOINT=your_form_endpoint
```

## 📝 License

This project is proprietary software for Resilient Minds.

## 🤝 Contributing

For internal development, follow these guidelines:
1. Create a feature branch
2. Make your changes
3. Test responsiveness on all device sizes
4. Submit a pull request

## 📞 Support

For technical support or questions about the website, contact the development team.

---

Built with ❤️ for mental health awareness
# resilient-minds-FE
