import gsap from "gsap";
export const animation = () => {
  gsap.fromTo('.header-text-container h1', { y: 200 }, {
    y: 0,
    duration: 1,
    stagger: 0.5 // Retraso de 0.5 segundos entre cada animación
  });
}

