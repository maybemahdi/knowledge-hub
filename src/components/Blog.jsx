import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src="/placeholder.svg"
        alt="Coding setup with multiple monitors"
        className="w-full h-auto"
        width="527"
        height="300"
        style="aspect-ratio: 527 / 300; object-fit: cover;"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              MR
            </span>
          </span>
          <div>
            <div className="text-sm font-semibold text-gray-900">Mr. Raju</div>
            <div className="text-sm text-gray-500">Mar 14 (4 Days ago)</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-lg font-bold text-gray-900 mb-2">
            How to get your first job as a self-taught programmer
          </div>
          <div className="text-gray-700 text-sm mb-4">
            <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              #beginners
            </div>
            programming
            <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              #programming
            </div>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm">
            Mark as read
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600 text-sm">05 min read</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-gray-600 w-5 h-5"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
