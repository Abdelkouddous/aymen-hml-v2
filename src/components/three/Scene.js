import React, { useRef, useMemo, useContext } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { ThemeContext } from "../../App";

/* ─── Camera Rig: follows mouse with smooth lerp ─────────────────────────── */
function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = useRef(new THREE.Vector3());

  useFrame(() => {
    vec.current.set(mouse.x * 1.2, mouse.y * 0.8, camera.position.z);
    camera.position.lerp(vec.current, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Single floating orb ────────────────────────────────────────────────── */
function Orb({ position, radius, color, distort, speed, geometry, opacity }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.12;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "octahedron":
        return <octahedronGeometry args={[radius, 0]} />;
      case "torus":
        return <torusGeometry args={[radius, radius * 0.35, 12, 40]} />;
      default:
        return <sphereGeometry args={[radius, 32, 32]} />;
    }
  }, [geometry, radius]);

  return (
    <Float
      speed={speed}
      rotationIntensity={0.4}
      floatIntensity={0.8}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} position={position}>
        {geo}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed * 1.5}
          transparent
          opacity={opacity}
          roughness={0.25}
          metalness={0.1}
          wireframe={geometry === "torus"}
        />
      </mesh>
    </Float>
  );
}

/* ─── Scene content (orbs + lights) ─────────────────────────────────────── */
function SceneContent({ isDark }) {
  // Dark mode: vibrant, saturated colours
  // Light mode: soft pastels that complement warm cream backgrounds
  const accentColor  = isDark ? "#ffd37b" : "#d4956a";   // warm amber → soft terracotta
  const primaryColor = isDark ? "#6244c5" : "#b09cd0";   // deep purple → soft lavender
  const tealColor    = isDark ? "#2dd4bf" : "#7bc4b8";   // vivid teal → muted sage

  // Light mode orbs are much more transparent so they don't overpower the bg
  const orbOpacity   = isDark ? 0.55 : 0.22;

  const orbs = useMemo(() => [
    { position: [-4.5,  2.5, -6], radius: 1.3,  color: accentColor,  distort: 0.45, speed: 1.2, geometry: "sphere"     },
    { position: [ 4.8,  1.0, -5], radius: 1.0,  color: primaryColor, distort: 0.5,  speed: 0.9, geometry: "sphere"     },
    { position: [ 0.5, -3.5, -4], radius: 0.6,  color: tealColor,    distort: 0.3,  speed: 1.6, geometry: "sphere"     },
    { position: [-2.0,  3.5, -9], radius: 1.8,  color: accentColor,  distort: 0.0,  speed: 0.6, geometry: "torus"      },
    { position: [ 5.5, -2.0, -7], radius: 0.9,  color: primaryColor, distort: 0.35, speed: 1.0, geometry: "octahedron" },
    { position: [ 3.0,  4.0, -5], radius: 0.45, color: accentColor,  distort: 0.6,  speed: 2.0, geometry: "sphere"     },
    { position: [-5.5, -2.5, -8], radius: 1.5,  color: primaryColor, distort: 0.4,  speed: 0.7, geometry: "sphere"     },
    { position: [ 2.5, -4.5, -6], radius: 0.8,  color: tealColor,    distort: 0.0,  speed: 0.5, geometry: "torus"      },
    { position: [-1.5, -4.0, -5], radius: 0.35, color: primaryColor, distort: 0.5,  speed: 2.2, geometry: "sphere"     },
    { position: [ 7.0,  0.5, -8], radius: 0.55, color: tealColor,    distort: 0.4,  speed: 1.4, geometry: "sphere"     },
    { position: [-6.5,  0.5, -6], radius: 0.4,  color: accentColor,  distort: 0.6,  speed: 1.8, geometry: "octahedron" },
    { position: [ 1.0,  5.0, -7], radius: 0.7,  color: primaryColor, distort: 0.3,  speed: 0.8, geometry: "sphere"     },
    { position: [-3.0, -1.5,-10], radius: 2.2,  color: accentColor,  distort: 0.2,  speed: 0.4, geometry: "sphere"     },
    { position: [ 6.5,  3.5, -9], radius: 0.65, color: tealColor,    distort: 0.5,  speed: 1.1, geometry: "octahedron" },
    { position: [-7.0,  4.0,-10], radius: 1.0,  color: primaryColor, distort: 0.35, speed: 0.6, geometry: "sphere"     },
  ], [accentColor, primaryColor, tealColor]);

  return (
    <>
      {/* Ambient light — brighter in light mode to wash out heavy shadows */}
      <ambientLight intensity={isDark ? 0.25 : 1.2} />

      {/* Warm key light */}
      <pointLight
        position={[6, 8, 4]}
        color={accentColor}
        intensity={isDark ? 2.5 : 0.6}
        distance={25}
        decay={2}
      />

      {/* Cool fill */}
      <pointLight
        position={[-8, -5, -5]}
        color={primaryColor}
        intensity={isDark ? 1.8 : 0.3}
        distance={20}
        decay={2}
      />

      {/* Rim */}
      <pointLight
        position={[0, -8, 8]}
        color={tealColor}
        intensity={isDark ? 1.2 : 0.25}
        distance={15}
        decay={2}
      />

      {orbs.map((props, i) => (
        <Orb key={i} {...props} opacity={orbOpacity} />
      ))}

      <CameraRig />
    </>
  );
}

/* ─── Main exported Scene wrapper ────────────────────────────────────────── */
export default function Scene() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        // KEY FIX: give the canvas container a solid background colour.
        // Without this, Three.js alpha:true makes canvas transparent and the
        // browser body bg shows through, making light mode look dark.
        background: isDark
          ? "linear-gradient(135deg, hsl(250 45% 13%), hsl(250 38% 22%))"
          : "linear-gradient(to bottom, #fdfaf4 0%, #f8f1e2 45%, #f0e8d0 100%)",
      }}
    >
      {/* Subtle vignette overlay for readability — layered on top of Canvas */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 30%, rgba(10,4,22,0.50) 100%)"
            : "radial-gradient(ellipse at center, transparent 25%, rgba(240,232,208,0.35) 100%)",
        }}
      />

      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 60, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", position: "relative", zIndex: 0 }}
      >
        <SceneContent isDark={isDark} />
      </Canvas>
    </div>
  );
}
