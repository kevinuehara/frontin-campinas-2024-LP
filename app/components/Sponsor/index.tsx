import React from "react";

const Sponsor = () => {
  return (
    <div className="flex flex-col w-full h-36 bg-black items-center justify-center">
      <p className="text-white font-extrabold text-2xl">
        Quer patrocinar o evento?
      </p>
      <p className="text-gray-300">
        Acesse{" "}
        <a
          href="https://forms.gle/XvA4EGeY3U6zW5Bk8"
          target="_blank"
          className="text-white font-extrabold border-b underline"
        >
          este formulário
        </a>
        , veja nosso midiakit e confira as vantagens!
      </p>
    </div>
  );
};

export default Sponsor;
