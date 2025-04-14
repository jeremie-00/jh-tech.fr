import clsx from "clsx";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { RiCodeView, RiSeoLine } from "react-icons/ri";

export type IconName = "default" | "pencil" | "dev" | "seo";

export type ThemeName =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "accent"
  | "icon"
  | "none"
  | "slider";

type SizeName = "sm" | "md" | "lg" | "xl" | "xxl";

interface CardProps {
  children: React.ReactNode;
  theme?: ThemeName;
  size?: SizeName;
  className?: string;
  iconName?: IconName;
  onClick?: () => void;
}

const ICON_MAP = {
  default: MdOutlineDisabledByDefault,
  pencil: FaPencilAlt,
  dev: RiCodeView,
  seo: RiSeoLine,
};

const THEME_STYLES = {
  default: "bg-background",
  primary:
    "bg-background bg-linear-to-tl from-chart-1/10 via-background/20 to-background/20 rounded-sm border-2 border-border",
  secondary: "bg-secondary border-1 border-border",
  outline: "bg-background border-1 border-border",
  accent: "bg-accent border-1 border-border",
  none: "border-none shadow-none bg-transparent",
  icon: "bg-background border-1 border-border w-fit p-2 rounded-2xl",
  slider:
    "relative z-20 mx-4 group items-start justify-start w-full h-full min-w-[200px] min-h-[400px] max-w-[800px] max-h-[800px] p-8 gap-8 border-2 border-border rounded-md rounded-bl-4xl  bg-linear-to-tl from-primary/20 via-background/20 to-background/20 overflow-hidden",
};

const SIZE_CLASSES = {
  sm: "text-[1rem]",
  md: "text-[1.25rem]",
  lg: "text-[1.5rem]",
  xl: "text-[1.75rem]",
  xxl: "text-[2rem]",
};

export const CustomCard = React.memo(function CustomCard(props: CardProps) {
  const {
    children,
    theme = "default",
    className,
    size = "sm",
    iconName,
    onClick,
  } = props;

  const baseClass = "flex flex-col";

  const getThemeClasses = () => {
    const themeStyle = THEME_STYLES[theme];
    return themeStyle;
  };

  const getSizeClasses = () => SIZE_CLASSES[size] || "";

  const IconComponent = iconName ? ICON_MAP[iconName] : null;

  const commonProps = {
    className: clsx(baseClass, getThemeClasses(), getSizeClasses(), className),
  };

  return (
    <div {...commonProps} onClick={onClick}>
      {IconComponent && <IconComponent size={42} />}
      {children}
    </div>
  );
});
