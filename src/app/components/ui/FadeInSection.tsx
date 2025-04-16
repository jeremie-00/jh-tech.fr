"use client";

import { domAnimation, LazyMotion, m, Variants } from "framer-motion";
import { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  amount?: number;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "default";
};

const getVariants = (direction: FadeInSectionProps["direction"]): Variants => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = 100;
      break;
    case "down":
      y = -50;
      break;
    case "left":
      x = 100;
      break;
    case "right":
      x = -100;
      break;
    default:
      break;
  }

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom,
        ease: "easeOut",
      },
    }),
  };
};

export default function FadeInSection({
  children,
  className,
  amount = 0,
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        layout
        className={className}
        custom={delay}
        variants={getVariants(direction)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
