import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects";
import Button from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";

const DetailProject = () => {
  const { id } = useParams();
  const selectedProject = projects.find(
    (project) => project.id === parseInt(id)
  );

  return (
    <div className="py-2 rounded-md">
      <div className="flex gap-5">
        <Link to={"/"}>
          <FaArrowLeft className="text-4xl cursor-pointer" />
        </Link>
        <h1 className="text-5xl mb-6 font-bold">{selectedProject.title}</h1>
      </div>
      <figure>
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="mx-auto"
        />
      </figure>
      <p className="mt-8 text-xl">{selectedProject.description}</p>
      <Button className={"w-full mt-4"}>
        <a href={selectedProject.uri}>Kunjungi</a>
      </Button>
    </div>
  );
};

export default DetailProject;
