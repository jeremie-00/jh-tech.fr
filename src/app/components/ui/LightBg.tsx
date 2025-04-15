import clsx from "clsx";

export function LightBg() {
  return (
    <div
      className={clsx(
        `w-14 h-14 rounded-full absolute sm:-top-10 top-0 -right-0 z-10 blur-3xl bg-radial-[circle_at_center] from-green-50 via-green-100 to-green-200`
      )}
    />
  );
}
