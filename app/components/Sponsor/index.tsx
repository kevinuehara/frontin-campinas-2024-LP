import React from "react";

const Sponsor = () => {
  return (
    <div className="flex flex-col w-screen h-36 bg-gray-100 items-center justify-center mt-5">
      <p className="text-black font-extrabold text-2xl">
        Quer patrocinar o evento?
      </p>
      <p className="text-gray-600">
        Acesse{" "}
        <a
          href="https://forms.gle/XvA4EGeY3U6zW5Bk8"
          target="_blank"
          className="text-black font-extrabold border-b underline"
        >
          este formulário
        </a>
        , veja nosso midiakit e confira as vantagens!
      </p>
    </div>
  );
};

export default Sponsor;
