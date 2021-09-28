import Link from "next/link";
import React from "react";
import Logo1 from "/images/logo2.svg";
import Logo2 from "/images/logo.svg";

export const Logo: React.FC<{ className?: string; coloredLogo?: boolean }> = ({
  className,
  coloredLogo = false,
}) => {
  return (
    <div className={className}>
      <Link href={"/"} passHref={true}>
        <a>
          <img width={247} height={38} src={`${coloredLogo ? Logo1 : Logo2}`} />
        </a>
      </Link>
    </div>
  );
};
