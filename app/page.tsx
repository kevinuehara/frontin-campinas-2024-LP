import Image from "next/image";
import { AiFillStar, AiTwotoneCalendar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col bg-black">
      <section>
        <hr className="h-1 mt-3 bg-gray-200 border-0" />
        <div className="w-screen flex flex-col ml-10 text-white mt-5">
          <div className="flex items-center">
            <AiFillStar className="text-4xl" />
            <label className="text-2xl ml-10">2024 - Edição #3</label>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen">
        <div className="flex flex-col items-center justify-center h-[80%]">
          <Image
            src="/frontin-home.svg"
            alt="FrontIn Campinas Logo"
            width={800}
            height={800}
            priority
          />
          <h1 className="text-white font-bold text-3xl mt-14">
            O maior evento front-end de Campinas
          </h1>
          <Button className="mt-6" />
        </div>

        <section className="flex ml-10">
          <div className="flex text-white">
            <AiTwotoneCalendar className="text-4xl" />
            <label className="text-2xl ml-3">Em Breve</label>
          </div>
          <div className="flex text-white ml-4">
            <FaLocationDot className="text-4xl" />
            <label className="text-2xl ml-3">
              Campinas/SP - Pólis de Tecnologia
            </label>
          </div>
        </section>
      </section>
    </main>
  );
}
