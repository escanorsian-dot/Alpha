import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function HologramModel({ pulse = 0 }) {
  const group = useRef();
  const { scene } = useGLTF("/models/project-model-compressed.glb");

  const cloned = useMemo(() => {
    const copy = scene.clone(true);

    copy.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#ffe1a6"),
          emissive: new THREE.Color("#ffb84d"),
          emissiveIntensity: 0.95 + pulse * 0.18,
          transparent: true,
          opacity: 0.28,
          roughness: 0.15,
          metalness: 0.9,
          transmission: 0.08,
          clearcoat: 1,
        });
      }
    });

    return copy;
  }, [scene, pulse]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += 0.0022;
      group.current.position.y = Math.sin(t * 1.05) * 0.035;
      const s = 1.1 + Math.sin(t * 1.7) * 0.008 + pulse * 0.008;
      group.current.scale.setScalar(s);
    }
  });

  return <primitive ref={group} object={cloned} position={[2.6, -1.2, -0.2]} />;
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
    <mesh ref={ref} position={[2.6, y, -0.2]}>
      <torusGeometry args={[radius, 0.02, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.32} />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 700;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.012;
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
      <pointsMaterial size={0.03} color="#ffe7b8" transparent opacity={0.55} />
    </points>
  );
}

function SceneContent({ pulse = 0 }) {
  return (
    <>
      <color attach="background" args={["#090704"]} />
      <fog attach="fog" args={["#090704", 10, 24]} />

      <ambientLight intensity={0.9} />
      <pointLight position={[3, 4, 5]} intensity={13} color="#ffe5b0" />
      <pointLight position={[-4, 1, -3]} intensity={5} color="#ffb347" />
      <spotLight position={[0, 7, 2]} intensity={15} angle={0.46} penumbra={1} color="#fff1cf" />

      <ParticleField />
      <Ring radius={1.3} y={-1.84} speed={0.35} color="#ffe6b4" />
      <Ring radius={1.8} y={-1.76} speed={-0.2} color="#ffc66d" />
      <Ring radius={2.3} y={-1.68} speed={0.14} color="#ffb347" />

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

export default function PageSevenScene({ pulse = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 1.1, 8], fov: 36 }}>
        <SceneContent pulse={pulse} />
      </Canvas>
    </div>
  );
}