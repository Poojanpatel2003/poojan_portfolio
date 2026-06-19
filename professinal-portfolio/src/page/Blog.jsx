import React, { useState } from 'react'
import post from "./data"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Blog = () => {

  const [search, setSearch] = useState("");

  // SEARCH FILTER
  const filteredPosts = post.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='min-h-screen my-20 px-4 sm:px-6 lg:px-10'>

      {/* SEARCH SECTION */}
      <div className='flex flex-col justify-center items-center mb-12'>

        <h1 className='text-3xl sm:text-4xl font-bold text-white mt-1 mb-3 text-center'>
          Explore Blogs
        </h1>

        <p className='text-zinc-400 mb-6 text-center text-sm sm:text-base'>
          Search your favorite domain and explore articles.
        </p>

        {/* SEARCH BAR */}
        <div className="relative w-full sm:w-[450px]">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

          <input
            type="text"
            placeholder="Eg. MERN Stack, Python"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-zinc-700 bg-[#0d1117] text-white py-3 sm:py-4 pl-11 pr-4 outline-none focus:border-purple-500 transition duration-300"
          />
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

        {filteredPosts.map((item, index) => (

          <div
            key={index}
            className='bg-[#0d1117] border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 transition duration-300 shadow-lg'
          >


            <div className='overflow-hidden'>
              <img
                src={item.image}
                className='w-full h-[220px] sm:h-[240px] object-cover hover:scale-105 transition duration-500'
                alt={item.title}
              />
            </div>

            {/* CONTENT */}
            <div className='p-5'>

              {/* CATEGORY */}
              <div className='flex justify-between items-center mb-3'>

                <span className='bg-purple-500/20 text-purple-400 text-xs sm:text-sm px-3 py-1 rounded-full capitalize'>
                  {item.category}
                </span>
              </div>
              {/* TITLE */}
              <h2 className='text-white text-xl sm:text-2xl font-bold mb-3'>
                {item.title}
              </h2>
              {/* BUTTON */}
              <Link to={`/blog/${item.category}`}>
                <button className='w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded text-white font-semibold hover:scale-[1.02] transition duration-300'>
                  Open Blog
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* NO RESULT */}
      {filteredPosts.length === 0 && (
        <div className='text-center mt-24'>
          <h2 className='text-2xl sm:text-3xl text-white font-bold mb-3'>
            No Blogs Found
          </h2>
          <p className='text-zinc-400 text-sm sm:text-base'>
            Try searching another domain.
          </p>
        </div>
      )}
    </div>
  )
}
export default Blog