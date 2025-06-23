import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() =>{
    async function fetchMovies() {
      const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTZkNTUwOGU3YzA0NzkyMjhjYzA2ZTY4N2E0MzMxOSIsIm5iZiI6MTc1MDY2MjM4Mi41NzQwMDAxLCJzdWIiOiI2ODU4ZmNlZTE3M2FkYWIyZTJkZWRkMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t5ntpjhSI0n9rUYqpYPtznzSWLKFbsS8VlUri2ZCUY8'
      }
    }
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
      const data = await response.json();
      setMovies(data.results)
      // console.log(data.results);
      
    }
    fetchMovies();
    console.log(movies);
    
  },[])
  // const response = () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTZkNTUwOGU3YzA0NzkyMjhjYzA2ZTY4N2E0MzMxOSIsIm5iZiI6MTc1MDY2MjM4Mi41NzQwMDAxLCJzdWIiOiI2ODU4ZmNlZTE3M2FkYWIyZTJkZWRkMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t5ntpjhSI0n9rUYqpYPtznzSWLKFbsS8VlUri2ZCUY8'
  //     }
  //   };
  //   fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // }
  // response();


  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {console.log(movies)}
          { movies.map((movie) => 
          <Card key={movie.id} movie={movie} />
          )}
        </div>
      </section>
    </main>
  )
}

export default MovieList
