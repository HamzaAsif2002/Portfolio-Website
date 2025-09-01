import { motion, useAnimation } from "framer-motion";
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const sections = [
    { icon: <FaUser />, label: "About", href: "#about" },
    { icon: <FaTools />, label: "Skills", href: "#skills" },
    { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
    { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/HamzaAsif2002",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hamza-asif-dev/",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://twitter.com/mrhamzaasif",
    },
  ];

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hamza20021asif@gmail.com&su=Hello%20Hamza&body=Hi%20Hamza,%0A%0A`;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  // triggerOnce: false => animation plays every time in view

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({ opacity: 0, y: -50 }); // reset animation when out of view
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900 overflow-visible scroll-smooth px-4 sm:px-6 lg:px-0 min-h-screen"
    >
      {/* Hero Banner */}
      <motion.div
        className="w-full flex justify-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
      >
        <img
          src="./GitHubBanner.png"
          alt="Banner"
          className="w-full max-w-xl sm:max-w-3xl h-auto rounded-xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Hero Text */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
      >
        Hi, I’m <span className="text-blue-600">Hamza</span> 👋
      </motion.h1>

      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        Front-End Developer | JavaScript | React.js | SQL <br />
        Currently Learning | Node.js | Express.js | MongoDB
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <a
          href="/Hamza-CV.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-blue-500 transition font-semibold flex items-center justify-center gap-2"
        >
          Download CV
        </a>
      </motion.div>
      {/* Right Side Sections (hidden on small screens) */}
      <div className="hidden sm:flex fixed right-4 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-50">
        {sections.map((sec, i) => (
          <div key={i} className="relative group">
            <motion.a
              href={sec.href}
              className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {sec.icon}
            </motion.a>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 rounded-lg bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {sec.label}
            </span>
          </div>
        ))}
      </div>

      {/* Left Side Socials + Gmail */}
      <div className="fixed left-4 bottom-4 sm:bottom-auto sm:top-1/2 transform sm:-translate-y-1/2 flex flex-row sm:flex-col gap-4 z-50">
        {socials.map((soc, i) => (
          <div key={i} className="relative group">
            <motion.a
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {soc.icon}
            </motion.a>
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 sm:ml-4 px-2 sm:px-3 py-1 rounded-lg bg-gray-800 text-white text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {soc.label}
            </span>
          </div>
        ))}

        <div className="relative group">
          <motion.a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiGmail />
          </motion.a>
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 sm:ml-4 px-2 sm:px-3 py-1 rounded-lg bg-gray-800 text-white text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Gmail
          </span>
        </div>
      </div>
    </section>
  );
}
