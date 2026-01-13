import { CiLink } from "react-icons/ci";

function Project({ title, description, technologies, link, github, image }) {
  return (
    <div
      className="transition-all duration-300 p-6 md:rounded-xl relative overflow-hidden hover:scale-105 hover:shadow-2xl cursor-pointer group"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ pointerEvents: 'none' }}
      ></div>
      <div className="relative z-10">
        <div className="flex gap-2 overflow-x-scroll py-2">
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
            key={index}
          >
            {tech}
          </span>
        ))}
        </div>
        {/* =========== PROJECT TITLE =========== */}
        <h3 className="font-bold text-lg text-white mt-4">
        {title}
        </h3>
        {/* =========== PROJECT DESCRIPTION =========== */}
        <p className="leading-7 text-gray-200 font-light text-base mt-4">
        {description}
        </p>

        <div className="flex gap-6 text-gray-200 font-medium">
        {/* =========== PROJECT LINK =========== */}
        <a href={link} className="flex gap-2 mt-4 hover:text-red-400 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">
            View Project
          </span>
        </a>
        {/* =========== PROJECT GITHUB =========== */}
        <a href={github} className="flex gap-2 mt-4 hover:text-red-400 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">
            View Github
          </span>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
