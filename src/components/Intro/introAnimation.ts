import { timeline } from "motion";

export const introAnimation = () => {
  timeline([
    [
      "#title1",
      { opacity: 1, scale: [0.5, 1] },
      { duration: 0.5, easing: "ease-in-out" },
    ],
    [
      "#title2",
      { opacity: 1, transform: "translateY(0px)" },
      { duration: 0.3, easing: "ease-in-out", at: 0.5 },
    ],
    [
      "#subtitle",
      { opacity: 1 },
      { duration: 0.3, easing: "ease-in-out", at: 1 },
    ],
    ["#yellow-dot", { opacity: 1 }, { duration: 1 }],
    [
      ".title-content",
      { transform: "translateY(-35vh)" },
      { duration: 0.6, easing: "ease-in-out" },
    ],
  ]);
};
