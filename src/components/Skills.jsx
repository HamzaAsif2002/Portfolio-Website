import {
  FaReact,
  FaDatabase,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "ReactJs", icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-green-600 text-4xl" /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 text-4xl" />,
  },
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
];

const learning = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200 text-4xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
];

export default function Skills() {
  return (
    <section
      className="py-20 text-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="skills"
    >
      {/* Skills Section */}
      <h2 className="text-4xl font-extrabold mb-12">⚡ Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl transition"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <h2 className="text-4xl font-extrabold mb-12">🚀 Currently Learning</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {learning.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: -3 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl transition"
          >
            {tech.icon}
            <p className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
