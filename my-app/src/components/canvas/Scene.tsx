"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Stars } from "@react-three/drei";
import VoxelIsland from "./VoxelIsland";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050505]">
      {/* Camera adjusted: 
          - y: 2 (lower, so we look up at the tree slightly)
          - z: 10 (close enough to see the voxels)
      */}
      <Canvas camera={{ position: [0, 2, 10], fov: 40 }}>
        
        {/* 1. Ambient Light: Boosted to 1.0 so the "bark" isn't pitch black */}
        <ambientLight intensity={1.0} /> 
        
        {/* 2. Key Light: A strong "sun" light to create sharp 3D shadows on the cubes */}
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={2.5} 
          color="#ffffff" 
        />

        {/* 3. Point Light: This makes your golden "fruit" voxels glow even more */}
        <pointLight position={[-5, 5, 5]} intensity={1.5} color="#D4A76A" />

        {/* 4. The Tree itself */}
        <VoxelIsland />
        
        {/* 5. Atmosphere: Added stars and shadows for depth */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={15} 
          blur={2} 
          far={4.5} 
        />

        <fog attach="fog" args={["#050505", 8, 20]} /> 

        {/* Controls: We disable zoom/pan to keep the landing page clean */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}