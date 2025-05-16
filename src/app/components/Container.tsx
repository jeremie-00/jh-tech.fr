"use client";

import React, { useRef } from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:px-24 lg:px-14 xl:px-12 2xl:px-0 px-1 max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}

export function ContainerSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={ref}
      id={id}
      className="w-full h-full bg-background relative z-30"
    >
      {children}
    </section>
  );
}

export function ContentFlexCol({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-24 pb-12">
      {children}
    </div>
  );
}
