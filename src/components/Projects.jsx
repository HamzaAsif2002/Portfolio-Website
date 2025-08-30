import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    img: "./projects/shoplane.png",
    title: "ShopLane",
    desc: "A modern and responsive e-commerce web app built with React and Tailwind CSS. Features product detail page, cart management using local storage, and a clean shopping experience.",
    link: "https://github.com/HamzaAsif2002/ShopLane",
    live: "https://shoplane-by-hamza.vercel.app/",
    tech: ["ReactJS", "TailwindCSS", "React-Router", "Context-API"],
  },
  {
    img: "./projects/movieflix.png",
    title: "Movie-Zone",
    desc: "A responsive and modern movie website built with React and Tailwind CSS. Features dynamic carousels, smooth animations, and an engaging UI for movies, series, and cartoons.",
    link: "https://github.com/HamzaAsif2002/MovieZone-website",
    live: "https://movie-zone-website.vercel.app/",
    tech: ["ReactJS", "TailwindCSS"],
  },
  {
    img: "./projects/countryexploror.png",
    title: "Country-Explorer",
    desc: "A responsive React web app that displays country data such as flag, name, population, capital, region, currency, and languages using the REST Countries API. Users can search, sort alphabetically, and filter countries by region.",
    link: "https://github.com/HamzaAsif2002/CountryExplorer",
    live: "https://country-explorer-ochre.vercel.app/",
    tech: ["ReactJS", "TailwindCSS", "API", "React-Router"],
  },

  {
    img: "./projects/moviezone.png",
    title: "MovieFlix",
    desc: "A sleek React movie app powered by the OMDB API that lets users browse popular movies, filter by categories, and view detailed information.",
    link: "https://github.com/HamzaAsif2002/MovieFlix",
    live: "https://movie-flix-by-hamza.vercel.app/",
    tech: ["ReactJS", "TailwindCSS", "API", "React-Router"],
  },
  {
    img: "./projects/pokemon.png",
    title: "Pokemon-Character-Hunter",
    desc: "A responsive React application to browse Pokémon characters using the PokéAPI. Includes real-time search, dynamic card UI, type-based badges, and clean animations.",
    link: "https://github.com/HamzaAsif2002/Pokemon-character-hunter",
    live: "https://hamza-pokemon-character-hunter.vercel.app/",
    tech: ["ReactJS", "TailwindCSS", "API"],
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 text-center bg-gray-100 dark:bg-gray-900"
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-opacity duration-300">
                <a
                  href={p.link}
                  target="_blank"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  <FaGithub />
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="text-white text-2xl hover:text-gray-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mt-6 mb-2">{p.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>

            {/* Technology Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {p.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
