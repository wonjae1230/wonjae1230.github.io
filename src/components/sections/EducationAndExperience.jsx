import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineLineChart } from "react-icons/ai";

function EducationAndExperience() {
  return (
    <section
      id="education-and-experience"
      className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2"
    >
      {/* =========== EDUCATION =========== */}
      <div className="w-full md:w-[80%]">
        {/* =========== EDUCATION TITLE =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaLandmark className="text-xl text-red-800 dark:text-red-500" />
          Education
        </h4>

        {/* =========== EDUCATION LIST =========== */}
        {user_info.education.map((edu, index) => {
          return (
            <div key={index}>
              {/* =========== DURATION =========== */}
              <div className="ps-2 my-2 first:mt-0 !mt-2">
                <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                  {edu.duration}
                </h3>
              </div>

              <div className="flex gap-x-3 relative group rounded-lg">
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                  </div>
                </div>

                <div className="grow p-2 pb-8">
                  {/* =========== IMAGE AND SCHOOL NAME =========== */}
                  <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                    <img
                      className="w-9 h-9 rounded-full"
                      src={edu.image}
                      alt="School Logo"
                    />
                    <div className="leading-5">
                      {edu.school}
                      {/* =========== DEGREE =========== */}
                      <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                        {edu.degree}
                      </p>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

        {/* =========== GPA CHART TITLE =========== */}
        <h4 className="text-xl dark:text-white mt-6 font-bold flex gap-2 items-center">
          <AiOutlineLineChart className="text-2xl text-red-800 dark:text-red-500" />
          학점 변화
        </h4>

        {/* =========== GPA CHART =========== */}
        <div className="relative mt-4 h-48 bg-white dark:bg-gray-800 rounded-lg p-4 flex gap-4">
          {/* =========== AVERAGE GPA =========== */}
          <div className="flex flex-col justify-center items-center min-w-[100px] border-r border-zinc-300 dark:border-zinc-700 pr-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">총 평균</p>
            <p className="text-3xl font-bold text-red-800 dark:text-red-500">
              {(user_info.gpa.reduce((sum, item) => sum + item.gpa, 0) / user_info.gpa.length).toFixed(2)}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">/ 4.5</p>
          </div>

          {/* =========== LINE CHART =========== */}
          <div className="flex-1 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={user_info.gpa}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="semester"
                stroke="#9ca3af"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                domain={[2.0, 4.5]}
                ticks={[2.0, 2.5, 3.0, 3.5, 4.0, 4.5]}
                stroke="#9ca3af"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line
                type="monotone"
                dataKey="gpa"
                stroke="#dc2626"
                strokeWidth={3}
                dot={{ fill: '#dc2626', r: 5 }}
                activeDot={{ r: 7 }}
              />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* =========== EXPERIENCE =========== */}
      <div className="w-full">
        {/* =========== EXPERIENCE TITLE =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaBuildingUser className="text-2xl text-red-800 dark:text-red-500" />
          Experience
        </h4>

        <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
          {/* =========== EXPERIENCE LIST =========== */}
          {user_info.experience.map((exp, index) => {
            return (
              <div key={index}>
                <div className="ps-2 my-2 first:mt-0 !mt-2">
                  <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                    {exp.duration}
                  </h3>
                </div>

                <div className="flex gap-x-3 relative group rounded-lg">
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                    </div>
                  </div>

                  <div className="grow p-2 pb-8">
                    {/* =========== COMPANY NAME =========== */}
                    <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                      <img
                        className="w-9 rounded-full"
                        src={exp.image}
                        alt="Company Logo"
                      />
                      <div className="leading-5">
                        {exp.company}
                        {/* =========== POSITION =========== */}
                        <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                          {exp.position}
                        </p>
                      </div>
                    </h3>

                    <ul className="list-disc list-inside text-zinc-800 dark:text-white mt-2">
                      {/* =========== DESCRIPTION LIST =========== */}
                      {exp.descriptions.map((desc, index) => {
                        return (
                          <li className="flex space-x-3" key={index}>
                            <svg
                              className="flex-shrink-0 size-4 mt-0.5 text-red-800 dark:text-red-500"
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
                            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                              {desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationAndExperience;
