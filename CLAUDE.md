# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React-based company website for Leader Service, built with:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM with page-based routing
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion for page transitions and animations
- **Icons**: Lucide React
- **Email**: Nodemailer for contact form functionality via Supabase functions

### Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Footer, Hero, etc.)
├── pages/         # Route components (Home, About, Services, Projects, Team, Contact)
├── api/           # API handlers (send-email.ts)
├── assets/        # Static assets and images
└── App.tsx        # Main app with routing configuration
```

### Key Architecture Patterns

1. **Page-Component Split**: Each route has both a page component (`src/pages/`) and a corresponding component (`src/components/`) for reusability
2. **Centralized Image Config**: `src/components/ImageConfig.ts` manages all image paths for easy maintenance
3. **Email Integration**: Contact form uses both client-side API (`src/api/send-email.ts`) and Supabase Edge Functions (`supabase/functions/send-email/`)
4. **Animation Strategy**: Framer Motion's AnimatePresence with "wait" mode for smooth page transitions

### Email System

The contact form has dual email implementation:
- Primary: Supabase Edge Function at `supabase/functions/send-email/`
- Fallback: Next.js API-style handler at `src/api/send-email.ts`
- Test script: `scripts/test-smtp.js` for SMTP configuration testing

Both use Nodemailer with Hostinger SMTP settings and require these environment variables:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`
- `EMAIL_USER`, `EMAIL_PASS`
- `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_NAME`

### Deployment Configuration

- Uses `public/_redirects` for SPA routing on Netlify
- Vite config includes base path configuration for subdirectory deployment
- Build output goes to `dist/` directory