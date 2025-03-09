import study_group from "../assets/methodology/study_group.png";
import plane_header from "../assets/methodology/plane_header.png";
import laptop_hola from "../assets/methodology/laptop_hola.png";
import textbooks from "../assets/methodology/textbooks.png";
import thumbs_up from "../assets/methodology/thumbs_up.png";
import scribble from "../assets/methodology/scribble.png";
import coffee_laptop from "../assets/methodology/coffee_laptop.png";
import rocket from "../assets/methodology/rocket.png";
import divide from "../assets/reused/divide.png";
import trial_class_arrow from "../assets/methodology/trial_class_arrow.png";
import group_talking from "../assets/methodology/group_talking.png";

function Methodology() {
  return (
    <div className="w-full bg-navy-blue">
      {/* Outer wrapper to control max-width */}
      <div className="mx-auto max-w-[1400px]">
        {/* First row */}
        <div className="flex flex-col items-center bg-white px-5 py-10 md:flex-row">
          {/* Left column with text */}
          <div className="w-full px-6 text-center md:w-1/2">
            <h2 className="text-5xl font-bold leading-tight text-mx-yellow md:text-6xl lg:text-7xl">
              Teaching Methodology
            </h2>
          </div>

          {/* Right column with image */}
          <div className="m-6 w-full px-3 md:w-1/2">
            <img
              src={study_group}
              alt="group of students studying"
              className="max-w-4/5"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex items-center bg-slate-gray md:relative">
          <img
            src={plane_header}
            alt="paper airplane"
            className="hidden max-w-sm md:block"
          />
          <p className="p-10 pt-20 text-2xl md:absolute md:left-72">
            At Hola México Hola, we believe in a personalized, interactive, and
            culturally rich approach to learning Spanish. Our methodology is
            designed to engage and inspire, tailoring each lesson to meet the
            unique needs and goals of our students.
          </p>
        </div>

        {/* Third row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="p-10 lg:w-2/3 lg:pl-16 lg:pr-6 xl:pr-16">
            <h2 className="py-5 text-2xl font-bold xl:text-3xl">
              Teaching Methodology
            </h2>
            <ul className="list-inside list-disc text-xl xl:text-2xl">
              <li>
                Emphasizes cultural immersion in Mexican culture for authentic
                Spanish learning.
              </li>
              <li>
                Utilizes interactive activities ( Digital books, games, quizzes,
                exercises an media) for skill development.
              </li>
              <li>
                Focuses on grammar, speaking, listening, and writing skills in a
                practical and enjoyable way.
              </li>
            </ul>
          </div>
          <div className="hidden items-center justify-center p-4 lg:flex lg:w-1/3 lg:pr-10">
            <img
              className="w-full max-w-md"
              src={laptop_hola}
              alt="laptop, book, pencil, hola speech bubble"
            />
          </div>
        </div>

        {/* Fourth row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="flex items-center justify-center p-4 lg:w-1/2 lg:pl-10">
            <img
              className="w-full max-w-md"
              src={textbooks}
              alt="Spanish textbooks"
            />
          </div>
          <div className="p-10 px-10 lg:w-1/2 lg:pl-6 lg:pr-16 xl:pl-16">
            <h2 className="py-5 text-2xl font-bold xl:text-3xl">
              Enhancing Quality with EDELSA Resources
            </h2>
            <ul className="list-inside list-disc text-xl xl:text-2xl">
              <li>
                Courses are enhanced using EDELSA resources, with separate books
                for grammar and vocabulary at each level.
              </li>
              <li>
                Each book covers about 36 topics, ensuring comprehensive
                learning.
              </li>
              <li>
                These materials form a solid foundation and are available for
                purchase from EDELSA.
              </li>
            </ul>
          </div>
        </div>

        {/* Fifth row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="p-10 pt-0 lg:w-2/3 lg:pl-16 lg:pr-6 lg:pt-10 xl:pr-16">
            <h2 className="py-5 text-2xl font-bold xl:text-3xl">
              Structured Language Progression
            </h2>
            <ul className="list-inside list-disc text-xl xl:text-2xl">
              <li>
                <span className="font-bold">Curriculum Alignment:</span> Follows
                CEFR guidelines for structured language proficiency.
              </li>
              <li>
                <span className="font-bold">Skill Integration:</span> Combines
                speaking, listening, reading, writing, and mediation skills for
                comprehensive language development.
              </li>
              <li>
                <span className="font-bold">Progressive Difficulty:</span>{" "}
                Activities increase in challenge to ensure consistent language
                mastery.
              </li>
            </ul>
          </div>
          <div className="hidden items-center justify-center p-4 lg:flex lg:w-1/3 lg:pr-10">
            <img
              className="w-full max-w-md"
              src={thumbs_up}
              alt="student giving thumbs up with three checked boxes"
            />
          </div>
        </div>

        {/* Sixth row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="flex items-center justify-center p-4 lg:w-1/3 lg:pl-10">
            <img
              className="w-full max-w-md"
              src={scribble}
              alt="writer's hand scribbling, magnifying glass, books, question mark, checkmark"
            />
          </div>
          <div className="p-10 px-10 lg:w-2/3 lg:pl-6 lg:pr-16 xl:pl-16">
            <h2 className="py-5 text-2xl font-bold xl:text-3xl">
              Continuous Feedback in Teaching
            </h2>
            <ul className="list-inside list-disc text-xl xl:text-2xl">
              <li>
                Regular, constructive feedback helps students track progress and
                stay motivated.
              </li>
              <li>
                Ongoing assessment identifies areas for improvement and fosters
                growth.
              </li>
              <li>Builds student confidence in their Spanish abilities.</li>
            </ul>
          </div>
        </div>

        {/* Seventh row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="p-10 pt-0 lg:w-1/2 lg:pl-16 lg:pr-6 lg:pt-10 xl:w-2/3 xl:pr-16">
            <h2 className="py-5 text-2xl font-bold xl:text-3xl">
              Flexible and Inclusive Learning Formats
            </h2>
            <ul className="list-inside list-disc text-xl xl:text-2xl">
              <li>
                One-on-one tutoring, group classes, and large workshops cater to
                diverse learning needs.
              </li>
              <li>
                Hybrid options blend in-person engagement with online
                flexibility.
              </li>
              <li>
                A customizable scheduling system accommodates personal and
                professional commitments.
              </li>
              <li>
                An inclusive atmosphere welcomes students from various
                backgrounds and proficiency levels, fostering a rich community
                of learners.
              </li>
            </ul>
          </div>
          <div className="hidden items-center justify-center p-4 lg:flex lg:w-1/2 lg:pr-10 xl:w-1/3">
            <img
              className="w-full max-w-md"
              src={coffee_laptop}
              alt="coffee, laptop, pencil, notebook, circular arrows"
            />
          </div>
        </div>

        {/* Eighth row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="flex items-center justify-center p-4 lg:w-1/3 lg:pl-10">
            <img
              className="w-full max-w-md"
              src={rocket}
              alt="rocket with logos for learning apps"
            />
          </div>
          <div className="p-10 px-10 lg:w-2/3 lg:pl-6 lg:pr-16 xl:pl-16">
            <h2 className="py-5 text-2xl font-bold xl:text-3xl">
              E-Learning Approach
            </h2>
            <ul className="list-inside list-disc text-xl xl:text-2xl">
              <li>
                Lessons are tailored to individual goals using platforms and
                resources like{" "}
                <a href="https://www.zoom.com/" target="_blank">
                  Zoom
                </a>
                ,{" "}
                <a href="https://h5p.org/" target="_blank">
                  H5P
                </a>
                ,{" "}
                <a href="https://genially.com/" target="_blank">
                  Genially
                </a>
                ,{" "}
                <a href="https://wordwall.net/" target="_blank">
                  Wordwall
                </a>
                ,{" "}
                <a href="https://learningapps.org/" target="_blank">
                  LearningApps
                </a>
                ,{" "}
                <a href="https://quizlet.com/" target="_blank">
                  Quizlet
                </a>
                ,{" "}
                <a
                  href="https://workspace.google.com/products/forms/"
                  target="_blank"
                >
                  Google Forms
                </a>
                ,{" "}
                <a href="https://quizizz.com/" target="_blank">
                  Quizizz
                </a>
                ,{" "}
                <a href="https://espanol.lingolia.com/en/" target="_blank">
                  Lingolia
                </a>
                ,{" "}
                <a href="https://www.profedeele.es/" target="_blank">
                  ProfeDeELE
                </a>
                ,{" "}
                <a href="https://arche-ele.com/" target="_blank">
                  Arche-ELE
                </a>{" "}
                and more...
              </li>
              <li>
                Emphasizes{" "}
                <span className="font-semibold">blended learning</span>,
                combining in-person and online classes.
              </li>
              <li>Offers flexibility and convenience for students.</li>
            </ul>
          </div>
        </div>

        {/* Ninth row */}
        <div className="flex flex-col items-center bg-slate-gray px-10 pb-10 text-center text-xl xl:text-2xl">
          <img className="p-4 lg:p-8" src={divide} alt="page divide" />
          <p className="py-8 xl:px-16">
            At Hola México Hola, we focus on delivering a tailored and effective
            learning experience for each student. By incorporating cultural
            content, modern technologies, and personalized teaching methods, we
            ensure students learn Spanish while embracing its cultural richness.
          </p>
        </div>

        {/* Tenth row */}
        <div className="flex justify-center bg-white px-10 pt-20">
          <img
            className="w-full max-w-2xl lg:max-w-3xl"
            src={trial_class_arrow}
            alt="take a free trial class"
          />
        </div>

        {/* Eleventh row */}
        <div className="flex flex-col justify-center bg-white xl:flex-row">
          <div className="mx-auto flex max-w-lg items-end px-12 xl:order-2 xl:w-1/3 xl:pl-0 xl:pr-12">
            <img
              className=""
              src={group_talking}
              alt="group of people talking"
            />
          </div>
          <div className="p-6 pb-20 xl:order-1 xl:w-2/3 xl:pb-6">
            <a href="mailto:holamexicohola@gmail.com">
              <div className="m-8 rounded-lg border border-black p-4 text-center text-lg shadow-xl lg:mx-auto lg:w-2/3">
                Email: holamexicohola@gmail.com
              </div>
            </a>
            <a href="tel:+525520616969">
              <div className="m-8 rounded-lg border border-black p-4 text-center text-lg shadow-xl lg:mx-auto lg:w-2/3">
                WhatsApp: +52 55 2061 6969
              </div>
            </a>
            <a href="tel:+525570254108">
              <div className="m-8 rounded-lg border border-black p-4 text-center text-lg shadow-xl lg:mx-auto lg:w-2/3">
                Office: +52 55 7025 4108
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;
