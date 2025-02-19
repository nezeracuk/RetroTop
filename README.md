# 🎮 Project Overview
A React-based platform specializing in retro video game cartridges, featuring authentication and cart management.

## 🚀 Tech Stack
### Frontend
- React 18.3.1
- Redux Toolkit
- React Router v6
- Formik + Yup
- CSS Modules
- Notiflix

### Backend
- Express.js
- JWT authentication
- Bcrypt
- CORS enabled

## 🔄 State Management
Redux slices for:
- Cart management
- Authentication
- Product filtering
- User preferences
  
## 🛠 Installation
```bash
git clone https://github.com/your-username/RetroTop.git
npm install

# Start development server
npm start

# Start backend server
node src/services/server.js
```
# 🔑 Core Features
- Authentication System
- JWT-based authentication
- Protected routes
- Register/Login functionality
- Password encryption
## Product Catalog
- Dynamic filtering
- Search functionality
- Price sorting
- Rarity filtering
- Year-based filtering (1998-2003)
## Shopping Cart
- Add/remove functionality
- Quantity management
- LocalStorage persistence
- User-specific carts
## Checkout Process
- Form validation
- Multiple delivery options
- Order confirmation
- Address validation

# 📦 Project Structure
```bash
src/
├── components/      # React components
├── context/        # Context providers
├── redux/          # State management
├── services/       # API services
├── route/          # Route configurations
└── App.js          # Main component
```
