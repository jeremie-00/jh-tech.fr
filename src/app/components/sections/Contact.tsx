import Image from "next/image";
import { FormulaireContact } from "../FormulaireContact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-full flex items-center gap-20 max-lg:flex-col bg-secondary py-24 md:px-32 lg:px-12 xl:px-34 2xl:px-54 p-6"
    >
      <Image
        src={"/images/contact.png"}
        alt={
          "Un ordinateur avec une tasse à café posée à côté, accompagné des icônes de maison, de messagerie et de téléphone."
        }
        width={400}
        height={400}
        className="flex flex-1 aspect:16/9 shadow-lg object-cover grayscale max-md:hidden"
        quality={90}
      />
      <div className="w-full max-md:px-2 flex flex-1 items-center ">
        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col gap-4">
            <h2 className="min-md:text-xl text-lg font-normal text-foreground tracking-[0.5em] uppercase">
              Contactez moi
            </h2>

            <p className="text-lg italic font-extralight text-muted-foreground">
              Une idée, un projet, une question ? Curieux et toujours en quête
              de nouveaux défis, je serais ravi d’échanger avec vous. Parlons-en
              !
            </p>
          </div>

          <FormulaireContact />
        </div>
      </div>
    </section>
  );
}
