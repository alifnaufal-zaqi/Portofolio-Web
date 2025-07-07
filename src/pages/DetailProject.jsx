import { useParams } from "react-router-dom";

const DetailProject = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Detail Project {id}</p>
    </div>
  );
};

export default DetailProject;
