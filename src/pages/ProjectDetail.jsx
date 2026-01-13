import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import user_info from "../data/user_info.js";
import { IoArrowBack } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import { DiGithubAlt } from "react-icons/di";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = user_info.projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 페이지 진입 시 스크롤을 맨 위로 이동 및 이미지 인덱스 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const nextImage = () => {
    if (project.screenshots && currentImageIndex < project.screenshots.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-red-800 dark:text-red-500 hover:underline"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        {/* =========== HEADER =========== */}
        <div className="sticky top-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 z-10">
          <div className="px-4 lg:px-20 py-4 flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all"
            >
              <IoArrowBack className="text-2xl text-zinc-800 dark:text-white" />
            </button>
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">
              {project.title}
            </h1>
          </div>
        </div>

        {/* =========== CONTENT =========== */}
        <div className="px-4 lg:px-20 py-12">
          {/* =========== PROJECT IMAGE CAROUSEL =========== */}
          <div className="relative w-full h-96 rounded-xl mb-4 overflow-hidden bg-white dark:bg-zinc-950">
            {project.screenshots && project.screenshots.length > 0 && (
              <>
                {/* Image Display */}
                <img
                  src={project.screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain pointer-events-none"
                />

                <div className="absolute inset-0 flex">
                  {/* Left Click Area */}
                  {currentImageIndex > 0 && (
                    <div
                      onClick={prevImage}
                      className="w-1/3 h-full cursor-pointer group flex items-center justify-start pl-8"
                    >
                      <IoChevronBack className="text-4xl text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  )}

                  {/* Center Area (Image Only) */}
                  <div className={`h-full ${currentImageIndex > 0 && currentImageIndex < project.screenshots.length - 1 ? 'w-1/3' : currentImageIndex === 0 ? 'w-2/3' : 'w-2/3'}`}>
                  </div>

                  {/* Right Click Area */}
                  {currentImageIndex < project.screenshots.length - 1 && (
                    <div
                      onClick={nextImage}
                      className="w-1/3 h-full cursor-pointer group flex items-center justify-end pr-8"
                    >
                      <IoChevronForward className="text-4xl text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  )}
                </div>

                {/* Image Counter */}
                {project.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-sm rounded-full pointer-events-none">
                    {currentImageIndex + 1} / {project.screenshots.length}
                  </div>
                )}
              </>
            )}
          </div>

          {/* =========== TECH TAGS & LINKS =========== */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.technologies.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center text-zinc-600 dark:text-zinc-300 hover:text-red-800 dark:hover:text-red-400 transition-all"
              >
                <CiLink className="text-2xl" />
                <span className="text-sm">프로젝트 보기</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center text-zinc-600 dark:text-zinc-300 hover:text-red-800 dark:hover:text-red-400 transition-all"
              >
                <DiGithubAlt className="text-2xl" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* =========== DESCRIPTION =========== */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
              프로젝트 소개
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-7">
              {project.detailedDescription}
            </p>
          </section>

          {/* =========== FEATURES =========== */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
              주요 기능
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <svg
                    className="flex-shrink-0 size-5 mt-0.5 text-red-800 dark:text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* =========== TECH STACK =========== */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800"
                >
                  <h3 className="font-bold text-zinc-800 dark:text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {tech.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* =========== LEARNED =========== */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
              배운 점
            </h2>
            <ul className="space-y-3">
              {project.learned.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg
                    className="flex-shrink-0 size-5 mt-0.5 text-red-800 dark:text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
