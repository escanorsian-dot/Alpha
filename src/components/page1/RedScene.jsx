import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function getLatestMood(activeKeys = []) {
  const latest = activeKeys[activeKeys.length - 1] || "q";

  const moods = {
    q: {
      cameraZ: 6.6,
      cameraY: 0.4,
      ambient: "#ffb46a",
      directional: "#ffd9a3",
      point: "#7a1e00",
      hologramBase: "#ffd18a",
      emissive: "#ff7a1a",
      ringA: "#ffd08a",
      ringB: "#ff8c2f",
      ringC: "#fff0c8",
      sparkles: "#ffbf6b",
      glow: "rgba(255,130,30,0.16)",
      floorGlow: "rgba(255,90,0,0.18)",
      baseIntensity: 1.4,
      dirIntensity: 2.2,
      pointIntensity: 2.4,
      pulseBoost: 3.2,
      rotationSpeed: 0.0045,
      floatAmp: 0.08,
      scaleBase: 1.9,
    },
    w: {
      cameraZ: 6.2,
      cameraY: 0.48,
      ambient: "#ff8e4a",
      directional: "#ffc178",
      point: "#a01f00",
      hologramBase: "#ffc978",
      emissive: "#ff5a14",
      ringA: "#ffb766",
      ringB: "#ff5b1f",
      ringC: "#ffe0ad",
      sparkles: "#ff9f45",
      glow: "rgba(255,80,20,0.2)",
      floorGlow: "rgba(255,50,0,0.22)",
      baseIntensity: 1.7,
      dirIntensity: 2.6,
      pointIntensity: 3.2,
      pulseBoost: 4.2,
      rotationSpeed: 0.0052,
      floatAmp: 0.09,
      scaleBase: 1.94,
    },
    e: {
      cameraZ: 5.8,
      cameraY: 0.52,
      ambient: "#ffd8a3",
      directional: "#fff0cf",
      point: "#ff8e35",
      hologramBase: "#ffe0ad",
      emissive: "#ffb34d",
      ringA: "#fff1c8",
      ringB: "#ffbe73",
      ringC: "#ffd89b",
      sparkles: "#ffe0a8",
      glow: "rgba(255,220,150,0.16)",
      floorGlow: "rgba(255,170,70,0.18)",
      baseIntensity: 1.6,
      dirIntensity: 3.0,
      pointIntensity: 3.8,
      pulseBoost: 4.8,
      rotationSpeed: 0.0038,
      floatAmp: 0.07,
      scaleBase: 2.0,
    },
    r: {
      cameraZ: 6.0,
      cameraY: 0.34,
      ambient: "#ffb26e",
      directional: "#ffd39f",
      point: "#ff6a1c",
      hologramBase: "#ffc773",
      emissive: "#ff8f2b",
      ringA: "#ffd28a",
      ringB: "#ff9d39",
      ringC: "#fff1d5",
      sparkles: "#ffc16e",
      glow: "rgba(255,160,60,0.17)",
      floorGlow: "rgba(255,110,20,0.2)",
      baseIntensity: 1.55,
      dirIntensity: 2.5,
      pointIntensity: 3.0,
      pulseBoost: 4.0,
      rotationSpeed: 0.0048,
      floatAmp: 0.075,
      scaleBase: 1.92,
    },
    t: {
      cameraZ: 5.9,
      cameraY: 0.42,
      ambient: "#ff9c57",
      directional: "#ffc982",
      point: "#ff5d16",
      hologramBase: "#ffb864",
      emissive: "#ff6d1d",
      ringA: "#ffc476",
      ringB: "#ff7f26",
      ringC: "#ffe7bc",
      sparkles: "#ffae56",
      glow: "rgba(255,120,40,0.19)",
      floorGlow: "rgba(255,70,10,0.22)",
      baseIntensity: 1.7,
      dirIntensity: 2.9,
      pointIntensity: 3.4,
      pulseBoost: 5.0,
      rotationSpeed: 0.0056,
      floatAmp: 0.085,
      scaleBase: 1.97,
    },
    y: {
      cameraZ: 6.7,
      cameraY: 0.3,
      ambient: "#ffd4a8",
      directional: "#fff2de",
      point: "#ff9b52",
      hologramBase: "#ffdcb2",
      emissive: "#ffb064",
      ringA: "#ffe0b6",
      ringB: "#ffc27f",
      ringC: "#fff4dd",
      sparkles: "#ffd6a0",
      glow: "rgba(255,180,100,0.14)",
      floorGlow: "rgba(255,130,60,0.15)",
      baseIntensity: 1.35,
      dirIntensity: 2.0,
      pointIntensity: 2.2,
      pulseBoost: 3.0,
      rotationSpeed: 0.0036,
      floatAmp: 0.06,
      scaleBase: 1.88,
    },
  };

  return moods[latest] || moods.q;
}

