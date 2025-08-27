# 📦 Parcel Delivery Frontend

A **secure, role-based, and user-friendly** frontend application for a **Parcel Delivery System** using **React.js**, **Redux Toolkit**, and **RTK Query**.  

This frontend connects to the backend Parcel Delivery API and provides **Senders**, **Receivers**, and **Admins** with dashboards and tools to manage parcels efficiently.

---

## 🚀 Features

### Public Pages
- **Home Page:** Landing page introducing the parcel delivery service.
- **About Page:** Service description, mission, and team information.
- **Contact Page:** Inquiry form for user submissions (simulated).

### Authentication
- Login with JWT-based authentication.
- Registration with role selection (**Sender** or **Receiver**).
- Role-based redirection after login.
- Persisted login state.
- Logout functionality.

### Sender Dashboard
- Create parcel delivery requests.
- Cancel parcels (if not dispatched).
- View all created parcels with status logs.

### Receiver Dashboard
- View incoming parcels.
- Confirm parcel delivery.
- View delivery history.

### Admin Dashboard
- Manage all users (block/unblock).
- Manage all parcels (block/unblock, update delivery status).
- Assign delivery personnel (if needed).

### Parcel Tracking
- Search parcels by unique tracking ID.
- View detailed parcel status logs, including timestamps and notes.

### Data Visualization & Dashboard
- Overview Cards: Total parcels, Delivered, In Transit, Pending/Cancelled.
- Charts: Bar and Pie charts showing parcel trends, delivery status distribution, and monthly shipments.
- Parcel Table: Paginated, searchable, and filterable table with actions.
- Status Timeline: Visual history of parcel updates.
- Role-Specific Views: Sender sees sent parcels, Receiver sees received parcels, Admin sees all.
- Responsive Design: Works seamlessly on all devices.

### General Features
- Role-based navigation menu.
- Loading indicators and global error handling.
- Form validations (required fields, numeric checks, positive amounts) and filtering.
- Toast notifications for success/error messages.
- Performance optimization via lazy-loading and skeleton loaders.
- Clean, consistent UI with accessible color contrasts and responsive layouts.

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Redux Toolkit & RTK Query  
- TypeScript  
- Tailwind CSS  

**Backend:**  
- Node.js / Express (REST API)  
- MongoDB / Mongoose  
- JWT & bcrypt for secure authentication  

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
````
git clone https://github.com/Shanto57575/next_level_assignment_6.git

cd parcel_delivery_system_frontend
````
2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file using `.env.sample` as reference

4. **Run the Server**

```bash
npm run dev
```

**Live Demo:** [Parcel Delivery System](https://parcel-delivery-system-frontend-phi.vercel.app)

