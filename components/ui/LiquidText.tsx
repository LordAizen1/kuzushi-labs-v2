"use client";

import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree, extend, ReactThreeFiber } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";

// --- 1. Define Custom Shader Material ---
const LiquidDistortionMaterial = shaderMaterial(
    {
        uTexture: new THREE.Texture(),
        uHover: 0,
        uTime: 0,
        uMouse: new THREE.Vector2(0, 0),
        uResolution: new THREE.Vector2(1, 1),
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Liquid Distortion Logic
      // We create a wave that moves with time and is amplified by hover
      float wave = sin(uv.y * 10.0 + uTime) * 0.005;
      float distortion = uHover * wave; // Only distort when hovering
      
      // We can also add a more "glitchy" slice effect or a "fluid" drag
      // Studio Lumio style: The pixel coordinates get shifted
      
      float xShift = uHover * 0.05 * sin(uv.y * 20.0 + uTime * 2.0);
      float yShift = uHover * 0.05 * cos(uv.x * 20.0 + uTime * 2.0);
      
      vec2 distortedUv = uv + vec2(xShift, yShift);

      // Texture lookup with distortion
      vec4 textureColor = texture2D(uTexture, distortedUv);
      
      // Optional: RGB Split (Chromatic Aberration) for that extra "Tech" feel
      float rgbShift = uHover * 0.02;
      float r = texture2D(uTexture, distortedUv + vec2(rgbShift, 0.0)).r;
      float g = texture2D(uTexture, distortedUv).g;
      float b = texture2D(uTexture, distortedUv - vec2(rgbShift, 0.0)).b;
      
      // Combine
      gl_FragColor = vec4(r, g, b, textureColor.a);
    }
  `
);

extend({ LiquidDistortionMaterial });

// Add to JSX Intrinsics
declare module "@react-three/fiber" {
    interface ThreeElements {
        liquidDistortionMaterial: any;
    }
}

interface LiquidTextProps {
    text: string;
    className?: string; // For sizing the canvas container
    fontSize?: number;
    fontFamily?: string;
    color?: string;
}

// --- 2. The 3D Scene Content ---
const Scene = ({ text, fontSize = 300, fontFamily = "Oswald", color = "white" }: LiquidTextProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);
    const [hovered, setHover] = useState(false);
    const { viewport } = useThree(); // Get dimension of the Canvas in 3D units

    // Generate Texture from Text using 2D Canvas matching Viewport Aspect Ratio
    const texture = useMemo(() => {
        const canvas = document.createElement("canvas");

        // We want high resolution, but ASPECT RATIO is key.
        // Canvas aspect must equal viewport aspect (viewport.width / viewport.height).
        const height = 1024;
        const width = height * viewport.aspect;

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return new THREE.Texture();

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Font Sizing
        // We conceptually want the text to fill ~71% of the height vertically
        // This perfectly counters the 140% container expansion (1 / 1.4 ≈ 0.71)
        const fontScale = height * 0.71;
        ctx.font = `bold ${fontScale}px ${fontFamily}`;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;

        // Draw Text Centered
        ctx.fillText(text, width / 2, height / 2);

        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        // LinearFilter is cleaner for smooth distortion, NearestFilter for pixel art. 
        // Default Linear is fine.
        return tex;
    }, [text, fontFamily, color, viewport.aspect]); // Recalculate if aspect changes

    // Animation Loop
    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.getElapsedTime();
            materialRef.current.uHover = THREE.MathUtils.lerp(
                materialRef.current.uHover,
                hovered ? 1.0 : 0.0,
                0.1
            );
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {/* Plane fills the viewport exactly */}
            <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
            <liquidDistortionMaterial
                ref={materialRef}
                uTexture={texture}
                transparent={true}
            />
        </mesh>
    );
};

// --- 3. Main Component Export ---
export default function LiquidText({ text, className }: LiquidTextProps) {
    return (
        <div className={`w-full h-full relative ${className}`}>
            <Canvas
                // Orthographic camera makes 1 unit = 1 pixel if zoomed right, 
                // or simply flat projection. 
                // We use 'orthographic' so viewport.width matches the camera frustum width exactly.
                camera={{ position: [0, 0, 10], zoom: 1 }}
                orthographic
                gl={{ alpha: true, antialias: true }}
                resize={{ debounce: 0 }}
            >
                <Scene text={text} />
            </Canvas>
        </div>
    );
}
