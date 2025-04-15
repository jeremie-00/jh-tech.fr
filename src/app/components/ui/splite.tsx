"use client";

import { Suspense, lazy } from "react";
import FadeInSection from "./FadeInSection";
import { LoaderBars } from "./Loader";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-1/2 h-full flex items-center justify-center">
          <LoaderBars size={54} />
        </div>
      }
    >
      <FadeInSection
        delay={1.5}
        direction="up"
        className="w-full h-full flex-1"
      >
        <Spline scene={scene} className={className} />
      </FadeInSection>
    </Suspense>
  );
}
