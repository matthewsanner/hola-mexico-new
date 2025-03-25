import logo from "../assets/home/logo.png";
import group from "../assets/home/group.png";
import divide from "../assets/reused/divide.png";
import raised_hand from "../assets/home/raised_hand.png";
import pen from "../assets/home/pen.png";
import customized_learning from "../assets/home/customized_learning.png";
import splash_text from "../assets/home/splash_text.png";
import teaching_methodology from "../assets/home/teaching_methodology.png";
import flexible_learning from "../assets/home/flexible_learning.png";
import cultural_insights from "../assets/home/cultural_insights.png";
import girl from "../assets/home/girl.png";
import enhanced_learning from "../assets/home/enhanced_learning.png";
import active_practice from "../assets/home/active_practice.png";
import book from "../assets/home/book.png";
import laptop_mobile from "../assets/home/laptop_mobile.png";
import comprehensive_language from "../assets/home/comprehensive_language.png";
import regular_feedback from "../assets/home/regular_feedback.png";
import choose_class from "../assets/home/choose_class.png";
import testimonials from "../assets/home/testimonials.png";
import idea_people from "../assets/home/idea_people.png";
import girl_mobile from "../assets/home/girl_mobile.png";
import laptop from "../assets/home/laptop.png";
import book_head from "../assets/home/book_head.png";
import apostrophe from "../assets/home/apostrophe.png";
import pencil from "../assets/home/pencil.png";
import lightbulb from "../assets/home/lightbulb.png";
import light_book from "../assets/home/light_book.png";
import calendar from "../assets/home/calendar.png";
import paper_plane from "../assets/home/paper_plane.png";
import laptop_book from "../assets/home/laptop_book.png";
import notebook_world from "../assets/home/notebook_world.png";
import coffee_notebook from "../assets/home/coffee_notebook.png";
import laptop_counter from "../assets/home/laptop_counter.png";
import shout from "../assets/home/shout.png";
import stairs from "../assets/home/stairs.png";
import profile1 from "../assets/home/profile1.png";
import highlight from "../assets/reused/highlight.png";

import TestimonialCard from "../components/TestimonialCard";
import ClassCard from "../components/ClassCard";

import { Link } from "react-router-dom";
import { IconButton, Carousel } from "@material-tailwind/react";

