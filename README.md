# 🏡 Airbnb Clone – Wanderlust

A full-stack **Airbnb-inspired accommodation listing web application** built using **Node.js, Express.js, MongoDB, Mongoose, EJS, HTML, and CSS**.

The application allows users to browse accommodation listings, create and manage listings, add reviews, and securely authenticate using signup and login functionality.

## 🚀 Live Demo

🔗 **Live Website:**
https://airbnb-clone-project-1-1aqw.onrender.com

> **Note:** The project is currently designed primarily for desktop screens. Responsive improvements for smaller/mobile screens can be added in future updates.

---

## ✨ Features

* 🔐 User Signup & Login
* 🔑 User Authentication using Passport.js
* 🏠 Create accommodation listings
* 📋 View all available listings
* 🔎 View individual listing details
* ✏️ Edit listings
* 🗑️ Delete listings
* ⭐ Add reviews to listings
* 🗑️ Delete reviews
* 👤 Owner-based listing authorization
* 💾 MongoDB database integration
* ☁️ MongoDB Atlas support
* 🖼️ Image upload for listings
* 🔔 Flash messages for success and error notifications
* 🧩 MVC (Model-View-Controller) architecture
* 📱 Desktop-focused responsive interface

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js
* JavaScript

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js
* Passport Local
* Passport Local Mongoose
* Express Session

### Other Tools & Packages

* Method Override
* Connect Mongo
* Connect Flash
* Multer
* Cloudinary
* Joi
* EJS Mate
* Dotenv

---

## 🏗️ Project Architecture

The project follows the **MVC (Model-View-Controller) architecture** to keep the application organized and maintainable.

```text
Airbnb-Clone/
│
├── controllers/
│   ├── listing.js
│   ├── reviews.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│
├── app.js
├── middleware.js
├── schema.js
├── cloudconfig.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🔄 CRUD Operations

The application implements CRUD operations for accommodation listings.

| Operation | Function                          |
| --------- | --------------------------------- |
| Create    | Add a new listing                 |
| Read      | View listings and listing details |
| Update    | Edit an existing listing          |
| Delete    | Remove a listing                  |

Users can manage their own listings after authentication.

---

## 🔐 Authentication & Authorization

The project uses **Passport.js and Passport Local Mongoose** for user authentication.

### Authentication includes:

* User registration
* User login
* User logout
* Password authentication
* Session management

### Authorization includes:

* Only logged-in users can create listings
* Only listing owners can edit their listings
* Only listing owners can delete their listings
* Review authors can manage their own reviews

---

## 🗄️ Database

The application uses **MongoDB** as its database and **Mongoose** for database modeling.

Main collections/models include:

### User

Stores registered user information.

### Listing

Stores accommodation information such as:

* Title
* Description
* Price
* Location
* Country
* Image
* Owner

### Review

Stores:

* Rating
* Comment
* Author
* Associated listing

---

## 📸 Image Upload

Listing images can be uploaded through the application.

The project uses:

* Multer
* Cloudinary

for handling image uploads and storage.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd Airbnb-Clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env`

Create a `.env` file in the project root:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

> Never upload your `.env` file to GitHub. Keep it inside `.gitignore`.

### 5. Start the application

```bash
node app.js
```

For development, you can use:

```bash
nodemon app.js
```

The application will run locally at:

```text
http://localhost:10000
```

---

## 🌐 Deployment

The application is deployed using **Render** and uses **MongoDB Atlas** for cloud database storage.

### Live Project

🔗 https://airbnb-clone-project-1-1aqw.onrender.com

---

## 📚 What I Learned

Through this project, I gained practical experience in:

* Building a full-stack web application
* Node.js and Express.js
* MongoDB database management
* Mongoose schemas and relationships
* MVC architecture
* CRUD operations
* Authentication and authorization
* Passport.js
* Express sessions
* EJS server-side rendering
* Middleware
* Image upload and cloud storage
* Form validation
* Error handling
* Environment variables
* Git and GitHub
* Deployment using Render

---

## 🔮 Future Improvements

Some planned improvements include:

* 📱 Better mobile responsiveness
* 🔍 Advanced listing search and filtering
* 🗺️ Map integration
* 💳 Online payment integration
* ❤️ Wishlist/favorite listings
* 👤 Improved user profile section
* ⭐ Enhanced rating and review system
* 📊 Admin dashboard
* 🔔 Improved notifications

---

## 👩‍💻 Author

**Sakshi Channe**

B.Tech – Information Technology


---

## ⭐ Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.
