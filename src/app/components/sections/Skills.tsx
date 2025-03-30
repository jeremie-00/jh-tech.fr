import Image from "next/image";
import datas from "../../datas.json";
import { CustomCard } from "../cards/CustomCard";
import { ContainerSection, Content, ContentGrid } from "../Container";
import ToolTip from "../ui/ToolTip";

export default function Skills() {
  return (
    <ContainerSection id="competences">
      <ContentGrid
        title={datas.competences.title}
        text={datas.competences.text}
      >
        <div className="w-full h-full grid min-lg:grid-cols-3 min-md:grid-cols-2 grid-cols-1 gap-8">
          {datas.competences.cards.map((service, idx) => (
            <CustomCard
              key={idx}
              className="flex-col h-auto w-full gap-4 p-6"
              theme="default"
            >
              <Image
                src={service.url}
                alt={service.alt}
                width={100}
                height={100}
                className="w-14 h-14 object-contain"
                quality={90}
              />
              <h3 className="text-lg text-primary font-semibold">
                {service.name}
              </h3>
              <p className="text-sm">{service.text}</p>
            </CustomCard>
          ))}
        </div>
      </ContentGrid>

      <Content title={datas.stacks.title} text={datas.stacks.text}>
        <div className="min-lg:w-[46%] w-full h-full flex flex-wrap items-center max-lg:justify-center gap-4 max-lg:order-2">
          {datas.stacks.cards.map((skill, idx) => (
            <span key={idx} className={`relative z-20 group`}>
              <CustomCard className="relative z-20" theme="icon">
                <Image
                  src={skill.url}
                  alt={skill.alt}
                  width={50}
                  height={50}
                  quality={90}
                />
              </CustomCard>
              <ToolTip txt={skill.name} color="foreground" />
            </span>
          ))}
        </div>
      </Content>
    </ContainerSection>
  );
}
