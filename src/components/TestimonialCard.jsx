import PropTypes from "prop-types";
import quotation from "../assets/testimonials/quotation.png";
import star from "../assets/testimonials/star.png";

const TestimonialCard = ({ text, name, image, rating, maxWidth = "lg" }) => {
  return (
    <div className="mx-4 flex justify-center">
      <div className="flex w-fit justify-center rounded-xl bg-white p-3 shadow-xl shadow-gray-600">
        {/* Inner Card with Gray Border */}
        <div
          className={`relative rounded-lg border border-gray-400 bg-white p-6 text-center ${maxWidth === "2xl" ? "max-w-2xl" : "max-w-lg"}`}
        >
          {/* Decorative Quote Icon */}
          <div className="absolute -top-11 left-4 text-mx-yellow">
            <img
              className="w-20 md:w-24"
              src={quotation}
              alt="quotation mark"
            />
          </div>

          {/* Profile Image */}
          <img
            src={image}
            alt="student profile picture"
            className="mx-auto -mt-14 h-24 w-24 rounded-full p-1 shadow-lg"
          />

          {/* Testimonial Text */}
          <p className="mt-4 text-lg lg:text-xl">{text}</p>

          {/* Name */}
          <p className="mt-4 italic lg:text-lg">{name}</p>

          {/* Star Ratings */}
          <div className="mt-4 flex items-center justify-center">
            {Array.from({ length: rating }).map((_, i) => (
              <img key={i} src={star} alt="star" className="mx-1 h-12 w-12" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  maxWidth: PropTypes.oneOf(["lg", "2xl"]),
};

export default TestimonialCard;
