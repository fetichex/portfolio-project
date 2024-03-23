// src/scripts/interactiveText.ts
import p5 from "p5";

class Pececito {
  char: string;
  pos: p5.Vector;
  home: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  maxSpeed: number = 5;
  maxForce: number = 1;
  atHome: boolean = true;
  shouldMove: boolean = false;
  boxWidth: number = 20;
  boxHeight: number = 20;
  p: p5;

  constructor(p: p5, char: string, x: number, y: number) {
    this.p = p;
    this.char = char;
    this.pos = p.createVector(x, y);
    this.home = this.pos.copy();
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
  }

  applyForce(force: p5.Vector) {
    this.acc.add(force);
    this.shouldMove = true;
  }

  arrive(target: p5.Vector): p5.Vector {
    let desired = p5.Vector.sub(target, this.pos); // Diferencia entre objetivo y posición actual
    let d = desired.mag(); // Distancia al objetivo
    let speed = this.maxSpeed;
    if (d < 100) { // Ajustar velocidad para desacelerar suavemente al acercarse al objetivo
      speed = this.p.map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  behave(mouseX: number, mouseY: number) {
    let mouse = this.p.createVector(mouseX, mouseY);
    if (this.pos.dist(mouse) < 50) { // Si el mouse está muy cerca, aplicar fuerza de huida
      this.applyForce(this.flee(mouse));
    } else if (!this.atHome) { // Si no está en casa y el mouse no está cerca, volver a casa
      this.applyForce(this.arrive(this.home));
    }
  }

  flee(target: p5.Vector): p5.Vector {
    let desired = p5.Vector.sub(this.pos, target); // Diferencia entre posición actual y objetivo
    let d = desired.mag(); // Distancia al objetivo
    if (d < 100) {
      desired.normalize();
      let multiplier = this.p.map(d, 0, 100, 25, 1); // Ajusta la intensidad de la huida según la distancia al cursor
      desired.mult(this.maxSpeed * multiplier); // Ajusta la velocidad deseada según el multiplicador
      let steer = p5.Vector.sub(desired, this.vel); // Calcula la fuerza de dirección
      steer.limit(this.maxForce * multiplier); // Limita la fuerza de dirección según el multiplicador
      return steer;
    }
    return this.p.createVector(0, 0); // No aplicar fuerza si el objetivo está lejos
  }

  update() {
    if (this.shouldMove) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);

      if (this.pos.dist(this.home) < 1 && this.vel.mag() < 0.1) {
        this.vel.set(0, 0);
        this.pos.set(this.home.x, this.home.y);
        this.atHome = true;
        this.shouldMove = false;
      } else {
        this.atHome = false;
      }
    }
  }

  display() {
    this.p.fill(0);
    this.p.noStroke();
    this.p.text(this.char, this.pos.x, this.pos.y);
  }
}

export const startSketch = (container: Element, text: string) => {
  const htmlContainer = container as HTMLElement;
  new p5((p: p5) => {
    let pececitos: Pececito[] = [];
    const margin = 50; // Margen desde los bordes del canvas
    let currentX = margin;
    let currentY = margin;
    const lineHeight = 40;

    p.setup = () => {
      p.createCanvas(htmlContainer.offsetWidth, htmlContainer.offsetHeight);
      p.textSize(25);
      text.split('').forEach(char => {
        const charWidth = p.textWidth(char);
        if (currentX + charWidth > p.width - margin) { // Chequear si necesita saltar a la siguiente línea
          currentX = margin; // Resetear a margen izquierdo
          currentY += lineHeight; // Mover a la siguiente línea
        }

        const pececito = new Pececito(p, char, currentX, currentY);
        pececitos.push(pececito);

        currentX += charWidth; // Mover el siguiente char a la derecha
      });
    };

    p.draw = () => {
      p.background(202, 202, 202);
      pececitos.forEach((pececito) => {
        pececito.behave(p.mouseX, p.mouseY);
        pececito.update();
        pececito.display();
      });
    };
  }, htmlContainer);
};
