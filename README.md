# Movie Database - Frontend Learning Project

A simple React + TypeScript + Vite project for learning frontend development. This project includes routing, component architecture, and CSS modules.

## ⚠️ Important Rules

Before you start, please read these guidelines:

- **🎓 Learn by Doing**: This project is designed for hands-on learning. Please avoid using AI agent mode or excessive AI assistance. Anyone can code with AI, everyone does not understand its output.
- **📦 No Additional Packages**: Work with the existing dependencies only. Do not install new npm packages. Everything you need is already included in the project.
- **😌 Keep it simple** Don't care too much about making it perfect. Understand the basics and move on.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/forefrontjoel/te-frontend-moviedb.git
cd te-frontend-moviedb
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## 🛠️ Available Scripts

- `npm start` - Start development server on localhost:3000
- `npm run dev` - Alternative command to start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

# Tasks

Here are tasks to help you learn frontend development with this project:

### 📦 Task 1: Extract Sidebar Component

Refactor the watchlist sidebar into its own reusable component:

- Create a new `Sidebar.tsx` component in the `src/components` folder
- Define a proper TypeScript interface for the component's props
- Move the sidebar logic and JSX from `Movies.tsx` into the new component
- Pass necessary data and functions as props
- Import and use the new component in `Movies.tsx`

Tips: Think about what data the sidebar needs (watchlist items) and what actions it should trigger (remove item, clear all). These should be passed as props with proper TypeScript types.

### 🎬 Task 2: Add Movie Details Page

Create a detailed view for individual movies:

- Add a new route `/details/:id` in your router configuration
- Create a `Details.tsx` page component in `src/pages`
- Display full movie information on this page (title, year, genre, rating, description, etc.)
- Add a "Back to Movies" navigation button
- Make movie cards clickable to navigate to the detail page

Tips: Look at this link for dynamic routes: [React Router dynamic routes](https://reactrouter.com/start/declarative/routing#dynamic-segments). You'll need to use `useParams()` hook to get the movie ID from the URL.

## **If you have time, choose any of the following tasks:**

#### 💾 Implement Local Storage or Cookie Persistence

Make the watchlist persist across page refreshes:

- Save watchlist to browser's localStorage
- Load watchlist from localStorage on app mount

Tips: Use `useEffect` to save the watchlist whenever it changes, and load it when the component mounts. `JSON.stringify()` and `JSON.parse()` are helpful for storing arrays in localStorage.

## 📖 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 🐛 Common Issues

**Port already in use:**

- Change the port in `vite.config.ts` or stop the process using port 3000

**Module not found errors:**

- Run `npm install` again
- Delete `node_modules` and run `npm install`

**TypeScript errors:**

- Check that all imports have correct file extensions (.tsx, .ts)
- Ensure all props are properly typed

Happy coding! 🎉
