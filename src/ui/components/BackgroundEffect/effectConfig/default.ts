import v from "../../../styles/_variables";
import { IOptions, RecursivePartial } from "tsparticles";

export default {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    color: {
      value: [v.secondColor, v.primaryColor, v.accentColor],
    },
    size: {
      value: 8,
      random: true,
      anim: {
        speed: 2,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    shape: {
      type: ["square"],
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out",
    },
  },
} as RecursivePartial<IOptions>;
