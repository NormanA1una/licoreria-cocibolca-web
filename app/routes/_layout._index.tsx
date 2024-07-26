import type { MetaFunction } from "@remix-run/node";
import { H1 } from "~/components/typography/h1";
import { H3 } from "~/components/typography/h3";
import { Paragraph } from "~/components/typography/paragraph";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const REQUISITOS = [
  "Poseer cedula de identidad",
  "Nivel académico mínimo requerido: Secundaria",
  "Ser mayor de edad",
  "Cartas de recomendación (opcional)",
  "Tener celular al que poder contactarte",
];

const CUALIDADES = [
  "Honesto",
  "Responsable",
  "Puntual",
  "Disponibilidad para trabajar fines de semana",
  "Disponibilidad para trabajar en horarios rotativos",
  "Amable",
  "Dispuesto a aprender",
  "Dinámico",
  "Buena presentación",
];

export default function Index() {
  return (
    <div className="px-3 py-10 lg:container lg:mx-auto">
      <div className="text-center mb-20">
        <H1 variant="primary">¡Únete a nuestro equipo!</H1>
      </div>

      <div className="flex flex-col gap-10">
        {/* Requisitos */}
        <div className="flex flex-col gap-4">
          <div>
            <H3 variant="primary">
              Requisitos para formar parte del team Licorería Cocibolca:
            </H3>
          </div>
          <ul className="flex flex-col gap-3 list-disc pl-5">
            {REQUISITOS.map((requisito, i) => {
              return (
                <li key={i}>
                  {/* typo P */}
                  <Paragraph variant="primary">{requisito}</Paragraph>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Cualidades y Aptitudes */}
        <div className="flex flex-col gap-4">
          <div>
            <H3 variant="primary">Cualidades y aptitudes necesarias:</H3>
          </div>
          <ul className="flex flex-col gap-3 list-disc pl-5">
            {CUALIDADES.map((cualidad, i) => {
              return (
                <li key={i}>
                  <Paragraph variant="primary">{cualidad}</Paragraph>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Despedida */}
        <div className="flex flex-col gap-4">
          <Paragraph variant="primary">
            Si cumples con los requisitos y actitudes requeridas puedes dejar un
            folder con tus documentos (Copia de cedula, cartas de recomendación
            en caso de poseer alguna y un número de celular) en nuestras
            instalaciones y estaremos en contacto.
          </Paragraph>

          <Paragraph variant="primary" style={{ fontWeight: 600 }}>
            ¡Te estaremos esperando!
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
