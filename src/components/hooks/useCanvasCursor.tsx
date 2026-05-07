import { useEffect } from "react";

type Position = {
  x: number;
  y: number;
};

type OscillatorConfig = {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
};

type LineConfig = {
  spring: number;
};

type CanvasContext = CanvasRenderingContext2D & {
  running: boolean;
  frame: number;
};

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(config: OscillatorConfig = {}) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;

    return (
      this.offset + Math.sin(this.phase) * this.amplitude
    );
  }
}

class Node {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

const useCanvasCursor = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement | null;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const ctx = context as CanvasContext;

    const pos: Position = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const settings = {
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    class Line {
      spring: number;
      friction: number;
      nodes: Node[];

      constructor(config: LineConfig) {
        this.spring =
          config.spring +
          0.1 * Math.random() -
          0.02;

        this.friction =
          settings.friction +
          0.01 * Math.random() -
          0.002;

        this.nodes = [];

        for (let i = 0; i < settings.size; i++) {
          const node = new Node();

          node.x = pos.x;
          node.y = pos.y;

          this.nodes.push(node);
        }
      }

      update() {
        let spring = this.spring;

        const firstNode = this.nodes[0];

        firstNode.vx += (pos.x - firstNode.x) * spring;
        firstNode.vy += (pos.y - firstNode.y) * spring;

        for (let i = 0; i < this.nodes.length; i++) {
          const node = this.nodes[i];

          if (i > 0) {
            const prev = this.nodes[i - 1];

            node.vx += (prev.x - node.x) * spring;
            node.vy += (prev.y - node.y) * spring;

            node.vx += prev.vx * settings.dampening;
            node.vy += prev.vy * settings.dampening;
          }

          node.vx *= this.friction;
          node.vy *= this.friction;

          node.x += node.vx;
          node.y += node.vy;

          spring *= settings.tension;
        }
      }

      draw() {
        let x = this.nodes[0].x;
        let y = this.nodes[0].y;

        ctx.beginPath();
        ctx.moveTo(x, y);

        for (
          let i = 1;
          i < this.nodes.length - 2;
          i++
        ) {
          const current = this.nodes[i];
          const next = this.nodes[i + 1];

          x = 0.5 * (current.x + next.x);
          y = 0.5 * (current.y + next.y);

          ctx.quadraticCurveTo(
            current.x,
            current.y,
            x,
            y
          );
        }

        const secondLast =
          this.nodes[this.nodes.length - 2];

        const last =
          this.nodes[this.nodes.length - 1];

        ctx.quadraticCurveTo(
          secondLast.x,
          secondLast.y,
          last.x,
          last.y
        );

        ctx.stroke();
        ctx.closePath();
      }
    }

    let lines: Line[] = [];

    const oscillator = new Oscillator({
      phase: Math.random() * Math.PI * 2,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    const createLines = () => {
      lines = [];

      for (let i = 0; i < settings.trails; i++) {
        lines.push(
          new Line({
            spring:
              0.4 +
              (i / settings.trails) * 0.025,
          })
        );
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateMousePosition = (
      e: MouseEvent | TouchEvent
    ) => {
      if ("touches" in e) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    };

    const handleMouseMove = (
      e: MouseEvent | TouchEvent
    ) => {
      updateMousePosition(e);

      if (lines.length === 0) {
        createLines();
        render();
      }
    };

    const render = () => {
      if (!ctx.running) return;

      ctx.globalCompositeOperation =
        "source-over";

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      ctx.globalCompositeOperation =
        "lighter";

      ctx.strokeStyle = `hsla(${Math.round(
        oscillator.update()
      )},50%,50%,0.2)`;

      ctx.lineWidth = 1;

      for (const line of lines) {
        line.update();
        line.draw();
      }

      ctx.frame++;

      requestAnimationFrame(render);
    };

    const handleFocus = () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    };

    const handleBlur = () => {
      ctx.running = false;
    };

    ctx.running = true;
    ctx.frame = 1;

    resizeCanvas();

    document.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "touchmove",
      handleMouseMove
    );

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "focus",
      handleFocus
    );

    window.addEventListener(
      "blur",
      handleBlur
    );

    return () => {
      ctx.running = false;

      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "touchmove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "focus",
        handleFocus
      );

      window.removeEventListener(
        "blur",
        handleBlur
      );
    };
  }, []);
};

export default useCanvasCursor;