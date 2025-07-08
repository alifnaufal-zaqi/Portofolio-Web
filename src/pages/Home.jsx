import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Card from "../components/Card";
import projects from "../utils/projects";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import TextAreaInput from "../components/TextAreaInput";
import Footer from "../components/Footer";

const Home = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    {
      name: "HTML",
      logo: "Techstack/HTML.png",
    },
    {
      name: "CSS",
      logo: "Techstack/CSS.png",
    },
    {
      name: "Javascript",
      logo: "Techstack/JS.jpg",
    },
    {
      name: "PHP",
      logo: "Techstack/PHP.png",
    },
    {
      name: "TailwindCSS",
      logo: "Techstack/TailwindCSS.png",
    },
    {
      name: "React JS",
      logo: "Techstack/React.png",
    },
    {
      name: "Node JS",
      logo: "Techstack/NodeJS.png",
    },
    {
      name: "MySQL",
      logo: "Techstack/MySQL.png",
    },
    {
      name: "PostgreSQL",
      logo: "Techstack/PostgreSQL.png",
    },
  ];

  return (
    <>
      <section className="px-4 md:px-16 lg:px-32 py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
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
        <div>
          <img
            src="/ALIF-PNG.jpg"
            alt=""
            className="w-48 md:w-72 aspect-square object-cover object-top rounded-full"
          />
        </div>
      </section>

      <section className="px-4 md:px-16 lg:px-32 py-8 mt-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">Tentang Saya</h1>
          <p>
            Saya adalah mahasiswa semester 4 di Kampus Institut Widya Pratama
            Jurusan Informatika. Saya memiliki minat besar pada web development
            baik disisi Front End maupun Back End. Saya sekarang sedang
            mempelajari bahasa pemrograman javascript dan ekosistem nya pada
            platform dicoding dan saya sudah berhasil meluluskan diri saya di
            beberapa kelas Front End Web Development dan Back End Web
            Development dengan sertifikat yang saya dapati. Saya juga aktif
            dalam mengikuti orgnisasi kampus seperti UKM dan kegiatan lain
            seperti workshop dan seminar.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary">Mari Berteman</h1>
          <p className="text-lg mb-4">
            Mari berteman dengan menghubungi sosial media milik saya dibawah ini
          </p>
          <div className="flex gap-4">
            <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
              <FaGithub className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
            </div>
            <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
              <FaInstagram className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
            </div>
            <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
              <FaWhatsapp className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
            </div>
            <div className="border-2 border-black rounded-full p-1 cursor-pointer hover:bg-primary">
              <FaLinkedin className="text-3xl hover:text-white transition-all ease-in-out duration-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 py-8 mt-36">
        <h1 className="text-4xl text-primary font-bold text-center mb-4">
          Skill
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <div
              className="shadow-md rounded-md p-4 flex items-center gap-4 hover:shadow-lg cursor-pointer"
              key={index}
            >
              <img src={skill.logo} alt={skill.name} className="w-16" />
              <p className="text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 py-8 mt-36">
        <h1 className="text-4xl font-bold text-primary text-center">
          Projects
        </h1>
        <p className="text-xl text-center mb-4">
          Dibawah ini adalah project yang sudah saya bangun.
        </p>
        <div className="p-4 bg-slate-200 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card key={project.id}>
              <div>
                <img
                  src={project.image}
                  className="w-[104] object-cover rounded-tl-md rounded-tr-md"
                  alt=""
                />
              </div>
              <div className="p-4">
                <h1 className="my-4 text-3xl font-semibold">{project.title}</h1>
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
          ))}
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 py-8 mt-36">
        <h1 className="text-4xl font-bold text-primary text-center">
          Sertifikasi
        </h1>
        <p className="text-xl text-center mb-4">
          Dibawah ini adalah sertifikasi yang saya peroleh
        </p>
        <div className="w-full flex justify-center">
          <Button className={"mx-auto font-bold"}>
            <Link to={"/sertification"}>Lihat sertifikasi</Link>
          </Button>
        </div>
      </section>

      <section className="px-4 md:px-16 lg:px-32 py-8 mt-36">
        <h1 className="text-4xl font-bold text-primary text-center">
          Hubungi Saya
        </h1>
        <form className="md:px-32 mt-8 space-y-4">
          <Input
            type={"text"}
            name={"name"}
            label={"Nama"}
            htmlFor={"name"}
            placeholder={"Isikan nama anda"}
            onInputChange={(event) =>
              setUserInput({ ...userInput, name: event.target.value })
            }
          />
          <Input
            type={"text"}
            name={"email"}
            label={"Email"}
            htmlFor={"email"}
            placeholder={"Isikan email anda"}
            onInputChange={(event) =>
              setUserInput({ ...userInput, email: event.target.value })
            }
          />
          <TextAreaInput
            label={"Message"}
            htmlFor={"message"}
            id={"messageInput"}
            name={"message"}
            placeholder={"Isikan pesan yang ingin disampaikan"}
          />
          <Button className={"w-full font-bold"}>Kirim</Button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Home;
