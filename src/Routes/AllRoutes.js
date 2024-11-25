import { Route, Routes } from "react-router-dom";
import { MovieDetail,MovieList,PageNotFound,Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <main >
        <Routes>
            <Route path="/"  element={<MovieList apiPath="movie/now_playing"/>} end />
            <Route path="/movie/:id"  element={<MovieDetail apiPath="movie"/>} />
            <Route path="/movies/popular"  element={<MovieList apiPath="movie/popular"/>} />
            <Route path="/movies/top"  element={<MovieList apiPath="movie/top_rated"/>} />
            <Route path="/movies/upcoming"  element={<MovieList apiPath="movie/upcoming"/>} />
            <Route path="/search"  element={<Search apiPath="search/movie"/>} />
            <Route path="*"  element={<PageNotFound/>} />

        </Routes>
    </main>
    </div>
  )
}
