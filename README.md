# Expense Tracker

A full-stack Expense Tracker application built using the MERN stack.  
It allows users to manage their expenses, visualize spending patterns, and generate reports with a clean, responsive interface.

## Features

### 1. User Authentication and Authorization
- Secure user signup and login.
- Role-based access control for administrative tasks.
- JWT-based authentication with protected API routes.

### 2. Expense and Category Management
- Add, edit, and delete expense records.
- Manage categories.
- Track expenses by date, category, and description.
- Attach receipts or documents to expense entries.

### 3. Dashboard and Reporting
- Visual dashboard displaying:
  - Total expenses
  - Expenses by category
  - Recent transactions
- Generate reports based on date ranges and categories.
- Visualize data using pie charts and bar graphs.

### 4. Responsive User Interface
- Clean and mobile-friendly design.
- Built using React.js, Bootstrap, and Material-Icons.
- Enhanced visuals with tsparticles, unique-names-generator, react-datepicker, and moment.js.

### 5. Technical Stack
- **Frontend**: React.js, Bootstrap, Material-Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens)

### 6. Deployment
- Frontend deployed on **AWS**.
- Backend deployed on **Render**.
- CI/CD pipelines for automated build and deployment.

## Architecture Overview
- **Frontend**: React.js SPA with reusable components and API integrations.
- **Backend**: RESTful API built using Express.js.
- **Database**: MongoDB Atlas for secure and scalable storage.

## Installation (Local Setup)
```bash
# Clone the repository
git clone <your-repo-link>

# Navigate into frontend
cd frontend
npm install
npm start

# Navigate into backend
cd backend
npm install
npm run dev
```

Make sure to set up environment variables for MongoDB URI, JWT secret, etc.

## Contact
For any queries or feedback, feel free to reach out:  
📧 **umeshyadav7988@gmail.com**

