export default function ToolTip({
  txt,
  color,
}: {
  txt: string;
  color: string;
}) {
  const colorText = color !== "none" ? "text-muted" : "text-primary";

  return (
    <span
      className={`absolute z-10 top-[-3.25rem] left-1/2 -translate-x-1/2 -translate-y-[-150%] px-2 py-0.5 text-xs ${colorText} bg-${color} rounded-md whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-[-100%]`}
    >
      {txt}
    </span>
  );
}
