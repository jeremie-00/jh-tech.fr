export function ContainerSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="w-full h-full flex flex-col items-center justify-center gap-32 mb-34 lg:mb-96"
    >
      {children}
    </section>
  );
}

export function Content({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start max-lg:flex-col max-lg:items-center gap-12 p-2">
      {children}
      <div className="w-full h-full flex flex-1 flex-col gap-6 lg:px-8">
        <h2 className="min-md:text-5xl text-4xl tracking-wider text-left">
          {title}
        </h2>
        <span className="w-12 h-1 bg-primary rounded-full" />
        <p className="min-md:text-lg text-md text-left lg:pr-8">{text}</p>
      </div>
    </div>
  );
}

export function ContentGrid({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start max-lg:gap-10 gap-16 p-2">
      <div className="w-full h-full flex flex-col text-center gap-8">
        <h2 className="min-md:text-5xl text-4xl tracking-wider max-lg:text-left">
          {title}
        </h2>
        <span className="w-12 h-1 bg-primary rounded-full lg:place-self-center" />
        <p className="min-md:text-xl text-lg md:w-2/3 max-lg:text-left lg:place-self-center">
          {text}
        </p>
      </div>
      {children}
    </div>
  );
}
