import Image from "next/image";

export const Hero = () => {
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
