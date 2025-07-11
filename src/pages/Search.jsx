import React from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

const Search = ({apiPath}) => {
  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
   const {data: movies}= useFetch(apiPath, queryTerm);
  return (
     <main>
      <section>
        <p className='text-3xl text-grey-700 dark:text-white'>{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          { movies.map((movie) => 
          <Card key={movie.id} movie={movie} />
          )}
        </div>
      </section>
    </main>
  )
}

export default Search



