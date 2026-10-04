"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

import Footer from "@/component/footer";
import Home from "@/component/pages/landing-page";
import EducationPage from "@/component/pages/education-page";
import ExperiencePage from "@/component/pages/experience-page";
import TechnicalSkills from "@/component/pages/technical-skill-page";
import Projects from "@/component/pages/project-page";

const pages = [
  { id: "section-1", title: "Home", children: <Home /> },
  { id: "section-2", title: "Education", children: <EducationPage /> },
  { id: "section-3", title: "Experience", children: <ExperiencePage /> },
  { id: "section-4", title: "Skills", children: <TechnicalSkills /> },
  { id: "section-5", title: "Projects", children: <Projects /> },
];

export default function ScrollTabsPage() {
  const [activeTab, setActiveTab] = useState("section-1");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  return (
    <div className="m-0 flex h-[100dvh] w-full flex-col overflow-hidden bg-background p-0 text-secondary">
      
      {/* 1. Header (Exactly 80px tall) */}
      <header className="relative z-40 h-[80px] shrink-0 border-b border-secondary/10 bg-background/95 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-6">
        <div className="container mx-auto flex h-full items-center justify-between">
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
                      ref={(el) => { tabRefs.current[link.id] = el; }}
                      onClick={() => scrollToSection(link.id)}
                      className={`font-sans transition-colors duration-200 hover:text-primary hover:underline hover:underline-offset-4 ${
                        isActive ? "text-primary font-semibold" : "text-secondary/75"
                      }`}
                    >
                      {link.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            aria-label="Open menu"
            className="block rounded-md p-2 text-secondary transition-colors duration-200 hover:bg-secondary/10 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {isMenuOpen && (
            <div
              className="fixed inset-0 right-0 top-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className="absolute right-0 top-0 flex h-full w-[280px] max-w-[80vw] flex-col justify-between border-l border-secondary/10 bg-[#11071f] p-5 shadow-2xl animate-in slide-in-from-right-full duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="mb-8 flex flex-row items-center justify-between">
                    <h1 className="text-xl font-bold text-secondary">Menu</h1>
                    <button
                      aria-label="Close menu"
                      className="rounded-md p-2 text-secondary transition-colors duration-200 hover:bg-secondary/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <ul className="flex flex-col gap-6 p-2 text-lg">
                    {pages.map((link) => {
                      const isActive = activeTab === link.id;
                      return (
                        <li key={link.id}>
                          <button
                            onClick={() => scrollToSection(link.id)}
                            className={`w-full text-left font-sans transition-colors duration-200 ${
                              isActive ? "text-primary font-bold" : "text-secondary/80"
                            }`}
                          >
                            {link.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 2. Scrollable Main Container */}
      <main
        ref={scrollContainerRef}
        className="flex-1 w-full overflow-y-auto overflow-x-hidden bg-background snap-y snap-mandatory scroll-smooth px-4 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {pages.map((page) => (
          <section
            key={page.id}
            id={page.id}
            ref={(el) => {
              sectionRefs.current[page.id] = el;
            }}
            // 3. THE FIX: Height is strictly calculated as 100dvh - 160px (80px header + 80px footer).
            // 'shrink-0' ensures the flex container doesn't try to compress it.
            className={`snap-start relative flex h-[calc(100dvh-160px)] shrink-0 w-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-background transition-[transform,opacity] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
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
      <footer className="relative z-40 flex h-[80px] shrink-0 items-center justify-center border-t border-secondary/10 bg-background/95 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-6">
        <Footer />
      </footer>
      
    </div>
  );
}