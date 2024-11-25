🎥 CineMate
CineMate is a modern and responsive movie web app designed to showcase movies using The Movie Database (TMDb) API. It allows users to browse movies, view detailed information, and perform searches. Built with React, CineMate is lightweight and easy to use.

**NetLify Link**: 
https://cinemate-manyam.netlify.app/

🌟 Features

📜 Movie Browsing: View popular, top-rated, and upcoming movies.

🔍 Search Functionality: Find movies by their title using the search bar.

🌓 Dark/Light Mode: Toggle between light and dark themes for a personalized viewing experience.

🔗 Detailed Pages: Get detailed information about each movie, including an overview and image.

📱 Responsive Design: Fully responsive UI for mobile, tablet, and desktop users.

🛠️ Technologies Used

Frontend: React, Tailwind CSS

API: The Movie Database (TMDb) API

Routing: React Router

State Management: React Hooks (useState, useEffect,useFetch(Custom Hook))

Deployment: Netlify

🚀 Installation

Follow these steps to set up CineMate locally:

**Clone the Repository:**

git clone https://github.com/manyamkarthik/cineMate.git

cd cineMate

**Install Dependencies:**

npm install

**Create an Environment File:**

Create a .env file in the root of the project.

Add the following environment variable:

REACT_APP_API_KEY=your_tmdb_api_key

Start the Development Server:
npm start
Open the App:


**Visit http://localhost:3000 in your browser.**




📁 Folder Structure

```
CineMate/
├── public/                   # Public assets
│   ├── index.html            # HTML template
│   ├── favicon.ico           # App icon
│   └── ...                   # Other public assets
├── src/                      # Source files
│   ├── assets/               # Static assets (e.g., images)
│   │   └── backup/           # Backup images
│   ├── components/           # Reusable components
│   │   ├── Card.js           # Movie card component
│   │   └── Header.js         # App header component
│   ├── hooks/                # Custom React hooks
│   │   └── useFetch.js       # Fetching data from TMDb API
│   ├── pages/                # Application pages
│   │   ├── MovieList.js      # Movie list page
│   │   └── PageNotFound.js   # 404 error page
│   ├── App.js                # Root component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── .gitignore                # Files to ignore in Git
├── package.json              # Project metadata and dependencies
└── README.md                 # Documentation
```


🌐 API Integration
CineMate leverages The Movie Database (TMDb) API for fetching movie data. Ensure you sign up at TMDb to get your API key. 
It uses some apis like:

/movie/popular: Popular movies

/movie/top_rated: Top-rated movies

/movie/upcoming: Upcoming movies

/search/movie: Search for movies

👨‍💻 Contributors:
Karthik Manyam.


🙌 Acknowledgements

Thanks to The Movie Database (TMDb) for providing the API.

Inspired by the love for movies and clean web design.



💡 Ideas for Improvement
Add user authentication for personalized movie recommendations.
Implement a watchlist feature.
Enhance search functionality with advanced filters (e.g., genre, year).
Feel free to customize the content based on your preferences or add specific details related to your CineMate project!
