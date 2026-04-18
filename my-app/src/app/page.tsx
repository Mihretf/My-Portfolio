import Scene from "@/components/canvas/Scene";
import HeroOverlay from "@/components/ui/HeroOverlay";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Layer 1: The 3D World */}
      <Scene />

      {/* Layer 2: The Interface */}
      <HeroOverlay />
    </main>
  );
}