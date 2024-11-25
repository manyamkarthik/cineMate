import { useState,useEffect } from "react";
export const useFetch = (apiPath,movie_name="") => {
  
  const [data,setData]=useState([]);
  const parts = apiPath.split('/');
  const lastPart = parts[parts.length - 1];
  const isMovieId = Number.isInteger(Number(lastPart));
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${movie_name}`;
  useEffect( 
    () =>{
      async function fetchMoviesData() {
        try {
          const response=await fetch(url);
          const jsonData = await response.json();
          if(isMovieId){
          
          setData(jsonData)
          
        }else{

          
          
          setData(jsonData.results || []);}
        } catch (error) {
          
        }
      }fetchMoviesData();
    }
  ,[url,isMovieId])
  return {data}
}
