"use client";

import dynamic from "next/dynamic";
import FadeInSection from "./FadeInSection";
import { LoaderBars } from "./Loader";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false, // Désactive le rendu côté serveur
  loading: () => (
    <div className="w-1/2 h-full flex items-center justify-center">
      <LoaderBars size={54} />
    </div>
  ), // Composant de fallback
});

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <FadeInSection delay={0} direction="up" className="w-full h-full flex-1">
      <Spline scene={scene} className={className} />
    </FadeInSection>
  );
}
