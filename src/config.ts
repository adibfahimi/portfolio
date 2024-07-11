import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      description: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Adib Fahimi",
    job: "Frontend Entwickler",
    started: "2023",
    stack: "Golang, Rust, React, Docker, Tailwind CSS, TypeScript, ...",
    hobby: "Lernen, Tech-Videos schauen, Fitnessstudio, ...",
    projectLink: "https://github.com/adibfahimi?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/adibfahimi",
    github: "https://github.com/adibfahimi",
  },
  projects: {
    "Adib Lang": {
      url: "https://github.com/adibfahimi/adib-lang",
      description: "Eine einfache Programmiersprache, geschrieben in Rust",
      tags: ["Interpreter", "Rust", "Programmiersprache"],
    },
    "Moda Style": {
      url: "https://github.com/adibfahimi/moda-style",
      description: "Eine Full-Stack E-Commerce-Website",
      tags: ["React", "Tailwind", "Redux", "Go", "Postgres"],
    },
    "Adib Cpu": {
      url: "https://github.com/adibfahimi/adib-cpu",
      description: "Ein 8-Bit-CPU Assembler und Emulator",
      tags: ["Assembler", "Emulator", "Rust", "CPU"],
    },
    "Chip-8 Emulator": {
      url: "https://github.com/adibfahimi/chip8-emulator",
      description: "Ein Chip-8 Emulator, geschrieben in Rust",
      tags: ["Emulator", "Rust", "Chip-8"],
    },
    MNIST: {
      url: "https://github.com/adibfahimi/mnist",
      description: "Handgeschriebene Ziffernerkennung mit dem MNIST-Datensatz",
      tags: ["MNIST", "Python", "Deep Learning"],
    },
    Leetcode: {
      url: "https://github.com/adibfahimi/leetcode",
      description: "Lösungen zu Problemen auf LeetCode",
      tags: ["LeetCode", "Algorithmus", "Golang"],
    },
  },
  og: {
    image: icon.src,
  },
};
