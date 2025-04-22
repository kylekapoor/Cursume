'use client';

import useMousePosition from './useMousePosition';

export default function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 h-screen w-screen"
      style={{
        // Adjust the size by reducing the radius value from 300px to a smaller value like 150px
        background: `radial-gradient(150px at ${x}px ${y}px, rgba(255,255,255,0.05), transparent 80%)`,
        mixBlendMode: 'screen',
      }}
    />
  );
}