import React from "react";
import BaseSubMenu from "../BaseSubMenu";

interface SubMenuWhatWeDoProps {
  onClose: () => void;
}

const SubMenuWhatWeDo: React.FC<SubMenuWhatWeDoProps> = ({ onClose }) => {
  const mockData = {
    title: "What We Do",
    mainText:
      "We craft tailored end-to-end strategies that combine business insight with cutting-edge technology to solve challenges, boost operational efficiency, and unlock growth across the entire costumer journey.",

    middleColumn: {
      title: "Capabilities",
      links: [
        {
          text: "Customer Strategy",
          url: "/services/digital-transformation",
        },
        { text: "Scales", url: "/services/cloud" },
        { text: "Marketing", url: "/services/custom-software" },
        { text: "Business Growth", url: "/services/mobile" },
        { text: "Digital Products", url: "/services/design" },
        { text: "Data & AI", url: "/services/design" },
        { text: "Technology", url: "/services/design" },
      ],
    },
    rightColumn: [
      {
        type: "links" as const,
        content: {
          title: "Industries",
          links: [
            { text: "Concumer & Retail", url: "/industries/healthcare" },
            { text: "Financial Services", url: "/industries/healthcare" },
            { text: "Energy & Commodities", url: "/industries/healthcare" },
            {
              text: "Healthcare & Life Sciences",
              url: "/industries/healthcare",
            },
            { text: "Education", url: "/industries/healthcare" },
            { text: "Media & Entertainment", url: "/industries/healthcare" },
            { text: "Telecommunications", url: "/industries/healthcare" },
            { text: "Software and Platforms", url: "/industries/healthcare" },
            { text: "Public Sector", url: "/industries/healthcare" },
            { text: "Legal Services", url: "/industries/healthcare" },
            { text: "Human Capital", url: "/industries/finance" },
            { text: "Travel & Hospitality", url: "/industries/retail" },
          ],
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
    />
  );
};

export default SubMenuWhatWeDo;
