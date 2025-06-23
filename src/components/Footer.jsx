import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      

<footer className="bg-white shadow-sm mt-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Movies</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" target='_blank' className="hover:underline me-4 md:me-6">Instagram</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Github</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </footer>
  )
}

export default Footer
