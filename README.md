# CrossGo - Company Website

A professional company website for CrossGo software development firm with services showcase, built with React and designed to be deployed to GitHub Pages.

## Features

- Responsive design for mobile, tablet, and desktop
- Multi-page layout with clean navigation
- Services showcase
- Portfolio gallery
- Team member profiles
- Contact form
- Modern UI with smooth animations

## Technology Stack

- React
- Tailwind CSS
- Shadcn UI components
- Wouter for routing
- Vite for bundling

## Development

To start the development server:

```bash
npm run dev
```

## Deploying to GitHub Pages

This project is set up to be easily deployable to GitHub Pages using GitHub Actions.

### Option 1: Using GitHub Actions (Recommended)

1. Push this repository to GitHub
2. Go to your repository's Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically build and deploy when you push to the main branch

### Option 2: Manual Deployment

To manually build the site for GitHub Pages:

```bash
# This builds the site and makes it ready for GitHub Pages
node build-for-gh-pages.js
```

Then upload the contents of the `dist` folder to your GitHub Pages repository.

## Structure

- `/client/src` - Frontend React application
  - `/components` - Reusable UI components
  - `/pages` - Page components for each route
  - `/lib` - Utility functions and hooks
- `/public` - Static assets
- `/.github/workflows` - GitHub Actions workflow for automated deployment

## Notes for GitHub Pages Deployment

- This site uses client-side routing, which required special handling for GitHub Pages
- A custom 404.html page is created during the build process to handle client-side routing
- The static version uses hash-based routing (#/about instead of /about) for maximum compatibility