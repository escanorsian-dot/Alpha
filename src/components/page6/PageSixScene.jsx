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
          color: new THREE.Color("#f3f7ff"),
          emissive: new THREE.Color("#d9e6ff"),
          emissiveIntensity: 1.0 + pulse * 0.18,
          transparent: true,
          opacity: 0.34,
          roughness: 0.12,
          metalness: 0.88,
          transmission: 0.1,
          clearcoat: 1,
        });
      }
    });
    return copy;
  }, [scene, pulse]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += 0.0026;
      group.current.position.y = Math.sin(t * 1.15) * 0.04;
      const s = 1.05 + Math.sin(t * 1.8) * 0.01 + pulse * 0.008;
      group.current.scale.setScalar(s);
    }
  });

  return <primitive ref={group} object={cloned} position={[-3.1, -1.28, -0.3]} />;
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
    <mesh ref={ref} position={[-3.1, y, -0.3]}>
      <torusGeometry args={[radius, 0.02, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
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
      points.current.rotation.y = state.clock.getElapsedTime() * 0.015;
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
      <pointsMaterial size={0.03} color="#f2f6ff" transparent opacity={0.65} />
    </points>
  );
}

function SceneContent({ pulse = 0 }) {
  return (
    <>
      <color attach="background" args={["#0e1117"]} />
      <fog attach="fog" args={["#0e1117", 10, 24]} />

      <ambientLight intensity={1.0} />
      <pointLight position={[3, 4, 5]} intensity={13} color="#ffffff" />
      <pointLight position={[-4, 1, -3]} intensity={7} color="#dfe8f7" />
      <spotLight position={[0, 7, 2]} intensity={16} angle={0.46} penumbra={1} color="#f8fbff" />

      <ParticleField />
      <Ring radius={1.35} y={-1.86} speed={0.4} color="#f7fbff" />
      <Ring radius={1.85} y={-1.78} speed={-0.22} color="#dfe8f7" />
      <Ring radius={2.35} y={-1.70} speed={0.15} color="#bac8dd" />

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

export default function PageSixScene({ pulse = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 1.15, 8], fov: 36 }}>
        <SceneContent pulse={pulse} />
      </Canvas>
    </div>
  );
}