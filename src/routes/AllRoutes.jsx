import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from 'react'
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="popular" />} />
      <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" />} title="Top Rated" />
      <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<PageNotFound />} title="Page Not Found" />
    </Routes>
    
      
    </>
  )
}

export default AllRoutes
