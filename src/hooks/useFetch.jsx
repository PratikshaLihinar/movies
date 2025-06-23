import React, { useEffect, useState } from 'react'

const useFetch = (apiPath) => {
    const TOKEN = import.meta.env.VITE_TOKEN;
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US`
    useEffect(() =>{
    async function fetchMovies() {
      const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}` 
      }
    }
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json.results)
      
    }
    fetchMovies();
    
  },[url])


  return { data }
}

export default useFetch
