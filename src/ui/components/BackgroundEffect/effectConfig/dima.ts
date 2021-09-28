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
          src: `${process.env.BASE_PATH}/images/dima/docker.svg`,
        },
        {
          src: `${process.env.BASE_PATH}/images/dima/nginx-1.svg`,
        },
        {
          src: `${process.env.BASE_PATH}/images/dima/php-1.svg`,
        },
        {
          src: `${process.env.BASE_PATH}/images/dima/postgresql.svg`,
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
