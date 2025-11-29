# Movie Database - Frontend Learning Project

A simple React + TypeScript + Vite project for learning frontend development. This project includes routing, component architecture, and CSS modules.

## ⚠️ Important Rules

Before you start, please read these guidelines:

- **🎓 Learn by Doing**: This project is designed for hands-on learning. Please avoid using AI agent mode or excessive AI assistance. Anyone can code with AI, everyone does not understand its output.
- **📦 No Additional Packages**: Work with the existing dependencies only. Do not install new npm packages. Everything you need is already included in the project.
- **😌 Keep it simple **: Don't care too much about making it perfect. Understand the basics and move on.

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

Here are 5 tasks to help you learn frontend development with this project:

### 🍿 Task 1: Add Watchlist Functionality

Add the ability to save movies to a watchlist:

- Add an "Add to Watchlist" button to each movie card
- Create a sidebar component that displays watchlist movies
- Store watchlist in component state (useState)
- Display the sidebar next to the movie grid

Tips: If you have a hard time handling the sizing of the watchlist and the movies, look up flex-grow, flex-shrink and flex-basis. Check the implementation in MovieCard.module.css.

### 📱 Task 2: Make Watchlist Mobile Responsive

Make the watchlist work on mobile devices:

- Add a toggle button to show/hide a watchlist on mobile
- Use CSS media queries to detect mobile screens
- Ensure the button is easily accessible on mobile

Tips: There are many ways to solve this. The easiest is probably to conditionally render a desktop or a mobile view. Like so:

```
{device === "desktop" ?
    <div className={styles.desktopWrapper} >
        <div className={styles.moviesList}>
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <SideBar />
    </div>
 :
    <div className={styles.mobileWrapper}>
        <Button onClick={() => setShowSideBar(!showSideBar)}>
            {showSideBar ? '❌ Hide Watchlist' : '🎬 Show Watchlist'}
        </Button>
        {
        showSideBar ?
            <SideBar />
            :
            <div className={styles.moviesList}>
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        }
    </div>
}
```

You could also use conditional css-styles with display: none.

## 🎨 Wireframe: Movies Page with Watchlist Sidebar

Here's what your completed Task 1 & 2 should look like:

### Desktop View (> 768px)

```
┌─────────────────────────────────────────────────────────────────┐
│                         NAVIGATION BAR                          │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  Movie Database                              10 movies found    │
│                                                                 │
│  [Search input.........................]  [Search Button]       │
│                                                                 │
│  ┌─────────────────────────┐  ┌──────────────────┐              │
│  │   MAIN CONTENT          │  │   WATCHLIST      │              │
│  │   (Movie Grid)          │  │   SIDEBAR        │              │
│  │                         │  │                  │              │
│  │  ┌────────┐ ┌────────┐  │  │  • Movie 1       │              │
│  │  │ Movie  │ │ Movie  │  │  │  • Movie 2       │              │
│  │  │ Card 1 │ │ Card 2 │  │  │  • Movie 3       │              │
│  │  │ [Add]  │ │ [Add]  │  │  │                  │              │
│  │  └────────┘ └────────┘  │  │  [Clear All]     │              │
│  │                         │  │                  │              │
│  │  ┌────────┐ ┌────────┐  │  │                  │              │
│  │  │ Movie  │ │ Movie  │  │  └──────────────────┘              │
│  │  │ Card 3 │ │ Card 4 │  │                                    │
│  │  │ [Add]  │ │ [Add]  │  │                                    │
│  │  └────────┘ └────────┘  │                                    │
│  └─────────────────────────┘                                    │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile View (≤ 768px)

```
┌─────────────────────────┐
│    NAVIGATION BAR       │
└─────────────────────────┘
┌─────────────────────────┐
│ Movie Database          │
│ 10 movies found         │
│                         │
│ [Search input.......]   │
│ [Search Button]         │
│                         │
│ [🎬 Show Watchlist (3)] │  ← Toggle Button
│                         │
│ ┌─────────────────────┐ │
│ │     Movie Card 1    │ │
│ │                     │ │
│ │  Title: The Matrix  │ │
│ │  Year: 1999         │ │
│ │  [Add to Watchlist] │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │     Movie Card 2    │ │
│ │  ...                │ │
│ └─────────────────────┘ │
└─────────────────────────┘

When "Show Watchlist" is clicked:
┌─────────────────────────┐
│ [❌ Hide Watchlist]     │  ← Close Button
│                         │
│ MY WATCHLIST            │
│                         │
│ • The Matrix            │
│   [Remove]              │
│                         │
│ • Inception             │
│   [Remove]              │
│                         │
│ • Interstellar          │
│   [Remove]              │
│                         │
│ [Clear All]             │
└─────────────────────────┘
```

## **If you have time, choose any of the following tasks:**

#### 🎬 Add Movie Details Page

Create a detailed view for individual movies:

- Add a new route `/details/:id`
- Create a `Details.tsx` page component
- Display full movie information on this page
- Add a "Back to Movies" navigation button
- Make movie cards clickable to navigate to detail page

Tips: Look at this link for dynamic routes: [React Router dynamic routes](https://reactrouter.com/start/declarative/routing#dynamic-segments)

#### 💾 Implement Local storage or cookie Persistence

Make the watchlist persist across page refreshes:

- Save watchlist to browser's localStorage
- Load watchlist from localStorage on app mount

#### 🔍 Add Filter and Sort Features

Enhance the movie browsing experience:

- Add dropdown filters for genre and year
- Implement sort options (rating, year, title)
- Combine filters with existing search functionality
- Add a "Clear Filters" button
- Show active filter count

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
