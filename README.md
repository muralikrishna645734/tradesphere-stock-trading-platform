# TradeSphere – Stock Trading Platform

TradeSphere is a full-stack stock trading platform inspired by modern trading systems like Zerodha. It provides a simulated trading experience with dashboards, watchlists, holdings, and portfolio insights.

---

## Features

- Interactive trading dashboard
- Stock watchlist with UI-based market data
- Holdings and positions tracking
- Funds and portfolio summary
- Multi-page frontend (Home, Products, Pricing, Support, About)
- Backend API using Node.js and Express
- MongoDB database integration
- Responsive UI using React and Bootstrap

---

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap

### Dashboard
- React.js
- Chart.js
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Body-parser
- Dotenv

---

## Project Structure

# TradeSphere_Project

TradeSphere_Project/
├── backend        # Node.js + Express + MongoDB API
├── frontend       # Landing page (React)
├── dashboard      # Trading dashboard (React)

---

## Running the Project

### Backend Setup

```bash
cd backend
npm install
npm start

Server runs at:
http://localhost:3002

###Frontend Setup
cd frontend
npm install
npm start

Runs at:
http://localhost:3000


##Environment Variables
Create a .env file inside the backend folder:

PORT=3002
MONGO_URL=your_mongodb_connection_string
