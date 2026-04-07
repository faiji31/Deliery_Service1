# Backend Folder
Backend structure with Express and MongoDB Native Driver

## Installation & Setup

1. Create `.env` file:
   ```
   cp .env.example .env
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start MongoDB locally or connect to Atlas

4. Run development server:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /health` - Health check
- `GET /api/status` - API Status

Frontend will connect to http://localhost:5000

MongoDB Native Driver Configuration:
- No Mongoose ORM
- Direct MongoDB connection
- Raw MongoDB queries
- Better performance for complex scenarios
