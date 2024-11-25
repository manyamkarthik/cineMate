import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParam] = useSearchParams();
  const movie_name = searchParam.get("q");
  const { data: Movies } = useFetch(apiPath,movie_name);

  return (
    <main>
      <section>
      {Movies.length > 0 ? (
  <p className="text-3xl text-gray-700 dark:text-white">
    Search Result For <span className="font-bold">{movie_name}</span>
  </p>
) : (
  <div className="flex flex-col items-center justify-center space-y-4 mt-10">
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-16 h-16 text-gray-400 dark:text-gray-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.25v.25m0-2.5a5.25 5.25 0 005.25-5.25V9a6 6 0 10-12 0v1.5a5.25 5.25 0 005.25 5.25zm0 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 013 0"
      />
    </svg>

  
    <p className="text-2xl font-medium text-gray-700 dark:text-gray-200">
      Oops! No results found for <span className="font-bold">{movie_name}</span>
    </p>


    <p className="text-sm text-gray-500 dark:text-gray-400">
      Try refining your search or explore popular movies.
    </p>

    <button
      onClick={() => window.location.reload()} 
      className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600"
    >
      Refresh Search
    </button>
  </div>
)}

      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {Movies.length > 0
            ? Movies.map((movie) => <Card key={movie.id} movies={movie} />)
            : ""}
        </div>
      </section>
    </main>
  );
};
