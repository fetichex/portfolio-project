import gsap from "gsap";

export const introAnimation = () => {
  const tl = gsap.timeline();

  // Convertimos los easing de Motion One a los de GSAP.
  const EASE_IN_OUT = "power3.inOut";
  const EASE_IN = "power3.in";
  const EASE_OUT = "power3.out";

  tl.to(".name", { opacity: 1, duration: 0.6, ease: EASE_IN })
    .to(".lastname", { opacity: 1, duration: 0.6, ease: EASE_IN }, 0.8) // `at` se convierte en posición relativa en la timeline de GSAP
    .to(".subtitle", { opacity: 1, duration: 0.4, ease: EASE_OUT }, ">") // Usamos ">" para iniciar esta animación justo después de la anterior
    .to(".decoration", { opacity: 1, duration: 0.6, ease: EASE_IN_OUT }, "<") // "<" para empezar al mismo tiempo que la anterior
    .to(".header-content", { y: 0, duration: 0.8, ease: EASE_IN_OUT }, 2.2) // Ajusta según la lógica de tiempo que prefieras
    .to(".card-list", { opacity: 1, duration: 0.6, ease: EASE_IN }, "<")
    .to(".card-list li", { opacity: 1, y: 0, duration: 0.4, ease: EASE_IN, stagger: 0.15 }, 2.8);

  // Para animaciones complejas, ajusta los tiempos según necesites.
};
