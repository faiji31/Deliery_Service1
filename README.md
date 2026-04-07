# 🚚 Delivery Parcel Service - Full Stack Project

A modern, full-stack parcel delivery management system with separate frontend and backend.

## 📁 Project Structure

```
Deliery_Service/
├── frontend/                    # React + Vite Frontend
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.jsx        # Main home page with "Hello Deliery Parcel"
│   │   ├── App.jsx             # Main App component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Tailwind styles
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── postcss.config.js       # PostCSS configuration
│   ├── index.html              # HTML template
│   └── package.json            # Frontend dependencies
│
└── backend/                     # Express + MongoDB Backend
    ├── src/
    │   └── index.js            # Main server file
    ├── .env.example            # Environment template
    └── package.json            # Backend dependencies
```

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** - UI Library
- ⚡ **Vite** - Build tool (ultra-fast)
- 🎨 **Tailwind CSS** - Utility-first CSS
- 🎭 **Daisy UI** - Component library
- 🔀 **React Router v6** - Client-side routing
- ❌ **No TypeScript** (vanilla JSX)
- ❌ **No Next.js** (just React)

### Backend
- 🟢 **Node.js** - Runtime
- 🚂 **Express.js** - Web framework
- 🗄️ **MongoDB** - Native Driver (not Mongoose)
- 🔄 **CORS** - Cross-origin support
- 📝 **Environment Variables** - Configuration management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
# Backend runs on http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:3000
# Opens automatically in your browser
```

## 📱 Frontend Pages

- **Home Page** - Landing page with "Hello Deliery Parcel" heading
  - Feature cards (Quick Pickup, Real-time Tracking, Best Rates)
  - Call-to-action buttons
  - Tech stack information

## 🔌 Backend API

### Health Endpoints
- `GET /health` - Basic health check
- `GET /api/status` - Detailed API status

### Response Example
```json
{
  "service": "Delivery Parcel API",
  "version": "1.0.0",
  "database": "MongoDB Native Driver",
  "frontend": "React + Vite + Tailwind + Daisy UI",
  "message": "Backend API Ready!"
}
```

## 📦 Installation Commands

### Frontend
```bash
npm install
# Installs:
# - react@18
# - react-dom@18
# - react-router-dom@6
# - tailwindcss@3
# - daisyui@4
# - vite@5
# - @vitejs/plugin-react@4
# - postcss, autoprefixer
```

### Backend
```bash
npm install
# Installs:
# - express@4
# - cors@2
# - mongodb@6 (Native Driver)
# - dotenv@16
```

## 🎯 Features

✅ Responsive UI with Tailwind CSS
✅ Component library with Daisy UI
✅ Client-side routing with React Router
✅ MongoDB integration (Native Driver)
✅ CORS enabled
✅ Modern build tools (Vite)
✅ Hot Module Replacement (HMR)
✅ Production-ready structure

## 📝 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/delivery-parcel
PORT=5000
NODE_ENV=development
```

## 🔗 API Communication

Frontend will communicate with backend at:
```
http://localhost:5000/api
```

## 📚 Next Steps

1. ✅ Frontend setup complete - "Hello Deliery Parcel" page ready
2. ✅ Backend setup complete - Express server ready
3. Add authentication endpoints
4. Create parcel management APIs
5. Implement real-time tracking
6. Add payment integration
7. Build admin dashboard

## 🎨 UI Features

- Gradient backgrounds
- Responsive grid layouts
- Daisy UI components (buttons, cards)
- Tailwind utilities
- Dark mode support
- Mobile-friendly design

## 🚢 Deployment Ready

Both frontend and backend are configured for deployment:
- Vite for production builds (frontend)
- Express for cloud hosting (backend)
- MongoDB Atlas support
- Environment-based configuration

## 📞 Support

For issues or questions:
1. Check backend logs on port 5000
2. Check frontend console (F12)
3. Verify MongoDB connection
4. Check CORS configuration

---

Happy coding! 🎉
