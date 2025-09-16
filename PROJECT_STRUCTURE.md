# GenAI Consulting Website - Project Structure

## Overview

This document outlines the project structure and organization for the GenAI Consulting Website built with Next.js 14, TypeScript, and Tailwind CSS.

## Directory Structure

```
genai-consulting-website/
├── README.md                           # Project documentation
├── PROJECT_STRUCTURE.md               # This file
├── GENAI_WEBSITE_IMPLEMENTATION_PLAN.md # Master implementation plan
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
├── next.config.ts                      # Next.js configuration
├── eslint.config.mjs                   # ESLint configuration
├── postcss.config.mjs                  # PostCSS configuration
├── .prettierrc.json                    # Prettier configuration
├── .prettierignore                     # Prettier ignore rules
├── .gitignore                          # Git ignore rules
├── .husky/                             # Git hooks
│   └── pre-commit                      # Pre-commit hook
│
├── public/                             # Static assets
│   ├── images/                         # Image assets
│   ├── icons/                          # Icon assets
│   ├── favicon.ico                     # Favicon
│   └── robots.txt                      # SEO robots file
│
├── src/                                # Source code
│   ├── app/                            # Next.js 14 App Router
│   │   ├── (marketing)/                # Marketing pages group
│   │   │   ├── page.tsx                # Homepage
│   │   │   └── layout.tsx              # Marketing layout
│   │   ├── services/                   # Service pages
│   │   │   ├── page.tsx                # Services overview
│   │   │   ├── [slug]/                 # Dynamic service pages
│   │   │   └── layout.tsx              # Services layout
│   │   ├── case-studies/               # Case study pages
│   │   │   ├── page.tsx                # Case studies overview
│   │   │   ├── [slug]/                 # Dynamic case study pages
│   │   │   └── layout.tsx              # Case studies layout
│   │   ├── about/                      # About page
│   │   │   └── page.tsx
│   │   ├── contact/                    # Contact page
│   │   │   └── page.tsx
│   │   ├── resources/                  # Blog/resources
│   │   │   ├── page.tsx                # Resources overview
│   │   │   └── [slug]/                 # Dynamic resource pages
│   │   ├── api/                        # API routes
│   │   │   ├── contact/                # Contact form API
│   │   │   ├── chat/                   # AI chat API
│   │   │   └── demos/                  # AI demo APIs
│   │   ├── globals.css                 # Global styles
│   │   ├── layout.tsx                  # Root layout
│   │   ├── loading.tsx                 # Global loading component
│   │   ├── error.tsx                   # Global error component
│   │   └── not-found.tsx               # 404 page
│   │
│   ├── components/                     # React components
│   │   ├── ui/                         # Reusable UI components
│   │   │   ├── Button.tsx              # Button component
│   │   │   ├── Card.tsx                # Card component
│   │   │   ├── Modal.tsx               # Modal component
│   │   │   ├── Input.tsx               # Input component
│   │   │   ├── Loader.tsx              # Loading component
│   │   │   ├── Badge.tsx               # Badge component
│   │   │   ├── Avatar.tsx              # Avatar component
│   │   │   └── index.ts                # UI components index
│   │   ├── sections/                   # Page section components
│   │   │   ├── Hero.tsx                # Hero section
│   │   │   ├── TrustBar.tsx            # Trust indicators bar
│   │   │   ├── Services.tsx            # Services grid
│   │   │   ├── CaseStudies.tsx         # Case studies preview
│   │   │   ├── ContactForm.tsx         # Contact form
│   │   │   ├── Newsletter.tsx          # Newsletter signup
│   │   │   └── index.ts                # Sections index
│   │   ├── ai/                         # AI-powered components
│   │   │   ├── ChatAssistant.tsx       # AI chat assistant
│   │   │   ├── DemoPlayground.tsx      # Interactive demo container
│   │   │   ├── SentimentWidget.tsx     # Sentiment analysis widget
│   │   │   ├── DocumentScanner.tsx     # Document intelligence demo
│   │   │   ├── ROICalculator.tsx       # ROI calculator
│   │   │   └── index.ts                # AI components index
│   │   ├── animations/                 # Animation components
│   │   │   ├── ParticleBackground.tsx  # Particle systems
│   │   │   ├── ScrollReveal.tsx        # Scroll animations
│   │   │   ├── TypewriterEffect.tsx    # Text typing effect
│   │   │   ├── CounterAnimation.tsx    # Number counting
│   │   │   ├── GradientShift.tsx       # Dynamic gradients
│   │   │   └── index.ts                # Animation components index
│   │   ├── layout/                     # Layout components
│   │   │   ├── Header.tsx              # Site header
│   │   │   ├── Footer.tsx              # Site footer
│   │   │   ├── Navigation.tsx          # Main navigation
│   │   │   ├── Sidebar.tsx             # Sidebar navigation
│   │   │   └── index.ts                # Layout components index
│   │   └── providers/                  # Context providers
│   │       ├── ThemeProvider.tsx       # Theme context
│   │       ├── ChatProvider.tsx        # Chat context
│   │       └── AnalyticsProvider.tsx   # Analytics context
│   │
│   ├── lib/                            # Utility libraries
│   │   ├── utils.ts                    # General utilities
│   │   ├── tokens.ts                   # Design system tokens
│   │   ├── validations.ts              # Form validation schemas
│   │   ├── constants.ts                # App constants
│   │   ├── api.ts                      # API client utilities
│   │   ├── auth.ts                     # Authentication utilities
│   │   └── analytics.ts                # Analytics utilities
│   │
│   ├── hooks/                          # Custom React hooks
│   │   ├── useLocalStorage.ts          # Local storage hook
│   │   ├── useDebounce.ts              # Debounce hook
│   │   ├── useIntersectionObserver.ts  # Intersection observer
│   │   ├── useMediaQuery.ts            # Media query hook
│   │   ├── useScrollPosition.ts        # Scroll position hook
│   │   ├── useChat.ts                  # Chat functionality
│   │   └── index.ts                    # Hooks index
│   │
│   ├── types/                          # TypeScript type definitions
│   │   ├── index.ts                    # Global types
│   │   ├── api.ts                      # API types
│   │   ├── components.ts               # Component types
│   │   └── env.d.ts                    # Environment types
│   │
│   └── styles/                         # Additional styles
│       ├── components.css              # Component-specific styles
│       ├── utilities.css               # Utility classes
│       └── animations.css              # Animation definitions
│
├── docs/                               # Documentation
│   ├── DEPLOYMENT.md                   # Deployment guide
│   ├── COMPONENTS.md                   # Component documentation
│   ├── API.md                          # API documentation
│   └── TESTING.md                      # Testing guide
│
└── tests/                              # Test files
    ├── __mocks__/                      # Test mocks
    ├── components/                     # Component tests
    ├── pages/                          # Page tests
    ├── utils/                          # Utility tests
    └── setup.ts                        # Test setup
```

