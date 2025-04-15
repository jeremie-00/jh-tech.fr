import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import datas from "../../datas.json";
import { ContainerSection, Wrapper } from "../Container";
import { Slider } from "../Slider";
import FadeInSection from "../ui/FadeInSection";

export default function Works() {
  return (
    <ContainerSection id="projets">
      <Wrapper>
        <FadeInSection direction="up" amount={0.4}>
          <div className="w-full h-full flex flex-col text-center items-center gap-24 py-32 ">
            <div className="w-full h-full flex max-xl:flex-col items-center justify-center max-xl:gap-14">
              <div className="w-full max-w-[800px] h-full text-left place-items-start space-y-8 px-4">
                <div className="min-md:text-5xl text-4xl tracking-widest  font-light">
                  <ReactMarkdown
                    components={{
                      strong: ({ children }) => (
                        <strong className="text-primary tracking-widest  font-light">
                          {children}
                        </strong>
                      ),
                    }}
                    remarkPlugins={[remarkGfm]}
                  >
                    {datas.projets.subtitle}
                  </ReactMarkdown>
                </div>
                <div className="text-md sm:text-lg text-muted-foreground font-light">
                  {datas.projets.text}
                </div>
              </div>

              <Slider cards={datas.projets.cards} />
            </div>
          </div>
        </FadeInSection>
      </Wrapper>
    </ContainerSection>
  );
}
