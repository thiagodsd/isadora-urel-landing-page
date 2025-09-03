# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for Isadora Urel, built using Create React App. It's a single-page application with smooth scrolling navigation and Firebase Analytics integration.

## Development Commands

- `npm start` - Start development server (runs on localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Architecture

### Component Structure
- **App.js** - Main application component that renders all page sections in order
- **Header.js** - Navigation header with hamburger menu for mobile
- **Hero.js** - Landing hero section
- **Services.js** - Services section with ServicesHeader.js
- **About.js** - About section with AboutHeader.js  
- **Contact.js** - Contact section with ContactHeader.js
- **Footer.js** - Page footer
- **WhatsApp.js** - Floating WhatsApp contact button
- **navigateAndLog.js** - Navigation utility with Firebase Analytics tracking

### Styling
- CSS files in `/src/styles/` directory with component-specific stylesheets
- Uses AOS (Animate On Scroll) library for scroll animations
- Responsive design with hamburger menu for mobile

### Firebase Integration
- Firebase Analytics configured in `src/firebase.js`
- `navigateAndLog` function tracks user interactions with custom events
- Firebase Hosting configured for deployment (`firebase.json`)

### Assets
- Images stored in `/src/assets/images/` with subdirectories for SVGs and deprecated assets
- Logo variations and service/contact icons available in multiple formats

## Key Features

- Single-page application with smooth scrolling navigation
- Analytics tracking on all navigation interactions
- Mobile-responsive hamburger menu
- Floating WhatsApp contact integration
- Back-to-top functionality
- Animation effects using AOS library

## Environment Variables

The project uses environment variables for Firebase configuration. Create a `.env` file based on `.env.example` with your Firebase credentials:

```bash
cp .env.example .env
```

Then update the values in `.env` with your actual Firebase configuration.

## Security

- Firebase configuration is stored in environment variables (not committed to git)
- `.env` files are excluded via `.gitignore`
- Use `.env.example` as a template for required environment variables

## Deployment

The project is configured for Firebase Hosting. The build directory is set to `build` in `firebase.json`.