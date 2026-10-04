import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { email, phone, linkedin } from "@/assets/logos";

const socialLinks = [
  { name: "Email", icon: email, href: "mailto:dsahani59@hotmail.com" },
  { name: "Phone", icon: phone, href: "tel:+918828977268" },
  {
    name: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/durgesh-sahani-860817340/",
  },
];

const Footer = () => {
  return (
    // Changed to h-full to inherit the 80px height from the parent layout
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
        <nav aria-label="Social links" className="hidden items-center gap-3 sm:flex">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              title={link.name}
              target={link.name === "LinkedIn" ? "_blank" : undefined}
              rel={link.name === "LinkedIn" ? "noopener noreferrer" : undefined}
              // Made rounded-full with subtle scale effect for a modern portfolio feel
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary/15 bg-secondary/5 transition-all duration-300 hover:scale-110 hover:border-primary/60 hover:bg-primary/10 motion-reduce:transition-none"
            >
              <Image
                src={link.icon}
                alt=""
                width={18}
                height={18}
                unoptimized
                className="h-[18px] w-[18px] opacity-80"
              />
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          // Added group hover effects for a premium feel
          className="group inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/25 hover:shadow-lg motion-reduce:transition-none"
        >
          Resume
          {/* Arrow animates up and right on hover */}
          <ArrowUpRight 
            aria-hidden="true" 
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
          />
        </a>
      </div>
      
    </div>
  );
};

export default Footer;