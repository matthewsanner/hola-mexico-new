import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ClassCard = ({
  home_header,
  home_subheader,
  header,
  subheader,
  image,
  altText,
  content,
  duration,
  frequency,
  total_hours,
  levels,
  materials,
  cost,
  dialog_body,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  closer,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative mx-4 mb-10 mt-2 flex flex-col items-center justify-center">
      {/* Card Container */}
      <div className="relative max-w-md rounded-xl bg-gradient-to-b from-gray-200 to-gray-400 text-center shadow-xl shadow-gray-900">
        {/* Top Tab */}
        <div className="w-full rounded-t-xl bg-mx-yellow px-4 py-2 text-2xl font-bold text-navy-blue lg:text-3xl">
          {home_header}
        </div>

        {/* Card Content (Now has padding separately) */}
        <div className="p-6">
          <h2 className="text-lg italic text-navy-blue lg:text-xl">
            {home_subheader}
          </h2>
          <p className="mt-2 text-lg text-navy-blue lg:text-xl">{content}</p>

          {/* Image */}
          <div className="mt-4 flex justify-center space-x-4">
            <img src={image} alt={altText} />
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <Link
              onClick={handleOpen}
              className="block w-fit rounded-full bg-mx-yellow px-6 py-2 text-center text-lg text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full lg:text-xl"
            >
              Read more...
            </Link>
          </div>

          <Dialog
            open={open}
            handler={handleOpen}
            className="m-6 max-h-screen overflow-y-auto rounded-xl bg-gradient-to-b from-gray-200 to-gray-400 p-6 shadow-lg"
            size="xl"
          >
            <div className="relative flex">
              {/* Sidebar */}
              <div className="w-2 rounded-xl bg-navy-blue"></div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <DialogHeader className="flex flex-col items-start text-2xl font-bold text-gray-900">
                  <h1 className="text-3xl text-navy-blue">{header}</h1>
                  <h2 className="text-navy-blue">{subheader}</h2>
                </DialogHeader>

                <DialogBody className="text-lg leading-relaxed text-gray-800">
                  {dialog_body}
                  <div className="py-4">
                    <h3 className="font-semibold text-navy-blue">
                      Course Details
                    </h3>
                    <ul className="list-inside list-disc">
                      <li>Duration: {duration}</li>
                      <li>Frequency: {frequency}</li>
                      {total_hours && <li>Total hours: {total_hours}</li>}
                      <li>Levels: {levels}</li>
                      <li>Materials: {materials}</li>
                      <li>Cost: {cost}</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <h3 className="font-semibold text-navy-blue">Benefits</h3>
                    <ul className="list-inside list-disc">
                      <li>{benefit1}</li>
                      <li>{benefit2}</li>
                      {benefit3 && <li>{benefit3}</li>}
                      {benefit4 && <li>{benefit4}</li>}
                    </ul>
                  </div>
                  <p className="py-2">{closer}</p>
                </DialogBody>

                <DialogFooter className="flex justify-center p-1">
                  <Link
                    to="https://docs.google.com/forms/d/e/1FAIpQLSfVOY6lOHoTMTY1muh39EThZrH6uEgIqU5NUoIzlNbffZpVnQ/viewform?usp=header"
                    className={
                      "m-4 block rounded-full bg-mx-yellow px-6 py-2 text-center text-lg text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full"
                    }
                    target="_blank"
                  >
                    What&apos;s my level?
                  </Link>
                  <Link
                    to="/contact"
                    className={
                      "m-4 block rounded-full bg-mx-yellow px-6 py-2 text-center text-lg text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full"
                    }
                  >
                    Book a class
                  </Link>
                  <Link
                    onClick={handleOpen}
                    className={
                      "m-4 block rounded-full bg-mx-yellow px-6 py-2 text-center text-lg text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full"
                    }
                  >
                    Go Back
                  </Link>
                </DialogFooter>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ClassCard.propTypes = {
  home_header: PropTypes.string.isRequired,
  home_subheader: PropTypes.string.isRequired,
  home_content: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  total_hours: PropTypes.string.isRequired,
  levels: PropTypes.string.isRequired,
  materials: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  dialog_header: PropTypes.string.isRequired,
  dialog_subheader: PropTypes.string.isRequired,
  dialog_body: PropTypes.string.isRequired,
  benefit1: PropTypes.string.isRequired,
  benefit2: PropTypes.string.isRequired,
  benefit3: PropTypes.string.isRequired,
  benefit4: PropTypes.string.isRequired,
  closer: PropTypes.string.isRequired,
};

export default ClassCard;
