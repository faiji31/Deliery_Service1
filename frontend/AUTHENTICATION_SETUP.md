# Authentication & Registration Setup Guide

## What's New

We've added complete **Login and Registration** pages with the following features:

### Pages Added
- **Login Page** (`/login`) - User login with email and password
- **Register Page** (`/register`) - New user registration with role selection (Customer/Rider)

### Components & Services
- **AuthProvider** - Context for managing authentication state
- **API Service** - Complete backend API client with auth endpoints
- **Updated Navbar** - Shows user info when logged in, login/register buttons when logged out

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in the frontend directory:

```bash
# frontend/.env.local
VITE_API_URL=http://localhost:5000/api
```

Copy from `.env.example`:
```bash
cp frontend/.env.example frontend/.env.local
```

### 2. Update Backend Auth Endpoints

Make sure your backend has these authentication endpoints:

**POST** `/api/auth/register`
```json
Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+880...",
  "userType": "customer"  // or "rider"
}

Response:
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "userType": "customer"
  },
  "message": "Registration successful"
}
```

**POST** `/api/auth/login`
```json
Request:
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**GET** `/api/auth/profile` (requires Authorization header)
```
Headers: Authorization: Bearer <token>

Response:
{
  "user": { ...user data... }
}
```

### 3. Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Should run on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Should run on http://localhost:5173
```

### 4. Test the Flow

1. Navigate to `http://localhost:5173/register`
2. Create a new account (choose Customer or Rider)
3. Get redirected to home page (auto-login on success)
4. See your name in the navbar user menu
5. Click logout to test logout

## Authentication Flow

1. User fills registration/login form
2. Form is submitted to backend API
3. Backend validates and returns JWT token + user data
4. Token is stored in `localStorage` as `authToken`
5. User data stored in `localStorage` as `user`
6. AuthProvider updates state, component re-renders
7. Navbar shows user info and logout option
8. All subsequent API calls include `Authorization: Bearer <token>` header

## Features

### Login Page
- Email and password inputs
- Show/hide password toggle
- Remember me checkbox
- "Forgot password" link (ready for implementation)
- Error messages
- Loading state with spinner
- Link to registration page
- Dark mode support

### Registration Page  
- Full name, email, phone inputs
- Customer or Rider role selection
- Password confirmation
- Show/hide password toggles
- Terms & Conditions checkbox
- Form validation
- Loading state
- Error displays
- Link to login page
- Dark mode support

### Navbar Integration
- Logged out: Shows "Login" and "Sign Up" buttons
- Logged in: Shows user dropdown menu
- Shows user name/email
- Logout option in dropdown
- Responsive (hidden on mobile, in menu on mobile)

## File Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Login.jsx          (NEW)
│   │   ├── Register.jsx       (NEW)
│   │   └── Home.jsx
│   ├── contexts/
│   │   ├── AuthProvider.jsx   (NEW)
│   │   └── ThemeContext.jsx
│   ├── services/
│   │   └── api.js             (NEW)
│   ├── components/
│   │   ├── Navbar.jsx         (UPDATED)
│   │   ├── Footer.jsx
│   │   └── ...
│   └── App.jsx                (UPDATED)
├── .env.example              (NEW)
└── ...
```

## API Methods Available

The API service provides organized methods:

```javascript
// Authentication
authAPI.register(userData)
authAPI.login(credentials)
authAPI.logout()
authAPI.getProfile()
authAPI.updateProfile(userData)

// Riders
riderAPI.register(riderData)
riderAPI.getProfile()
riderAPI.updateStatus(status)

// Parcels
parcelAPI.create(parcelData)
parcelAPI.getAll(filters)
parcelAPI.getById(id)
parcelAPI.track(trackingId)
parcelAPI.verifyOTP(id, otp)

// Payments
paymentAPI.createPaymentIntent(parcelId)
paymentAPI.confirmPayment(paymentData)
paymentAPI.getHistory()

// Admin
adminAPI.getDashboard()
adminAPI.getAnalytics(filters)
adminAPI.getRiders()
adminAPI.approveRider(riderId)
```

## Using Authentication in Components

```javascript
import { useAuth } from '../contexts/AuthProvider'

export default function MyComponent() {
  const { user, token, login, logout, isAuthenticated } = useAuth()

  // Access user info
  console.log(user.name, user.email)
  
  // Check if authenticated
  if (!isAuthenticated) {
    return <p>Please login</p>
  }

  return <p>Welcome, {user.name}!</p>
}
```

## Troubleshooting

**"API endpoint 404"**
- Make sure backend is running on correct port
- Check VITE_API_URL in `.env.local`
- Verify backend has auth routes

**"Not redirecting after login"**
- Check console for errors
- Verify backend returns `token` in response
- Check localStorage for `authToken`

**"Auth state not persisting on refresh"**
- AuthProvider checks localStorage on mount
- Check browser's localStorage (DevTools > Application > Storage)
- Verify JWT is valid

**"Navbar not showing login buttons"**
- Clear cache and browser localStorage
- Restart dev server
- Check AuthProvider is wrapping App
