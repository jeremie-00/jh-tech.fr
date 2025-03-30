import datas from "../../datas.json";
import { CustomBtn, IconName } from "../buttons/custom-buttons";

export default function Footer() {
  return (
    <footer className="relative w-full h-full flex items-center justify-between md:p-12 p-4 z-40 bg-background border-t border-primary mt-24 text-foreground/60">
      <div className="flex flex-col items-left text-[0.75rem] gap-1">
        <CustomBtn
          href="#home"
          theme="footer"
          size="xs"
          className="justify-start"
        >
          <span className="flex items-center gap-2 font-bold tracking-wider">
            <div className="w-2 h-2 rounded-full bg-primary self-center" />
            Jérémie Hérault
          </span>
        </CustomBtn>
        <span>Copyright © 2025 - Tous droits réservés</span>
        <CustomBtn
          href={"/pages/legal"}
          theme="footer"
          size="xs"
          className="justify-start"
        >
          Mention legal
        </CustomBtn>
      </div>

      <div className="flex items-center place-self-start gap-4 max-md:flex-col">
        {datas.home.buttons.map((button, idx) => {
          if (button.title !== "Contact") {
            return (
              <span key={idx} className={`relative z-20 group`}>
                <CustomBtn
                  //key={button.title}
                  href={button.href}
                  theme="footer"
                  size="lg"
                  target={button.target}
                  iconName={button.iconName as IconName}
                  ariaLabel={`Aller sur ${button.title}`}
                >
                  <span className="sr-only">{button.title}</span>
                </CustomBtn>
              </span>
            );
          }
        })}
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
    </footer>
  );
}
