
import Card from '../components/Card'
import useFetch from '../hooks/useFetch';

const MovieList = () => {
  const {data: movies}= useFetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
  



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
