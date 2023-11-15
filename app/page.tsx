import Image from "next/image";
import { AiFillStar, AiTwotoneCalendar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./components/Button";
import { PiCastleTurret } from "react-icons/pi";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

import hosts from "./data/hosts.json";
import staff from "./data/staff.json";
import { Person } from "./types";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <div className="bg-gradient-to-r from-black to-gray-700 w-full">
          <section className="">
            <hr className="h-1 mt-6 bg-gray-200 border-0" />
            <div className="flex flex-col ml-10 text-white mt-5">
              <div className="flex items-center justify-center md:justify-start">
                <AiFillStar className="text-4xl" />
                <label className="text-2xl md:ml-10">2024 - Edição #3</label>
              </div>
            </div>
          </section>
          <section className="h-screen">
            <div className="flex flex-col items-center justify-center h-[80%]">
              <div className="p-5 md:p-0">
                <Image
                  src="/frontin-home.svg"
                  alt="FrontIn Campinas Logo"
                  width={800}
                  height={800}
                  priority
                />
              </div>
              <h1 className="text-white  font-bold text-xl md:text-3xl mt-14 text-center">
                O maior evento front-end de Campinas
              </h1>
              <Button className="mt-6" />
            </div>

            <section className="flex flex-col items-center md:items-start md:flex-row justify-center md:justify-center">
              <div className="flex text-white">
                <AiTwotoneCalendar className="text-2xl md:text-4xl md:ml-3" />
                <label className="text-xl md:text-2xl ml-1 md:ml-3">
                  Em Breve
                </label>
              </div>
              <div className="flex text-white md:ml-4">
                <FaLocationDot className="text-2xl md:text-4xl" />
                <label className="text-xl md:text-2xl ml-1 md:ml-3">
                  Campinas/SP - Pólis de Tecnologia
                </label>
              </div>
            </section>
          </section>
        </div>

        <section className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-100 rounded-lg top-[98%]">
          <div className="flex flex-col lg:flex-row m-10 lg:m-10 justify-evenly">
            <aside className="flex-col">
              <Image
                className="border-2 border-white rounded-md"
                src="/foto1.png"
                alt="Foto do último frontin campinas"
                width={500}
                height={500}
                aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                priority
              />
              <Image
                className="border-2 border-white rounded-md"
                src="/foto5.png"
                alt="Foto do último frontin campinas"
                width={500}
                height={500}
                aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                priority
              />
              <div className="flex flex-col md:flex-row items-center">
                <Image
                  className="border-2 border-white rounded-3xl mt-2"
                  src="/foto4.png"
                  alt="Foto do último frontin campinas"
                  width={300}
                  height={500}
                  aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                  priority
                />
                <Image
                  className="border-2 border-white rounded-3xl mt-2 ml-2"
                  src="/foto2.png"
                  alt="Foto do último frontin campinas"
                  width={250}
                  height={250}
                  aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                  priority
                />
              </div>
            </aside>
            <article className="bg-slate-900 text-white mt-2 lg:mt-0 lg:w-2/5 rounded-md p-5">
              <div className="flex justify-center">
                <PiCastleTurret className="text-4xl mt-2" />
              </div>
              <h1 className="font-bold text-2xl text-center mt-2">
                O Maior evento front-end de Campinas estará de volta!
              </h1>
              <hr className="h-[0.50px] mt-6 bg-gray-200" />
              <div className="mt-3 text-xl">
                <label>
                  A 3ª edição do frontIn Campinas estará de volta em 2024! E com
                  ela toda experiência da comunidade de tecnolgia também está de
                  volta!
                  <p>
                    <label className="font-extrabold text-fuchsia-500">
                      {`Networking, Inovação, Comunidade e Inclusão `}
                    </label>
                    são os princípios que guiam o FrontIn Campinas.{" "}
                  </p>
                  <p className="mt-2">
                    É um evento sem fins lucrativos para compartilhar o
                    conhecimento entre a comunidade, com o intuito de
                    fortalecê-la ainda mais. É um espaço para interação e
                    diversão, servindo de inspiração para aqueles que estão
                    começando e renovando as energias daqueles que precisam.
                  </p>
                  <p className="mt-2">
                    Todas as pessoas em todas as áreas de desenvolvimento podem
                    participar do evento. Além do networking, elas poderão
                    aprender e conversar sobre carreira e softskils necessários
                    para toda a área de tecnologia.
                  </p>
                  <p className="font-extrabold text-fuchsia-500 mt-5 text-center">
                    Venha conosco e desfrute da melhor experiência de Campinas!
                  </p>
                </label>
              </div>
            </article>
          </div>
        </section>

        <section className="rounded-lg mt-9 w-full">
          <div className="flex justify-center items-center">
            <AiFillStar className="text-black text-4xl mr-5" />
            <h1 className="font-bold text-4xl">Atrações</h1>
          </div>

          <h1 className="font-extrabold text-3xl ml-3 mb-5 flex justify-center mt-5">
            Hosts
          </h1>

          <div className="flex flex-col md:flex-row justify-around">
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

          <h1 className="font-extrabold text-3xl ml-3 mt-5 mb-5 flex justify-center mt-5">
            Organizadores
          </h1>

          <div className="flex flex-col md:flex-row justify-around flex-wrap gap-3">
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

          <h1 className="font-extrabold text-3xl ml-3 mt-5 mb-5 flex justify-center mt-5">
            Patrocinadores
          </h1>

          <div className="flex flex-wrap justify-center">
            <Image
              className="border-2 border-white rounded-3xl mt-2 ml-2"
              src="/company/cpqd.png"
              alt="CPQD Logo"
              width={250}
              height={250}
              aria-label="Logo da empresa CPQD"
              priority
            />
          </div>

          <h1 className="font-extrabold text-3xl ml-3 mt-5 mb-5 flex justify-center mt-5">
            Apoiadores
          </h1>

          <div className="flex flex-wrap justify-center">
            <Image
              className="border-2 border-white rounded-3xl mt-2 ml-2"
              src="/company/nodebr.png"
              alt="NodeBR Logo"
              width={250}
              height={250}
              aria-label="Logo da comunidade node br"
              priority
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
