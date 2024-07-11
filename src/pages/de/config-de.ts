import type { IConfig } from "../../config";
import icon from "../../../src/assets/icon.png";

export const ConfigDE: IConfig = {
  home: "Startseite",
  posts: "Beiträge",
  me: {
    name: "Adib Fahimi",
    job: "Backend Entwickler",
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
    "Frozen Key (in Bearbeitung)": {
      url: "#",
      description:
        "Ein Hardware-Wallet mit mobiler App, geschrieben in c und Flutter",
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
      description: "Ein Chip-8-Emulator, geschrieben in Rust",
      tags: ["Emulator", "Rust", "Chip-8"],
    },
    "Adib Lang": {
      url: "https://github.com/adibfahimi/adib-lang",
      description: "Eine einfache Programmiersprache, geschrieben in Rust",
      tags: ["Interpreter", "Rust", "Programmiersprache"],
    },
    PixelPay: {
      url: "https://github.com/adibfahimi/pixelpay",
      description:
        "Ein Blockchain-Projekt mit Node, Wallet und Miner, erstellt mit Go und gRPC.",
      tags: ["Golang", "Blockchain", "gRPC", "Protocol Buffers"],
    },
    MNIST: {
      url: "https://github.com/adibfahimi/mnist",
      description:
        "Erkennung handschriftlicher Ziffern mithilfe des MNIST-Datensatzes.",
      tags: ["MNIST Dataset", "Python", "Deep Learning"],
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
