import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClassCard = ({ header, subheader, content, image, altText }) => {
  return (
    <div className="relative mx-14 mb-10 mt-2 flex flex-col items-center justify-center">
      {/* Card Container */}
      <div className="relative max-w-md rounded-xl bg-gradient-to-b from-gray-200 to-gray-400 text-center shadow-xl shadow-gray-900">
        {/* Top Tab */}
        <div className="w-full rounded-t-xl bg-mx-yellow px-4 py-2 text-2xl font-bold text-navy-blue lg:text-3xl">
          {header}
        </div>

        {/* Card Content (Now has padding separately) */}
        <div className="p-6">
          <h2 className="text-lg italic text-navy-blue lg:text-xl">
            {subheader}
          </h2>
          <p className="mt-2 text-lg text-navy-blue lg:text-xl">{content}</p>

          {/* Image */}
          <div className="mt-4 flex justify-center space-x-4">
            <img src={image} alt={altText} />
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/classes"
              className="block w-fit rounded-full bg-mx-yellow px-6 py-2 text-center text-lg text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full lg:text-xl"
            >
              Read more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ClassCard.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ClassCard;