function CameraRig({ triggerA, activeKeys }) {
  const { camera } = useThree();
  const mood = getLatestMood(activeKeys);
  const targetZ = useRef(mood.cameraZ);
  const targetY = useRef(mood.cameraY);

  useEffect(() => {
    targetZ.current = mood.cameraZ;
    targetY.current = mood.cameraY;
  }, [mood.cameraZ, mood.cameraY]);

  useEffect(() => {
    if (!triggerA) return;

    targetZ.current = Math.max(5.4, mood.cameraZ - 0.8);
    targetY.current = mood.cameraY + 0.08;

    const timer = setTimeout(() => {
      targetZ.current = mood.cameraZ;
      targetY.current = mood.cameraY;
    }, 1200);

    return () => clearTimeout(timer);
  }, [triggerA, mood.cameraZ, mood.cameraY]);

  useFrame(() => {
    camera.position.z += (targetZ.current - camera.position.z) * 0.045;
    camera.position.y += (targetY.current - camera.position.y) * 0.045;
    camera.lookAt(0, 0.2, 0);
  });

  return null;
}

function SceneLights({ activeKeys, flashKey }) {
  const ambientRef = useRef(null);
  const directionalRef = useRef(null);
  const pointRef = useRef(null);
  const pulseRef = useRef(0);

  const mood = getLatestMood(activeKeys);

  useEffect(() => {
    if (!flashKey) return;
    pulseRef.current = 1;
  }, [flashKey]);

  useFrame(() => {
    pulseRef.current = Math.max(0, pulseRef.current - 0.05);
    const p = pulseRef.current;

    if (ambientRef.current) {
      ambientRef.current.intensity += (mood.baseIntensity + p * 0.3 - ambientRef.current.intensity) * 0.08;
      ambientRef.current.color.lerp(new THREE.Color(mood.ambient), 0.08);
    }

    if (directionalRef.current) {
      directionalRef.current.intensity += (mood.dirIntensity + p * 0.8 - directionalRef.current.intensity) * 0.08;
      directionalRef.current.color.lerp(new THREE.Color(mood.directional), 0.08);
    }

    if (pointRef.current) {
      pointRef.current.intensity += (mood.pointIntensity + p * 2.2 - pointRef.current.intensity) * 0.08;
      pointRef.current.color.lerp(new THREE.Color(mood.point), 0.08);
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={mood.baseIntensity} color={mood.ambient} />
      <directionalLight ref={directionalRef} position={[3, 4, 5]} intensity={mood.dirIntensity} color={mood.directional} />
      <pointLight ref={pointRef} position={[-4, 1, -2]} intensity={mood.pointIntensity} color={mood.point} />
    </>
  );
}

function HologramModel({ flashKey, activeKeys }) {
  const { scene } = useGLTF("/models/project-model.glb");
  const rootRef = useRef(null);
  const pulseRef = useRef(0);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const mood = getLatestMood(activeKeys);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(mood.hologramBase),
          emissive: new THREE.Color(mood.emissive),
          emissiveIntensity: 1.4,
          roughness: 0.18,
          metalness: 0.1,
          transmission: 0.08,
          transparent: true,
          opacity: 0.88,
          depthWrite: false,
        });
      }
    });
  }, [clonedScene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.color = new THREE.Color(mood.hologramBase);
        child.material.emissive = new THREE.Color(mood.emissive);
      }
    });
  }, [clonedScene, mood.hologramBase, mood.emissive]);

  useEffect(() => {
    if (!flashKey) return;
    pulseRef.current = 1;
  }, [flashKey]);

  useFrame((state) => {
    if (!rootRef.current) return;

    const t = state.clock.elapsedTime;
    pulseRef.current = Math.max(0, pulseRef.current - 0.045);
    const pulse = pulseRef.current;

    rootRef.current.rotation.y += mood.rotationSpeed;
    rootRef.current.position.y = Math.sin(t * 1.4) * mood.floatAmp;
    rootRef.current.rotation.x = Math.sin(t * 0.7) * 0.03;

    const scale = mood.scaleBase + pulse * 0.18;
    rootRef.current.scale.setScalar(scale);

    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.emissiveIntensity = 1.4 + pulse * mood.pulseBoost;
        child.material.opacity = 0.82 + pulse * 0.15;
      }
    });
  });

  const pulse = pulseRef.current;

  return (
    <group ref={rootRef} position={[0, -0.65, 0]} scale={mood.scaleBase}>
      <primitive object={clonedScene} />

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.55, 0]} renderOrder={20}>
        <ringGeometry args={[2.2, 2.42, 128]} />
        <meshBasicMaterial
          color={mood.ringA}
          transparent
          opacity={0.8 + pulse * 0.12}
          depthWrite={false}
          depthTest={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} renderOrder={21}>
        <ringGeometry args={[2.75, 2.92, 128]} />
        <meshBasicMaterial
          color={mood.ringB}
          transparent
          opacity={0.55 + pulse * 0.18}
          depthWrite={false}
          depthTest={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.45, 0]} renderOrder={22}>
        <ringGeometry args={[3.2, 3.3, 128]} />
        <meshBasicMaterial
          color={mood.ringC}
          transparent
          opacity={0.35 + pulse * 0.12}
          depthWrite={false}
          depthTest={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <pointLight
        position={[0, 0.8, 1.4]}
        intensity={10 + pulse * 18}
        distance={12}
        color={mood.emissive}
      />
    </group>
  );
}

