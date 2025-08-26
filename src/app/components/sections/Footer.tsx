import datas from "../../datas.json";
import { CustomBtn, IconName } from "../buttons/custom-buttons";

export default function Footer({
  handleClick,
}: {
  handleClick: (href: string) => void;
}) {
  return (
    <footer className="relative w-full h-full z-40 font-light text-[0.75rem] text-muted-foreground bg-secondary border-t border-muted-foreground">
      <div className="flex flex-col pb-2 md:px-12 px-4 pt-12 gap-4">
        <div className="flex items-center justify-between">
          <div className="block space-y-1">
            <CustomBtn
              href="#home"
              theme="footer"
              size="xs"
              className="justify-start"
              onClick={() => handleClick("#home")}
            >
              <span className="flex items-center gap-2 tracking-wider">
                <div className="w-2 h-2 rounded-full bg-primary self-center" />
                Portfolio JH-Tech – Jérémie Hérault
              </span>
            </CustomBtn>

            <CustomBtn
              href={"/pages/legal"}
              theme="footer"
              size="xs"
              className="justify-start"
            >
              Mention legal
            </CustomBtn>
          </div>

          <div className="flex items-center gap-4 max-md:flex-col">
            <div className="inline-flex space-x-4">
              {datas.home.buttons.map((button, idx) => {
                if (button.title !== "Contact") {
                  return (
                    <CustomBtn
                      key={idx}
                      href={button.href}
                      theme="footer"
                      size="lg"
                      target={button.target}
                      iconName={button.iconName as IconName}
                      ariaLabel={`Aller sur ${button.title}`}
                    >
                      <span className="sr-only">{button.title}</span>
                    </CustomBtn>
                  );
                }
              })}
            </div>
            <CustomBtn
              href="/CV-Jeremie-Herault.pdf"
              theme="outline"
              iconName="download"
              download={"CV-Jeremie-Herault.pdf"}
              size="xs"
            >
              Mon CV
            </CustomBtn>
          </div>
        </div>
        <span className="place-self-center">
          Copyright © 2025 - Tous droits réservés
        </span>
      </div>
    </footer>
  );
}
