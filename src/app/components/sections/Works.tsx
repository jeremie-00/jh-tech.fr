import Image from "next/image";
import datas from "../../datas.json";
import { CustomBtn, IconName } from "../buttons/custom-buttons";
import { CustomCard } from "../cards/CustomCard";
import { ContainerSection, ContentGrid } from "../Container";

export default function Works() {
  return (
    <ContainerSection id="projets">
      <ContentGrid title={datas.projets.title} text={datas.projets.text}>
        <div className="w-full h-full grid min-lg:grid-cols-2 grid-cols-1 gap-8 p-2">
          {datas.projets.cards.map((work, idx) => (
            <CustomCard
              key={idx}
              className="flex-col h-auto w-full gap-4 p-4"
              theme="default"
            >
              <Image
                src={work.url}
                alt={work.alt}
                width={850}
                height={550}
                className="rounded-md object-cover w-full h-72 max-lg:h-full"
                quality={90}
              />
              <h3 className="text-2xl font-bold">{work.name}</h3>
              <span className="w-12 h-1 bg-primary rounded-full" />
              <h4 className="text-[1rem] flex flex-1">{work.text}</h4>
              <div className="w-full flex flex-wrap content-start gap-2">
                {work.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-md px-3 py-1 text-sm text-foreground bg-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="w-full flex  content-start gap-2">
                {work.liens.map((lien, idx) => {
                  if (lien.target) {
                    return (
                      <div
                        key={idx}
                        className="md:w-full flex items-center gap-12 relative group"
                      >
                        <CustomBtn
                          href={lien.href}
                          theme="card"
                          size="xl"
                          className=""
                          target={lien.target}
                          iconName={lien.iconName as IconName}
                          ariaLabel={`Aller sur ${lien.title}`}
                        >
                          <span className="md:text-[1.25rem] text-[1rem]">
                            {lien.title}
                          </span>
                          <span className="sr-only">{lien.title}</span>
                        </CustomBtn>
                      </div>
                    );
                  }
                })}
              </div>
            </CustomCard>
          ))}
        </div>
      </ContentGrid>
    </ContainerSection>
  );
}
