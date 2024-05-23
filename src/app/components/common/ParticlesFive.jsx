"use client";

import React, { useEffect, useRef } from "react";

const ParticlesFive = () => {
  const canvasRef = useRef(null);
  const particlesCount = useParticlesCount();

  useEffect(() => {
    const loadP5 = async () => {
      const p5 = (await import('p5')).default;
      const canvas = canvasRef.current;
      const p5Instance = new p5(sketch, canvas);
      return () => {
        p5Instance.remove();
      };
    };

    loadP5().catch((error) => {
      console.error("p5.js library not found.", error);
    });
  }, [particlesCount]);

  const sketch = (p5) => {
    let particles = [];

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight); 
      p5.noStroke();
      p5.fill(255, 255, 255, 50);
      // Create particles and set their initial properties
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle(p5.random(p5.width), p5.random(p5.height)));
      }
    };

    p5.draw = () => {
      p5.clear();
      // Update and display particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].display();
        // Draw lines to connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const distance = p5.dist(
            particles[i].x,
            particles[i].y,
            particles[j].x,
            particles[j].y
          );
          if (distance < 100) {
            p5.stroke(255, 255, 255, 0);
            p5.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
          }
        }
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        this.radius = p5.random(2, 4);
        this.opacity = 100;
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x < 0 || this.x > p5.width) {
          this.velocity.x *= -1;
        }
        if (this.y < 0 || this.y > p5.height) {
          this.velocity.y *= -1;
        }
      }

      display() {
        p5.circle(this.x, this.y, this.radius);
      }
    }
  };

  return <div ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

const useParticlesCount = () => {
  const getParticlesCount = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 767) {
        return 30; // Decreased number of particles on small screens
      }
    }
    return 40; // Default number of particles
  };

  const [particlesCount, setParticlesCount] = React.useState(getParticlesCount());

  useEffect(() => {
    const handleResize = () => {
      setParticlesCount(getParticlesCount());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return particlesCount;
};

export default ParticlesFive;
