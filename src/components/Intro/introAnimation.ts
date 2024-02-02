import { timeline, stagger } from "motion";

const EASE_IN_OUT = [0.16, 1, 0.3, 1];
const EASE_IN = [0.42, 0, 1, 1];
const EASE_OUT = [0, 0, 0.58, 1];
const DURATION_SHORT = 0.4;
const DURATION_MEDIUM = 0.6;
const DURATION_LONG = 0.8;

export const introAnimation = () => {
  timeline([
    [".name", { opacity: 1 }, { duration: DURATION_MEDIUM, easing: EASE_IN }],
    [
      ".lastname",
      { opacity: 1 },
      { duration: DURATION_MEDIUM, easing: EASE_IN, at: DURATION_LONG },
    ],
    [
      ".subtitle",
      { opacity: 1 },
      {
        duration: DURATION_SHORT,
        easing: EASE_OUT,
        at: DURATION_MEDIUM + DURATION_SHORT,
      },
    ],
    [
      ".decoration",
      { opacity: 1 },
      { duration: DURATION_MEDIUM, easing: EASE_IN_OUT, at: "<" },
    ],
    [
      ".header-content",
      { transform: "translateY(0)" },
      { duration: DURATION_LONG, easing: EASE_IN_OUT, at: DURATION_MEDIUM + DURATION_LONG + DURATION_LONG },
    ],
    [
      ".card-list",
      { opacity: 1 },
      { duration: DURATION_MEDIUM, easing: EASE_IN, at: "<" },
    ],
    [
      ".card-list li",
      { opacity: 1, transform: "translateY(0)" },
      {
        duration: DURATION_SHORT,
        easing: EASE_IN,
        at: "<",
        delay: stagger(0.15),
      },
    ],
  ]);
};

/* 
import { timeline, stagger } from "motion";

const EASE_IN_OUT = [0.16, 1, 0.3, 1];
const EASE_IN = [0.42, 0, 1, 1];
const EASE_OUT = [0, 0, 0.58, 1];
const DURATION_SHORT = 0.4;
const DURATION_MEDIUM = 0.6;
const DURATION_LONG = 0.8;

export const introAnimation = () => {
  timeline([
    [".brutalist-name", { opacity: 1, transform: "scale(1.1)" }, { duration: DURATION_MEDIUM, easing: EASE_IN }],
    [".brutalist-lastname", { opacity: 1, transform: "scale(1.1)" }, { duration: DURATION_MEDIUM, easing: EASE_IN_OUT, at: "<" }],
    [".brutalist-subtitle", { opacity: 1, transform: "translateY(-10px)" }, { duration: DURATION_SHORT, easing: EASE_OUT, at: "<" }],
    [".brutalist-decoration", { opacity: 1, transform: "rotate(45deg)" }, { duration: DURATION_MEDIUM, easing: EASE_IN_OUT, at: "<" }],
    [".brutalist-header-content", { transform: "translateY(0)" }, { duration: DURATION_LONG, easing: EASE_IN_OUT, at: "<" }],
    [".brutalist-card-list", { opacity: 1, transform: "translateY(0)" }, { duration: DURATION_MEDIUM, easing: EASE_IN, at: "<" }],
    [".brutalist-card-list li", { opacity: 1 }, { duration: DURATION_SHORT, easing: EASE_IN, at: "<", delay: stagger(0.15) }],
  ]);
};


*/
