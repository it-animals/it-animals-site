import v from "../../../styles/_variables";
import { IOptions, RecursivePartial } from "tsparticles";

export default {
  particles: {
    number: {
      value: 50,
      density: {
        enable: false,
      },
    },
    size: {
      value: 15,
      random: false,
      // anim: {
      //   speed: 2,
      //   size_min: 0.3,
      // },
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 1,
      },
    },
    line_linked: {
      enable: false,
    },
    shape: {
      type: ["images"],
      images: [
        {
          src: "/images/sergey/html-1.svg",
        },
        {
          src: "/images/sergey/logo-javascript.svg",
        },
        {
          src: "/images/sergey/react-2.svg",
        },
        {
          src: "/images/sergey/typescript.svg",
        },
      ],
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out",
    },
  },
} as RecursivePartial<IOptions>;
