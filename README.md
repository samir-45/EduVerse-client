# 📘 EduVerse - Knowledge Sharing Platform

EduVerse is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows developers and learners to create, share, and explore educational articles. With a clean dark/light UI toggle funtionality, JWT-protected routes, and real-time interactions, EduVerse aims to build a collaborative knowledge hub.

---

## 🚀 Live Website

[🔗 Visit EduVerse](https://eduverse-sm.netlify.app/)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, DaisyUI, Lottie, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Firebase Admin SDK
- **Authentication**: Firebase Auth + JWT
- **Database**: MongoDB Atlas

---

## 🔐 Authentication & Security

- Firebase Authentication (email/password)
- JWT stored in `localStorage`
- Protected routes and APIs using Firebase Admin + custom middleware

---

## 🧩 Features

### 🌐 Public Features
- View all published articles
- View article details with full content, thumbnail, author info, likes, and comments
- Browse trending tags and categories

### 🔐 Authenticated Features
- Post a new article (title, content, category, tags, image)
- Update and delete your own articles
- Like and comment on articles (1 like per user)
- Protected route access using Firebase JWT

### 🖼️ UI Features
- Responsive design with dark/light theme toggle
- SweetAlert2 notifications
- Lottie animations for enhanced UX

---

## ✍️ Author Features
- 🔸 **Create** article with tag, category, thumbnail, etc.
- 🔸 **Edit** previously submitted articles
- 🔸 **Delete** personal articles with confirmation
- 🔸 **Like** system (1 like per user, no duplicates)
- 🔸 **Comment** with username, avatar, and article ID
- 🔸 **JWT** protected routes via `Authorization` headers



