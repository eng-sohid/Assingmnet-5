import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
function Technologies() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("/Data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <section className="container mx-auto my-4">
      <h2 className="text-3xl font-bold ">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>
      <p className=" text-gray-600 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </section>
  );
}
export default Technologies;
