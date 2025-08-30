export default function About() {
  return (
    <section className="py-20 text-center max-w-3xl mx-auto" id="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        I’m a dedicated{" "}
        <span className="font-semibold text-blue-600">Frontend Developer </span>
        with strong expertise in building modern, responsive, and user-friendly
        web applications. My main focus is creating clean, scalable, and
        visually engaging UIs using
        <span className="font-semibold">
          {" "}
          React, JavaScript, HTML, CSS, and TailwindCSS
        </span>
        .
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
        Currently, I’m expanding my skills into backend development with
        <span className="font-semibold"> Node.js & Express.js</span> to become a
        full-stack developer. I enjoy working on projects that combine
        creativity and functionality, and I’m always eager to learn new
        technologies and best practices.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
        My goal is to build impactful applications that provide excellent user
        experiences and solve real-world problems.
      </p>
    </section>
  );
}
