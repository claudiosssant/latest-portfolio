"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function AmbientPointer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    type Particle = {
      alpha: number;
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      size: number;
      vx: number;
      vy: number;
      x: number;
      y: number;
    };

    const particles: Particle[] = [];
    let animationFrame = 0;
    let lastSpawn = 0;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const spawnParticles = (x: number, y: number, count = 4) => {
      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.35 + Math.random() * 0.95;

        particles.push({
          alpha: 0.75 + Math.random() * 0.2,
          life: 0,
          maxLife: 44 + Math.random() * 30,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          size: 3 + Math.random() * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
        });
      }

      if (particles.length > 150) {
        particles.splice(0, particles.length - 150);
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.life += 1;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        const progress = particle.life / particle.maxLife;
        const opacity = Math.max(0, particle.alpha * (1 - progress));
        const size = particle.size * (1 + progress * 0.45);

        if (progress >= 1) {
          particles.splice(index, 1);
          continue;
        }

        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        context.fillStyle = `rgba(255, 49, 49, ${opacity * 0.72})`;
        context.shadowColor = `rgba(240, 90, 106, ${opacity * 0.35})`;
        context.shadowBlur = size * 1.8;
        context.fillRect(-size / 2, -size / 2, size, size);
        context.restore();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastSpawn < 22) return;
      lastSpawn = now;
      spawnParticles(event.clientX, event.clientY, event.pointerType === "mouse" ? 4 : 2);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden lg:block"
    />
  );
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-distance": `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function usePointerTilt(maxTilt = 7) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      node.style.setProperty("--tilt-x", `${(-y * maxTilt).toFixed(2)}deg`);
      node.style.setProperty("--tilt-y", `${(x * maxTilt).toFixed(2)}deg`);
      node.style.setProperty("--tilt-glow-x", `${event.clientX - rect.left}px`);
      node.style.setProperty("--tilt-glow-y", `${event.clientY - rect.top}px`);
    };

    const handlePointerLeave = () => {
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
    };

    node.addEventListener("pointermove", handlePointerMove, { passive: true });
    node.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [maxTilt]);

  return ref;
}
