import datas from "../../datas.json";
import { CustomBtn, IconName } from "../buttons/custom-buttons";
import ToolTip from "../ui/ToolTip";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center gap-12 max-md:-top-10"
    >
      <div className="absolute top-0 background-hero w-full h-full flex items-center -z-1">
        <div className="background-hero-circle w-full h-full"></div>
      </div>

      <div className="flex flex-col gap-2 max-md:px-4">
        <h1 className="min-md:text-7xl text-4xl text-center">
          {datas.home.title}
        </h1>
        <h2 className="text-primary min-md:text-7xl text-4xl tracking-wider text-center">
          {datas.home.subtitle}
        </h2>
      </div>

      <div className="min-sm:w-2/3 max-md:px-6 min-md:text-xl text-sm text-center">
        <ReactMarkdown
          components={{
            strong: ({ children }) => (
              <strong className="text-primary/80 font-normal">
                {children}
              </strong>
            ),
          }}
          remarkPlugins={[remarkGfm]}
        >
          {datas.home.description}
        </ReactMarkdown>
      </div>

      <div className="flex gap-6 flex-wrap">
        <CustomBtn
          href="/CV-Jeremie-Herault.pdf"
          theme="primary"
          iconName="download"
          download={"CV-Jeremie-Herault.pdf"}
        >
          Mon CV
        </CustomBtn>
        <div className="flex items-center gap-2 ">
          {datas.home.buttons.map((button, idx) => {
            return (
              <span key={idx} className={`relative z-20 group`}>
                <CustomBtn
                  //key={button.title}
                  href={button.href}
                  theme="outline"
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
    </section>
  );
}
