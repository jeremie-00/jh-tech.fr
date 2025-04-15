import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { CustomBtn } from "./custom-buttons";
export default function ScrollDown() {
  return (
    <motion.div
      layout
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { type: "spring", stiffness: 120, damping: 20, duration: 1 },
        opacity: { duration: 1.5 },
      }}
      className="absolute bottom-20 -right-10 z-50 -rotate-90 max-md:hidden"
    >
      <CustomBtn href="#about" className=" animate-bounce">
        <span className="flex items-center justify-center gap-2 text-primary font-extralight text-lg">
          <IoArrowBack />
          {" En voir plus  ///"}
        </span>
      </CustomBtn>
    </motion.div>
  );
}
