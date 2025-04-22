# Beatstream – Music Streaming Platform

Beatstream is a modern, full-stack music streaming web application where users can listen to tracks, chat in real time, see what others are listening to in real time, manage songs as admin, and experience a clean UI with theme support.

## Live Demo

Check out the live version of BeatStream here:  
[BeatStream on Render](https://beatstream-music-streaming-webapp.onrender.com/)

## Tech Stack

- **Frontend**: React.js (Vite), Tailwind CSS, Clerk (Authentication)
- **Backend**: Node.js, Express.js, MongoDB, Cloudinary, Socket.IO
- **Tools**: Axios, Zustand, Shadcn/UI, REST APIs, Clerk SDK

## Key Features

-  Stream music
-  Admin Dashboard for content management
-  Real-time chat across users
-  Light/Dark mode support
-  Secure auth via Clerk
-  Media upload via Cloudinary
-  MongoDB for scalable storage
-  Live updates with Socket.IO

##  Setup Instructions

### 1️. Clone the Repository

```bash
git clone https://github.com/your-username/beatstream.git
cd beatstream
```

## 2️. Environment Setup

### Backend `.env` (inside `/backend`)

Create a `.env` file inside the `/backend` directory and add the following environment variables:

```bash
PORT=5000
MONGODB_URI=your_mongo_connection_string
ADMIN_EMAIL=your_email

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Frontend `.env` (inside `/frontend`)

Create a `.env` file inside the `/frontend` directory and add the following environment variables:

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 3️. Install Dependencies & Run

### Backend

1. Navigate to the `/backend` directory:

```bash
cd backend
```
2. Install the required dependencies:

```bash
npm install
```
3. Run the backend server:

```bash
npm run dev
```
The backend will be running on http://localhost:5000.

### Frontend

1. Navigate to the `/frontend` directory:

```bash
cd frontend
```

2. Install the required dependencies:

```bash
npm install
```
3. Run the frontend server:

```bash
npm run dev
```
The frontend will start running on http://localhost:3000.

## Preview

### Home Page

![Home Page](https://github.com/vidhiahir/BeatStream_Music-Streaming-WebApp/raw/main/frontend/public/screenshots/BeatStream_Home.png)


The Home page of BeatStream allows users to explore the latest music and engaging user interface with easy navigation.

---

### Admin Dashboard

![Admin Dashboard](https://github.com/vidhiahir/BeatStream_Music-Streaming-WebApp/raw/main/frontend/public/screenshots/Admin_Dashboard.png)

The Admin Dashboard gives administrators the ability to manage the songs and albums. Also It shows the total numsber of songs, albums, artists and users.

---

### Chat Functionality

![Chat](https://github.com/vidhiahir/BeatStream_Music-Streaming-WebApp/raw/main/frontend/public/screenshots/BeatStream_chat.png)

The chat feature lets users interact with all enrolled users in real-time while enjoying music.

---

### Dark Theme

![Dark Theme](https://github.com/vidhiahir/BeatStream_Music-Streaming-WebApp/raw/main/frontend/public/screenshots/BeatStream_Theme.png)

The dark theme provides a visually appealing and easier-on-the-eyes design for users who prefer a darker interface. It can be toggled on and off from the header.








