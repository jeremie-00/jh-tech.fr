"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { CustomBtn } from "./custom-buttons";

export default function ScrollDown() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        layout
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          x: { type: "spring", stiffness: 80, damping: 20 },
          opacity: { duration: 1.2 },
        }}
        className="absolute bottom-20 -right-10 z-50 -rotate-90 max-md:hidden"
      >
        <CustomBtn href="#about" className="animate-bounce">
          <span className="flex items-center justify-center gap-2 text-primary font-extralight text-lg">
            <IoArrowBack />
            {" En voir plus  ///"}
          </span>
        </CustomBtn>
      </m.div>
    </LazyMotion>
  );
}
