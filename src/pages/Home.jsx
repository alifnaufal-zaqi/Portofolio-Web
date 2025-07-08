import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Card from "../components/Card";
import projects from "../utils/projects";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="py-4">
        <p className="text-primary text-2xl font-semibold">
          Hallo 👋, Perkenalkan Saya
        </p>
        <h1 className="text-5xl font-bold mt-4">Alif Naufal Zaqi</h1>
        <h2 className="my-4 text-xl">Junior Web Developer</h2>
        <a
          href="/myCV.pdf"
          download={"ALIF NAUFAL ZAQI-CV ATS"}
          className="p-2 text-lg font-bold text-white rounded-md bg-secondary border-2 border-secondary hover:bg-transparent hover:text-black transition ease-in-out duration-150"
        >
          Download CV
        </a>
      </section>
      <section className="py-4 mt-8 grid grid-cols-2 gap-16">
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
      <section className="py-8 mt-36">
        <h1 className="text-4xl font-bold text-primary text-center">
          Projects
        </h1>
        <p className="text-xl text-center mb-4">
          Dibawah ini adalah project yang sudah saya bangun.
        </p>
        <div className="p-4 bg-slate-200 rounded-md grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id}>
              <div>
                <img
                  src={project.image}
                  className="w-[104] object-cover"
                  alt=""
                />
              </div>
              <div className="p-4">
                <h1 className="my-4 text-3xl font-semibold">{project.title}</h1>
                <p className="text-lg mb-2">Teknologi yang dipakai</p>
                <div className="flex gap-4">
                  {project.technology.map((t) => (
                    <img src={t} className="w-8" />
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
      <section className="py-8 mt-36">
        <h1 className="text-4xl font-bold text-primary text-center">
          Sertifikasi
        </h1>
        <p className="text-xl text-center mb-4">
          Dibawah ini adalah sertifikasi yang saya peroleh
        </p>
        <div className="w-full">
          <Button className={"mx-auto"}>
            <Link to={"/sertification"}>Lihat sertifikasi</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
