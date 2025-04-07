import clsx from "clsx";

export default function ToolTip({
  txt,
  color,
  isVisible,
}: {
  txt: string;
  color: string;
  isVisible?: boolean;
}) {
  const colorText = color !== "none" ? "text-muted" : "text-primary";
  const bgColor = color !== "none" ? `bg-${color}` : "";

  return (
    <span
      className={clsx(
        "absolute font-extralight z-40 top-[-3.25rem] left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs rounded-md whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-[-100%]",
        bgColor,
        colorText,
        isVisible
          ? "opacity-100 visible -translate-y-[-100%]"
          : "opacity-0 invisible -translate-y-[-150%]"
      )}
    >
      {txt}
    </span>
  );
}
