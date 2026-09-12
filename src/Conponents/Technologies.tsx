import { useState } from "react";
import TechnologyCard from "./TechnologyCard";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologiesProps = {
  technologies: Technology[];
};

function Technologies({ technologies }: TechnologiesProps) {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      alert("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="container mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="text-gray-600 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-8">
        {/* Technology Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={stack.some((item) => item.id === technology.id)}
              onAdd={handleAddToStack}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="border rounded-xl p-5 h-fit">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Your Stack</h3>

            <span className="text-sm text-gray-400">
              {stack.length} Technology Selected
            </span>
          </div>

          {stack.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              Your stack is empty.
            </p>
          ) : (
            <div className="space-y-3 mt-4">
              {stack.map((technology) => (
                <div
                  key={technology.id}
                  className="border rounded-lg p-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-8 h-8"
                    />

                    <div>
                      <h4 className="font-semibold">{technology.name}</h4>
                      <p className="text-xs text-gray-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(technology.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={handleRemoveAll}
                className="w-full border border-red-300 text-red-500 py-2 rounded-lg mt-4"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
