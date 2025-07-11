import React, { useEffect } from 'react'
import PageNotFoundImage from '../assets/PageNotFound.png';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  useEffect(()=>{
    document.title =  `Page Not Found`;
  })
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
            <img className='rounded' src={PageNotFoundImage} alt='404 page not found' />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
          <button className='w-64 text-xl h-14 rounded bg-linear-to-r from-cyan-500 to-blue-500 dark:text-white'>Back to cinemate</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
