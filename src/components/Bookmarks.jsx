import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3">
      <h3 className="bg-[#6047ec2d] text-center font-semibold text-[24px] text-[#6047EC] px-4 py-4 rounded-md">
        Spent time on read: {readTime} min
      </h3>
      <div className="my-5">
        <div className="bg-[#efefef] rounded-lg p-4 w-full">
          <h2 className="text-lg font-semibold border-b pb-2">
            Bookmarked Blogs : {bookmarks.length}
          </h2>
          <ul className="divide-y divide-gray-200">
            {bookmarks.map((bookmark, idx) => (
              <li key={idx} className="bg-slate-200 rounded-xl p-[20px] mb-4">
                <p className="text-sm font-medium">{bookmark}</p>
              </li>
            ))}
            {/* <li className="py-3">
              <p className="text-sm font-medium">
                Master Microsoft Power Platform and Become an In-Demand!
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
};
export default Bookmarks;
