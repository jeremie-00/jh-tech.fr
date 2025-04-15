import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

{
  /* Image de fond avec parallaxe + dézoom */
}
export default function BgAnimate() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 100]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.4]);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ y, scale }}
      className="fixed w-screen h-screen -z-10 pointer-events-none md:-bottom-30 md:-right-20 -bottom-60 -right-5"
    >
      <Image
        src={"Bg-hero.svg"}
        alt={"fond avec des carreaux"}
        fill
        quality={90}
        className="object-contain "
      />
    </motion.div>
  );
}
