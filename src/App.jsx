import { useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blogTitle) => {
    setBookmarks([...bookmarks, blogTitle]);
  };
  return (
    <div className="w-[85%] mx-auto">
      <Header></Header>
      <div className="flex flex-col md:flex-row justify-between gap-5 mx-2">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
