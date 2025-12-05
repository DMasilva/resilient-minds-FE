# Setup Instructions

## Quick Start Commands

Follow these commands to get your Resilient Minds website up and running:

### 1. Install Dependencies

Run these commands in your terminal:

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind (already configured, but run if needed)
npx tailwindcss init -p

# Install React Router and React Icons
npm install react-router-dom react-icons
```

### 2. Start Development Server

```bash
npm start
```

This will:
- Start the development server
- Open your browser at http://localhost:3000
- Enable hot-reloading (changes appear automatically)

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### 4. Test the Production Build

```bash
# Install serve globally (one-time only)
npm install -g serve

# Serve the production build
serve -s build
```

## What's Included

Your website now has:

✅ **6 Complete Pages:**
- Home - Hero section, services overview, testimonials
- About - Mission, vision, values, team
- Services - ARMHS, Housing Stabilization, Therapy, Crisis Intervention
- Contact - Contact form, location info, office hours
- Careers - Job listings, benefits, application process
- Resources - Crisis hotlines, mental health resources, support groups

✅ **Responsive Design:**
- Mobile-first approach
- Optimized for phones, tablets, and desktops
- Touch-friendly navigation

✅ **Modern Features:**
- Smooth animations and transitions
- Sticky navigation header
- Mobile hamburger menu
- Interactive cards and hover effects
- Crisis resources prominently displayed

✅ **SEO Ready:**
- Proper meta tags
- Semantic HTML
- Optimized page titles and descriptions

## Testing Responsiveness

To test on different devices:

1. **Desktop**: View at http://localhost:3000
2. **Mobile/Tablet**: 
   - Press F12 in Chrome/Firefox
   - Click the device toolbar icon (Ctrl+Shift+M)
   - Select different device sizes

## Customization Tips

### Update Contact Information

1. **Header**: `src/components/Header.js` (lines 46-54)
2. **Footer**: `src/components/Footer.js` (lines 73-97)
3. **Contact Page**: `src/pages/Contact.js` (lines 71-99 and 159-173)

### Change Colors

Edit `tailwind.config.js`:
- Primary colors (blue tones)
- Secondary colors (purple tones)
- Accent colors (red/call-to-action)

### Add/Edit Content

Each page is self-contained in `src/pages/`:
- Simply open the page file you want to edit
- Update text, services, team members, etc.
- Save and see changes instantly

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Run `npm install` again

### Issue: Styles not applying
**Solution**: 
1. Make sure `npm start` is running
2. Clear browser cache (Ctrl+Shift+R)
3. Check that `tailwind.config.js` exists

### Issue: React Router not working after build
**Solution**: Configure your hosting platform for SPA routing:
- Vercel: Automatic
- Netlify: Add `_redirects` file with `/* /index.html 200`
- Apache: Configure `.htaccess`

## Deployment Options

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository at netlify.com
3. Build command: `npm run build`
4. Publish directory: `build`

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `build` folder to your web host
3. Configure server for SPA routing

## Next Steps

1. ✅ Install dependencies (commands above)
2. ✅ Run `npm start` to see the website
3. 📝 Customize contact information
4. 🎨 Adjust colors if desired
5. ✏️ Update content to match your organization
6. 🚀 Deploy to production

## Support

If you encounter any issues:
1. Check that Node.js is installed: `node --version`
2. Ensure npm is updated: `npm install -g npm@latest`
3. Delete `node_modules` and run `npm install` again
4. Check the browser console for error messages (F12)

---

**Ready to launch!** 🚀

Your mental health website is production-ready and fully responsive. Just install dependencies and start customizing!

