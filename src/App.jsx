import { useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleAddToBookmarks = (blogTitle) => {
    setBookmarks([...bookmarks, blogTitle]);
  };
  const handleMarkAsRead = (time, id) => {
    setReadTime(readTime + time);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <div className="w-[85%] mx-auto">
      <Header></Header>
      <div className="flex flex-col md:flex-row justify-between gap-5 mx-2">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
