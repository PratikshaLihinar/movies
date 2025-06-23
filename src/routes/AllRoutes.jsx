import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from 'react'
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="movie/popular" element={<MovieList />} />
      <Route path="movie/top" element={<MovieList />} />
      <Route path="movie/upcoming" element={<MovieList />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    
      
    </div>
  )
}

export default AllRoutes
