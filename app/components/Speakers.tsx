import Image from "next/image";

export const Speakers = () => {
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
