# CreditSea Loan Manager

CreditSea Loan Manager is a web-based application designed to manage loan applications efficiently.

## Features

### User Features
- Apply for loans with detailed information.
- View loan application status.
- Search for loans and manage personal loan history.

### Verifier Features
- View all loan applications.
- Reject or verify loan applications.

### Admin Features
- Manage all loan applications and borrower data.
- Approve or reject loan applications.

## Admin Routes
- **User Route:** `/`
- **Admin Route:** `/admin`
- **Verifier Route:** `/verifier`

## Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (Cloud or Local Instance)

### Steps

#### Clone the repository:
```sh
git clone https://github.com/your-repo/creditsea-loan-manager.git
cd creditsea-loan-manager
```

#### Install dependencies:
```sh
# Backend
npm install

# Frontend
cd frontend
npm install
```

#### Set up environment variables:
Create a `.env` file in the backend directory and add the following:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Start the application:
```sh
cd creditsea-loan-manager
npm run dev
```

## Access the application
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:5000](http://localhost:5000)

## API Endpoints

### Loan Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/loans/apply` | Apply for a loan |
| GET    | `/api/loans` | Get all loan applications |
| PUT    | `/api/loans/:id` | Update loan status |

## License
This project is licensed under the **MIT License**.

