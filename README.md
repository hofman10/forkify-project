# 🍴 Forkify - Recipe Search & Management Application

A modern recipe application built with vanilla JavaScript that allows users to search, view, bookmark, and upload their own recipes. Features a clean, responsive interface and demonstrates advanced JavaScript concepts including MVC architecture, asynchronous programming, and state management.

## 🌟 Features

### Core Functionality

- **Recipe Search**: Search through over 1,000,000 recipes using the Forkify API
- **Recipe Display**: View detailed recipe information including ingredients, cooking time, and servings
- **Dynamic Servings**: Adjust serving sizes with automatic ingredient quantity recalculation
- **Bookmarking System**: Save favorite recipes with localStorage persistence
- **Pagination**: Efficient navigation through search results (10 results per page)
- **Custom Recipe Upload**: Add your own recipes to the Forkify API with a unique API key

### User Experience

- **Responsive Design**: Fully responsive layout that works on all devices
- **Loading States**: Elegant spinner animations during data fetching
- **Error Handling**: User-friendly error messages for failed requests
- **Persistent Data**: Bookmarks saved to localStorage and restored on page load
- **URL State Management**: Recipe IDs stored in URL hash for easy sharing

## 🚀 Live Demo

[View Live Demo](#) _(Add your deployed link here)_

## 🛠️ Technologies & Tools

### Core Technologies

- **JavaScript (ES6+)**: Modern JavaScript features including async/await, modules, destructuring
- **HTML5 & CSS3**: Semantic markup and modern styling
- **SASS**: CSS preprocessor for maintainable stylesheets

### Build Tools & Dependencies

- **Parcel**: Zero-config module bundler for fast builds and hot module replacement
- **Core-js**: Polyfills for older browser compatibility
- **Regenerator-runtime**: Async/await support for older browsers
- **Fractional**: Convert decimals to fractions for ingredient display

### Architecture & Patterns

- **MVC Pattern**: Clean separation of concerns with Model-View-Controller architecture
- **Publisher-Subscriber Pattern**: Decoupled event handling between views and controller
- **State Management**: Centralized application state in the model
- **API Integration**: RESTful API consumption with proper error handling

## 🎯 Key Learning Outcomes

This project demonstrates proficiency in:

✅ **Modern JavaScript**: ES6 modules, classes, async/await, array methods  
✅ **Architecture**: Implementing MVC pattern in vanilla JavaScript  
✅ **API Integration**: Consuming RESTful APIs with proper error handling  
✅ **State Management**: Managing complex application state  
✅ **DOM Manipulation**: Efficient rendering and updating of UI  
✅ **Event Handling**: Publisher-subscriber pattern implementation  
✅ **Build Tools**: Modern frontend tooling with Parcel  
✅ **CSS Preprocessing**: Component-based SASS architecture  
✅ **Browser APIs**: LocalStorage for data persistence  
✅ **Code Organization**: Clean, maintainable, and scalable code structure

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/forkify-app.git
   cd forkify-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

   The app will open at `http://localhost:1234`

4. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be generated in the `dist/` folder

## 💡 How to Use

1. **Search for Recipes**
   - Enter a recipe name (e.g., "pizza", "pasta") in the search bar
   - Browse through paginated results

2. **View Recipe Details**
   - Click on any recipe to view full details
   - See ingredients, cooking time, and servings

3. **Adjust Servings**
   - Use the + and - buttons to adjust serving sizes
   - Ingredient quantities update automatically

4. **Bookmark Recipes**
   - Click the bookmark icon to save favorites
   - Access bookmarks from the dropdown menu
   - Bookmarks persist across browser sessions

5. **Add Your Own Recipe**
   - Click "Add Recipe" button
   - Fill in the form with recipe details
   - Your recipe will be uploaded to the API with your unique key

## 🌐 API Reference

This project uses the [Forkify API v2](https://forkify-api.jonas.io/v2)

**Endpoints used:**

- `GET /api/v2/recipes?search={query}` - Search recipes
- `GET /api/v2/recipes/{id}` - Get recipe details
- `POST /api/v2/recipes?key={key}` - Upload new recipe (requires API key)

## 🔐 Environment Configuration

To upload your own recipes, you'll need an API key from Forkify API.

Update the API key in `src/js/config.js`:

```javascript
export const KEY = "your-api-key-here";
```

## 🚧 Future Enhancements

- [ ] Shopping list feature to collect ingredients from multiple recipes
- [ ] User authentication for personalized experience
- [ ] Recipe rating and review system
- [ ] Nutrition information display
- [ ] Recipe categories and filtering
- [ ] Dark mode toggle
- [ ] Print recipe functionality
- [ ] Social sharing capabilities

## 📝 Code Quality

- **Clean Code**: Follows best practices and naming conventions
- **Modular Architecture**: Separated concerns with clear responsibilities
- **Error Handling**: Comprehensive error handling and user feedback
- **Comments**: Well-documented code for maintainability
- **Scalability**: Architecture supports easy feature additions

## 🎓 Acknowledgments

This project was built as part of mastering modern JavaScript development, focusing on architecture patterns and best practices for real-world applications.
