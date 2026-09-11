import { useState } from "react";

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

type TechnologyCardProps = {
  technology: Technology;
};

function TechnologyCard({ technology }: TechnologyCardProps) {
  const [added, setAdded] = useState(false);
  return (
    <div className="border rounded-xl p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10"
        />

        <span className="bg-pink-100 text-orange-600 px-3 py-1 rounded-full text-sm">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold mt-4">{technology.name}</h3>

      <p className="text-gray-500 mt-2">{technology.description}</p>

      <div className="flex items-center justify-between mt-5">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {technology.category}
        </span>

        <span className="text-sm text-gray-500">{technology.difficulty}</span>

        <span className="text-sm">⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => setAdded(!added)}
        className={`w-full mt-5 py-2.5 rounded-lg font-semibold transition ${
          added
            ? "bg-pink-200 text-pink-600 font-bold text-xl "
            : "bg-black text-white "
        }`}
      >
        {added ? " ✓ Added to Stack " : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
