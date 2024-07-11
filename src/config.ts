import icon from "../src/assets/icon.png";

export interface IConfig {
  home: string;
  posts: string;
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

export const ConfigEN: IConfig = {
  home: "Home",
  posts: "Posts",
  me: {
    name: "Adib Fahimi",
    job: "Backend Developer",
    started: "2023",
    stack: "Golang, Rust, React, Docker, Tailwind CSS, TypeScript, ...",
    hobby: "Learning, watching tech videos, going to the gym, ...",
    projectLink: "https://github.com/adibfahimi?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/adibfahimi",
    github: "https://github.com/adibfahimi",
  },
  projects: {
    "Frozen Key (in progress)": {
      url: "#",
      description:
        "A hardware wallet with a mobile app, built using c and Flutter.",
      tags: [
        "Hardware Wallet",
        "Rust",
        "Embedded Systems",
        "Mobile App",
        "React",
      ],
    },
    "Chip-8 Emulator": {
      url: "https://github.com/adibfahimi/chip8-emulator",
      description: "A Chip-8 emulator, written in Rust.",
      tags: ["Emulator", "Rust", "Chip-8"],
    },
    "Adib Lang": {
      url: "https://github.com/adibfahimi/adib-lang",
      description: "A simple programming language, developed in Rust.",
      tags: ["Interpreter", "Rust", "Programming Language"],
    },
    PixelPay: {
      url: "https://github.com/adibfahimi/pixelpay",
      description:
        "A blockchain project featuring a node, wallet, and miner, built with Go and gRPC.",
      tags: ["Golang", "Blockchain", "gRPC", "Protocol Buffers"],
    },
    MNIST: {
      url: "https://github.com/adibfahimi/mnist",
      description: "Recognition of handwritten digits using the MNIST dataset.",
      tags: ["MNIST Dataset", "Python", "Deep Learning"],
    },
    LeetCode: {
      url: "https://github.com/adibfahimi/leetcode",
      description: "Solutions to problems on LeetCode.",
      tags: ["LeetCode", "Algorithms", "Golang"],
    },
  },
  og: {
    image: icon.src,
  },
};
