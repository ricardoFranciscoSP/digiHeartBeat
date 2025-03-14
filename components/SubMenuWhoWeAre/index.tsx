import React from "react";
import BaseSubMenu from "../BaseSubMenu";

interface SubMenuWhoWeAreProps {
  onClose: () => void;
  isOpen: boolean;
}

const SubMenuWhoWeAre: React.FC<SubMenuWhoWeAreProps> = ({
  onClose,
  isOpen,
}) => {
  const mockData = {
    title: "Who We Are",
    mainText:
      "Digi Heart Beat is your global partner in full-spectrum digital evolution, providing integrated solutions that combine strategy, tecnology, and data-driven insights, all guided by human-centric approaches.",
    middleColumn: {
      splitIntoColumns: true,
      splitAt: 4,
      links: [
        { text: "Our Difference", url: "/about/story", hasArrow: true },
        { text: "Our Work", url: "/about/mission", hasArrow: true },
        { text: "Our People", url: "/about/values" },
        { text: "Our Alliances", url: "/about/leadership" },
        { text: "Contact US", url: "/about/global", hasArrow: true },
        { text: "Carreers", url: "/about/global", hasArrow: true },
      ],
    },
    rightColumn: [
      {
        type: "image" as const,
        content: {
          image: "/assets/team-culture.jpg",
          title: "Digital Products",
          description:
            "We help your create incredible products services, and experiences by blending imaginative design with practical solutions.",
        },
      },
      {
        type: "image" as const,
        content: {
          image: "/assets/what-we-do-illustration.jpg",
          title: "Customer strategy",
          description:
            "We measure your business performance or the potential of your idea",
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

export default SubMenuWhoWeAre;
