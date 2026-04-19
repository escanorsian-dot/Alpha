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
          color: new THREE.Color("#8fe8ff"),
          emissive: new THREE.Color("#52cfff"),
          emissiveIntensity: 1.35 + pulse * 0.4,
          transparent: true,
          opacity: 0.42,
          roughness: 0.18,
          metalness: 0.7,
          transmission: 0.18,
          clearcoat: 1,
        });
      }
    });
    return copy;
  }, [scene, pulse]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += 0.0035;
      group.current.position.y = Math.sin(t * 1.3) * 0.05;
      const s = 1.55 + Math.sin(t * 2.1) * 0.015 + pulse * 0.02;
      group.current.scale.setScalar(s);
    }
  });

  return <primitive ref={group} object={cloned} position={[0, -1.25, 0]} />;
}

function Ring({ radius = 2.2, y = -1.7, speed = 0.35, color = "#79dcff", pulse = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.rotation.z = t * speed;
      const s = 1 + Math.sin(t * 2.4 + radius) * 0.02 + pulse * 0.018;
      ref.current.scale.set(s, s, s);
    }
  });

  return (
    <mesh ref={ref} position={[0, y, 0]}>
      <torusGeometry args={[radius, 0.025, 16, 140]} />
      <meshBasicMaterial color={color} transparent opacity={0.58} />
    </mesh>
  );
}

function EnergyColumn({ pulse = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.material.opacity = 0.08 + Math.sin(t * 2.8) * 0.02 + pulse * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={[0, -0.25, 0]}>
      <cylinderGeometry args={[0.82, 1.14, 3.2, 48, 1, true]} />
      <meshBasicMaterial color="#7fdcff" transparent opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef();

  const { positions } = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }

    return { positions: arr };
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
      <pointsMaterial size={0.03} color="#8de6ff" transparent opacity={0.8} />
    </points>
  );
}

function SceneContent({ pulse = 0 }) {
  return (
    <>
      <color attach="background" args={["#040b16"]} />
      <fog attach="fog" args={["#040b16", 9, 22]} />

      <ambientLight intensity={1.1} />
      <pointLight position={[3, 4, 5]} intensity={18} color="#8ce6ff" />
      <pointLight position={[-4, -1, -3]} intensity={9} color="#2a79ff" />
      <spotLight position={[0, 7, 0]} intensity={22} angle={0.45} penumbra={1} color="#b6f2ff" />

      <ParticleField />
      <EnergyColumn pulse={pulse} />
      <Ring radius={1.85} y={-1.85} speed={0.45} color="#79dcff" pulse={pulse} />
      <Ring radius={2.45} y={-1.72} speed={-0.28} color="#c8f4ff" pulse={pulse} />
      <Ring radius={3.2} y={-1.62} speed={0.18} color="#4abfff" pulse={pulse} />

      <Suspense fallback={null}>
        <HologramModel pulse={pulse} />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export default function PageTwoScene({ pulse = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 1.2, 7.4], fov: 36 }}>
        <SceneContent pulse={pulse} />
      </Canvas>
    </div>
  );
}