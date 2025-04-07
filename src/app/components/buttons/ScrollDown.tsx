import { IoArrowBack } from "react-icons/io5";
import { CustomBtn } from "./custom-buttons";

export default function ScrollDown() {
  return (
    <CustomBtn
      href="#about"
      className="absolute bottom-20 -right-10 z-50 -rotate-90 animate-bounce max-md:hidden"
    >
      <span className="flex items-center justify-center gap-2 text-primary font-extralight text-xl">
        <IoArrowBack />
        {" En voir plus  ///"}
      </span>
    </CustomBtn>
  );
}
