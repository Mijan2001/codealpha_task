# CodeAlpha Task FULL Stack Web Development

# Project 1 : Simple E-Commerce Store

[Live Link : https://codealpha-task1-simple-ecommerce-store.vercel.app/](https://codealpha-task1-simple-ecommerce-store.vercel.app/)

A complete, modern, and responsive e-commerce web application built with the **MERN stack** (MongoDB, Express, React, Node.js). This project includes full shopping functionality, product management, cart handling, image uploads, and a smooth UI experience.

---

## 📸 Project Screenshots

### 🏠 Home Page

![Home Page](./codealpha_task1_simple_ecommerce_store/projects_images/homepage.png)

### ➕ Add Product Page

![Add Product Page](./codealpha_task1_simple_ecommerce_store/projects_images/addProduct.png)

### 🛒 Cart Page

![Cart Page](./codealpha_task1_simple_ecommerce_store/projects_images/cartimage.png)

## 🚀 Features

### Frontend (React)

-   Responsive UI built with **Tailwind CSS**
-   Cart management using **Context API**
-   Form handling with **React Hook Form** + **Zod** for validation
-   **Toast notifications** for real-time feedback
-   Complete **React Router** based routing

### Backend (Node.js + Express)

-   MongoDB integration with **Mongoose**
-   Image uploads to **Cloudinary**
-   RESTful API endpoints for product, cart, and order management
-   Order processing system
-   File uploads handled with **Multer**

---

Functionalities

-   Home Page – Displays all products

-   Add Product Page – Admin-like interface to upload new products
-   Cart Page – View and manage your selected items

-   Product Details Page – See full information about each product

-   Order System – Processes user checkouts

-   Image Upload – Uploads product images to Cloudinary

-   Data Persistence – MongoDB stores all product and order data

-   Fully Responsive – Looks great on all screen sizes

-   Form Validation – Clean, user-friendly forms with proper error handling

# Project 2 : SocialSphere - Full Stack Social Media App

[Live Link : https://codealpha-task2-social-sphere.vercel.app/](https://codealpha-task2-social-sphere.vercel.app/)

A full-stack social media application built with React, Tailwind CSS, Express, and MongoDB.

![Project Image](./codealpha_task2_social_media/projectImages/1home.png)

## Features

-   User authentication (register, login, logout)
-   User profiles with followers and following
-   Create, like, and comment on posts
-   Upload images for posts and profile pictures
-   Search for users
-   Responsive design

## Tech Stack

### Frontend

-   React
-   TypeScript
-   React Router
-   Tailwind CSS
-   Shadcn UI Components
-   Axios

### Backend

-   Node.js
-   Express
-   MongoDB
-   JWT Authentication
-   Cloudinary (for image storage)

## Getting Started

### Prerequisites

-   Node.js
-   MongoDB Atlas account
-   Cloudinary account

### Installation

1. Clone the repository

2. Install frontend dependencies

```
npm install
```

3. Install backend dependencies

```
cd backend
npm install
```

4. Create a .env file in the backend directory with the following variables

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
SECRET_KEY=your_cloudinary_secret_key
```

5. Start the backend server

```
npm run dev
```

6. Start the frontend development server (in a new terminal window)

```
cd ..
npm run dev
```

7. Open your browser and navigate to http://localhost:5173

# Project 4 : Video Conference Website

[Live Link : https://code-alpha-task4-video-conferencing.vercel.app/](https://code-alpha-task4-video-conferencing.vercel.app/)

A professional video conferencing platform built with the latest Next.js 15 and TypeScript, integrating powerful features like real-time communication, meeting management, screen sharing, and recording — all wrapped in a sleek, responsive UI.

### Home Page

![Home Page](./codealpha_task4_videoconferencing/project-screenshoots/home-page1.png)

### Meeting Room

![Meeting Room](./codealpha_task4_videoconferencing/project-screenshoots/home-page2.png)

### Schedule Meeting

![Schedule Meeting](./codealpha_task4_videoconferencing/project-screenshoots/home-page3.png)

### Recorded Meetings

![Recorded Meetings](./codealpha_task4_videoconferencing/project-screenshoots/home-page4.png)

📌 Introduction
This project provides a secure and seamless video meeting experience. Users can log in, create or join meetings, and access essential functionalities like:

🔐 Secure authentication via Clerk

📅 Meeting scheduling

🎥 Video/audio management

📺 Screen sharing

📂 Meeting history & recordings

🧑‍🤝‍🧑 Participant management

🔁 Real-time interaction

## ⚙️ Tech Stack

| Technology       | Description                              |
| ---------------- | ---------------------------------------- |
| **Next.js**      | Full-stack React framework               |
| **TypeScript**   | Typed JavaScript for better code quality |
| **Clerk**        | Authentication and user management       |
| **getstream**    | Real-time video SDK                      |
| **shadcn/ui**    | Beautiful and accessible UI components   |
| **Tailwind CSS** | Utility-first CSS for rapid styling      |

## 🚀 Features

### 🔐 Authentication

-   Secure login powered by **Clerk**, supporting social logins and email/password.
-   Enforces user access levels for all functionalities.

### 🆕 New Meeting

-   Start a meeting instantly with pre-join configuration for camera and microphone.

### 🎛️ Meeting Controls

-   Comprehensive meeting management with features like:
    -   🔴 Start/stop recording
    -   📺 Screen sharing
    -   🤫 Mute/unmute
    -   🎉 Emoji reactions
    -   🔊 Sound adjustments
    -   🧑‍🤝‍🧑 Grid view & participant list
    -   📌 Pin/unpin participants
    -   ✋ Manage user permissions (block/unblock, allow screen share)
    -   🏃 Exit or end meeting for all participants

### 📆 Schedule Future Meetings

-   Plan meetings in advance with date and time.
-   View scheduled meetings under “Upcoming Meetings” for quick access and sharing.

### 🕓 Past Meetings List

-   Access a detailed list of all previous meetings with metadata.

### 🎞️ View Recorded Meetings

-   Rewatch recorded sessions anytime from the recordings archive.

### 🧑‍💻 Personal Room

-   Each user has a dedicated personal meeting room with a shareable link for quick calls.

### 🔗 Join via Link

-   Join meetings instantly using a valid meeting link.

### 🔐 Secure & Real-time

-   Built on **Stream's real-time SDKs** for private, fast, and secure communication.

### 📱 Responsive Design

-   Optimized for mobile, tablet, and desktop with a sleek, responsive layout.

## 📥 Clone the Repository

## 📦 Install Dependencies

Install all required dependencies by running:

```bash
npm install
```

---

## 🛠️ Set Up Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```
