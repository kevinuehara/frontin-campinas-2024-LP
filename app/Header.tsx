import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./components/Button";

/**
 * Header da página Home
 */
export const Header = () => {
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
