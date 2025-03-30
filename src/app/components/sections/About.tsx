"use client";
import Image from "next/image";
import { useState } from "react";
import datas from "../../datas.json";
import { CustomBtn } from "../buttons/custom-buttons";
import { CustomCard } from "../cards/CustomCard";
import { ContainerSection, Content } from "../Container";

export default function About() {
  const [educationsText, setEducationsText] = useState(
    datas.educations.text[0].text
  );

  const [isActive, setIsActive] = useState(0);
  const handleClick = (education: string, idx: number) => {
    setEducationsText(education);
    setIsActive(idx);
  };

  return (
    <ContainerSection id="about">
      <Content title={datas.about.title} text={datas.about.text}>
        <div className="min-lg:w-[46%] w-full h-1/2 flex flex-col items-center justify-center">
          <div className="relative">
            <Image
              src={"/images/profilepicApropos.png"}
              alt={"Logo JH"}
              width={800}
              height={800}
              className="w-64 h-auto object-contain"
              quality={90}
            />
            <span className="block w-64 h-1 rounded-lg bg-primary"></span>
          </div>
        </div>
      </Content>
      <Content title={datas.educations.title} text={educationsText}>
        <div className="min-lg:w-1/2 w-full h-full flex flex-col items-center justify-center order-2">
          <CustomCard className="flex-col h-auto w-full" theme="default">
            {datas.educations.text.map((educ, idx) => (
              <CustomCard
                key={idx}
                theme="none"
                className="flex flex-row items-center h-auto w-full gap-8 p-4"
              >
                <CustomBtn
                  theme="highlight"
                  className={` ${
                    isActive === idx ? "bg-primary-foreground" : ""
                  } flex-1 sm:gap-8 gap-3 px-5 py-3 `}
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
                  <div className="w-fit h-full flex flex-1 flex-col gap-2">
                    <span className="flex gap-2">
                      <h3 className="lg:text-xl text-sm">{educ.organisme}</h3>
                    </span>
                    <h3 className="w-fit lg:text-xl text-sm">
                      {educ.formation}
                    </h3>
                  </div>

                  <h3 className="lg:text-xl text-sm text-primary">
                    {educ.date}
                  </h3>
                </CustomBtn>
              </CustomCard>
            ))}
          </CustomCard>
        </div>
      </Content>
    </ContainerSection>
  );
}
