import styled, { css } from "styled-components";
import v from "../../styles/_variables";
import { Wrapper } from "../PageComponent/Wrapper/Wrapper";
import Image from "next/image";
import { rgba } from "polished";
import { mxm } from "../../styles/_mixin";
import { SectionSeparator } from "../SectionSeparator/SectionSeparator";
import { motion } from "framer-motion";

const Section = styled.section`
  width: 100%;
  padding: 20px 0;
  min-height: 100px;
`;

const CardList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
  row-gap: 40px;
  flex-wrap: wrap;
`;

const Card = styled(motion.li)`
  display: flex;
  width: 310px;
  padding: 30px 20px;
  display: flex;
  border: 1px solid ${rgba(v.secondColor, 0.2)};
  border-radius: 3px;
  flex-direction: column;
  background-color: ${v.backgroundColor};
  position: relative;
  z-index: 1;
  align-items: center;
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ImageSticker = styled.img`
  width: 240px;
  display: block;
  height: 240px;
  margin: 0 auto;
`;

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardHeading = styled.h5`
  margin-bottom: 0;
  line-height: 36px;
  font-size: 36px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: ${v.secondColor};
  line-height: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 0;
`;

const TeamContentLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Decoration = styled.img`
  ${mxm(
    1780,
    css`
      display: none;
    `
  )}
`;

export const CommandList: ComponentType<unknown> = ({ className }) => {
  return (
    <Section className={className}>
      <Wrapper>
        <TeamContentLine>
          <Decoration src={"/images/unicorn2.svg"} height={299} width={120} />
          <CardList>
            <Card
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: ["easeInOut"], duration: 0.7, delay: 0.7 }}
            >
              <ImageWrap>
                <ImageSticker src={"/images/sticker_dima.svg"} alt="" />
              </ImageWrap>
              <CardTextContent>
                <CardHeading>Дмитрий</CardHeading>
                <Subtitle>Backend</Subtitle>
              </CardTextContent>
              <CardDescription>Люблю пивко и поиграть</CardDescription>
              <CardDescription>Доцкер - мое второе я</CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: ["easeInOut"], duration: 0.7, delay: 1 }}
            >
              <ImageWrap>
                <ImageSticker src={"/images/sticker_ilya.svg"} alt="" />
              </ImageWrap>

              <CardTextContent>
                <CardHeading>Илья</CardHeading>
                <Subtitle>Team-lead</Subtitle>
              </CardTextContent>
              <CardDescription>Люблю пивко и поиграть</CardDescription>
              <CardDescription>Доцкер - мое второе я</CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: ["easeInOut"], duration: 0.7, delay: 1.2 }}
            >
              <ImageWrap>
                <ImageSticker src={"/images/sticker_marina.svg"} alt="" />
              </ImageWrap>

              <CardTextContent>
                <CardHeading>Марина</CardHeading>
                <Subtitle>Analyst</Subtitle>
              </CardTextContent>
              <CardDescription>Люблю пивко и поиграть</CardDescription>
              <CardDescription>Доцкер - мое второе я</CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: ["easeInOut"], duration: 0.7, delay: 1.4 }}
            >
              <ImageWrap>
                <ImageSticker src={"/images/sticker_sergey.svg"} alt="" />
              </ImageWrap>
              <CardTextContent>
                <CardHeading>Сергей</CardHeading>
                <Subtitle>Frontend</Subtitle>
              </CardTextContent>
              <CardDescription>Люблю пивко и поиграть</CardDescription>
              <CardDescription>Доцкер - мое второе я</CardDescription>
            </Card>
          </CardList>
          <Decoration src={"/images/unicorn1.svg"} height={299} width={120} />
        </TeamContentLine>
      </Wrapper>
    </Section>
  );
};
