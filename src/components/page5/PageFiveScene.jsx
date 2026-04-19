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
          color: new THREE.Color("#efb3ff"),
          emissive: new THREE.Color("#d965ff"),
          emissiveIntensity: 1.15 + pulse * 0.22,
          transparent: true,
          opacity: 0.38,
          roughness: 0.18,
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
      const s = 1.18 + Math.sin(t * 1.8) * 0.01 + pulse * 0.01;
      group.current.scale.setScalar(s);
    }
  });

  return <primitive ref={group} object={cloned} position={[-2.6, -1.25, -0.2]} />;
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
    <mesh ref={ref} position={[-2.6, y, -0.2]}>
      <torusGeometry args={[radius, 0.022, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.48} />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 800;
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
      points.current.rotation.y = state.clock.getElapsedTime() * 0.018;
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
      <pointsMaterial size={0.03} color="#efb8ff" transparent opacity={0.78} />
    </points>
  );
}

function SceneContent({ pulse = 0 }) {
  return (
    <>
      <color attach="background" args={["#120517"]} />
      <fog attach="fog" args={["#120517", 10, 24]} />

      <ambientLight intensity={1.0} />
      <pointLight position={[3, 4, 5]} intensity={14} color="#f0b8ff" />
      <pointLight position={[-4, 1, -3]} intensity={8} color="#b54dff" />
      <spotLight position={[0, 7, 2]} intensity={18} angle={0.46} penumbra={1} color="#ffd6ff" />

      <ParticleField />
      <Ring radius={1.45} y={-1.85} speed={0.42} color="#efb8ff" />
      <Ring radius={2.0} y={-1.76} speed={-0.24} color="#ffd7ff" />
      <Ring radius={2.55} y={-1.68} speed={0.16} color="#cb58ff" />

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

export default function PageFiveScene({ pulse = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 1.2, 7.8], fov: 36 }}>
        <SceneContent pulse={pulse} />
      </Canvas>
    </div>
  );
}