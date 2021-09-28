import { Wrapper } from "../PageComponent/Wrapper/Wrapper";
import Link from "next/link";
import { contentCommandUserInfo } from "../../../lib/commandData";
import ReactHTMLParser from "react-html-parser";
import {
  Card,
  CardButton,
  CardDescription,
  CardHeading,
  CardList,
  CardTextContent,
  Decoration,
  ImageSticker,
  ImageWrap,
  Section,
  Subtitle,
  TeamContentLine,
} from "./CommandList.style";

export const CommandList: ComponentType<{ data: contentCommandUserInfo[] }> = ({
  className,
  data,
}) => {
  return (
    <Section className={className}>
      <Wrapper>
        <TeamContentLine>
          <Decoration src={`${process.env.BASE_PATH}/images/unicorn2.svg`} height={299} width={120} />
          <CardList>
            {data.map((item, i) => (
              <Card
                key={item.name}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: ["easeInOut"],
                  duration: 0.7,
                  delay: 0.7 + 0.2 * i,
                }}
              >
                <ImageWrap>
                  <ImageSticker src={item.pathSticker} alt="" />
                </ImageWrap>
                <CardTextContent>
                  <CardHeading>{item.name.split(" ")[0]}</CardHeading>
                  <Subtitle>{item.job}</Subtitle>
                </CardTextContent>
                <CardDescription>
                  {ReactHTMLParser(item.tagline)}
                </CardDescription>

                <Link href={item.link}>
                  <a>
                    <CardButton>Подробнее</CardButton>
                  </a>
                </Link>
              </Card>
            ))}
          </CardList>
          <Decoration src={`${process.env.BASE_PATH}/images/unicorn1.svg`} height={299} width={120} />
        </TeamContentLine>
      </Wrapper>
    </Section>
  );
};
