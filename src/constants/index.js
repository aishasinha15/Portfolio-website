import kathaStream from "../assets/projects/KathaStream.jpeg";
import sorting from "../assets/projects/sorting.jpeg";
import wordle from "../assets/projects/wordle.jpeg";
import sevasquad from "../assets/projects/sevasquad.jpeg";
import portfolio from "../assets/projects/portfolio.jpeg";

export const PROJECTS = [
  {
    title: "KathaStream",
    image: kathaStream,
    description:
      "A platform showcasing local short films and regional content, focusing on diverse storytelling from independent creators. It aims to promote unique voices across different languages and cultures through visual and cinematic experiences. With the integration of AskAI and a movie recommender system, KathaStream enhances user engagement by providing intelligent search assistance and personalized content recommendations.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "JavaScript",
      "Redux",
      "Material UI",
      "TMDB API",
      "Vite",
      "Gemini API",
      "Python",
      "Jupyter Notebook",
    ],
    link: "https://github.com/aishasinha15/KathaStream",
  },
  {
    title: "SevaSquad",
    image: sevasquad,
    description:
      "SevaSquad is a service-based platform that connects users with local service providers for various tasks, including cleaning, repairs, and home maintenance. It offers a seamless booking system, service tracking, and secure payments for hassle-free home assistance. The platform integrates Web3 wallet functionality and MetaMask, enabling users to perform secure, transparent transactions using blockchain technology. This integration facilitates decentralized payments between service providers and clients, enhancing trust and security within the platform",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "JavaScript",
      "Vite",
      "Web3.js",
      "Metamask",
      "Gemini API",
    ],
    link: "https://github.com/aishasinha15/SevaSquad",
  },
  {
    title: "Sorting Visualizer",
    image: sorting,
    description:
      "An interactive web tool that allows users to visualize various sorting algorithms in real-time. It helps in understanding how different algorithms work, offering a hands-on approach to learning data structures.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Node.js"],
    link: "https://sortingvisualizeraishasinha.netlify.app/",
  },
  {
    title: "Wordle",
    image: wordle,
    description:
      "A web-based word puzzle game where users have six chances to guess a hidden five-letter word, with color-coded hints for accuracy after each guess, challenging both vocabulary and problem-solving skills.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Node.js"],
    link: "https://wordleaishasinha.netlify.app",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, designed to highlight my work and interests.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Node.js", "Vite"],
    link: "/",
  },
];

export const CONTACT = {
  email: "aishasinha316@gmail.com",
};
