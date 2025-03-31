import Separator from "./ui/Separator";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        <Separator />
        <div className="min-md:text-lg text-md text-left lg:pr-8 font-light">
          <ReactMarkdown
            components={{
              strong: ({ children }) => (
                <strong className="text-primary/80 font-bold">
                  {children}
                </strong>
              ),
            }}
            remarkPlugins={[remarkGfm]}
          >
            {text}
          </ReactMarkdown>
        </div>
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
      <div className="w-full h-full flex flex-col text-center items-left md:items-center gap-8">
        <h2 className="min-md:text-5xl text-4xl tracking-wider max-md:text-left">
          {title}
        </h2>
        <Separator />
        <div className="min-md:text-xl text-lg md:w-2/3 max-md:text-left md:place-self-center">
          <ReactMarkdown
            components={{
              strong: ({ children }) => (
                <strong className="text-primary font-bold">{children}</strong>
              ),
            }}
            remarkPlugins={[remarkGfm]}
          >
            {text}
          </ReactMarkdown>
        </div>
      </div>
      {children}
    </div>
  );
}
