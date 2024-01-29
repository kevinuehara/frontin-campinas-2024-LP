import { Card } from "./Card";
import staff from "../data/staff.json";
import { Person } from "../types";

export const StaffCards = () => {
  return (
    <section className="w-full bg-midnight relative text-white h-[750px]">
      <div
        className="bg-midnight"
        style={{
          position: "absolute",
          top: -90,
          width: "100vw",
          height: "500px",
          WebkitClipPath: "polygon(99% 19%, 0 0, 0 18%)",
          clipPath: "polygon(99% 19%, 0 0, 0 18%)",
        }}
      />
      <div className="flex 100vw mt-10">
        <div className="h-screen text-night font-bold flex justify-center items-center w-20">
          <h2 className="-rotate-90 md:text-7xl text-2xl">organização</h2>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-5xl uppercase ml-5">Organização</h1>
          <h2 className="text-2xl text-gray-500 uppercase mt-2 ml-5">
            Organizadores do{" "}
            <span className="font-extrabold text-white">
              Front in Campinas 2024
            </span>
          </h2>
          <div className="flex flex-col md:flex-row">
            {staff.map((host: Person) => (
              <Card
                key={host.name}
                description={host.description}
                name={host.name}
                socialMedias={host.socialMedias}
                pathMedia={host.pathMedia}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
