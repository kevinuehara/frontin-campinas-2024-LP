import { Button, Container, Title, TypographySubtitle } from "..";
import clsx from "clsx";
import { TopClip, BottomClip } from "../Clips/TopClip";

export const Local = () => {
  return (
    <section id="local" className="bg-midnight relative md:pt-[10rem]">
      <Container className="pt-[10rem] md:translate-x-[100px]  min-h-[860px] pb-[5rem]">
        <span className="relative">
          <div className="flex flex-col gap-[2rem]">
            <Title>Pólis de Tecnologia</Title>
            <div className="flex md:flex-row flex-col gap-[3rem]">
              <div className="flex flex-col gap-[2rem] md:w-[36rem]">
                <Paragraph
                  text={
                    <>
                      Parque II do Polo de Alta Tecnologia <br /> R. Dr. Ricardo
                      Benetton Martins, 1.000 <br /> CEP 13086-510 <br />{" "}
                      Campinas – SP
                    </>
                  }
                />
                <div>
                  <Button
                    text="Como chegar"
                    href="https://maps.app.goo.gl/8RLPRnkpy7Li6MuZ7"
                  />
                </div>
                <div>
                  <TypographySubtitle text="Alimentação" />
                  <Paragraph
                    text={
                      <>
                        Você poderá almoçar no local. Teremos food trucks com
                        lanches para o almoço, incluindo opção vegetariana. Os
                        trucks aceitam os principais cartões de débito e crédito
                        como forma de pagamento, além de PIX e pagamento em
                        espécie.
                      </>
                    }
                  />
                </div>
                <div>
                  <Paragraph
                    text={<>O coffee break já está incluso no ingresso 😉</>}
                  />
                </div>
              </div>
              <div className="md:w-[32rem] mt-[23px]">
                <img
                  data-aos="fade-up"
                  className="w-full"
                  alt="Foto com todas a pessoas que participaram do frontin campinas 2019"
                  src="/static/local-image.png"
                />
              </div>
            </div>
          </div>
          <span
            className={clsx(
              "inline-block uppercase text-[6.375rem] opacity-10 -rotate-90 absolute left-[-14rem] top-[6rem] font-[700] "
            )}
          >
            Local
          </span>
        </span>
      </Container>
    </section>
  );
};

function Paragraph({ text }: { text: React.ReactNode }) {
  return (
    <p data-aos="fade-up" className="leading-[150%] text-lg font-medium">
      {text}
    </p>
  );
}
