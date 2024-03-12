import { useEffect } from "react";
import { useState } from "react";
import Blog from "../components/Blog"

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);
  return(
  <div className="md:w-2/3">
   <h3 className="text-3xl">Blogs</h3>
   {
     blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
   }
  </div>
  ) 
};

export default Blogs;
