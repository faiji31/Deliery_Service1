Plan: Parcel Delivery Application - Full-Stack Build
Build a modern, animated parcel delivery platform with role-based access for customers, riders, and admins. Leverage existing zap-shift project knowledge for backend APIs, but create fresh frontend with contemporary design.

Steps

Set up project structure: Create frontend (React/Next.js) and backend (Express/MongoDB) folders, initialize git, install dependencies.
Implement authentication: JWT-based login/register for all roles, with role-based routing.
Build core pages: Home (landing), Auth (login/register), Dashboards (customer/rider/admin), Booking form, Tracking page.
Add functionality: Parcel booking with pricing, real-time tracking via WebSockets, payment integration, rider management.
Design system: Modern UI with Tailwind CSS, animations via Framer Motion, responsive mobile-first design.
Integrate APIs: Connect to backend endpoints for CRUD operations, handle errors and loading states.
Testing and deployment: Unit tests, end-to-end testing, deploy to cloud (Vercel/Netlify for frontend, Railway/Heroku for backend).
Relevant files

frontend/package.json — React/Next.js dependencies (react-router, axios, tailwindcss, framer-motion)
backend/package.json — Express dependencies (express, mongoose, jwt, bcryptjs, socket.io)
frontend/src/pages/ — Page components (Home.jsx, Login.jsx, Dashboard.jsx, etc.)
frontend/src/components/ — Reusable UI (Navbar, ParcelCard, Map, etc.)
backend/src/models/ — MongoDB schemas (User, Parcel, Rider, etc.)
backend/src/routes/ — API routes (auth, parcels, riders, admin)
Verification

Run npm test in both frontend/backend to ensure no build errors.
Test authentication flow: Register → Login → Access role-specific dashboard.
Verify booking: Create parcel → Assign rider → Track status → Deliver with OTP.
Check responsiveness: Test on mobile/desktop, animations smooth.
API integration: Use Postman to test all endpoints, ensure JWT auth works.
Decisions

Tech stack: React (frontend), Express + MongoDB (backend), Tailwind + Framer Motion (styling/animations).
Roles: Customer (book/track), Rider (accept/deliver), Admin (manage).
Design: Clean, modern, animated transitions, mobile-optimized.
Scope: Full app with real-time tracking, payments, notifications.
Reuse: Backend models/routes from zap-shift memory, fresh frontend.
Further Considerations

Real-time tracking: Implement WebSockets for live location updates.
Payments: Integrate Stripe for secure transactions.
Notifications: Add push notifications for status updates.
Scalability: Use cloud database, CDN for assets.
Implementation Prompts
Use these prompts with Copilot or AI assistants to generate code step-by-step. Each prompt builds on the previous.

Setup Prompts
"Create a new React app with TypeScript, Tailwind CSS, and Framer Motion. Set up folder structure: src/pages, src/components, src/contexts, src/services."

"Initialize an Express.js server with MongoDB connection, JWT authentication, and CORS. Create basic folder structure: src/models, src/routes, src/controllers, src/middleware."

Authentication Prompts
"Create a login/register form component with validation using React Hook Form. Include role selection (customer/rider/admin)."

"Implement JWT authentication context in React. Add login, register, logout functions with API calls. Handle token storage and auto-refresh."

"Build Express auth routes: POST /register, POST /login. Include password hashing with bcrypt, JWT generation, role-based middleware."

Core Pages Prompts
"Design a modern home page with hero section, features showcase, and call-to-action buttons. Use Tailwind for styling and Framer Motion for entrance animations."

"Create customer dashboard: Display recent parcels, quick booking button, account info. Use cards and animations for parcel status."

"Build rider dashboard: Show available deliveries, earnings, current location map. Include accept/reject buttons with smooth transitions."

"Design admin dashboard: Analytics charts, rider management table, parcel overview. Use data visualization libraries like Chart.js."

"Create parcel booking form: Multi-step wizard with sender/receiver details, package info, pricing calculation. Validate inputs and show progress."

"Build tracking page: Real-time map with parcel location, status timeline, ETA. Use WebSockets for live updates."

Functionality Prompts
"Implement parcel CRUD API: POST /parcels (create), GET /parcels/:id (track), PUT /parcels/:id/status (update). Include OTP generation for delivery."

"Add rider management API: GET /riders, POST /riders/register, PUT /riders/:id/approve. Include location tracking endpoints."

"Create payment integration: Stripe payment intent API, confirm payment route. Handle COD and online payments."

"Build real-time tracking: Socket.io server for location updates, client-side map integration with Leaflet or Google Maps."

"Add notification system: Email/SMS for status updates using Nodemailer/Twilio. Client-side toast notifications."

Design & Animation Prompts
"Create reusable UI components: Button, Card, Modal, Loading spinner. Apply consistent styling and hover animations."

"Implement responsive navigation: Hamburger menu for mobile, smooth transitions between pages."

"Add micro-interactions: Button clicks, form submissions, status changes with Framer Motion animations."

"Design loading states and error handling: Skeleton screens, error boundaries, retry mechanisms with animations."

Testing & Deployment Prompts
"Write unit tests for React components using Jest and React Testing Library. Test authentication and form validation."

"Create API tests with Supertest for Express routes. Test CRUD operations and authentication."

"Set up CI/CD pipeline: GitHub Actions for automated testing and deployment to Vercel/Netlify."

"Configure production environment: Environment variables, database connection, CORS for production domain."

