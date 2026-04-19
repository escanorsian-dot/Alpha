import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Torus, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function applyHologramMaterial(root) {
  root.traverse((child) => {
    if (child.isMesh) {
      const baseColor =
        child.material && child.material.color
          ? child.material.color.clone()
          : new THREE.Color("#ff8a3d");

      child.material = new THREE.MeshStandardMaterial({
        color: baseColor.multiply(new THREE.Color("#ffb36a")),
        emissive: new THREE.Color("#ff7a24"),
        emissiveIntensity: 2.2,
        transparent: true,
        opacity: 0.94,
        metalness: 0.78,
        roughness: 0.18,
      });
    }
  });
}

export default function HologramModel() {
  const groupRef = useRef(null);
  const ringARef = useRef(null);
  const ringBRef = useRef(null);

  const gltf = useGLTF("/models/project-model-compressed.glb");

  const clonedScene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    applyHologramMaterial(clone);
    return clone;
  }, [gltf.scene]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.position.y = Math.sin(t * 1.05) * 0.06 - 0.3;
    groupRef.current.rotation.x = Math.sin(t * 0.45) * 0.015;
    groupRef.current.rotation.z = Math.cos(t * 0.38) * 0.01;

    if (ringARef.current) {
      ringARef.current.rotation.z += delta * 0.16;
      ringARef.current.rotation.x += delta * 0.02;
    }

    if (ringBRef.current) {
      ringBRef.current.rotation.y -= delta * 0.12;
      ringBRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group>
      <Float speed={0.9} rotationIntensity={0.03} floatIntensity={0.12}>
        <group ref={groupRef} position={[0, -0.3, 0]} scale={[2.05, 2.05, 2.05]}>
          <primitive object={clonedScene} />

          <Torus ref={ringARef} args={[2.3, 0.028, 16, 140]} rotation={[0.9, 0.35, 0.25]}>
            <meshStandardMaterial
              color="#ff9b38"
              emissive="#ff6a18"
              emissiveIntensity={2.3}
              transparent
              opacity={0.86}
            />
          </Torus>

          <Torus ref={ringBRef} args={[2.8, 0.016, 16, 140]} rotation={[1.2, 0.92, 0.1]}>
            <meshStandardMaterial
              color="#ffd89f"
              emissive="#ff9b38"
              emissiveIntensity={1.55}
              transparent
              opacity={0.42}
            />
          </Torus>

          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.62, 0]}>
            <ringGeometry args={[1.5, 3.05, 120]} />
            <meshBasicMaterial color="#ff7a24" transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>

          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.63, 0]}>
            <circleGeometry args={[1.15, 90]} />
            <meshBasicMaterial color="#ffcf8c" transparent opacity={0.08} side={THREE.DoubleSide} />
          </mesh>

          <pointLight position={[0, 0.85, 1.3]} intensity={2.6} color="#ffb15a" />
          <pointLight position={[0, -0.75, 1.8]} intensity={1.5} color="#ff641a" />
          <pointLight position={[0, 0.2, -1.2]} intensity={0.9} color="#ff9440" />

          <Text
            position={[0, -2.42, 0]}
            fontSize={0.21}
            color="#ffe2bf"
            anchorX="center"
            anchorY="middle"
          >
            SIESTA // HOLOGRAM CORE
          </Text>
        </group>
      </Float>
    </group>
  );
}

useGLTF.preload("/models/project-model-compressed.glb");