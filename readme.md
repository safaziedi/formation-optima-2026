# Express.js CRUD API

A simple and efficient RESTful API built with **Node.js** and **Express.js**. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations.

## 🚀 Features

* **Create**: Add new items to the database.
* **Read**: Retrieve a single item or a list of all items.
* **Update**: Modify existing data.
* **Delete**: Remove items from the system.
* **Logging**: Request tracking with customized console messages.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14.x or higher)
* [npm](https://www.npmjs.com/)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 🏃 Running the Application

### Development Mode (with Auto-reload)
If you have `nodemon` installed:
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 🛤️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/items` | Get all items |
| **GET** | `/api/items/:id` | Get a specific item by ID |
| **POST** | `/api/items` | Create a new item |
| **PUT** | `/api/items/:id` | Update an existing item |
| **DELETE** | `/api/items/:id` | Delete an item |

## 📁 Project Structure

```text
.
├── node_modules/       # Dependencies (Ignored by Git)
├── index.js            # Main entry point of the server
├── package.json        # Project metadata and scripts
├── .gitignore          # Files to ignore in Git
└── README.md           # Project documentation
```