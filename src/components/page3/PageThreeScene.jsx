import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function HologramModel({ pulse = 0 }) {
  const group = useRef();
  const { scene } = useGLTF("/models/project-model.glb");

  const cloned = useMemo(() => {
    const copy = scene.clone(true);

    copy.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#ffcf8a"),
          emissive: new THREE.Color("#ffb347"),
          emissiveIntensity: 1.15 + pulse * 0.2,
          transparent: true,
          opacity: 0.45,
          roughness: 0.22,
          metalness: 0.72,
          transmission: 0.12,
          clearcoat: 1,
        });
      }
    });

    return copy;
  }, [scene, pulse]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += 0.003;
      group.current.position.y = Math.sin(t * 1.2) * 0.05;
      const s = 1.55 + Math.sin(t * 1.6) * 0.01 + pulse * 0.01;
      group.current.scale.setScalar(s);
    }
  });

  return <primitive ref={group} object={cloned} position={[0.5, -1.2, 0]} />;
}

function Ring({ radius, y, speed, color }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ref} position={[0.5, y, 0]}>
      <torusGeometry args={[radius, 0.024, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 700;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffd089" transparent opacity={0.82} />
    </points>
  );
}

function SceneContent({ pulse = 0 }) {
  return (
    <>
      <color attach="background" args={["#120903"]} />
      <fog attach="fog" args={["#120903", 9, 24]} />

      <ambientLight intensity={0.95} />
      <pointLight position={[4, 5, 6]} intensity={14} color="#ffd38f" />
      <pointLight position={[-4, 1, -3]} intensity={7} color="#ff8a3d" />
      <spotLight position={[0, 7, 2]} intensity={20} angle={0.46} penumbra={1} color="#ffe0a3" />

      <ParticleField />
      <Ring radius={1.7} y={-1.8} speed={0.4} color="#ffd089" />
      <Ring radius={2.35} y={-1.7} speed={-0.24} color="#fff0c8" />
      <Ring radius={3.05} y={-1.6} speed={0.15} color="#ff9f43" />

      <Suspense fallback={null}>
        <HologramModel pulse={pulse} />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 2.25}
        maxPolarAngle={Math.PI / 1.82}
      />
    </>
  );
}

export default function PageThreeScene({ pulse = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 1.15, 7.5], fov: 36 }}>
        <SceneContent pulse={pulse} />
      </Canvas>
    </div>
  );
}