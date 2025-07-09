import Card from "../components/Card";
import sertifications from "../utils/sertifications";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";

const Sertification = () => {
  return (
    <section className="md:px-32 px-8 py-16">
      <h1 className="md:text-4xl text-2xl font-bold text-primary text-center">
        List sertifikasi yang telah saya peroleh
      </h1>
      <div className="w-full flex justify-center my-4">
        <Button className={"mx-auto font-bold"}>
          <Link to={"/"}>Kembali</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {sertifications.map((s, index) => (
          <AnimatedContent key={index} duration={1.5}>
            <Card className={"shadow-md flex flex-col justify-between h-full"}>
              <img src={s.image} alt={s.title} className="w-3xl" />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h1 className="text-xl font-semibold mb-2">{s.title}</h1>
                <div className="flex md:flex-row gap-2 flex-col">
                  <a
                    href={s.file}
                    download={s.title}
                    className="bg-primary w-full p-2 text-center rounded-md font-bold text-white"
                  >
                    Lihat Detail
                  </a>
                  <a
                    href={s.source}
                    className="bg-slate-300 w-full p-2 text-center rounded-md font-bold"
                  >
                    Sumber
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Sertification;
