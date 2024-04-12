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
    job: "Backend Developer",
    started: "2023",
    stack: "Golang, Rust , React, Docker, Tailwind CSS, TypeScript, ...",
    hobby: "Learning, Watching Tech Videos, Gym , ...",
    projectLink: "https://github.com/adibfahimi?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/adibfahimi",
    github: "https://github.com/adibfahimi",
  },
  projects: {
    "Adib Lang": {
      url: "https://github.com/adibfahimi/adib-lang",
      description: "A simple programming language written in Rust",
      tags: ["Interpreter", "Rust", "Programming Language"],
    },
    "Chip-8 Emulator": {
      url: "https://github.com/adibfahimi/chip8-emulator",
      description: "A Chip-8 emulator written in Rust",
      tags: ["Emulator", "Rust", "Chip-8"],
    },
    Muick: {
      url: "https://github.com/adibfahimi/muick",
      description: "A web framework inspired by Fiber",
      tags: ["HTTP Server", "Web Framework", "Golang"],
    },
    MNIST: {
      url: "https://github.com/adibfahimi/mnist",
      description: "Handwritten digit recognition using MNIST dataset",
      tags: ["MNIST", "Python", "Deep Learning"],
    },
    Leetcode: {
      url: "https://github.com/adibfahimi/leetcode",
      description: "Solutions to problems on LeetCode",
      tags: ["LeetCode", "Algorithm", "Golang"],
    },
  },
  og: {
    image: icon.src,
  },
};
