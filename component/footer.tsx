import { email, phone, linkedin, location } from "@/assets/logos";
import Image from "next/image";
const Footer = () => {
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
    <footer className="p-4 flex justify-around items-center">
      {/* Left Section */}
      <div className="flex flex-col space-y-4">
        <span className="text-xl font-bold text-primary">
          Made with ❤️ by Durgesh
        </span>
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} Durgesh Portfolio. All rights
          reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-4">
        <span className="text-xl font-bold text-primary">Connect with me</span>
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
    </footer>
  );
};

export default Footer;
