# 📝 MyBlog — Simple Blog Web Application

A lightweight blog web application built with **Node.js**, **Express.js**, and **EJS**. Supports full CRUD operations for blog posts with a clean and responsive UI — no database required.

---

## 🖼️ Preview

> Home page displays all blog posts in a responsive card grid. Users can create, edit, and delete posts directly from the interface.

---

## ✨ Features

- 📖 **View Posts** — All blog posts displayed on the home page in a responsive card grid
- ✍️ **Create Posts** — Write new posts with a title, author name, and content
- ✏️ **Edit Posts** — Update any existing post through a pre-filled edit form
- 🗑️ **Delete Posts** — Remove posts instantly with a confirmation prompt
- 📱 **Responsive Design** — Works well on both desktop and mobile devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Templating | EJS (Embedded JavaScript) |
| Styling | Vanilla CSS (Grid & Flexbox) |
| Storage | In-Memory (Array) |

---

## 📁 Project Structure

```
my-blog-app/
├── public/
│   └── css/
│       └── style.css       # Styling
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Reusable header component
│   │   └── footer.ejs      # Reusable footer component
│   ├── index.ejs           # Home page — list all posts
│   ├── new-post.ejs        # Form to create a new post
│   └── edit-post.ejs       # Form to edit an existing post
├── index.js                # Main server file
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed on your machine.
- Download: [https://nodejs.org](https://nodejs.org)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd your-repo-name
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the server**
   ```bash
   node index.js
   ```
   Or with auto-restart using nodemon:
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🔗 Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Display all posts |
| GET | `/posts/new` | Show create post form |
| POST | `/posts` | Save a new post |
| GET | `/posts/:id/edit` | Show edit post form |
| POST | `/posts/:id/update` | Save edited post |
| POST | `/posts/:id/delete` | Delete a post |

---

## ⚠️ Notes

- Post data is stored **in-memory** and will be lost when the server restarts. This is by design as no database is used in this version.
- This project was built as a learning exercise to understand Node.js, Express.js routing, and EJS templating.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
