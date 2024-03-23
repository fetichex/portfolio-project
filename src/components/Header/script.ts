import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  gsap.set('.letter-wrapper', { y: 400 })
  gsap.set('.header-content.item-3', { y: -100, opacity: 0 })
  gsap.defaults({ duration: 1, ease: "power3.out" });

  const tl = gsap.timeline({
    pause: true,
    delay: 0.5,
  })

  tl.to('.letter-wrapper', {
    y: 0,
    stagger: 0.1,
  }).to('.item-1', {
    left: -10
  }).to('.item-2', {
    right: -10
  }, '<'
  ).to('.header-content.item-3', {
    y: 0,
    opacity: 1,
  }, '<'
  ).to('.item-1', {
    left: 0,
    scale: 1,
  }).to('.item-2', {
    right: 0,
    scale: 1,
  }, '<'
  ).to('.header-content.item-3', {
    scale: 1,
  }, '<').to('.header-content', {
    y: 100
  }, '<'
  ).to('.img', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  }, '<')
})