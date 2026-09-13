"use client"; // Required for usePathname hook

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { email, phone, linkedin, location } from "@/assets/logos";
import Image from "next/image";
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/" },
    { name: "Educations", href: "/educations" },
    { name: "Experiences", href: "/experiences" },
    { name: "Projects", href: "/projects" },
    { name: "Technical Skills", href: "/technical-skills" },
  ];
  const SocialLinks = [
    {
      name: "Email",
      icon: email,
      href: "mailto:example@example.com",
    },
    {
      name: "Phone",
      icon: phone,
      href: "tel:+1234567890",
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      href: "https://www.linkedin.com/in/durgesh",
    },
    {
      name: "Location",
      icon: location,
      href: "https://github.com/durgesh",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-40 p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-4xl font-bold text-white">
          Durgesh Portfolio
        </h1>
        <nav className="ml-4 hidden md:block">
          <ul className="flex flex-row text-xl gap-8">
            {navLinks.map((link, index) => {
              // Check if the current pathname matches the link's href
              const isActive = pathname === link.href;

              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`hover:underline hover:underline-offset-4 transition-colors duration-200 ${
                      isActive ? "text-secondary font-semibold" : "text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className="block md:hidden text-secondary px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        {isMenuOpen && (
          <div
            className="fixed inset-0 right-0 top-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="absolute top-0 right-0 max-w-xs flex flex-col justify-between bg-background h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex flex-row items-center gap-4 my-4">
                  <h1 className="text-xl font-bold text-white">
                    Durgesh Portfolio
                  </h1>
                  <button
                    className="text-secondary p-2 rounded-md hover:bg-primary/80 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <ul className="flex flex-col text-xl gap-4 md:gap-8 p-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={index}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`text-md hover:underline hover:underline-offset-4 transition-colors duration-200 ${
                            isActive
                              ? "text-secondary font-semibold"
                              : "text-primary"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col space-y-4 mx-auto">
                <span className="text-xl font-bold text-primary ">
                  Connect with me
                </span>
                <div className="flex space-x-4 mx-6">
                  {SocialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors duration-200"
                    >
                      {/* Ensure you have these images in your public/logos folder */}
                      <Image
                        src={link.icon}
                        alt={link.name}
                        unoptimized
                        className="w-8 h-8 rounde-full transition-transform duration-200 hover:scale-125"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
