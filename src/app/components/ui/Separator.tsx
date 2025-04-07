export default function Separator() {
  return <span className="w-12 h-1 bg-primary rounded-full" />;
}

export function SeparatorCards() {
  return (
    <div className="flex items-center gap-1 z-20">
      <span className="w-10 h-1 bg-primary rounded-full" />
      <span className="w-3 h-1 bg-primary rounded-full" />
    </div>
  );
}
