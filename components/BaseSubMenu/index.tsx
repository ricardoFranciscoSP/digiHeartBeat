import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./baseSubMenu.module.css";

interface LinkColumn {
  title?: string;
  links: { text: string; url: string }[];
}

interface ImageColumn {
  title: string;
  description: string;
  image: string;
}

interface RightColumn {
  type: "links" | "image";
  content: LinkColumn | ImageColumn;
}

interface BaseSubMenuProps {
  title: string;
  mainText: string;
  middleColumn: LinkColumn;
  rightColumn: RightColumn[];
  onClose: () => void;
}

const BaseSubMenu: React.FC<BaseSubMenuProps> = ({
  title,
  mainText,
  middleColumn,
  rightColumn,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className={styles.submenuContainer} ref={menuRef}>
      <div className={styles.background}>
        <div className={styles.diamond1} />
        <div className={styles.diamond2} />
        <div className={styles.diamond3} />
      </div>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.titleContainer}>
            <div className={styles.redLine} />
            <h2 className={styles.title}>
              {title}
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
            </h2>
          </div>
          <p className={styles.mainText}>{mainText}</p>
        </div>

        <div className={styles.middleSection}>
          {middleColumn.title && (
            <h3 className={styles.columnTitle}>{middleColumn.title}</h3>
          )}
          <ul className={styles.linkList}>
            {middleColumn.links.map((link, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={faCircle}
                  className={styles.bulletPoint}
                />
                <Link href={link.url}>
                  {link.text}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={styles.linkArrow}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.rightSection}>
          {rightColumn.map((column, index) => (
            <div key={index} className={styles.rightColumn}>
              {column.type === "links" && (
                <>
                  {(column.content as LinkColumn).title && (
                    <h3 className={styles.columnTitle}>
                      {(column.content as LinkColumn).title}
                    </h3>
                  )}
                  <ul className={styles.linkList}>
                    {(column.content as LinkColumn).links.map(
                      (link, linkIndex) => (
                        <li key={linkIndex}>
                          <FontAwesomeIcon
                            icon={faCircle}
                            className={styles.bulletPoint}
                          />
                          <Link href={link.url}>
                            {link.text}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className={styles.linkArrow}
                            />
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
              {column.type === "image" && (
                <div className={styles.imageColumn}>
                  <img
                    src={(column.content as ImageColumn).image}
                    alt="Column illustration"
                    className={styles.columnImage}
                  />
                  <h4 className={styles.imageTitle}>
                    {(column.content as ImageColumn).title}
                  </h4>
                  <p className={styles.imageDescription}>
                    {(column.content as ImageColumn).description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseSubMenu;
