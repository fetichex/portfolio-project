import gsap from "gsap";

export const animation = () => {
  gsap.fromTo('.animation', { y: -100 }, {
    y: 0,
    duration: 1,
  })

}