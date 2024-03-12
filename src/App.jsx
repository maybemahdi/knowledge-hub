import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-[85%] mx-auto">
      <Header></Header>
      <div className="flex flex-col md:flex-row justify-between items-center mx-2">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
