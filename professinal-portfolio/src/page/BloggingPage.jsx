import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CircleChevronLeft, Search } from "lucide-react";
import axios from "axios";

const BloggingPage = () => {
const { id } = useParams();

const [search, setSearch] = useState("");
const [sortType, setSortType] = useState("latest");
const [blogs, setBlogs] = useState([]);

useEffect(() => {
fetchBlogs();
}, []);

const fetchBlogs = async () => {
try {
const res = await axios.get("https://poojan-portfolio-rzpk.onrender.com/api/blogs");
  setBlogs(res.data);
} catch (error) {
  console.log(error);
}

};

let filteredBlogs = blogs.filter((item) => {
return (
item.category?.toLowerCase().trim() ===
id?.toLowerCase().trim() &&
item.title
?.toLowerCase()
.includes(search.toLowerCase())
);
});

filteredBlogs.sort((a, b) => {
if (sortType === "latest") {
return new Date(b.date) - new Date(a.date);
} else {
return new Date(a.date) - new Date(b.date);
}
});


return ( <div className="min-h-screen bg-[#0d1117] text-white px-6 py-24"> <div className="max-w-6xl mx-auto">
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 hover:text-purple-300 transition mb-8 text-white no-underline"
    >
      <CircleChevronLeft size={20} />
      Back to Blogs
    </Link>

    <div className="mb-8">
      <h1 className="text-5xl font-bold capitalize mb-4">
        {id} Blogs
      </h1>

      <p className="text-zinc-400 text-lg">
        Explore latest blogs related to {id}.
      </p>
    </div>

    <div className="flex flex-col md:flex-row gap-5 justify-between mb-10">
      <div className="relative w-full md:w-[400px]">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#161b22] border border-zinc-700 rounded-xl py-2 pl-12 pr-4 outline-none focus:border-purple-500"
        />
      </div>

      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="bg-[#161b22] border border-zinc-700 px-4 py-2 rounded-xl outline-none focus:border-purple-500"
      >
        <option value="latest">Latest Blogs</option>
        <option value="oldest">Oldest Blogs</option>
      </select>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      {filteredBlogs.map((item) => (
        <div
          key={item._id}
          className="bg-[#161b22] border border-zinc-800 rounded-3xl p-6 hover:-translate-y-2 transition duration-300 hover:border-purple-500 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="bg-purple-500/20 text-purple-400 text-sm px-4 py-1 rounded-full capitalize">
              {item.category}
            </span>

            <span className="text-zinc-500 text-sm">
              {new Date(item.date).toLocaleDateString()}
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4 leading-tight">
            {item.title}
          </h2>

          <p className="text-zinc-400 leading-7 mb-6">
            {item.desc}
          </p>

          <div className="border-t border-zinc-800 pt-4 flex justify-between text-sm text-zinc-500">
            <span>Published by Poojan Patel</span>
            <span>2 min read</span>
          </div>
        </div>
      ))}
    </div>

    {filteredBlogs.length === 0 && (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-3">
          No Blogs Found
        </h2>

        <p className="text-zinc-400">
          Try searching something else.
        </p>
      </div>
    )}
  </div>
</div>


);
}
export default BloggingPage;
