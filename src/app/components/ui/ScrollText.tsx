import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollText({ text }: { text: string }) {
  const ref = useRef(null);
  //const isInView = useInView(ref, { once: false, amount: 0.5 }); // détecte si c’est visible à moitié
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [400, -300]);

  return (
    <div
      ref={ref}
      className="relative z-30 lg:h-34 h-24 flex items-end justify-end bg-background overflow-hidden border-b-1 border-muted-foreground"
    >
      <motion.div
        style={{ x }}
        className="lg:text-9xl text-7xl text-muted-foreground font-extrabold uppercase lg:leading-[4.5rem] leading-[2.5rem]"
      >
        {text}
      </motion.div>
    </div>
  );
}
