import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="px-4 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
          <div>
            <h1 className="text-3xl text-white font-bold mb-4">
              Informasi lainnya
            </h1>
            <ul className="text-white text-xl space-y-1">
              <li>Email: kenjichannelzaky@gmail.com</li>
              <li>Alamat: Pemalang, Jawa Tengah, Indonesia</li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl text-white font-bold mb-4">Tautan</h1>
            <ul className="space-y-1">
              {[
                { name: "Beranda", href: "#heroSection" },
                { name: "Tentang Saya", href: "#aboutSection" },
                { name: "Skill", href: "#skillSection" },
                { name: "Projects", href: "#projectsSection" },
                { name: "Sertifikasi", href: "#sertificationsSection" },
                { name: "Kontak", href: "#contactSection" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-lg text-white hover:text-black transition-all ease-in-out duration-150"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl text-white font-bold">Hubungi Saya</h1>
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            {[
              { icon: FaGithub, href: "https://github.com/alifnaufal-zaqi" },
              {
                icon: FaInstagram,
                href: "https://www.instagram.com/zackky.404/",
              },
              { icon: FaWhatsapp, href: "https://wa.me/6285156511689" },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/alif-naufal-9090242a3/",
              },
            ].map((Icon, i) => (
              <div
                key={i}
                className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-black"
              >
                <a href={Icon.href}>
                  <Icon.icon className="text-3xl hover:text-white transition-all duration-100" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
