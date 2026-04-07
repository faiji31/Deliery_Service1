# Parcel Booking System - Complete Guide

## Overview

We've implemented a complete **Parcel Booking System** with:
- ✅ Customer-only access (protected routes)
- ✅ Real-time pricing calculator (Bangladesh rates)
- ✅ Company branding and logo integration
- ✅ Beautiful UI with dark mode support
- ✅ Responsive design for mobile & desktop

## Features

### 🔒 Protected Routes
- Only authenticated **customers** can access `/parcel`
- Automatic redirect to login for unauthenticated users
- Role-based access control (riders cannot access parcel booking)

### 💰 Dynamic Pricing System

**Bangladesh Pricing Structure:**

#### Same City Delivery
- **Document**: ৳60 base
- **Non-Document**: ৳110 base + ৳15/kg

#### Outside City Delivery
- **Document**: ৳80 base
- **Non-Document**: ৳150 base + ৳20/kg

**Example Calculations:**
- Same city document (5 kg): ৳60 (no weight charge)
- Same city non-doc (2 kg): ৳110 + (2 × ৳15) = ৳140
- Outside city non-doc (3 kg): ৳150 + (3 × ৳20) = ৳210

### 🎨 Company Branding

**Company Details:**
- **Name**: Vibe Delivery  
- **Logo**: 🚚 (Truck emoji)
- **Tagline**: Fast, Reliable, Affordable Delivery
- **Color Scheme**: Blue (#2563eb) & Indigo (#4f46e5)

**Implementation:**
All pages use centralized branding from `src/constants/branding.js`:
```javascript
import { COMPANY } from '../constants/branding'
```

### 📱 Pages Updated

1. **Login Page** (`/login`)
   - Company logo and name in header
   - Blue gradient theme

2. **Register Page** (`/register`)
   - Customer/Rider role selection
   - Company branding
   - Responsive forms

3. **Home Page** (`/`)
   - Company hero section at top
   - CTA button (Book Parcel or Get Started)
   - Dynamic based on user role

4. **Parcel Booking Page** (`/parcel`)
   - 3-step form (Sender, Receiver, Details)
   - Real-time price calculation
   - Sidebar with pricing breakdown
   - 8 Bangladesh districts supported

### 🎯 Form Fields

**Sender Information:**
- Full Name
- Phone Number
- Address
- Service Center (Dhaka, Chattogram, Sylhet, etc.)

**Receiver Information:**
- Full Name
- Phone Number
- Address
- Service Center

**Parcel Details:**
- Type (Document / Non-Document)
- Weight (kg)
- Description
- Special Instructions

### 🧮 Pricing Calculation

Real-time pricing updates as you fill the form:

```javascript
// Automatic calculation based on:
1. Sender & Receiver locations (same city or outside)
2. Parcel type (document or non-document)
3. Weight (if applicable)

// Example:
Sending 2kg non-document, same city:
  Base: ৳110
  Weight: 2 × ৳15 = ৳30
  Total: ৳140
```

## file Structure

```
frontend/src/
├── pages/
│   ├── Home.jsx              (UPDATED - company hero)
│   ├── Login.jsx             (UPDATED - company branding)
│   ├── Register.jsx          (UPDATED - company branding)
│   └── ParcelPage.jsx        (NEW - booking form)
├── components/
│   ├── Navbar.jsx            (UPDATED - blue gradient, booking button)
│   ├── ProtectedRoute.jsx    (NEW - role-based access)
│   └── ...
├── contexts/
│   └── AuthProvider.jsx      (existing - manages auth state)
├── services/
│   └── api.js                (existing - API calls)
├── constants/
│   └── branding.js           (NEW - company branding)
└── App.jsx                   (UPDATED - parcel route)
```

## Setup

### 1. Environment Variables

Ensure `.env.local` in frontend:
```bash
VITE_API_URL=http://localhost:5000/api
```

### 2. Backend Endpoints Required

**Create Parcel:**
```bash
POST /api/parcels
Headers: Authorization: Bearer <token>

Request Body:
{
  "senderName": "John Doe",
  "senderPhone": "+880...",
  "senderAddress": "...",
  "senderServiceCenter": "Dhaka",
  "receiverName": "...",
  "receiverPhone": "...",
  "receiverAddress": "...",
  "receiverServiceCenter": "Chattogram",
  "parcelType": "document",
  "weight": 0,
  "description": "Important documents",
  "specialInstructions": "Handle with care",
  "estimatedPrice": 60
}

Response:
{
  "success": true,
  "parcel": {
    "id": "parcel-id",
    "trackingId": "VIBE123456",
    ...
  },
  "message": "Parcel created successfully"
}
```

### 3. Start Servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Visit: `http://localhost:5173`

## User Flow

### For Customers:

1. **Register** → Select "Customer" role
2. **Home Page** → See "Book Your Parcel Now" button
3. **Click Button** → Redirects to `/parcel`
4. **Fill Form** → 
   - Enter sender details
   - Enter receiver details
   - Choose parcel type & weight
   - See real-time price update
5. **Submit** → 
   - Parcel created
   - Get tracking ID
   - Redirected to my-parcels page

### For Non-Customers:

- Login button shows instead of booking button
- Parcel page redirects to login if accessed directly
- Register shows role selection

### For Riders:

- Cannot access parcel booking page
- Would see "Access Denied" message if attempted

## Component Usage

### Using ProtectedRoute:

```jsx
import ProtectedRoute from './components/ProtectedRoute'

<Route 
  path="/parcel" 
  element={
    <ProtectedRoute requiredRole="customer">
      <ParcelPage />
    </ProtectedRoute>
  } 
/>
```

### Using Company Branding:

```jsx
import { COMPANY } from '../constants/branding'

<span>{COMPANY.logo}</span>
<h1>{COMPANY.name}</h1>
<p>{COMPANY.tagline}</p>
```

## API Integration

All parcel operations use the `parcelAPI` service:

```javascript
import { parcelAPI } from '../services/api'

// Create parcel
const response = await parcelAPI.create(parcelData)

// Get all parcels
const parcels = await parcelAPI.getAll()

// Track parcel
const tracking = await parcelAPI.track(trackingId)

// Verify delivery OTP
await parcelAPI.verifyOTP(parcelId, otp)
```

## Pricing Breakdown Display

The sidebar shows:
- **Route Type**: Same city or Outside city
- **Parcel Type**: Document or Non-Document
- **Base Charge**: From pricing table
- **Weight Charge**: If weight > 0
- **Total**: Estimated price in ৳
- **Pricing Guide**: Quick reference

## Districts Supported

Currently supporting 8 major districts:
1. Dhaka (capital)
2. Chattogram
3. Sylhet
4. Rangpur
5. Rajshahi
6. Khulna
7. Barisal
8. Mymensingh

*Expandable by updating `BANGLADESH_DISTRICTS` in branding.js*

## Customization

### Change Company Name/Logo:

Edit `/frontend/src/constants/branding.js`:

```javascript
export const COMPANY = {
  name: 'Your Company Name',
  logo: '📦', // Your emoji or SVG
  tagline: 'Your tagline',
  // ...
}
```

### Modify Pricing:

Edit pricing in `branding.js` or `ParcelPage.jsx`:

```javascript
const PRICING_CONFIG = {
  sameCity: {
    document: { base: 60, perKg: 0 },
    nonDocument: { base: 110, perKg: 15 },
  },
  outsideCity: {
    document: { base: 80, perKg: 0 },
    nonDocument: { base: 150, perKg: 20 },
  },
};
```

### Add More Districts:

Update `BANGLADESH_DISTRICTS` array in branding.js

## Error Handling

- Invalid form fields show error messages
- Network errors display user-friendly messages
- Automatic redirect to login for 401 errors
- Loading spinners during API calls

## Dark Mode Support

All pages support dark mode:
- Toggle in navbar
- Persists in localStorage
- All colors adapt automatically

## Next Steps

1. **My Parcels Page** - View all booked parcels
2. **Track Parcel** - Real-time tracking
3. **Payment Integration** - Process payments
4. **Admin Dashboard** - View all parcels/riders
5. **Rider Dashboard** - Accept & deliver parcels
6. **Notifications** - Email/SMS updates

## Troubleshooting

**"Cannot access parcel page"**
- Must be logged in as customer
- Check user role in localStorage

**"Pricing not updating"**
- Check weight value is numeric
- Verify service centers are selected

**"Form not submitting"**
- All required fields must be filled
- Check backend API is running
- See browser console for errors

**"Company logo not showing"**
- Check emoji support in browser
- Update COMPANY.logo in branding.js
