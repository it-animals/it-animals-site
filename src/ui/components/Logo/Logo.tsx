import Link from "next/link";
import Image from "next/image";
export const Logo = () => {
  return (
    <div>
      <Link href={"/"} passHref={true}>
        <a>
          <Image width={247} height={38} src={"/images/logo.svg"} />
        </a>
      </Link>
    </div>
  );
};
