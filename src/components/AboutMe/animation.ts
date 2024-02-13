import gsap from "gsap";

export const animation = () => {
  gsap.fromTo('.about', { opacity: 0, y: 100 }, {
    opacity: 1,
    y: 0,
    duration: 1,
  })
}