import happy_calendar from "../assets/classes/happy_calendar.png";
import laptop from "../assets/classes/laptop.png";
import discover_classes from "../assets/classes/discover_classes.png";
import point_person from "../assets/classes/point_person.png";
import books from "../assets/classes/books.png";
import desk from "../assets/classes/desk.png";
import divide_white from "../assets/classes/divide_white.png";
import highlight from "../assets/reused/highlight.png";
import stars from "../assets/classes/stars.png";
import calaveras from "../assets/classes/calaveras.jpg";
import alebrije from "../assets/classes/alebrije.jpg";
import calavera_boxes from "../assets/classes/calavera_boxes.jpg";
import family_tree from "../assets/classes/family_tree.jpg";
import puppet from "../assets/classes/puppet.jpg";
import sombreros from "../assets/classes/sombreros.jpg";

import { IconButton, Carousel } from "@material-tailwind/react";
import DetailClassCard from "../components/DetailClassCard";

function Classes() {
  return (
    <div className="w-full bg-navy-blue">
      {/* Outer wrapper to control max-width */}
      <div className="mx-auto max-w-[1400px]">
        {/* First row */}
        <div className="flex flex-col items-center bg-white px-5 py-10 md:flex-row">
          {/* Left column with text */}
          <div className="w-full px-6 text-center md:w-1/2">
            <h2 className="text-5xl font-bold leading-tight text-mx-yellow md:text-6xl lg:text-7xl">
              Classes and Courses
            </h2>
          </div>

          {/* Right column with image */}
          <div className="m-6 w-full px-3 md:w-1/2">
            <img
              src={happy_calendar}
              alt="two people talking, one holds a calendar with a happy face"
              className="max-w-4/5"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="relative flex flex-col bg-navy-blue p-5">
          <img
            className="absolute left-0 top-0 max-w-72 lg:max-w-xs"
            src={laptop}
            alt="laptop"
          />
          <img
            className="absolute right-0 top-40 hidden max-w-md xl:block"
            src={point_person}
            alt="person pointing"
          />
          <div className="z-10 w-full pt-10 xl:w-2/3 xl:p-10">
            <img
              className="mx-auto w-full max-w-2xl"
              src={discover_classes}
              alt="discover Spanish classes and learning packages"
            />
            <p className="p-6 pt-24 text-2xl text-white md:px-20 xl:px-6">
              Ready to become fluent in Spanish? Hola México Hola offers
              tailored Spanish learning packages for all skill levels. Choose
              from one-on-one online sessions or group classes, including
              Intensive, Basic, and Intermediate courses. Select your option and
              embark on an enjoyable learning journey with us!
            </p>
          </div>
        </div>

        {/* Third row */}
        {/* Classes row */}
        <div className="relative flex flex-col items-center justify-center bg-navy-blue px-6 py-12">
          <img
            className="absolute left-0 hidden max-w-56 lg:block xl:max-w-72"
            src={books}
            alt="stack of books"
          />
          <img
            className="absolute right-0 hidden max-w-60 lg:block xl:max-w-80"
            src={desk}
            alt="school desk"
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
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-10 w-10 stroke-mx-yellow"
                  aria-hidden="true"
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
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-10 w-10 stroke-mx-yellow"
                  aria-hidden="true"
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
            <DetailClassCard
              header="Online One-On-One Spanish Classes"
              subheader="A1 to C2"
              image={family_tree}
              altText="colorful family tree art"
              content="Maximize your Spanish learning with our personalized one-on-one online classes, each session is crafted to meet your unique needs"
              duration="1-hour sessions"
              frequency="You choose- daily, weekly, or bi-weekly"
              levels="Beginner (A1) to advanced (C2)"
              materials="Customized for each lesson"
              cost="$380 MXN per hour"
              dialog_body="One-on-one online classes are crafted to maximize your Spanish learning progress, tailored to your individual needs and subtly aligned with the Common European Framework of Reference for Languages (CEFR)."
              benefit1="Tailored and efficient Spanish progression"
              benefit2="Learn from anywhere, at your convenience"
              benefit3="Constant adaptation to your linguistic goals"
              closer="Classes are subject to availability. Contact us to inquire about times and start your journey."
            />
            <DetailClassCard
              header="Hybrid One-On-One Spanish Classes"
              subheader="A1 to C2"
              image={sombreros}
              altText="sombreros"
              content="Experience the best of both worlds with our Hybrid Spanish Classes, combining the flexibility of online learning with the benefits of in-person sessions in Mexico City"
              duration="1-hour sessions"
              frequency="You choose- daily, weekly, or bi-weekly"
              levels="Beginner (A1) to advanced (C2)"
              materials="Customized for each lesson"
              cost="$380 MXN per hour"
              dialog_body="Embark on a unique Spanish learning journey that blends the flexibility of online education with the tangible benefits of face-to-face sessions in Mexico City. Hybrid classes are crafted to provide a rich, comprehensive learning experience, combining the convenience of remote learning with the personal touch and immediacy of in-person engagement."
              benefit1="Interactive, real-time sessions in Mexico City provide immediate feedback and engaging learning activities"
              benefit2="Combine online ease with effective in-person sessions to fit various learning styles and schedules"
              benefit3="Customized courses focus on your specific needs, enhancing your understanding and skills in key areas"
              closer="Classes are subject to availability. Contact us to inquire about times and start your journey."
            />
            <DetailClassCard
              header="Face-to-Face Spanish Classes in Mexico City"
              subheader="A1 to C2"
              image={alebrije}
              altText="alebrije"
              content="Experience Spanish through immersive in-person classes in Mexico City, interacting with skilled instructors and fellow learners in an engaging setting"
              duration="1-hour session"
              frequency="You choose- daily, weekly, or bi-weekly"
              levels="Beginner (A1) to advanced (C2)"
              materials="Includes digital or physical textbooks, multimedia resources, and exercises"
              cost="$380 MXN per hour"
              dialog_body="Experience the full richness of learning Spanish with our face-to-face, in-person classes in Mexico City. These sessions are designed to immerse you completely in the language environment, providing direct interaction with experienced instructors and fellow learners in a dynamic classroom setting."
              benefit1="Direct language practice with instant feedback"
              benefit2="Deepen understanding through real-life contexts"
              closer="Classes are available at our Mexico City center and vary by class size and schedule. Contact us to confirm availability and start your journey."
            />
            <DetailClassCard
              header="Spanish Classes With Your Friends"
              subheader="Online or In-person in Mexico City"
              image={puppet}
              altText="puppet"
              content="Gather your friends for a customized Spanish learning experience, featuring online sessions or immersive classes that make learning engaging and effective for everyone"
              duration="1-hour or 90-minutes sessions available"
              frequency="Flexible according to group preference"
              levels="Open to all levels (A1 to C2)"
              materials="Customized materials for active participation"
              cost="$270 MXN per person for 60 minutes, $330 MXN for 90 minutes (2 to 5 participants)"
              dialog_body="Invite your friends to a unique learning experience where you can enhance your Spanish skills together, either online or face-to-face in Mexico City. Enjoy interactive, tailored sessions designed to make language learning engaging and effective."
              benefit1="Online for convenience or in-person in Mexico City for immersion"
              benefit2="Share the learning journey with friends"
              benefit3="Adapted to group needs and interests"
              benefit4="Engage with Spanish through cultural insights"
              closer="Available upon scheduling to match group availability. Contact us to set up your group's Spanish learning sessions."
            />
            <DetailClassCard
              header="Beginner's Spanish Package (A1 to A2)"
              subheader="Online or In-person in Mexico City"
              image={calavera_boxes}
              altText="calavera boxes"
              content="Explore Spanish with our 8-week Beginner's Package, focusing on essential vocabulary and grammar, aligned with CEFR standards for new learners"
              duration="8 weeks"
              frequency="Three 90-minute sessions per week, you choose the days"
              total_hours="36 hours"
              levels="A1 to A2"
              materials="Two digital textbooks included with 15-month license"
              cost="$13,200 MXN"
              dialog_body="Embark on your Spanish learning journey with our Beginner's Spanish Package, designed to provide a thorough introduction to the language. This 8-week program is structured to build essential linguistic skills effectively, with a strong focus on vocabulary and grammar aligned with the CEFR standards."
              benefit1="Covers fundamental to more complex aspects of Spanish"
              benefit2="Employs role-playing, simple dialogues, and interactive exercises to enhance active learning"
              benefit3="Introduces students to Hispanic culture, paving the way for deeper immersion"
              closer="Contact us for more details and to book your spot in this intensive program, tailored to your availability and preferences."
            />
            <DetailClassCard
              header="Intermediate Spanish Package (B1 to B2)"
              subheader="Online or In-person in Mexico City"
              image={calaveras}
              altText="calaveras (skulls)"
              content="Enhance your Spanish skills with our 8-week Intermediate Spanish Package, focusing on vocabulary expansion, complex grammar mastery, and improved communication"
              duration="8 weeks"
              frequency="Three 90-minute sessions per week"
              total_hours="36 hours"
              levels="B1 to B2"
              materials="Two digital textbooks included with 15-month license"
              cost="$13,200 MXN"
              dialog_body="Advance your Spanish proficiency with our Intermediate Spanish Package, tailored to deepen your linguistic abilities and cultural understanding. Over 8 weeks, this comprehensive program focuses on enhancing communication skills and expanding vocabulary and grammar knowledge, in line with CEFR standards."
              benefit1="Cultivates an advanced understanding of Spanish through structured exposure to complex language constructs"
              benefit2="Explores the nuances of Hispanic cultures, enhancing students' ability to communicate effectively and authentically in diverse settings."
              closer="Contact us for more details and to book your spot in this intensive program, tailored to your availability and preferences."
            />
          </Carousel>
        </div>

        {/* Fourth row */}
        <div className="flex flex-col items-center bg-navy-blue px-10 pb-10 text-center text-xl xl:text-2xl">
          <img className="p-4 lg:p-8" src={divide_white} alt="page divide" />
          <p className="py-8 text-white xl:px-16">
            Dive into a tailored learning experience with our Spanish classes
            and packages, designed for every skill level. Whether you&apos;re
            beginning or enhancing your fluency, our personalized sessions and
            vibrant classes provide the expertise and support you need to
            succeed. Join us and start your journey to confidently communicate
            in Spanish today.
          </p>
        </div>

        {/* Fifth row */}
        <div className="relative flex flex-col items-center bg-white px-5 py-20">
          <img
            className="absolute right-4 top-40 w-1/4 max-w-xs lg:right-28"
            src={stars}
            alt="stars"
          />
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

          <div className="flex flex-col items-center p-6 pb-20 lg:order-1 lg:w-1/2 lg:pb-6">
            <a
              href="mailto:holamexicohola@gmail.com"
              className="m-4 block min-w-96 rounded-lg border border-black p-4 text-center text-lg shadow-xl hover:bg-mx-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: holamexicohola@gmail.com
            </a>
            <a
              href="tel:+525520616969"
              className="m-4 block min-w-96 rounded-lg border border-black p-4 text-center text-lg shadow-xl hover:bg-mx-yellow"
            >
              WhatsApp: +52 55 2061 6969
            </a>
            <a
              href="tel:+525570254108"
              className="m-4 block min-w-96 rounded-lg border border-black p-4 text-center text-lg shadow-xl hover:bg-mx-yellow"
            >
              Office: +52 55 7025 4108
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
