import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-black h-32 flex flex-col justify-around items-center text-white rounded-lg">
      <div className="flex flex-col items-center md:flex-row justify-around w-full">
        <a className="underline text-xl" href="frontincampinas.event@gmail.com">
          frontincampinas.event@gmail.com
        </a>

        <div className="flex items-center text-xl">
          <FaInstagram />
          <a
            className="ml-2 underline"
            href="https://www.instagram.com/frontin_campinas/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="text-center">
        FrontIn Campinas 2024 - Todos os direitos reservados
      </p>
    </footer>
  );
};
