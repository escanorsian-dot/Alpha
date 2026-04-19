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
          color: new THREE.Color("#86ffc5"),
          emissive: new THREE.Color("#35ff9c"),
          emissiveIntensity: 1.2 + pulse * 0.25,
          transparent: true,
          opacity: 0.42,
          roughness: 0.16,
          metalness: 0.76,
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
      group.current.rotation.y += 0.0032;
      group.current.position.y = Math.sin(t * 1.25) * 0.055;
      group.current.rotation.z = Math.sin(t * 0.55) * 0.012;
      const s = 1.6 + Math.sin(t * 1.9) * 0.012 + pulse * 0.012;
      group.current.scale.setScalar(s);
    }
  });

  return <primitive ref={group} object={cloned} position={[-0.35, -1.18, 0]} />;
}

function Ring({ radius, y, speed, color, pulse = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.rotation.z = t * speed;
      const s = 1 + Math.sin(t * 2 + radius) * 0.015 + pulse * 0.015;
      ref.current.scale.set(s, s, s);
    }
  });

  return (
    <mesh ref={ref} position={[-0.35, y, 0]}>
      <torusGeometry args={[radius, 0.024, 18, 150]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

function BaseGridDisc() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = -state.clock.getElapsedTime() * 0.14;
    }
  });

  return (
    <mesh ref={ref} position={[-0.35, -1.94, 0]} rotation-x={-Math.PI / 2}>
      <ringGeometry args={[1.2, 3.0, 96]} />
      <meshBasicMaterial color="#38ff9f" transparent opacity={0.14} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 850;
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
      points.current.rotation.y = state.clock.getElapsedTime() * 0.022;
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
      <pointsMaterial size={0.03} color="#94ffd2" transparent opacity={0.8} />
    </points>
  );
}

function VerticalBeams() {
  const refs = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.x = 2.2 + i * 0.7;
      mesh.position.y = Math.sin(t * 1.1 + i * 0.5) * 0.08;
      mesh.material.opacity = 0.035 + ((Math.sin(t * 1.7 + i) + 1) / 2) * 0.08;
    });
  });

  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)} position={[2.2 + i * 0.7, 0, -2]}>
          <planeGeometry args={[0.06, 6.3]} />
          <meshBasicMaterial color="#46ffaa" transparent opacity={0.06} />
        </mesh>
      ))}
    </>
  );
}

function EnergyCylinder({ pulse = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.material.opacity = 0.07 + Math.sin(t * 2.2) * 0.015 + pulse * 0.025;
    }
  });

  return (
    <mesh ref={ref} position={[-0.35, -0.3, 0]}>
      <cylinderGeometry args={[0.9, 1.15, 3.3, 48, 1, true]} />
      <meshBasicMaterial color="#63ffb5" transparent opacity={0.08} side={THREE.DoubleSide} />
    </mesh>
  );
}

function SceneContent({ pulse = 0 }) {
  return (
    <>
      <color attach="background" args={["#03110c"]} />
      <fog attach="fog" args={["#03110c", 9, 24]} />

      <ambientLight intensity={1.0} />
      <pointLight position={[3.5, 5, 5]} intensity={15} color="#9affd8" />
      <pointLight position={[-4, 0, -3]} intensity={8} color="#1bff8f" />
      <spotLight position={[0, 7, 2]} intensity={20} angle={0.45} penumbra={1} color="#c4ffe6" />

      <ParticleField />
      <VerticalBeams />
      <BaseGridDisc />
      <EnergyCylinder pulse={pulse} />
      <Ring radius={1.75} y={-1.82} speed={0.42} color="#84ffd0" pulse={pulse} />
      <Ring radius={2.42} y={-1.72} speed={-0.24} color="#d5ffec" pulse={pulse} />
      <Ring radius={3.12} y={-1.62} speed={0.14} color="#2dff98" pulse={pulse} />

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

export default function PageFourScene({ pulse = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 1.15, 7.4], fov: 36 }}>
        <SceneContent pulse={pulse} />
      </Canvas>
    </div>
  );
}