import { useEffect, useRef, useState } from "preact/hooks";
import WalkDeno, { DenoProps } from "./WalkDeno.tsx";
const width = 1200;
const height = 1200;

export default function Walk() {
  const [denos, setDenos] = useState<DenoProps[]>([]);

  useEffect(() => {
    // add initial denos
    const d = [];
    for (let i = 0; i < 10; i++) {
      d.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        direction: Math.floor(Math.random() * 4),
        index: i,
        color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 90%)`,
        isWalk: false,
      });
    }
    setDenos(d);
  }, []);

  const interval = useRef(0);
  useEffect(() => {
    interval.current = setInterval(() => {
      setDenos((denos) => {
        return denos.map((deno) => {
          return {
            ...deno,
            index: (deno.index + 1) % 4,
            isWalk: true,
          };
        });
      });
    }, 800);
    return () => clearInterval(interval.current);
  }, []);

  const directionInterval = useRef(0);
  useEffect(() => {
    directionInterval.current = setInterval(() => {
      setDenos((denos) => {
        return denos.map((deno) => {
          if (Math.random() < 0.1 && deno.isWalk) {
            return {
              ...deno,
              direction: Math.floor(Math.random() * 4),
            };
          }

          return {
            ...deno,
          };
        });
      });
    }, 1000);
    return () => clearInterval(directionInterval.current);
  }, []);

  const animationInterval = useRef(0);
  const speed = 0.2;
  const animate = () => {
    setDenos((denos) => {
      return denos.map((deno) => {
        let dx = 0;
        let dy = 0;
        switch (deno.direction) {
          case 0:
            dx = 1;
            dy = 1;
            break;
          case 1:
            dx = 1;
            dy = -1;
            break;
          case 2:
            dx = -1;
            dy = 1;
            break;
          case 3:
            dx = -1;
            dy = -1;
            break;
        }

        return {
          ...deno,
          x: deno.isWalk ? (deno.x + dx * speed) % width : deno.x,
          y: deno.isWalk ? (deno.y + dy * speed) % height : deno.y,
        };
      });
    });

    animationInterval.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    animationInterval.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationInterval.current);
  }, [animate]);

  return (
    <svg
      width={width}
      height={height}
      class="absolute top-0 left-0 w-full h-full text-blue-900"
    >
      {denos.slice().sort((a, b) => a.y - b.y).map((deno) => (
        <WalkDeno
          direction={deno.direction}
          index={deno.index}
          x={deno.x}
          y={deno.y}
          color={deno.color}
          isWalk={deno.isWalk}
        />
      ))}
    </svg>
  );
}
