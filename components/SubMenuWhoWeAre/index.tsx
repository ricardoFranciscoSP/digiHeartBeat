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
      "Learn about our company culture, values, and the passionate team behind our success story.",
    middleColumn: {
      title: "About Us",
      links: [
        { text: "Our Story", url: "/about/story" },
        { text: "Mission & Vision", url: "/about/mission" },
        { text: "Core Values", url: "/about/values" },
        { text: "Leadership Team", url: "/about/leadership" },
        { text: "Global Presence", url: "/about/global" },
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
