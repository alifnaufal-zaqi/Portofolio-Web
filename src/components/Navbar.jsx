import { useState } from "react";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <h1 className="text-4xl font-bold text-primary">Portofolio</h1>
      <ul className="hidden md:flex gap-10 text-lg">
        <li className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          <AnimatedContent>
            <a href="#heroSection">Beranda</a>
          </AnimatedContent>
        </li>
        <li className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          <AnimatedContent>
            <a href="#aboutSection">Tentang Saya</a>
          </AnimatedContent>
        </li>
        <li className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          <AnimatedContent>
            <a href="#skillSection">Skill</a>
          </AnimatedContent>
        </li>
        <li className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          <AnimatedContent>
            <a href="#projectsSection">Projects</a>
          </AnimatedContent>
        </li>
        <li className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          <AnimatedContent>
            <a href="#sertificationsSection">Sertifikasi</a>
          </AnimatedContent>
        </li>
        <li className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-150">
          <AnimatedContent>
            <a href="#contactSection">Kontak</a>
          </AnimatedContent>
        </li>
      </ul>

      <button
        className="md:hidden cursor-pointer text-2xl text-black z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 z-40 py-6">
          <a
            href=""
            className="text-lg hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </a>
          <a
            href=""
            className="text-lg hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Tentang Saya
          </a>
          <a
            href=""
            className="text-lg hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Skill
          </a>
          <a
            href=""
            className="text-lg hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href=""
            className="text-lg hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Sertifikasi
          </a>
          <a
            href=""
            className="text-lg hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
