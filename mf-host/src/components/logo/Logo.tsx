import React, { FC } from "react";
import Link from "next/link";

export interface LogoProps {
  img?: string;
  type?: "logo" | "logo-mobile";
  imgLight?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ img, type, className = "flex-shrink-0" }) => {
  const logoSrc = `/crom/mf-host/assets/images/${img || type || "logo"}.svg`;

  return (
    <Link href="/" className={`ttnc-logo inline-block text-slate-600 ${className}`}>
        <img
          src={logoSrc}
          className="block max-h-8 sm:max-h-10"
          alt="Logo"
        />
    </Link>
  );
};

export default Logo;
