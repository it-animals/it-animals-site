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
            src={`${
              coloredLogo
                ? `${process.env.BASE_PATH}/images/logo2.svg`
                : `${process.env.BASE_PATH}/images/logo.svg`
            }`}
          />
        </a>
      </Link>
    </div>
  );
};
