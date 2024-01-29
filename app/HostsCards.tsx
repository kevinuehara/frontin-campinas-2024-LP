import { Card } from "./components/Card";
import hosts from "./data/hosts.json";
import { Person } from "./types";

export const HostsCards = () => {
  return (
    <section className="w-full bg-black relative text-white h-[650px]">
      <div className="flex mt-10">
        <div className="text-night font-bold flex justify-center items-center w-20">
          <h2 className="-rotate-90 md:text-7xl text-2xl">Hosts</h2>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-5xl upp">Hosts</h1>
          <h2 className="text-2xl text-gray-500 uppercase mt-2">
            Apresentadores do{" "}
            <span className="font-extrabold text-white">
              Front in Campinas 2024
            </span>
          </h2>
          <div className="flex flex-col md:flex-row">
            {hosts.map((host: Person) => (
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