## Key Conventions

### Naming Conventions
- **Components**: PascalCase (e.g., `Button.tsx`, `ChatAssistant.tsx`)
- **Hooks**: camelCase starting with "use" (e.g., `useLocalStorage.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`, `api.ts`)
- **Types**: PascalCase for interfaces/types (e.g., `UserProfile`, `ApiResponse`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `API_BASE_URL`)

### File Organization
- Each component directory includes an `index.ts` file for clean imports
- Related components are grouped in logical directories
- Utilities and helpers are separated by functionality
- Types are centralized but can be split by domain

### Import Organization
```typescript
// External libraries
import React from 'react'
import { NextPage } from 'next'

// Internal utilities
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

// Types
import type { ComponentProps } from '@/types'

// Relative imports
import './Component.css'
```

### Component Structure
```typescript
// Component.tsx
interface ComponentNameProps {
  // Props interface
}

export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component implementation
}

export default ComponentName
```

## Design System Integration

The project uses a comprehensive design system defined in `src/lib/tokens.ts`:

- **Colors**: Brand colors, neutral scale, semantic colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Predefined shadow levels including AI-specific glows
- **Animations**: Duration, easing functions
- **Components**: Component-specific tokens

## State Management

- **Local Component State**: React `useState` and `useReducer`
- **Global State**: Context API with providers
- **Server State**: TanStack Query (to be added in Phase 4)
- **Form State**: React Hook Form with Zod validation

## Styling Approach

- **Primary**: Tailwind CSS with custom design tokens
- **Components**: CSS-in-JS for complex components (Framer Motion)
- **Animations**: Framer Motion for complex animations
- **Icons**: Lucide React + custom SVG icons

## Development Workflow

1. **Feature Development**:
   - Create feature branch from main
   - Implement components following structure
   - Add TypeScript types
   - Write tests (when test setup is complete)
   - Submit PR for review

2. **Code Quality**:
   - ESLint for code linting
   - Prettier for code formatting
   - Husky + lint-staged for pre-commit hooks
   - TypeScript for type safety

3. **Testing Strategy**:
   - Unit tests for utilities and hooks
   - Integration tests for components
   - E2E tests for critical user journeys

## Performance Considerations

- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack bundle analyzer
- **Core Web Vitals**: Performance monitoring
- **Lazy Loading**: Intersection Observer for animations

## Accessibility

- **WCAG 2.1 AA**: Compliance target
- **Semantic HTML**: Proper heading hierarchy
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators

## Next Steps

Refer to `GENAI_WEBSITE_IMPLEMENTATION_PLAN.md` for the complete development roadmap and current progress tracking.

---

**Note**: This structure is designed to scale from the initial MVP to a full-featured enterprise website. Components and features will be added progressively according to the implementation plan.