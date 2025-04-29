import React from "react";
import BaseSubMenu from "../BaseSubMenu";

interface SubMenuHowWeDoItProps {
  onClose: () => void;
  isOpen: boolean;
}

const SubMenuHowWeDoIt: React.FC<SubMenuHowWeDoItProps> = ({
  onClose,
  isOpen,
}) => {
  const mockData = {
    title: "How We Do It",
    mainText:
      "Nossa abordagem combina expertise técnica com metodologias ágeis para entregar soluções inovadoras e resultados mensuráveis.",

    middleColumn: {
      title: "Nossa Abordagem",
      splitIntoColumns: true,
      splitAt: 3,
      links: [
        {
          text: "Metodologia",
          url: "/how-we-do-it/approach",
        },
        {
          text: "Processo",
          url: "/how-we-do-it/process",
          hasArrow: true,
        },
        {
          text: "Tecnologia",
          url: "/how-we-do-it/technology",
          hasArrow: true,
        },
      ],
    },
    rightColumn: [
      {
        type: "links" as const,
        content: {
          title: "Nossos Serviços",
          links: [
            {
              text: "Consultoria",
              url: "/how-we-do-it/consulting",
              isBold: true,
            },
            {
              text: "Implementação",
              url: "/how-we-do-it/implementation",
              hasArrow: true,
              isBold: true,
            },
            {
              text: "Suporte",
              url: "/how-we-do-it/support",
              hasArrow: true,
            },
          ],
        },
      },
      {
        type: "image" as const,
        content: {
          image: "/assets/what-we-do-illustration.jpg",
          title: "Nossa Metodologia",
          description:
            "Combinamos expertise técnica com metodologias ágeis para entregar resultados excepcionais",
        },
      },
    ],
  };

  return (
    <BaseSubMenu
      title={mockData.title}
      mainText={mockData.mainText}
      middleColumn={mockData.middleColumn}
      rightColumn={mockData.rightColumn}
      onClose={onClose}
      isOpen={isOpen}
    />
  );
};

export default SubMenuHowWeDoIt;
