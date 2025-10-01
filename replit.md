# Manual do Bebê Dorminhoco

## Overview

A full-stack web application built to promote and sell a baby sleep guide called "Manual do Bebê Dorminhoco" (The Sleepy Baby Manual). The application features a landing page designed to convert visitors into customers through persuasive copywriting, testimonials, and time-sensitive offers. Built with React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with /api prefix
- **Development**: Hot module replacement with Vite integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Custom request/response logging middleware

### Data Storage Solutions
- **Database**: PostgreSQL as primary database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless PostgreSQL connection

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Model**: Basic user schema with username/password authentication
- **Security**: Session-based authentication with secure cookie configuration

### Form Handling and Validation
- **Form Library**: React Hook Form for form state management
- **Validation**: Zod schema validation with Drizzle integration
- **Resolvers**: @hookform/resolvers for connecting React Hook Form with Zod

### Development and Build Configuration
- **TypeScript**: Strict mode enabled with path mapping for clean imports
- **Module System**: ES modules throughout the application
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling, Vite for client bundling
- **Code Quality**: TypeScript checking with incremental compilation

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Connection Pooling**: Built-in connection management through Neon

### UI and Design System
- **Radix UI**: Complete set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for typography

### Development Tools
- **Replit Integration**: 
  - @replit/vite-plugin-runtime-error-modal for error overlay
  - @replit/vite-plugin-cartographer for development tooling
- **Development Banner**: Replit development environment detection

### Third-Party Libraries
- **Date Manipulation**: date-fns for date formatting and manipulation
- **Class Utilities**: clsx and class-variance-authority for conditional styling
- **Carousel**: embla-carousel-react for image/content carousels
- **Command Palette**: cmdk for search and command interfaces

### Build and Bundling
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Autoprefixer