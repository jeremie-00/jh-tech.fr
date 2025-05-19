"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import datas from "../../datas.json";
import { ContainerSection, ContentFlexCol, Wrapper } from "../Container";
import { CustomBtn } from "../buttons/custom-buttons";
import Blockquote from "../ui/Blockquote";
import FadeInSection from "../ui/FadeInSection";

export default function About() {
  const [educationsText, setEducationsText] = useState(
    datas.educations.text[1].text
  );

  const [isActive, setIsActive] = useState(0);
  const handleClick = (education: string, idx: number) => {
    setEducationsText(education);
    setIsActive(idx);
  };

  return (
    <ContainerSection id="about">
      <ContentFlexCol>
        <div className="background-about relative z-20">
          <FadeInSection
            direction="up"
            className="flex flex-col md:items-center items-start justify-start md:text-center text-left gap-8 pt-14"
          >
            <h2 className="min-md:text-xl text-lg font-normal text-foreground tracking-[0.5em] uppercase px-4">
              {datas.about.title}
            </h2>
            <div className="flex flex-col gap-12 md:w-2/3 xl:w-1/2">
              <div className="px-4">
                <Blockquote text={datas.about.text} />
              </div>

              <Image
                src={"/images/about.png"}
                alt={
                  "Main sur un clavier qui tient un stylo, des ecritures de code en premier plan."
                }
                width={800}
                height={800}
                className="aspect:16/9 shadow-lg place-self-center object-cover"
                quality={90}
              />
            </div>
          </FadeInSection>
        </div>

        <Wrapper>
          <div className="lg:max-w-2/3 flex flex-col items-center justify-center mx-auto gap-8">
            <div className="flex flex-col flex-1 justify-center gap-8  px-4">
              <FadeInSection direction="up">
                <h2 className="min-md:text-xl text-lg font-normal text-foreground tracking-[0.5em] uppercase">
                  {datas.educations.title}
                </h2>
              </FadeInSection>
              <div className="w-full h-full flex flex-col flex-1">
                {datas.educations.text
                  .filter((educ) => educ.isVisible === "true")
                  .map((educ, idx) => (
                    <FadeInSection key={idx} delay={0} direction="up">
                      <div
                        className={`flex ${
                          isActive === idx
                            ? "border-b-4 border-primary/50"
                            : "border-b-4 border-border"
                        }  `}
                      >
                        <CustomBtn
                          theme="default"
                          className={` ${
                            isActive === idx ? "bg-border" : ""
                          } flex-1 sm:gap-8 gap-3 px-4 lg:py-8 py-4 rounded-none`}
                          onClick={() => handleClick(educ.text, idx)}
                        >
                          <Image
                            src={educ.url}
                            alt={educ.alt}
                            width={50}
                            height={50}
                            className=""
                            quality={90}
                          />
                          <div className="flex flex-1 max-md:flex-col gap-2">
                            <div className="w-full h-full flex flex-1 flex-col gap-2 ">
                              <h3 className="w-full lg:text-lg text-sm text-left">
                                {educ.organisme}
                              </h3>

                              <h3 className="w-full lg:text-md text-sm text-left text-muted-foreground">
                                {educ.formation}
                              </h3>
                            </div>

                            <h3 className="lg:text-md text-sm text-muted-foreground md:place-self-end place-self-start">
                              {educ.date}
                            </h3>
                          </div>
                        </CustomBtn>
                      </div>
                    </FadeInSection>
                  ))}
              </div>
              <FadeInSection direction="up">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={educationsText} // change quand le texte change
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Blockquote text={educationsText} />
                  </motion.div>
                </AnimatePresence>
              </FadeInSection>
            </div>
          </div>
        </Wrapper>
      </ContentFlexCol>
    </ContainerSection>
  );
}