function BackgroundGlow({ activeKeys }) {
  const glowRef = useRef(null);
  const floorGlowRef = useRef(null);
  const mood = getLatestMood(activeKeys);

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at center, ${mood.glow}, transparent 22%)`;
    }
    if (floorGlowRef.current) {
      floorGlowRef.current.style.background = `radial-gradient(circle at center bottom, ${mood.floorGlow}, transparent 30%)`;
    }
  }, [mood.glow, mood.floorGlow]);

  return (
    <>
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, ${mood.glow}, transparent 22%)`,
          pointerEvents: "none",
          transition: "background 300ms ease",
        }}
      />
      <div
        ref={floorGlowRef}
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center bottom, ${mood.floorGlow}, transparent 30%)`,
          pointerEvents: "none",
          transition: "background 300ms ease",
        }}
      />
    </>
  );
}

export default function RedScene({ triggerA, flashKey, activeKeys = [] }) {
  const mood = getLatestMood(activeKeys);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Canvas camera={{ position: [0, 0.35, 7.2], fov: 35 }}>
        <color attach="background" args={["#120401"]} />
        <fog attach="fog" args={["#1a0501", 8, 18]} />

        <SceneLights activeKeys={activeKeys} flashKey={flashKey} />
        <CameraRig triggerA={triggerA} activeKeys={activeKeys} />

        <Suspense fallback={null}>
          <HologramModel flashKey={flashKey} activeKeys={activeKeys} />
          <Environment preset="sunset" />
        </Suspense>

        <Sparkles
          count={90}
          scale={[14, 8, 10]}
          size={3}
          speed={0.45}
          color={mood.sparkles}
        />
      </Canvas>

      <BackgroundGlow activeKeys={activeKeys} />
    </div>
  );
}

useGLTF.preload("/models/project-model.glb");