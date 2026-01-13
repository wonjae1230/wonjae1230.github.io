import { CiLink } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Project({ id, title, description, technologies, link, github, image }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // 링크 클릭 시에는 상세 페이지로 이동하지 않음
    if (e.target.closest('a')) {
      return;
    }
    navigate(`/project/${id}`);
  };

  return (
    <div
      onClick={handleClick}
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
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 mt-4 hover:text-red-400 cursor-pointer transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">
            View Project
          </span>
        </a>
        {/* =========== PROJECT GITHUB =========== */}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 mt-4 hover:text-red-400 cursor-pointer transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
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
