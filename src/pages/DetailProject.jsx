import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects";
import Button from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";

const DetailProject = () => {
  const { id } = useParams();
  const selectedProject = projects.find(
    (project) => project.id === parseInt(id)
  );

  if (!selectedProject) {
    return (
      <p className="text-center mt-10 text-xl">Project tidak ditemukan.</p>
    );
  }

  return (
    <div className="px-4 md:px-16 lg:px-32 py-8">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <Link to={"/"}>
          <FaArrowLeft className="text-3xl text-primary hover:text-secondary transition cursor-pointer" />
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold">
          {selectedProject.title}
        </h1>
      </div>

      {/* Gambar */}
      <figure className="w-full flex justify-center">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-md w-full max-w-3xl object-contain"
        />
      </figure>

      {/* Deskripsi */}
      <p className="mt-8 text-base md:text-xl leading-relaxed text-justify">
        {selectedProject.description}
      </p>

      {/* Tombol */}
      <div className="mt-6">
        <Button className={"w-full md:w-auto font-bold"}>
          <a
            href={selectedProject.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kunjungi
          </a>
        </Button>
      </div>
    </div>
  );
};

export default DetailProject;
