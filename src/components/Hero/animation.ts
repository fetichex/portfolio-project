import gsap from "gsap";
const filteredImage = document.querySelector(".responsive-image");
const turbulence = document.getElementById("turbulence");

export const animation = () => {
  // Timeline para controlar la secuencia de animaciones
  const tl = gsap.timeline({
    defaults: { duration: 3, ease: "power4.inOut" },
  });

  tl.fromTo(
    filteredImage,
    { opacity: 0 },
    { opacity: 1 },
  ).to(turbulence, { attr: { baseFrequency: "0 0" } }, "<");
}