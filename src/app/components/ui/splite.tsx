"use client";

import { Suspense, lazy } from "react";
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
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
