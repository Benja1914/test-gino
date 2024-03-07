import React, { FC } from "react";
import { SocialType } from "../SocialsShare/SocialsShare";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemoBlue: SocialType[] = [
  { name: "Facebook", icon: "/crom/mf-host/assets/images/socials/facebook_blue.svg", href: "https://facebook.com/cajalaaraucana" },
  { name: "Instagram", icon: "/crom/mf-host/assets/images/socials/instagram_blue.svg", href: "https://instagram.com/cajalaaraucana" },
  { name: "Twitter", icon: "/crom/mf-host/assets/images/socials/x_blue.svg", href: "https://twitter.com/cajalaaraucana" },
  { name: "Linkedin", icon: "/crom/mf-host/assets/images/socials/linkedin_blue.svg", href: "https://www.linkedin.com/company/caja-la-araucana/" },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6 hover:text-secondary-900",
  socials = socialsDemoBlue,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-600 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          rel="noopener noreferrer"
          title={item.name}
          target={item.href && "_blank"}
        >
          <img src={item.icon} alt="" />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
