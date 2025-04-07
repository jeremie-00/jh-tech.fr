import { useIsMobile } from "@/app/hook/useMobile";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import datas from "../../datas.json";
import { CustomCard } from "../cards/CustomCard";
import { ContainerSection, ContentFlexCol, Wrapper } from "../Container";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { LightBg } from "../ui/LightBg";
import { SeparatorCards } from "../ui/Separator";
import ToolTip from "../ui/ToolTip";

interface CardServiceProps {
  name: string;
  text: string;
  old: string;
  url: string;
  alt: string;
}

function CardService({ service }: { service: CardServiceProps }) {
  return (
    <div className="relative flex flex-col items-center h-full w-full gap-4">
      <CustomCard
        className="relative z-30 w-fit place-self-center rotate-45 translate-y-2/3 p-4 rounded-3xl border border-border shadow-md"
        theme="default"
      >
        <Image
          src={service.url}
          alt={service.alt}
          width={100}
          height={100}
          className="w-14 h-14 object-contain -rotate-45"
          quality={90}
        />
      </CustomCard>

      <CustomCard
        className="max-w-[25rem] relative z-20 w-full h-full items-left justify-center text-left px-8 pb-8 pt-10 gap-4 shadow-md overflow-hidden"
        theme="primary"
      >
        <h3 className=" flex text-lg text-foreground font-bold z-20">
          {service.name}
        </h3>
        <SeparatorCards />
        <p className="flex flex-1 text-sm text-muted-foreground font-extralight z-20">
          {service.text}
        </p>
        <Image
          src={"/Bg-card.svg"}
          alt={service.alt}
          width={100}
          height={100}
          className="absolute -bottom-20 -right-38 w-54 h-54 object-contain -rotate-6 "
          quality={90}
        />
      </CustomCard>
    </div>
  );
}

export default function Skills() {
  const isMobile = useIsMobile();
  return (
    <ContainerSection id="competences">
      {/* <Wrapper> */}

      <ContentFlexCol>
        <div className="bg-background pt-24 w-full relative z-10">
          <Wrapper>
            <div className="w-full h-full flex flex-col text-center max-md:text-left px-4 items-center gap-8">
              {/*  <h2 className="min-md:text-xl text-lg font-normal tracking-[0.5em] uppercase">
              {datas.competences.title}
            </h2> */}

              <div className="max-md:max-w-[25rem] min-md:text-3xl text-2xl tracking-widest">
                <ReactMarkdown
                  components={{
                    strong: ({ children }) => (
                      <strong className="text-primary tracking-widest">
                        {children}
                      </strong>
                    ),
                  }}
                  remarkPlugins={[remarkGfm]}
                >
                  {datas.competences.subtitle}
                </ReactMarkdown>
              </div>
              <div className="max-md:max-w-[25rem] w-full sm:w-2/3 text-md sm:text-lg text-muted-foreground font-extralight">
                {datas.competences.text}
              </div>

              <div className="h-full w-full grid min-lg:grid-cols-3 min-md:grid-cols-2 grid-cols-1 gap-x-4">
                {datas.competences.cards.map((service, idx) => (
                  <CardService key={idx} service={service} />
                ))}
              </div>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="relative flex w-full h-full">
            {!isMobile && <LightBg />}
            <div className="relative z-20 flex items-center bg-background place-self-left max-lg:flex-col max-lg:items-center gap-12 py-12 xl:px-10 rounded-md">
              <AnimatedGridPattern
                width={70}
                height={50}
                numSquares={20}
                maxOpacity={0.1}
                duration={1}
                repeatDelay={1}
                className={cn(
                  "[mask-image:radial-gradient(16em_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[0%] skew-y-10 z-10"
                )}
              />
              <div className="w-full h-full flex flex-1 flex-wrap items-center justify-center gap-4 max-lg:order-2">
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

              <div className="w-full h-full flex flex-1 items-center justify-center">
                <div className="min-md:text-5xl text-4xl tracking-wider text-center leading-[1.25em] px-2">
                  <ReactMarkdown
                    components={{
                      strong: ({ children }) => (
                        <strong className="text-primary font-normal">
                          {children}
                        </strong>
                      ),
                    }}
                    remarkPlugins={[remarkGfm]}
                  >
                    {datas.stacks.title}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </ContentFlexCol>

      {/*  </Wrapper> */}
    </ContainerSection>
  );
}
