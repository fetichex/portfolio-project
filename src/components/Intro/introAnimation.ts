import { timeline, stagger } from "motion";

const EASE_IN_OUT = "ease-in-out";
const DURATION_SHORT = 0.3;
const DURATION_MEDIUM = 0.5;
const DURATION_LONG = 0.6;

export const introAnimation = () => {
  timeline([
    // Fade and scale in the first title
    [
      "#title1",
      { opacity: 1, scale: [0.5, 1] },
      { duration: DURATION_MEDIUM, easing: EASE_IN_OUT },
    ],
    // Slide in the second title
    [
      "#title2",
      { opacity: 1, transform: "translateY(0px)" },
      { duration: DURATION_SHORT, easing: EASE_IN_OUT, at: 0.5 },
    ],
    // Fade in the subtitle
    [
      "#subtitle",
      { opacity: 1 },
      { duration: DURATION_SHORT, easing: EASE_IN_OUT, at: 1 },
    ],
    // Fade in a decorative element
    ["#yellow-dot", { opacity: 1 }, { duration: DURATION_MEDIUM * 2 }],
    // Slide in title content
    [
      ".title-content",
      { transform: "translateY(-35vh)" },
      { duration: DURATION_LONG, easing: EASE_IN_OUT },
    ],
    // Reveal the card list
    [
      "#card-list",
      { opacity: 1 },
      { duration: DURATION_MEDIUM - 0.1, easing: EASE_IN_OUT, at: "-0.4" },
    ],
    // Stagger animation for list items
    [
      "#card-list li",
      { transform: "translateY(0)" },
      {
        duration: DURATION_MEDIUM,
        easing: EASE_IN_OUT,
        at: "<",
        delay: stagger(0.1),
      },
    ],
  ]);
};
