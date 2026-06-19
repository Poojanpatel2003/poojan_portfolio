import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Admin = () => {
const navigate = useNavigate();

const categories = [
"All Blogs",
"mern",
"python",
"sql",
"htmlcss",
"js",
"git",
];

const [blogs, setBlogs] = useState([]);
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All Blogs");
const [showForm, setShowForm] = useState(false);

const [formData, setFormData] = useState({
category: "",
title: "",
desc: "",
});

useEffect(() => {
fetchBlogs();
}, []);

const fetchBlogs = async () => {
try {
const res = await axios.get(
"https://poojan-portfolio-rzpk.onrender.com/api/blogs"
);

  setBlogs(res.data);
} catch (error) {
  console.log(error);
}


};

const handleLogout = () => {
localStorage.removeItem("adminToken");
navigate("/admin-login");
};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


try {
  await axios.post(
    "https://poojan-portfolio-rzpk.onrender.com/api/add-blog",
    formData
  );

  alert("Blog Uploaded Successfully");

  setFormData({
    category: "",
    title: "",
    desc: "",
  });

  setShowForm(false);
  fetchBlogs();
} catch (error) {
  console.log(error);
}


};

const deleteBlog = async (id) => {
try {
await axios.delete(
`https://poojan-portfolio-rzpk.onrender.com/api/delete-blog/${id}`
);

  alert("Blog Deleted Successfully");

  fetchBlogs();
} catch (error) {
  console.log(error);
}


};

const filteredBlogs = blogs.filter((blog) => {
const matchesCategory =
selectedCategory === "All Blogs"
? true
: blog.category.toLowerCase() ===
selectedCategory.toLowerCase();
const matchesSearch =
  blog.title
    .toLowerCase()
    .includes(search.toLowerCase()) ||
  blog.category
    .toLowerCase()
    .includes(search.toLowerCase());

return matchesCategory && matchesSearch;

});

return ( <div className="min-h-screen bg-[#0d1117] text-white">
  {/* HEADER */}
  <div className="border-b border-zinc-800 bg-[#161b22] sticky top-0 z-50">

    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain"
        />
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded transition"
      >
        Logout
      </button>

    </div>
  </div>

  {/* MAIN */}
  <div className="max-w-7xl mx-auto px-6 py-8">

    <div className="grid lg:grid-cols-[250px_1fr] gap-8">

      {/* SIDEBAR */}
      <div className="bg-[#161b22] p-5 rounded-2xl h-fit border border-zinc-800">

        <h2 className="text-xl font-bold mb-5 font-serif">
          Categories
        </h2>

        <div className="flex flex-col gap-3">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(cat)
              }
              className={`text-left px-4 py-3 rounded transition capitalize ${
                selectedCategory === cat
                  ? "bg-purple-600"
                  : "bg-[#0d1117] hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

      </div>

      {/* CONTENT */}
      <div>

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-[#161b22] border border-zinc-700 rounded-xl px-4 py-3 outline-none w-full md:w-[350px]"
          />

          <button
            onClick={() =>
              setShowForm(!showForm)
            }
            className="bg-purple-600 hover:bg-purple-700 px-4 rounded transition"
          >
            {showForm
              ? "Close Form"
              : "+ Add Blog"}
          </button>

        </div>

        {/* ADD BLOG FORM */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#161b22] p-6 rounded-2xl mb-8 border border-zinc-800"
          >

            <h2 className="text-2xl font-bold mb-5">
              Add New Blog
            </h2>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-[#0d1117] rounded-xl"
              required
            >
              <option value="">
                Select Category
              </option>

              <option value="mern">
                MERN
              </option>

              <option value="python">
                Python
              </option>

              <option value="sql">
                SQL
              </option>

              <option value="htmlcss">
                HTML + CSS
              </option>

              <option value="js">
                JavaScript
              </option>

              <option value="git">
                Git/Github
              </option>

            </select>

            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-[#0d1117] rounded-xl"
              required
            />

            <textarea
              rows="5"
              name="desc"
              placeholder="Blog Description"
              value={formData.desc}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-[#0d1117] rounded-xl"
              required
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded"
            >
              Upload Blog
            </button>

          </form>
        )}

        {/* BLOG COUNT */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Blogs ({filteredBlogs.length})
          </h2>
        </div>

        {/* BLOGS */}
        {filteredBlogs.length === 0 ? (
          <div className="bg-[#161b22] p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-2">
              No Blogs Found
            </h2>

            <p className="text-zinc-400">
              Try another category or search term.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-[#161b22] border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition"
              >

                <div className="flex justify-between items-start mb-4">

                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm capitalize">
                    {blog.category}
                  </span>

                  <button
                    onClick={() =>
                      deleteBlog(blog._id)
                    }
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Delete
                  </button>

                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {blog.title}
                </h3>

                <p className="text-zinc-400 leading-7">
                  {blog.desc}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>

  </div>

</div>


);
};

export default Admin;
