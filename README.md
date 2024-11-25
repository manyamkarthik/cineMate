🎥 CineMate
CineMate is a modern and responsive movie web app designed to showcase movies using The Movie Database (TMDb) API. It allows users to browse movies, view detailed information, and perform searches. Built with React, CineMate is lightweight and easy to use.

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

📸 Screenshots
Home Page
![image](https://github.com/user-attachments/assets/bf0c7bab-5a61-45d4-be39-986bff918303)


📁 Folder Structure

cineMate/
├── public/
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom hooks (e.g., useFetch)
│   ├── pages/             # Page components (e.g., MovieList)
│   ├── styles/            # Tailwind CSS configuration
│   ├── App.js             # Main application entry
│   ├── index.js           # React DOM rendering
│   └── .env               # Environment variables
├── .gitignore             # Ignored files
├── package.json           # Project dependencies
└── README.md              # Project documentation

🌐 API Integration
CineMate leverages The Movie Database (TMDb) API for fetching movie data. Ensure you sign up at TMDb to get your API key.

/movie/popular: Popular movies
/movie/top_rated: Top-rated movies
/movie/upcoming: Upcoming movies
/search/movie: Search for movies

👨‍💻 Contributors
Karthik Manyam


🙌 Acknowledgements
Thanks to The Movie Database (TMDb) for providing the API.
Inspired by the love for movies and clean web design.



💡 Ideas for Improvement
Add user authentication for personalized movie recommendations.
Implement a watchlist feature.
Enhance search functionality with advanced filters (e.g., genre, year).
Feel free to customize the content based on your preferences or add specific details related to your CineMate project!
