import { useEffect, useRef } from "react";

type Peak = { x: number; y: number; amp: number; phase: number; r: number };

const PEAKS: Peak[] = [
  { x: 0.74, y: 0.36, amp: 1.0, phase: 0.0, r: 0.2 },
  { x: 0.32, y: 0.64, amp: 0.85, phase: 2.1, r: 0.24 },
  { x: 0.54, y: 0.18, amp: 0.6, phase: 4.2, r: 0.16 },
  { x: 0.14, y: 0.28, amp: 0.5, phase: 1.1, r: 0.18 },
];

const LEVELS = [0.12, 0.26, 0.4, 0.54, 0.68, 0.82, 0.96, 1.1, 1.24];
const CELL = 26;

// Color spectrum across contour levels: blue -> violet -> red
const BLUE = [59, 111, 208];
const VIOLET = [124, 58, 237];
const RED = [209, 54, 107];

function levelColor(tNorm: number): [number, number, number] {
  const [c1, c2, f] =
    tNorm < 0.5
      ? [BLUE, VIOLET, tNorm / 0.5]
      : [VIOLET, RED, (tNorm - 0.5) / 0.5];
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * f),
    Math.round(c1[1] + (c2[1] - c1[1]) * f),
    Math.round(c1[2] + (c2[2] - c1[2]) * f),
  ];
}

export default function TopoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let field: Float32Array = new Float32Array(0);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      field = new Float32Array(cols * rows);
    };

    const computeField = (t: number) => {
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const px = (i * CELL) / width;
          const py = (j * CELL) / height;
          let v = 0;
          for (let k = 0; k < PEAKS.length; k++) {
            const p = PEAKS[k];
            const cx = p.x + Math.sin(t * 0.00013 + p.phase) * 0.05;
            const cy = p.y + Math.cos(t * 0.0001 + p.phase) * 0.05;
            const dx = px - cx;
            const dy = py - cy;
            const d2 = (dx * dx + dy * dy) / (p.r * p.r);
            v += p.amp * Math.exp(-d2);
          }
          v += 0.14 * Math.sin(px * 5.5 + t * 0.0002) * Math.cos(py * 5.5 - t * 0.00016);
          field[j * cols + i] = v;
        }
      }
    };

    const drawContours = () => {
      ctx.clearRect(0, 0, width, height);
      for (let l = 0; l < LEVELS.length; l++) {
        const th = LEVELS[l];
        ctx.beginPath();
        for (let j = 0; j < rows - 1; j++) {
          for (let i = 0; i < cols - 1; i++) {
            const x0 = i * CELL;
            const y0 = j * CELL;
            const a = field[j * cols + i];
            const b = field[j * cols + i + 1];
            const c = field[(j + 1) * cols + i + 1];
            const d = field[(j + 1) * cols + i];

            let idx = 0;
            if (a > th) idx |= 8;
            if (b > th) idx |= 4;
            if (c > th) idx |= 2;
            if (d > th) idx |= 1;
            if (idx === 0 || idx === 15) continue;

            const top = () => [x0 + CELL * ((th - a) / (b - a)), y0];
            const right = () => [x0 + CELL, y0 + CELL * ((th - b) / (c - b))];
            const bottom = () => [x0 + CELL * ((th - d) / (c - d)), y0 + CELL];
            const left = () => [x0, y0 + CELL * ((th - a) / (d - a))];
            const seg = (p1: number[], p2: number[]) => {
              ctx.moveTo(p1[0], p1[1]);
              ctx.lineTo(p2[0], p2[1]);
            };

            switch (idx) {
              case 1:
              case 14:
                seg(left(), bottom());
                break;
              case 2:
              case 13:
                seg(bottom(), right());
                break;
              case 3:
              case 12:
                seg(left(), right());
                break;
              case 4:
              case 11:
                seg(top(), right());
                break;
              case 6:
              case 9:
                seg(top(), bottom());
                break;
              case 7:
              case 8:
                seg(left(), top());
                break;
              case 5:
                seg(left(), top());
                seg(bottom(), right());
                break;
              case 10:
                seg(top(), right());
                seg(left(), bottom());
                break;
            }
          }
        }
        const alpha = 0.05 + l * 0.018;
        const [r, g, b] = levelColor(l / (LEVELS.length - 1));
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    let raf = 0;
    const frame = (t: number) => {
      computeField(t);
      drawContours();
      raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduced) {
      computeField(0);
      drawContours();
    } else {
      raf = requestAnimationFrame(frame);
    }

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (reduced) {
          computeField(0);
          drawContours();
        }
      }, 150);
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="topo-canvas" aria-hidden="true" />;
}
