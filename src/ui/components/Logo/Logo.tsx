import Link from "next/link";
import React from "react";

export const Logo: React.FC<{ className?: string; coloredLogo?: boolean }> = ({
  className,
  coloredLogo = false,
}) => {
  return (
    <div className={className}>
      <Link href={"/"} passHref={true}>
        <a>
          <img
            width={247}
            height={38}
            src={`${coloredLogo ? "/images/logo2.svg" : "/images/logo.svg"}`}
          />
        </a>
      </Link>
    </div>
  );
};
