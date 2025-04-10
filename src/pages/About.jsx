import talk_happy from "../assets/about/talk_happy.png";
import rays from "../assets/about/rays.png";
import book from "../assets/about/book.png";
import calendar from "../assets/about/calendar.png";
import pen from "../assets/about/pen.png";
import notebook from "../assets/about/notebook.png";
import rays_left from "../assets/about/rays_left.png";
import stars from "../assets/about/stars.png";
import paper_plane from "../assets/about/paper_plane.png";
import portrait from "../assets/about/portrait.png";

import TestimonialCard from "../components/TestimonialCard";
import testimonials_data from "../data/testimonials.js";

import { IconButton, Carousel } from "@material-tailwind/react";

function About() {
  return (
    <div className="w-full bg-navy-blue">
      {/* Outer wrapper to control max-width */}
      <div className="mx-auto max-w-[1400px]">
        {/* First row */}
        <div className="flex flex-col items-center bg-white px-5 py-10 md:flex-row">
          {/* Left column with text */}
          <div className="w-full px-6 text-center md:w-1/2">
            <h2 className="text-5xl font-bold leading-tight text-mx-yellow md:text-6xl lg:text-7xl">
              About / Testimonials
            </h2>
          </div>

          {/* Right column with image */}
          <div className="m-6 w-full px-3 md:w-1/2">
            <img
              src={talk_happy}
              alt="two people talking, one holds a calendar with a happy face"
              className="max-w-4/5"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="relative flex flex-col items-center bg-white p-5">
          <img
            className="absolute left-0 top-0 max-w-56 lg:max-w-56"
            src={book}
            alt="book"
          />
          <img
            className="absolute right-0 top-0 hidden max-w-sm xl:block"
            src={rays}
            alt="decorative rays"
          />
          <img
            className="absolute bottom-0 left-10 hidden max-w-80 lg:max-w-sm xl:block"
            src={pen}
            alt="pen"
          />
          <img
            className="absolute bottom-0 right-0 max-w-48 lg:max-w-64"
            src={calendar}
            alt="calendar"
          />

          <div className="z-10 w-4/5 lg:w-2/3">
            <p className="pb-10 pt-6 text-2xl text-navy-blue lg:pt-16">
              Welcome to Hola México Hola - a place where every student finds
              their own path to mastering Spanish.
            </p>
            <p className="pb-20 text-2xl text-navy-blue">
              At HMH, each lesson is an opportunity to grow and overcome
              challenges, all while learning in an environment that values
              authenticity and personalized education. Here we share some
              experiences from our students who, with dedication and effort,
              have made remarkable strides in their Spanish journey. Their
              stories reflect HMH&apos;s commitment to providing quality
              education tailored to each individual&apos;s goals and needs.
            </p>
          </div>

          <Carousel
            className="max-w-4xl rounded-xl pb-32 pt-16"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              // Place the navigation OUTSIDE the carousel
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handlePrev}
                className="!absolute left-1 top-2/4 -translate-y-3/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handleNext}
                className="!absolute !right-1 top-2/4 -translate-y-3/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {testimonials_data.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                image={testimonial.image}
                rating={testimonial.rating}
                name={testimonial.name}
                maxWidth="2xl"
              />
            ))}
          </Carousel>
        </div>

        {/* Third row */}
        <div className="relative flex flex-col bg-navy-blue px-6 py-20 lg:flex-row">
          <img
            className="absolute left-0 top-0 max-w-72 lg:max-w-xs"
            src={rays_left}
            alt="decorative rays"
          />
          <img
            className="absolute right-0 top-0 hidden max-w-md lg:block"
            src={paper_plane}
            alt="paper plane"
          />
          <img
            className="absolute bottom-0 left-0 hidden max-w-72 lg:block lg:max-w-xs"
            src={notebook}
            alt="notebook"
          />
          <img
            className="absolute bottom-0 right-0 max-w-48"
            src={stars}
            alt="stars"
          />
          <div className="z-10 flex w-full flex-col pt-10 text-center lg:w-1/3">
            <h3 className="text-4xl font-bold text-mx-yellow">About Me</h3>
            <img
              className="mx-auto my-6 w-full max-w-lg"
              src={portrait}
              alt="portrait of the teacher"
            />
          </div>
          <div className="p-6 px-10 text-2xl text-white lg:w-2/3">
            <p>
              Hello, I&apos;m Ernesto, the founder of Hola México Hola. With
              over nine years of experience in Spanish teaching, I have
              dedicated my career to refining methods that provide my students
              with an authentic and personalized experience. HMH was born from
              this experience and the desire to create a space where each lesson
              is carefully tailored to the individual needs and goals of my
              students.
            </p>
            <p className="pt-10">
              My work at HMH has strengthened my passion for teaching and
              continuous learning, motivating me to expand my pedagogical
              knowledge and skills. With a solid foundation in educational
              practices and an unwavering commitment to professional growth, at
              Hola México Hola I strive to offer a Spanish learning experience
              that is inclusive, flexible, and deeply enriching. Start your
              journey to Spanish fluency in a supportive environment!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
