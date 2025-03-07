import study_group from "../assets/methodology/study_group.png";
import plane_header from "../assets/methodology/plane_header.png";
import laptop_hola from "../assets/methodology/laptop_hola.png";

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
          <p className="p-10 text-2xl md:absolute md:left-72">
            At Hola México Hola, we believe in a personalized, interactive, and
            culturally rich approach to learning Spanish. Our methodology is
            designed to engage and inspire, tailoring each lesson to meet the
            unique needs and goals of our students.
          </p>
        </div>

        {/* Third row */}
        <div className="flex flex-col bg-slate-gray lg:flex-row">
          <div className="px-10 py-4">
            <h2 className="py-5 text-2xl font-bold lg:text-3xl">
              Teaching Methodology
            </h2>
            <ul className="list-inside list-disc text-xl lg:text-2xl">
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
          <div className="flex justify-center px-10 py-4">
            <img
              className="w-full max-w-lg px-2"
              src={laptop_hola}
              alt="laptop, book, pencil, hola speech bubble"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;