function Home() {
  return (
    <div className="w-full bg-navy-blue">
      {/* Outer wrapper to control max-width */}
      <div className="mx-auto max-w-[1400px]">
        {/* First row */}
        <div className="flex flex-col items-center bg-navy-blue px-4 pb-4 md:flex-row">
          {/* Left column with the image */}
          <div className="w-full px-3 lg:w-1/3">
            <img
              src={logo}
              alt="Hola Mexico Hola Spanish Education logo"
              className="max-w-4/5"
            />
          </div>

          {/* Right column with placeholder text */}
          <div className="w-full px-6 text-center lg:w-2/3">
            <h2 className="text-3xl font-bold leading-tight text-mx-yellow md:text-4xl lg:text-5xl">
              Master Spanish Language and Culture
            </h2>
            <p className="py-6 font-bold text-white md:text-lg lg:text-xl">
              Personalized, interactive, and effective Spanish learning awaits
              you.
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col items-center bg-slate-gray p-5 xl:flex-row">
          {/* Column with image */}
          <div className="w-full max-w-xl p-6 text-center xl:order-2 xl:w-1/2">
            <img src={group} alt="cartoon students talking to each other" />
          </div>

          {/* Column with text and highlight */}
          <div className="w-full p-6 xl:order-1 xl:w-1/2">
            <img
              className="py-6 xl:py-0"
              src={splash_text}
              alt="Unlock the full potential of Spanish with tailor-made lessons that bring language to life"
            />
            <p className="text-center text-lg text-navy-blue md:pt-20 md:text-xl lg:text-2xl">
              Discover personalized Spanish classes tailored to your level, from
              beginner to advanced. Experience immersive learning with
              customized content that brings the Spanish language and culture to
              life. Our innovative tools and methodologies ensure an engaging
              and effective learning journey.
            </p>
          </div>
        </div>

        {/* Row divider */}
        <div className="flex flex-col items-center bg-slate-gray p-5">
          <img src={divide} alt="page divide" className="mx-auto max-w-full" />
        </div>

        {/* Next row */}
        <div className="flex flex-col items-center bg-slate-gray px-10 py-5 md:flex-row">
          <img
            className="md:w-1/2"
            src={teaching_methodology}
            alt="teaching methodology"
          />
          <div className="md:w-1/2">
            <p className="px-6 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Our approach combines tailored instruction, cutting-edge
              technology, and deep cultural insights to deliver a Spanish
              learning journey that&apos;s as enriching as it is effective.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 bg-slate-gray p-6 md:grid-cols-4">
          <div className="hidden items-center justify-center md:row-span-2 md:flex">
            <img
              className="absolute left-0 max-w-xs xl:max-w-md"
              src={raised_hand}
              alt="student at desk with hand raised"
            />
          </div>

          <div className="flex flex-col items-center justify-center md:col-span-2">
            <img
              className="mx-auto pt-4"
              src={customized_learning}
              alt="customized learning"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Every session is thoughtfully designed to meet your specific goals
              and needs, ensuring each lesson is both effective and truly
              enjoyable.
            </p>
          </div>

          <div className="m-4 hidden items-center justify-center md:flex">
            <img
              className="absolute right-0 max-w-60 xl:max-w-sm"
              src={pen}
              alt="pen"
            />
          </div>

          <div className="flex flex-col items-center justify-center md:col-span-3 md:ml-32 md:mr-12">
            <img
              className="mx-auto pt-8"
              src={flexible_learning}
              alt="flexible learning options"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Choose from a variety of class formats— online, in-person, or
              hybrid— to suit your lifestyle and learning preferences. Our
              diverse range of courses, tailored class packages, and specialized
              offerings ensures continuous engagement and optimal progress in
              your Spanish journey.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center md:col-span-3 md:mx-24">
            <img
              className="mx-auto pt-8"
              src={cultural_insights}
              alt="cultural insights and language standards"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Explore the vibrant cultures of the Spanish-speaking world as you
              learn. Our classes are designed to meet language standards
              according to the CEFR and SIELE, providing you with a thorough and
              culturally enriched learning experience.
            </p>
          </div>

          <div className="hidden items-center justify-center md:flex">
            <img
              className="absolute right-0 max-w-60 xl:max-w-72"
              src={girl}
              alt="studying girl with laptop"
            />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <img
              className="block w-full max-w-lg p-12"
              src={girl_mobile}
              alt="studying girl with laptop"
            />
          </div>

          <div className="flex flex-col items-center justify-center md:col-span-2">
            <img
              className="mx-auto pt-8"
              src={enhanced_learning}
              alt="enhanced learning with diverse educational resources"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Elevate your Spanish with our comprehensive suite of resources,
              including digital tools and physical books. Our materials are
              designed to enrich your learning experience, providing dynamic and
              engaging educational activities that cater to all learning styles.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center md:col-span-2">
            <img
              className="mx-auto pt-8"
              src={active_practice}
              alt="active practice"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              From the very first lesson, we emphasize continuous engagement and
              active participation. Our interactive methods are designed to
              boost your confidence and fluency in Spanish, ensuring you
              practice your language skills in real-world scenarios.
            </p>
          </div>

          <div className="flex items-center justify-center md:hidden">
            <img
              className="block w-full max-w-lg p-12"
              src={laptop_mobile}
              alt="laptop and book"
            />
          </div>
          <div className="hidden items-center justify-center md:row-span-2 md:flex">
            <img
              className="absolute left-0 max-w-52 md:max-w-60 xl:max-w-xs"
              src={laptop}
              alt="laptop and book"
            />
          </div>

          <div className="flex flex-col items-center justify-center md:col-span-2">
            <img
              className="mx-auto pt-8"
              src={comprehensive_language}
              alt="comprehensive language skills development"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Mastery in Spanish is balanced across reading, writing, speaking,
              and listening, with comprehensive digital grammar and vocabulary
              exercises supplemented by specialized vocabulary books for each
              learning stage.
            </p>
          </div>
          <div className="hidden items-center justify-center md:row-span-2 md:flex">
            <img
              className="absolute right-0 max-w-52 md:max-w-60 xl:max-w-xs"
              src={book}
              alt="girl with magnifying glass looking at book"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:col-span-2">
            <img
              className="mx-auto pt-8"
              src={regular_feedback}
              alt="regular and constructive feedback"
            />
            <p className="p-4 text-center text-lg text-navy-blue md:text-xl lg:text-2xl">
              Receive ongoing, personalized feedback designed to enhance your
              strengths and improve areas of weakness. We carefully monitor your
              progress, ensuring you stay motivated and on track as you advance
              toward Spanish fluency.
            </p>
          </div>

          {/* Row divider */}
          <div className="bg-slate-gray py-4 pt-8 md:col-span-4">
            <img
              src={divide}
              alt="page divide"
              className="mx-auto max-w-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center pt-8 md:col-span-4">
            <p className="p-4 text-center text-lg font-semibold text-navy-blue md:text-xl lg:text-2xl xl:px-40">
              At Hola México Hola, we dedicate ourselves to making your Spanish
              learning journey both enjoyable and effective. With a personalized
              approach, cutting-edge tools, rich cultural insights, and dynamic
              practice, we ensure you quickly gain the confidence you need.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-slate-gray p-4 md:col-span-4">
            <Link
              to="/classes"
              className={
                "m-4 block rounded-full bg-mx-yellow px-6 py-2 text-center text-xl text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full"
              }
            >
              Read more...
            </Link>
          </div>
        </div>

        {/* Classes row */}
        <div className="relative flex flex-col items-center justify-center bg-navy-blue px-6 py-12">
          <img
            className="z-10 max-w-full md:w-2/3 lg:w-1/2"
            src={choose_class}
            alt="choose the best class for you"
          />
          <img
            className="absolute bottom-0 right-0 hidden max-w-md md:block"
            src={book_head}
            alt="student carrying books on his head"
          />
          <img
            className="absolute bottom-0 left-0 max-w-56 md:max-w-72"
            src={apostrophe}
            alt="apostrophe"
          />
          <img
            className="absolute right-0 top-0 max-w-xs md:max-w-sm"
            src={lightbulb}
            alt="lightbulb"
          />
          <img
            className="absolute left-0 top-0 hidden max-w-md md:block"
            src={pencil}
            alt="pencil"
          />

          <Carousel
            className="max-w-xl rounded-xl pt-10"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              // Place the navigation OUTSIDE the carousel
              <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute left-1 top-2/4 -translate-y-2/4"
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
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute !right-1 top-2/4 -translate-y-2/4"
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
            <ClassCard
              header="Online Classes"
              subheader="1-on-1"
              content="Learn Spanish from anywhere with our flexible online classes, designed for engaging and effective language acquisition."
              image={laptop_book}
              altText="laptop and book"
            />
            <ClassCard
              header="Hybrid Classes"
              subheader="1-on-1, Online and In-Person"
              content="Enjoy the advantages of our hybrid Spanish classes, blending online flexibility with in-person richness."
              image={notebook_world}
              altText="notebook and globe connected by arrows"
            />
            <ClassCard
              header="In-person Classes"
              subheader="1-on-1"
              content="Experience Spanish through face-to-face classes for direct, personal interaction and deeper learning."
              image={coffee_notebook}
              altText="cup of coffee and a notebook"
            />
            <ClassCard
              header="Classes With Your Friends"
              subheader="Online or In-Person"
              content="Explore Spanish with friends in engaging, personalized sessions designed for small groups."
              image={laptop_counter}
              altText="online teacher teaching a group of students"
            />
            <ClassCard
              header="Beginner Package"
              subheader="1-on-1, Online"
              content="Spanish fundamentals with a focus on basic vocabulary, simple grammatical structures, ad initial conversational practice."
              image={stairs}
              altText="person walking up flight of stairs"
            />
            <ClassCard
              header="Intermediate Package"
              subheader="1-on-1, Online"
              content="Deepen your Spanish knowledge with advanced conversational skills, comprehensive grammar, and cultural insights."
              image={shout}
              altText="talking person with idea lightbulb"
            />
          </Carousel>
        </div>

        <div className="relative flex flex-col items-center justify-center bg-slate-gray px-6 py-12">
          <img
            src={testimonials}
            alt="testimonials"
            className="z-10 mx-auto max-w-full md:w-2/3 lg:w-1/2"
          />
          <img
            className="absolute right-0 top-0 max-w-xs md:max-w-sm"
            src={light_book}
            alt="an airy book"
          />
          <img
            className="absolute bottom-0 left-0 max-w-xs lg:max-w-sm"
            src={calendar}
            alt="calendar"
          />
          <img
            className="absolute bottom-0 right-0 hidden max-w-lg lg:block"
            src={paper_plane}
            alt="paper plane"
          />
          <Carousel
            className="max-w-2xl rounded-xl py-12"
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
                className="!absolute left-1 top-2/4 -translate-y-2/4"
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
                className="!absolute !right-1 top-2/4 -translate-y-2/4"
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
            <TestimonialCard
              text="At HMH, each lesson is an opportunity to grow and overcome challenges, all while learning in an environment that values authenticity and personalized education."
              image={profile1}
              rating={5}
              name="Tom Sandoval"
            />
            <TestimonialCard
              text="At HMH, each lesson is an opportunity to grow and overcome challenges, all while learning in an environment that values authenticity and personalized education."
              image={profile1}
              rating={5}
              name="Tom Sandoval"
            />
            <TestimonialCard
              text="At HMH, each lesson is an opportunity to grow and overcome challenges, all while learning in an environment that values authenticity and personalized education."
              image={profile1}
              rating={5}
              name="Tom Sandoval"
            />
          </Carousel>
        </div>

        <div className="flex flex-col items-center justify-center bg-white px-5 py-20 md:flex-row">
          <div className="flex flex-col items-center md:w-2/3">
            <a href="/contact">
              <div className="m-4 max-w-2xl rounded-lg bg-slate-gray p-6 shadow-lg shadow-gray-500">
                <h2 className="text-4xl font-bold text-navy-blue lg:text-5xl">
                  Take A Free Trial Class
                </h2>
                <div className="relative flex items-center">
                  <img
                    src={highlight}
                    alt="highlight"
                    className="absolute mx-auto max-w-60"
                  />
                  <p className="relative px-1 py-3 text-lg font-semibold text-navy-blue lg:text-xl">
                    Schedule your free trial class today or contact us with any
                    questions!
                  </p>
                </div>
              </div>
            </a>

            <a href="mailto:holamexicohola@gmail.com">
              <div className="m-4 min-w-96 rounded-lg border border-black p-4 text-center text-lg shadow-xl hover:bg-mx-yellow">
                Email: holamexicohola@gmail.com
              </div>
            </a>
            <a href="tel:+525520616969">
              <div className="m-4 min-w-96 rounded-lg border border-black p-4 text-center text-lg shadow-xl hover:bg-mx-yellow">
                WhatsApp: +52 55 2061 6969
              </div>
            </a>
            <a href="tel:+525570254108">
              <div className="m-4 min-w-96 rounded-lg border border-black p-4 text-center text-lg shadow-xl hover:bg-mx-yellow">
                Office: +52 55 7025 4108
              </div>
            </a>
          </div>
          <div className="max-w-xl p-4 md:w-1/3">
            <img
              className="p-4"
              src={idea_people}
              alt="two people discussing ideas together"
            />
            <p className="px-4 pt-4 text-lg">
              We are committed to making our Spanish classes accessible to
              everyone. We strive to create a supportive and inclusive learning
              environment for everybody.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from "react";

// const [open, setOpen] = React.useState(false);

// const handleOpen = () => setOpen(!open);

/* 
<img
  onClick={handleOpen}
  className="w-5/6 cursor-pointer"
  src={online_classes}
  alt="online classes, 1-on-1, personalized and flexible, tailored to your schedule"
/> 
*/

/* 
<Dialog open={open} handler={handleOpen}>
  <DialogHeader>Its a simple modal.</DialogHeader>
  <DialogBody>
    The key to more success is to have a lot of pillows. Put it
    this way, it took me twenty five years to get these plants,
    twenty five years of blood sweat and tears, and I&apos;m never
    giving up, I&apos;m just getting started. I&apos;m up to
    something. Fan luv.
  </DialogBody>
  <DialogFooter>
    <Button variant="gradient" color="green" onClick={handleOpen}>
      <span>Go Back</span>
    </Button>
  </DialogFooter>
</Dialog> 
*/
