import React from "react";
import BaseSubMenu from "../BaseSubMenu";

interface SubMenuWhoWeAreProps {
  onClose: () => void;
}

const SubMenuWhoWeAre: React.FC<SubMenuWhoWeAreProps> = ({ onClose }) => {
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
        type: "links" as const,
        content: {
          title: "Join Our Team",
          links: [
            { text: "Career Opportunities", url: "/careers" },
            { text: "Benefits & Culture", url: "/careers/benefits" },
            { text: "Development Program", url: "/careers/development" },
          ],
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
    />
  );
};

export default SubMenuWhoWeAre;
