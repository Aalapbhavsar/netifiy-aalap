'use client';

import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './ThreeCanvas.module.css';

const PARTICLE_COUNT = 3000;

function ParticleField({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Points>(null);
  const { size } = useThree();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const spd = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      spd[i] = 0.3 + Math.random() * 0.7;
    }
    return [pos, spd];
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = i / PARTICLE_COUNT;
      if (t < 0.5) {
        // Cyan to Violet
        col[i * 3] = 0 + t * 2 * 0.66;
        col[i * 3 + 1] = 0.9 - t * 2 * 0.57;
        col[i * 3 + 2] = 1;
      } else {
        // Violet to Pink
        const u = (t - 0.5) * 2;
        col[i * 3] = 0.66 + u * 0.26;
        col[i * 3 + 1] = 0.33 - u * 0.05;
        col[i * 3 + 2] = 0.97 - u * 0.6;
      }
    }
    return col;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const [mx, my] = mouse.current;

    meshRef.current.rotation.y = t * 0.05 + mx * 0.5;
    meshRef.current.rotation.x = t * 0.03 + my * 0.3;

    // Pulse scale
    const pulse = 1 + Math.sin(t * 0.8) * 0.04;
    meshRef.current.scale.setScalar(pulse);
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  return <points ref={meshRef} geometry={geometry} material={material} />;
}

export default function ThreeCanvas() {
  const mouse = useRef<[number, number]>([0, 0]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mouse.current = [
      (e.clientX / innerWidth - 0.5) * 2,
      -(e.clientY / innerHeight - 0.5) * 2,
    ];
  }, []);

  return (
    <div className={styles.canvasWrapper} onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField mouse={mouse} />
      </Canvas>
    </div>
  );
}
