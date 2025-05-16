import datas from "../../datas.json";
import { CustomBtn, IconName } from "../buttons/custom-buttons";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Wrapper } from "../Container";
import { SplineScene } from "../ui/splite";
import ToolTip from "../ui/ToolTip";

export default function Hero() {
  return (
    <Wrapper>
      <section
        id="home"
        className="w-full h-screen flex max-lg:flex-col items-center justify-center max-lg:pt-16"
      >
        <div className="w-fit flex flex-1 gap-12 flex-col items-center justify-center lg:items-start">
          <div className="w-fit flex flex-col max-lg:items-center gap-3">
            <h2 className="w-fit text-primary min-md:text-6xl text-5xl tracking-wider text-center lg:text-left">
              {datas.home.subtitle}
            </h2>

            <div className="sm:w-2/3 font-extralight max-md:px-6 text-sm text-center lg:text-left text-foreground/60">
              <ReactMarkdown
                components={{
                  strong: ({ children }) => (
                    <strong className="text-primary/80 font-extralight">
                      {children}
                    </strong>
                  ),
                }}
                remarkPlugins={[remarkGfm]}
              >
                {datas.home.description}
              </ReactMarkdown>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <CustomBtn
              href="/CV-Jeremie-Herault.pdf"
              theme="primary"
              iconName="download"
              download={"CV-Jeremie-Herault.pdf"}
              ariaLabel={`Telecharger mon cv`}
            >
              Mon CV
              <span className="sr-only">Mon CV</span>
            </CustomBtn>
            <div className="flex items-center gap-2 ">
              {datas.home.buttons.map((button, idx) => {
                return (
                  <span key={idx} className={`relative z-20 group`}>
                    <CustomBtn
                      href={button.href}
                      theme="outline"
                      className="bg-background"
                      size="md"
                      target={button.target}
                      iconName={button.iconName as IconName}
                      ariaLabel={`Aller sur ${button.title}`}
                    >
                      <span className="sr-only">{button.title}</span>
                    </CustomBtn>
                    <ToolTip txt={button.title} color="none" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:fixed w-full h-full lg:top-0 lg:left-80 -z-1 flex items-center justify-center">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-1/2 h-full flex-1"
          />
        </div>
      </section>
    </Wrapper>
  );
}
