import { H3 } from "~/components/typography/h3";
import { Paragraph } from "~/components/typography/paragraph";

export const Footer = () => {
  return (
    <footer className="bg-[#0E8499] py-20 px-6 xl:p-20">
      <div className="flex flex-col gap-10 mb-20">
        <div>
          <img
            src="/images/cocibolcaLogo.svg"
            alt="Logo de la Licorería Cocibolca en el Footer"
            className="invert"
          />
        </div>

        <div>
          <ul>
            <li>
              <Paragraph
                variant="primary"
                style={{ fontWeight: 600, color: "#fff" }}
              >
                Dirección:
              </Paragraph>

              <Paragraph variant="primary" style={{ color: "#fff" }}>
                De la iglesia Espiritu Santo 1C al Norte
              </Paragraph>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <Paragraph
          variant="primary"
          style={{ fontSize: "12px", color: "#fff" }}
        >
          ©Licorería Cocibolca | Todos los derechos reservados 2024
        </Paragraph>
      </div>
    </footer>
  );
};
