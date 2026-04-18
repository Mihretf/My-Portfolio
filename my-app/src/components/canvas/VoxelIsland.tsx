"use client";
import { Box, Float } from "@react-three/drei";

export default function VoxelIsland() {
  const bark = "#5D4037"; 
  const leaves = "#3D5A45"; 
  const gold = "#D4A76A";

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[0, -2.5, 0]}> {/* Lowered the group to center the whole tree */}
        
        {/* --- THE TRUNK --- */}
        <Box args={[0.6, 4, 0.6]} position={[0, 1, 0]}>
          <meshStandardMaterial color={bark} />
        </Box>

        {/* --- VISIBLE BRANCHES --- */}
        {/* Branch Right */}
        <Box args={[1.2, 0.2, 0.2]} position={[0.6, 1.8, 0]} rotation={[0, 0, 0.4]}>
          <meshStandardMaterial color={bark} />
        </Box>
        {/* Branch Left */}
        <Box args={[1, 0.2, 0.2]} position={[-0.5, 2.5, 0]} rotation={[0, 0, -0.5]}>
          <meshStandardMaterial color={bark} />
        </Box>

        {/* --- THE CANOPY (Smaller, stacked cubes for a "leafy" feel) --- */}
        <group position={[0, 3.5, 0]}>
          {/* Main Leaf Center */}
          <Box args={[2, 2, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial color={leaves} transparent opacity={0.7} />
          </Box>
          
          {/* Leaf Detail Top */}
          <Box args={[1.2, 1, 1.2]} position={[0, 1.2, 0]}>
            <meshStandardMaterial color={leaves} transparent opacity={0.8} />
          </Box>

          {/* Leaf Detail Sides - These make it look wider */}
          <Box args={[1, 1, 1]} position={[1.2, -0.2, 0.2]}>
            <meshStandardMaterial color={leaves} transparent opacity={0.6} />
          </Box>
          <Box args={[1, 1, 1]} position={[-1.2, 0.5, -0.2]}>
            <meshStandardMaterial color={leaves} transparent opacity={0.6} />
          </Box>
        </group>

        {/* --- THE GOLDEN "FRUIT" (Glowing Accents) --- */}
        <Box args={[0.3, 0.3, 0.3]} position={[1.5, 3.5, 0.5]}>
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={2} />
        </Box>
        <Box args={[0.3, 0.3, 0.3]} position={[-1, 4.2, 0.8]}>
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={2} />
        </Box>
        <Box args={[0.3, 0.3, 0.3]} position={[0.2, 5, -0.3]}>
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={2} />
        </Box>

      </group>
    </Float>
  );
}