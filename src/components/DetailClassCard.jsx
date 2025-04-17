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
    <div className="relative mx-1 mb-10 mt-2 flex flex-col items-center justify-center">
      {/* Floating Header */}
      <div className="absolute -top-10 left-1/2 z-10 flex min-h-32 w-11/12 max-w-md -translate-x-1/2 translate-y-6 items-center rounded-full bg-mx-yellow px-6 py-3 shadow-xl shadow-gray-900">
        <img
          src={image}
          alt={altText}
          className="mr-4 h-24 w-24 rounded-full bg-white object-cover"
        />
        <h2 className="text-2xl font-bold text-white lg:text-3xl">{header}</h2>
      </div>

      {/* Card Container (Extends Under Header) */}
      <div className="relative mt-20 max-w-md rounded-xl bg-gradient-to-b from-gray-200 to-gray-400 px-8 pb-6 pt-20 text-center shadow-xl shadow-gray-900">
        {/* Card Content */}
        <h3 className="text-xl italic text-navy-blue">{subheader}</h3>
        <p className="py-6 text-lg">{content}</p>
        <ul className="list-inside list-disc pb-2 text-left">
          <li>Duration: {duration}</li>
          <li>Frequency: {frequency}</li>
          {total_hours && <li>Total hours: {total_hours}</li>}
          <li>Levels: {levels}</li>
          <li>Materials: {materials}</li>
          <li>Cost: {cost}</li>
        </ul>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Link
            onClick={handleOpen}
            className="block w-fit rounded-full bg-mx-yellow px-6 py-2 text-center text-lg text-black transition-colors hover:bg-lt-mx-yellow"
          >
            More info
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
  );
};

// PropTypes validation
ClassCard.propTypes = {
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
