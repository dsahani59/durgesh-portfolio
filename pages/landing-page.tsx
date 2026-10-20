"use client";

import Image from "next/image";
import { Person } from "@/assets/image";

export default function Home() {
  return (
    <section className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-2 px-3 py-2 sm:gap-4 sm:px-4 md:flex-row md:gap-12 md:py-0 lg:gap-16">
      <Image
        src={Person}
        alt="Durgesh Sahani"
        loading="eager"
        unoptimized
        className="h-38 w-32 shrink-0 rounded-full border-4 border-primary object-cover shadow-lg transition-transform duration-300 hover:scale-105 md:h-80 md:w-80"
      />

      <div className="flex w-full max-w-4xl min-w-0 flex-col items-center text-center md:items-start md:text-left space-y-2">
        <h1 className="text-xl">
          Hello,
          <b className="block font-bold text-primary text-3xl">
            I&apos;m Durgesh Sahani
          </b>
        </h1>

        <p className="text-sm leading-5">
          A Developer who believes in{" "}
          <b className="text-primary">clean code & smart solutions.</b>
        </p>

        <h2 className="text-lg font-bold">I’m a Software Developer.</h2>

        <p className="text-sm leading-5 text-secondary/80">
          I work at{" "}
          <b className="text-primary">Techaroha Solutions Private Limited</b>,
          where I design, build and maintain production-ready web applications.
          I focus on writing maintainable code, keeping interfaces fast and
          intuitive, and turning real business requirements into reliable
          products.
        </p>

        <ul className="space-y-1 text-sm leading-5 text-secondary/80">
          <li>
            <b className="text-primary">OrbitQR</b> – a public, target-focused
            project that I contribute to, built for real users.
          </li>
          <li>
            <b className="text-primary">Carbon Plant</b> – an
            organization-level project where I contribute to building scalable,
            enterprise-grade solutions.
          </li>
        </ul>
      </div>
    </section>
  );
}