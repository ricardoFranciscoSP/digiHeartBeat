import React from "react";
import BaseSubMenu from "../BaseSubMenu";

interface SubMenuWhatWeDoProps {
  onClose: () => void;
  isOpen: boolean;
}

const SubMenuWhatWeDo: React.FC<SubMenuWhatWeDoProps> = ({
  onClose,
  isOpen,
}) => {
  const mockData = {
    title: "What We Do",
    mainText:
      "We craft tailored end-to-end strategies that combine business insight with cutting-edge technology to solve challenges, boost operational efficiency, and unlock growth across the entire costumer journey.",

    middleColumn: {
      title: "Capabilities",
      splitIntoColumns: true,
      splitAt: 4, // divide após o 4º item
      links: [
        {
          text: "Customer Strategy",
          url: "/services/digital-transformation",
        },
        { text: "Scales", url: "/services/cloud", hasArrow: true },
        { text: "Marketing", url: "/services/custom-software", hasArrow: true },
        { text: "Business Growth", url: "/services/mobile", hasArrow: true },
        { text: "Digital Products", url: "/services/design" },
        { text: "Data & AI", url: "/services/design", hasArrow: true },
        { text: "Technology", url: "/services/design", hasArrow: true },
      ],
    },
    rightColumn: [
      {
        type: "links" as const,
        content: {
          title: "Industries",
          links: [
            {
              text: "Concumer & Retail",
              url: "/industries/healthcare",
              isBold: true,
            },
            {
              text: "Financial Services",
              url: "/industries/healthcare",
              hasArrow: true,
              isBold: true,
            },
            {
              text: "Energy & Commodities",
              url: "/industries/healthcare",
              hasArrow: true,
            },
            {
              text: "Healthcare & Life Sciences",
              url: "/industries/healthcare",
              hasArrow: true,
              isBold: true,
            },
            { text: "Education", url: "/industries/healthcare", isBold: true },
            {
              text: "Media & Entertainment",
              url: "/industries/healthcare",
              isBold: true,
            },
            {
              text: "Telecommunications",
              url: "/industries/healthcare",
              hasArrow: true,
            },
            {
              text: "Software and Platforms",
              url: "/industries/healthcare",
              isBold: true,
            },
            { text: "Public Sector", url: "/industries/healthcare" },
            {
              text: "Legal Services",
              url: "/industries/healthcare",
              isBold: true,
            },
            { text: "Human Capital", url: "/industries/finance", isBold: true },
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
      isOpen={isOpen}
    />
  );
};

export default SubMenuWhatWeDo;
