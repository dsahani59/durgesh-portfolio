"use client"; // Required for usePathname hook

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // Get the current active route
  
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Experiences", href: "/experiences" },
    { name: "Technical Skills", href: "/technical-skills" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="p-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Durgesh Portfolio</h1>
        <nav className="ml-4">
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
      </div>
    </header>
  );
};

export default Header;