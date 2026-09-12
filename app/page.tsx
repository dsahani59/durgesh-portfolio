import { Person } from "@/assets/image";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1">
      <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
        <Image src={Person} alt="Person" height={600} unoptimized />
        <div className="flex flex-col items-start text-left ml-12 max-w-2xl">
          <h1 className="text-2xl mb-6">
            Hello! ,{" "}
            <b className="text-primary font-bold text-4xl">
              I&apos;m Durgesh Sahani
            </b>
          </h1>
          <p className="text-md mb-4">
            A Developer who believes in{" "}
            <b className="text-primary">clean code & smart solutions.</b>
          </p>
          <span className="text-4xl font-bold mb-6 block">
            I’m a Software Engineer.
          </span>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
            I am currently working as a Software Developer at Techaroha
            Solutions Private Limited. In this role, I am responsible for
            driving the development of key digital initiatives. My primary focus
            includes managing the Carbon Plant project, a comprehensive
            organizational platform. Additionally, I develop and maintain
            OrbitQR, a dynamic public-facing website.
          </p>
          <div className="flex justify-end items-end">
            <button className="bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary hover:text-primary transition-colors cursor-pointer duration-200">
              Download CV
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
