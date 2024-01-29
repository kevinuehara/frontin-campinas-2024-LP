import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

import hosts from "./data/hosts.json";
import staff from "./data/staff.json";
import { Person } from "./types";
import Sponsor from "./components/Sponsor";

/**
 * Header da página Home
 */
const Header = () => {
  return (
    <div className="bg-gradient-to-r bg-black w-full">
      <section>
        <div className="flex flex-col justify-center items-center ml-10 text-white mt-5 relative">
          <div className="flex items-center justify-center md:justify-start mb-1">
            <AiTwotoneCalendar className="text-lg md:text-lg" />
            <label className="text-lg md:ml-10">Mai/2024</label>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <FaLocationDot className="text-lg" />
            <label className="text-lg md:ml-10">Pólis de Alta Tecnologia</label>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="flex flex-col items-center justify-center h-[80%]">
          <div className="p-4 md:p-0">
            <Image
              src="/frontin-home.svg"
              alt="FrontIn Campinas Logo"
              width={600}
              height={600}
              priority
            />
          </div>
          <h1 className="text-white  font-bold text-xl md:text-3xl mt-14 text-center">
            Em breve Call For Papers
          </h1>
          <Button className="mt-6" />
        </div>

        <div className="top-[380px] -left-36 absolute rotate-45">
          <Image
            className="w-96 opacity-10"
            src="/transparent-logo.svg"
            alt="FrontIn Campinas Logo"
            width={600}
            height={600}
            priority
          />
        </div>
        <div>
          <div
            className="bg-midnight"
            style={{
              position: "absolute",
              bottom: -95,
              width: "100vw",
              height: "500px",
              WebkitClipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
              clipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
            }}
          />
        </div>
      </section>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex flex-col bg-midnight relative w-full">
      <div className="flex flex-col text-center text-5xl text-white uppercase">
        <h1>O Maior evento front-end</h1>
        <h1>de Campinas estará de volta!</h1>
      </div>

      <div className="flex 100vw">
        <div className="h-screen text-night font-bold flex justify-center items-center w-20">
          <h2 className="-rotate-90 md:text-7xl text-2xl">organização</h2>
        </div>

        <article className="text-white mt-2 lg:mt-0 lg:w-2/5 p-5 md:ml-10">
          <div className="mt-10 md:ml-2 ml-0 text-2xl">
            <label>
              <span className="font-bold">
                Front In Campinas estará de volta em 2024!
              </span>{" "}
              E com ele toda experiência da comunidade de tecnologia!
              <p className="mt-4">
                <label className="font-extrabold">
                  {`Networking, Inovação, Comunidade e Inclusão `}
                </label>
                são os princípios que guiam o FrontIn Campinas.{" "}
              </p>
              <p className="mt-4">
                É um evento sem fins lucrativos para compartilhar o conhecimento
                entre a comunidade, com o intuito de fortalecê-la ainda mais. É
                um espaço para interação e diversão, servindo de inspiração para
                aqueles que estão começando e renovando as energias daqueles que
                precisam.
              </p>
              <p className="mt-4">
                Todas as pessoas em todas as áreas de desenvolvimento podem
                participar do evento. Além do networking, elas poderão aprender
                e conversar sobre carreira e softskils necessários para toda a
                área de tecnologia.
              </p>
            </label>
          </div>
        </article>
        <div className="flex flex-col lg:flex-row m-10 lg:m-10 justify-between">
          <div className="relative w-96 md:ml-16">
            <Image
              src="/foto1.png"
              alt="Foto do último frontin campinas"
              width={500}
              height={500}
              aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
              priority
              className="absolute w-full z-10"
              style={{
                WebkitClipPath:
                  "polygon(44% 17%, 80% 0%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 18% 51%)",
                clipPath:
                  "polygon(44% 17%, 80% 0%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 18% 51%);",
              }}
            />

            <div className="flex justify-end items-end">
              <Image
                className="z-20 absolute top-32 rounded-md w-52"
                src="/foto2.png"
                alt="Foto do último frontin campinas"
                width={500}
                height={500}
                aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                style={{
                  WebkitClipPath:
                    "polygon(39% 9%, 80% 0%, 100% 0, 100% 100%, 80% 100%, 0 100%, 0 64%, 13% 31%)",
                  clipPath:
                    "polygon(39% 9%, 80% 0%, 100% 0, 100% 100%, 80% 100%, 0 100%, 0 64%, 13% 31%)",
                }}
                priority
              />
            </div>

            <div className="flex justify-start items-start">
              <Image
                className="absolute top-20 opacity-60 z-10 mt-20 mr-20"
                src="/foto4.png"
                alt="Foto do último frontin campinas"
                width={500}
                height={500}
                aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                style={{
                  WebkitClipPath:
                    "polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 80% 90%, 50% 95%, 20% 90%, 0% 70%, 0% 35%, 0 0)",
                  clipPath:
                    "polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 80% 90%, 50% 95%, 20% 90%, 0% 70%, 0% 35%, 0 0)",
                }}
                priority
              />
            </div>
            <div className="flex justify-start items-start w-full">
              <Image
                src="/foto6.png"
                alt="Foto do último frontin campinas"
                width={500}
                height={500}
                aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                priority
                className="mt-80 z-10 absolute w-52 opacity-70 ml-44"
                style={{
                  WebkitClipPath:
                    "polygon(50% 0%, 100% 0, 100% 37%, 100% 100%, 72% 100%, 51% 99%, 22% 86%, 1% 69%, 0% 35%, 0 0)",
                  clipPath:
                    "polygon(50% 0%, 100% 0, 100% 37%, 100% 100%, 72% 100%, 51% 99%, 22% 86%, 1% 69%, 0% 35%, 0 0)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-midnight"
        style={{
          position: "absolute",
          bottom: -200,
          zIndex: 20,
          width: "100vw",
          height: "200px",
          WebkitClipPath: "polygon(100% 0, 0 0, 100% 26%)",
          clipPath: "polygon(100% 0, 0 0, 100% 26%)",
        }}
      />
    </section>
  );
};

const HostsCards = () => {
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

const StaffCards = () => {
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

const RealizationCards = () => {
  return (
    <section className="w-full bg-black relative text-white h-[750px]">
      <div
        className="bg-black"
        style={{
          position: "absolute",
          top: -500,
          width: "100vw",
          height: "500px",
          WebkitClipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
          clipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
        }}
      />

      <div className="flex 100vw mt-10">
        <div className="h-screen text-night font-bold flex justify-center items-center w-20">
          <h2 className="-rotate-90 md:text-7xl text-2xl">Realização</h2>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-5xl uppercase ml-5">Realização</h1>
          <h2 className="text-2xl text-gray-500 uppercase mt-2 ml-5">
            Organizadores e patrocinadores{" "}
            <span className="font-extrabold text-white">
              do frontin campinas 2024
            </span>
          </h2>
          <div className="flex flex-col md:flex-row w-full mt-10 ml-10 flex-wrap">
            <Image
              src="/company/cpqd.png"
              alt="logo da empresa cpqd"
              width={300}
              height={300}
              aria-label="logo da empresa cpqd"
              priority
            />

            <Image
              className="ml-10"
              src="/company/polis.png"
              alt="logo da empresa polis"
              width={200}
              height={200}
              aria-label="logo da empresa polis"
              priority
            />

            <Image
              className="ml-10"
              src="/company/nodebr.png"
              alt="logo da nodebr"
              width={400}
              height={400}
              aria-label="logo da nodebr"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Speakers = () => {
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
          <h2 className="-rotate-90 md:text-7xl text-2xl">Palestrantes</h2>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-5xl uppercase ml-5">Palestrantes</h1>
          <h2 className="text-2xl text-gray-500 uppercase mt-2 ml-5">
            Palestrantes do{" "}
            <span className="font-extrabold text-white">
              Front in Campinas 2024
            </span>
          </h2>
          <div className="flex flex-col md:flex-row mt-10 w-full">
            {new Array(4).fill(null).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full text-center flex-wrap"
              >
                <Image
                  className="ml-10"
                  src="/people/speaker.png"
                  alt="palestrante"
                  width={200}
                  height={200}
                  aria-label="palestrante"
                  priority
                />
                <h1 className="text-center text-2xl ml-6">Em Breve</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Header />
        <Hero />
        <HostsCards />
        <StaffCards />
        <RealizationCards />
        <Speakers />
        <Sponsor />
        <Footer />
      </main>
    </>
  );
}
