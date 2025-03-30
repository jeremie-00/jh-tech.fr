import clsx from "clsx";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoIosSend, IoMdClose } from "react-icons/io";
import {
  IoAddSharp,
  IoGlobeOutline,
  IoLogoGithub,
  IoMenuOutline,
  IoTrash,
} from "react-icons/io5";
import {
  MdMailOutline,
  MdOutlineDisabledByDefault,
  MdOutlineTextSnippet,
} from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { RxDownload } from "react-icons/rx";
export type IconName =
  | "github"
  | "download"
  | "mail"
  | "menu"
  | "globe"
  | "arrow"
  | "plane"
  | "edit"
  | "close"
  | "delete"
  | "validate"
  | "add";

export type ThemeName =
  | "default"
  | "primary"
  | "highlight"
  | "hoverPrimary"
  | "outline"
  | "card"
  | "footer";

type SizeName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  theme?: ThemeName;
  size?: SizeName;
  target?: boolean;
  download?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  isActive?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  iconName?: IconName;
  afterOrigine?: "left" | "right" | "center";
}

const ICON_MAP = {
  github: IoLogoGithub,
  linkedin: AiFillLinkedin,
  mail: MdMailOutline,
  download: RxDownload,
  menu: IoMenuOutline,
  home: BiHomeAlt,
  about: RiUser3Line,
  work: CgToolbox,
  resume: MdOutlineTextSnippet,
  globe: IoGlobeOutline,
  arrow: BsArrowUp,
  plane: IoIosSend,
  edit: FiEdit,
  close: IoMdClose,
  delete: IoTrash,
  validate: FaCheck,
  add: IoAddSharp,
};

const THEME_STYLES = {
  default: "flex gap-2",
  primary:
    "flex items-center gap-2 bg-primary text-accent hover:bg-primary/80 px-4 py-2 rounded-md shadow",
  highlight: "flex items-center gap-2 rounded-md hover:bg-primary-foreground",
  hoverPrimary: "text-foreground hover:text-primary",
  outline:
    "flex gap-2 rounded-md p-2 bg-background border border-border hover:border-primary/80 hover:text-primary",
  card: "md:w-full rounded-md md:px-8 px-2 md:gap-4 gap-2 py-1 bg-primary-foreground text-foreground hover:bg-primary/80",
  footer: "text-foreground/60 hover:text-primary",
};

const SIZE_CLASSES = {
  xs: "text-[0.75rem]",
  sm: "text-[1rem]",
  md: "text-[1.25rem]",
  lg: "text-[1.5rem]",
  xl: "text-[1.75rem]",
  xxl: "text-[2rem]",
};

export const CustomBtn = (props: ButtonProps) => {
  const {
    children,
    theme = "default",
    className,
    size = "sm",
    target = false,
    href,
    download,
    onClick,
    ariaLabel,
    type = "button",
    disabled = false,
    iconName,
  } = props;

  const baseClass =
    "flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer";

  const getThemeClasses = () => {
    const themeStyle = THEME_STYLES[theme];
    return themeStyle || "";
  };

  const getSizeClasses = () => SIZE_CLASSES[size] || "";

  const IconComponent = iconName
    ? ICON_MAP[iconName] || MdOutlineDisabledByDefault
    : null;

  const commonProps = {
    className: clsx(
      baseClass,
      getThemeClasses(),
      getSizeClasses(),
      className,
      disabled && "opacity-40 cursor-not-allowed hover:border-border"
    ),
    "aria-label": ariaLabel,
  };

  if (download) {
    return (
      <a {...commonProps} href={href} download={download}>
        {IconComponent && <IconComponent />}
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        {...commonProps}
        href={href || "#"}
        target={target ? "_blank" : undefined}
        onClick={onClick}
        rel="noopener noreferrer"
      >
        {IconComponent && <IconComponent />}
        {children}
      </Link>
    );
  }

  return (
    <button {...commonProps} onClick={onClick} type={type} disabled={disabled}>
      {IconComponent && <IconComponent />}
      {children}
    </button>
  );
};
