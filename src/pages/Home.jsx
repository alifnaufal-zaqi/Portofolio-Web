import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Card from "../components/Card";
import projects from "../utils/projects";
import skills from "../utils/skills";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import TextAreaInput from "../components/TextAreaInput";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";

const Home = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = userInput;
    if (!name || !email || !message) {
      alert("Gagal mengirim pesan. Mohon lengkapi semua kolom.");
      return;
    }

    const text = `Hallo saya ${name}
                  Email: ${email}, ingin menyampaikan pesan: ${message}`;
    const phoneNumber = "6285156511689";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <section
        className="px-4 md:px-16 scroll-mt-24 lg:px-32 py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8"
        id="heroSection"
      >
        <AnimatedContent direction="horizontal" reverse={true} duration={2}>
          <div className="text-center md:text-left">
            <p className="text-primary text-2xl font-semibold">
              Hallo 👋, Perkenalkan Saya
            </p>
            <h1 className="text-5xl font-bold mt-4">Alif Naufal Zaqi</h1>
            <h2 className="my-4 text-xl">Junior Web Developer</h2>
            <a
              href="/myCV.pdf"
              download={"ALIF NAUFAL ZAQI-CV ATS"}
              className="inline-block p-2 text-lg font-bold text-white rounded-md bg-secondary border-2 border-secondary hover:bg-transparent hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </AnimatedContent>
        <AnimatedContent direction="horizontal" duration={2}>
          <div>
            <img
              src="/ALIF-PNG.jpg"
              alt="Photo-Alif"
              className="w-48 md:w-72 aspect-square object-cover object-top border-4 border-primary rounded-full"
            />
          </div>
        </AnimatedContent>
      </section>

      <AnimatedContent duration={1.8}>
        <section
          className="px-4 md:px-16 scroll-mt-32 lg:px-32 py-8 mt-6 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          id="aboutSection"
        >
          <div>
            <h1 className="text-3xl font-bold text-primary mb-4">
              Tentang Saya
            </h1>
            <p>
              Saya adalah mahasiswa semester 4 di Institut Widya Pratama,
              Jurusan Informatika. Saya memiliki minat besar dalam pengembangan
              web, baik di sisi Front End maupun Back End. Saat ini, saya sedang
              mempelajari bahasa pemrograman JavaScript dan ekosistemnya melalui
              platform Dicoding. Saya telah menyelesaikan beberapa kelas seperti
              Front End Web Development dan Back End Web Development, serta
              memperoleh sertifikat dari kelas tersebut. Saya juga aktif
              mengikuti organisasi kampus seperti UKM, serta berbagai kegiatan
              seperti workshop dan seminar.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary">Mari Berteman</h1>
            <p className="text-lg mb-4">
              Mari berteman dengan menghubungi sosial media milik saya dibawah
              ini
            </p>
            <div className="flex gap-4">
              <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
                <a href="https://github.com/alifnaufal-zaqi">
                  <FaGithub className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
                </a>
              </div>
              <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
                <a href="https://www.instagram.com/zackky.404/">
                  <FaInstagram className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
                </a>
              </div>
              <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
                <a href="https://wa.me/6285156511689">
                  <FaWhatsapp className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
                </a>
              </div>
              <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
                <a href="https://www.linkedin.com/in/alif-naufal-9090242a3/">
                  <FaLinkedin className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>
      <section
        className="px-4 md:px-16 lg:px-32 py-8 scroll-mt-32 mt-36"
        id="skillSection"
      >
        <h1 className="text-4xl text-primary font-bold text-center mb-4">
          Skill
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-8">
          {skills.map((skill, index) => (
            <AnimatedContent key={index} className="p-4">
              <div className="shadow-md h-24 rounded-md p-4 flex md:flex-row flex-col items-center gap-4 hover:shadow-lg cursor-pointer">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 md:w-16"
                />
                <p className="md:text-xl text-base">{skill.name}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>
      <section
        className="px-4 md:px-16 lg:px-32 py-8 mt-8 md:mt-36 scroll-mt-32"
        id="projectsSection"
      >
        <h1 className="text-4xl font-bold text-primary text-center">
          Projects
        </h1>
        <p className="text-xl text-center mb-4">
          Berikut adalah beberapa proyek yang telah saya bangun.
        </p>
        <div className="p-4 bg-slate-200 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <AnimatedContent key={project.id}>
              <Card>
                <div>
                  <img
                    src={project.image}
                    className="w-full aspect-auto rounded-tl-md rounded-tr-md"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <h1 className="my-4 text-3xl font-semibold">
                    {project.title}
                  </h1>
                  <p className="text-lg mb-2">Teknologi yang dipakai</p>
                  <div className="flex gap-4">
                    {project.technology.map((t, index) => (
                      <img src={t} className="w-8" key={index} />
                    ))}
                  </div>
                  <Button className={"w-full mt-4"}>
                    <Link to={`/project/${project.id}`}>Detail</Link>
                  </Button>
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </section>
      <section
        className="px-4 md:px-16 lg:px-32 py-8 mt-8 md:mt-36 scroll-mt-32"
        id="sertificationsSection"
      >
        <h1 className="text-4xl font-bold text-primary text-center">
          Sertifikasi
        </h1>
        <p className="text-xl text-center mb-4">
          Berikut adalah sertifikasi yang telah saya peroleh.
        </p>
        <div className="w-full flex justify-center">
          <Button className={"mx-auto font-bold"}>
            <Link to={"/sertifications"}>Lihat sertifikasi</Link>
          </Button>
        </div>
      </section>

      <section
        className="px-4 md:px-16 lg:px-32 py-8 mt-8 md:mt-36 scroll-mt-32"
        id="contactSection"
      >
        <h1 className="text-4xl font-bold text-primary text-center">
          Hubungi Saya
        </h1>
        <AnimatedContent direction="horizontal">
          <form className="md:px-32 mt-8 space-y-4" onSubmit={handleSubmit}>
            <Input
              type={"text"}
              id={"name"}
              name={"name"}
              label={"Nama"}
              value={userInput.name}
              htmlFor={"name"}
              placeholder={"Isikan nama anda"}
              onInputChange={(event) =>
                setUserInput({ ...userInput, name: event.target.value })
              }
            />
            <Input
              type={"text"}
              id={"email"}
              name={"email"}
              label={"Email"}
              value={userInput.email}
              htmlFor={"email"}
              placeholder={"Isikan email anda"}
              onInputChange={(event) =>
                setUserInput({ ...userInput, email: event.target.value })
              }
            />
            <TextAreaInput
              label={"Message"}
              value={userInput.message}
              htmlFor={"message"}
              id={"message"}
              name={"message"}
              placeholder={"Isikan pesan yang ingin disampaikan"}
              onInputChange={(event) =>
                setUserInput({ ...userInput, message: event.target.value })
              }
            />
            <Button className={"w-full font-bold"} type="submit">
              Kirim
            </Button>
          </form>
        </AnimatedContent>
      </section>
    </>
  );
};

export default Home;
