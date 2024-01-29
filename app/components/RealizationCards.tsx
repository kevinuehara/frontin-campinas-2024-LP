import Image from "next/image";

export const RealizationCards = () => {
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
