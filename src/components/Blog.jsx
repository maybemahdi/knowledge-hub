import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmarks }) => {
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
    <div className="mb-[60px]">
      <img className="rounded-[8px] w-full mb-5" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 mb-5">
          <img className="w-[60px] h-[60px]" src={author_img} alt="" />
          <div>
            <h3 className="font-semibold">{author}</h3>
            <p className="text-[14px]">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmarks(blog.title)}>
            <img
              src="https://cdn.hugeicons.com/icons/all-bookmark-stroke-rounded.svg"
              alt="all-bookmark"
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-[28px] md:text-[40px] w-full md:w-[70%] mb-5">
        {title}
      </h3>
      <div className="mb-5">
        {hashtags.map((hashtag, idx) => (
          <span
            className="text-[#11111199] text-[16px] mr-3 font-semibold"
            key={idx}
          >
            #{hashtag}
          </span>
        ))}
      </div>
      <button className="text-[#6047EC] text-[16px] underline font-semibold">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
};
export default Blog;
