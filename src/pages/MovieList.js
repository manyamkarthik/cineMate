
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
  
  const { data:Movies}=useFetch(apiPath)
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap gap-4 other:justify-evenly">
          {Movies.map( (movie) =><Card key={movie.id} movies={movie}/> )}
        </div>
      </section>
    </main>
  );
};
