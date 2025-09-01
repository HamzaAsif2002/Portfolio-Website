import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          I’m a dedicated{" "}
          <span className="font-semibold text-blue-600">
            Frontend Developer
          </span>{" "}
          with expertise in building modern, responsive, and user-friendly web
          applications. My focus is creating clean, scalable, and visually
          engaging UIs using:
        </p>

        {/* Skills Icons */}
        <div className="flex justify-center gap-6 mb-8 text-4xl text-gray-500 dark:text-gray-300">
          <motion.div whileHover={{ scale: 1.2 }} className="text-blue-500">
            <FaReact title="React" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-yellow-500">
            <FaJsSquare title="JavaScript" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-green-500">
            <FaNodeJs title="Node.js" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-blue-600">
            <FaCss3Alt title="CSS" />
          </motion.div>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Currently, I’m expanding my skills into backend development with{" "}
          <span className="font-semibold text-blue-600">
            Node.js & Express.js
          </span>{" "}
          to become a full-stack developer. I enjoy combining creativity and
          functionality in projects, always learning new technologies and best
          practices.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My goal is to build impactful applications that provide excellent user
          experiences and solve real-world problems.
        </p>
      </div>
    </section>
  );
}
