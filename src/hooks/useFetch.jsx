import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() =>{
    async function fetchMovies() {
      const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTZkNTUwOGU3YzA0NzkyMjhjYzA2ZTY4N2E0MzMxOSIsIm5iZiI6MTc1MDY2MjM4Mi41NzQwMDAxLCJzdWIiOiI2ODU4ZmNlZTE3M2FkYWIyZTJkZWRkMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t5ntpjhSI0n9rUYqpYPtznzSWLKFbsS8VlUri2ZCUY8'
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
