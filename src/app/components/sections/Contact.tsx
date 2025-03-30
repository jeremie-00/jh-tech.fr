import Image from "next/image";
import { FormulaireContact } from "../FormulaireContact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-full flex items-center justify-center gap-20 mb-48 max-lg:flex-col"
    >
      <div className="min-lg:w-1/2 min-md:w-2/3 min-sm:w-full max-md:px-2 flex items-center justify-center">
        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col gap-4">
            <h2 className="min-md:text-5xl text-4xl tracking-wider text-left">
              Contactez moi
            </h2>
            <span className="w-12 h-1 bg-primary rounded-full" />

            <p className="min-md:text-xl text-lg text-left lg:pr-8">
              Une idée, un projet, une question ? Curieux et toujours en quête
              de nouveaux défis, je serais ravi d’échanger avec vous. Parlons-en
              ! 🚀
            </p>
          </div>

          <FormulaireContact />
        </div>
      </div>

      <Image
        src={"/images/planete-terre.png"}
        alt={"Contact"}
        width={400}
        height={400}
        className="flex lg:w-1/2 h-96 object-contain px-8"
        quality={90}
      />
    </section>
  );
}
