"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { email, phone, linkedin } from "@/assets/logos";

import Home from "@/pages/landing-page";
import EducationPage from "@/pages/education-page";
import ExperiencePage from "@/pages/experience-page";
import TechnicalSkills from "@/pages/technical-skill-page";
import Projects from "@/pages/project-page";
import { toast } from "sonner";

const pages = [
  { id: "section-1", title: "Home", children: <Home /> },
  { id: "section-2", title: "Education", children: <EducationPage /> },
  { id: "section-3", title: "Experience", children: <ExperiencePage /> },
  { id: "section-4", title: "Skills", children: <TechnicalSkills /> },
  { id: "section-5", title: "Projects", children: <Projects /> },
];

const socialLinks = [
  { name: "Email", icon: email, href: "mailto:dsahani59@hotmail.com" },
  { name: "Phone", icon: phone, href: "tel:+918828977268" },
  {
    name: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/durgesh-sahani-860817340/",
  },
];

export default function ScrollTabsPage() {
  const [activeTab, setActiveTab] = useState("section-1");
  const [visibleSections, setVisibleSections] = useState(
    () => new Set(["section-1"]),
  );

  const scrollContainerRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      setVisibleSections((currentSections) => {
        const nextSections = new Set(currentSections);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nextSections.add(entry.target.id);
          } else {
            nextSections.delete(entry.target.id);
          }
        });
        return nextSections;
      });

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          setActiveTab(currentId);

          const activeTabElement = tabRefs.current[currentId];
          if (activeTabElement) {
            activeTabElement.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        }
      });
    }, observerOptions);

    scrollContainerRef.current
      ?.querySelectorAll("section")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleDownloadCV = () => {
    toast("CV download feature is not implemented yet.", {
      id: "cv-download-toast",
      description: "This feature will be available soon.",
    });
  };
  return (
    <div className="m-0 flex h-dvh w-full flex-col overflow-hidden bg-background p-0 text-secondary">
      {/* 1. Header (Exactly 80px tall) */}
      <header className="hidden md:flex justify-between relative z-40 h-20 shrink-0 border-b border-secondary/10 bg-background/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm p-6">
        <h1 className="truncate whitespace-nowrap text-lg font-bold text-secondary sm:text-xl md:text-2xl">
          Durgesh Portfolio
        </h1>
        <nav className="ml-4 hidden md:block overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="flex flex-row text-[16px] gap-6 lg:gap-8">
            {pages.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <li key={link.id} className="shrink-0">
                  <button
                    ref={(el) => {
                      tabRefs.current[link.id] = el;
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className={`font-sans transition-colors duration-200 hover:text-primary hover:underline hover:underline-offset-4 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-secondary/75"
                    }`}
                  >
                    {link.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* 2. Scrollable Main Container */}
      <main
        ref={scrollContainerRef}
        className="flex-1 w-full overflow-y-auto overflow-x-hidden bg-background snap-y snap-mandatory scroll-smooth px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {pages.map((page) => (
          <section
            key={page.id}
            id={page.id}
            ref={(el) => {
              sectionRefs.current[page.id] = el;
            }}
            className={`snap-start relative flex h-[calc(100dvh-80px)] shrink-0 w-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-background transition-[transform,opacity] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
              page.id === "section-6" || visibleSections.has(page.id)
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {page.children}
          </section>
        ))}
      </main>

      {/* 4. Footer (Exactly 80px tall) */}
      <footer className="relative z-40 flex h-20 shrink-0 items-center justify-center border-t border-secondary/10 bg-background/95 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-6">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-2">
          {/* Left: Branding & Copyright */}
          <div className="flex flex-col">
            <p className="font-heading text-sm font-bold text-secondary md:text-base">
              Durgesh Sahani
            </p>
            <p className="text-xs text-secondary/65">
              © {new Date().getFullYear()} • Software Developer
            </p>
          </div>

          {/* Right: Socials & Resume */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Social Icons - Hidden on very small screens to save space, visible on sm+ */}
            <nav
              aria-label="Social links"
              className="hidden items-center gap-3 sm:flex"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  title={link.name}
                  target={link.name === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    link.name === "LinkedIn" ? "noopener noreferrer" : undefined
                  }
                  // Made rounded-full with subtle scale effect for a modern portfolio feel
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-secondary/15 bg-secondary/5 transition-all duration-300 hover:scale-110 hover:border-primary/60 hover:bg-primary/10 motion-reduce:transition-none"
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                    className="h-8 w-8 opacity-80"
                  />
                </a>
              ))}
            </nav>

            {/* Resume Button */}
            <button
              onClick={handleDownloadCV}
              className="group inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/25 hover:shadow-lg motion-reduce:transition-none"
            >
              Resume
              {/* Arrow animates up and right on hover */}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}