"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawTopPortal = () => {
      const cx = canvas.width / 2;
      const cy = -50; // slightly above top edge

      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 150);
      coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      coreGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
      coreGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      const purpleGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, 400);
      purpleGrad.addColorStop(0, "rgba(168, 85, 247, 0.25)");
      purpleGrad.addColorStop(1, "rgba(126, 34, 206, 0)");

      ctx.save();
      ctx.scale(1, 0.4);
      ctx.fillStyle = purpleGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height / 0.4);
      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height / 0.4);
      ctx.restore();

      const lineGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      lineGrad.addColorStop(0, "rgba(168, 85, 247, 0)");
      lineGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.25)");
      lineGrad.addColorStop(1, "rgba(168, 85, 247, 0)");

      ctx.fillStyle = lineGrad;
      ctx.fillRect(0, 0, canvas.width, 2);
    };

    const drawBackground = (time: number) => {
      ctx.fillStyle = "#03000a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const t = time * 0.0001;
      const cx1 = canvas.width * 0.3 + Math.sin(t * 0.5) * canvas.width * 0.2;
      const cy1 = canvas.height * 0.5 + Math.cos(t * 0.4) * canvas.height * 0.2;
      const shade1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, canvas.width * 0.6);
      shade1.addColorStop(0, "rgba(30, 58, 138, 0.05)");
      shade1.addColorStop(1, "transparent");
      ctx.fillStyle = shade1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx2 = canvas.width * 0.7 + Math.cos(t * 0.3) * canvas.width * 0.2;
      const cy2 = canvas.height * 0.6 + Math.sin(t * 0.6) * canvas.height * 0.2;
      const shade2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, canvas.width * 0.5);
      shade2.addColorStop(0, "rgba(88, 28, 135, 0.02)");
      shade2.addColorStop(1, "transparent");
      ctx.fillStyle = shade2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawTopPortal();

      const bottomGrad = ctx.createLinearGradient(0, canvas.height - 300, 0, canvas.height);
      bottomGrad.addColorStop(0, "transparent");
      bottomGrad.addColorStop(1, "rgba(59, 130, 246, 0.02)");
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, canvas.height - 300, canvas.width, 300);
    };

    const animate = () => {
      drawBackground(Date.now());
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
