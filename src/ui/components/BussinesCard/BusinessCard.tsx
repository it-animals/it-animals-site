import styled from "styled-components";
import { motion } from "framer-motion";
import { DimaCard } from "./DimaCard";
import { IlyaCard } from "./IlyaCard";
import { MarinaCard } from "./MarinaCard";
import { SergeyCard } from "./SergeyCard";

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-height: calc(100vh - 100px);
  & img {
    object-fit: contain;
    width: 100%;
    max-height: calc(100vh - 100px);
  }
`;
const SvgDima = styled(DimaCard)`
  width: 100%;
  max-height: calc(100vh - 100px);
`;
const SvgIlya = styled(IlyaCard)`
  width: 100%;
  max-height: calc(100vh - 100px);
`;
const SvgMarina = styled(MarinaCard)`
  width: 100%;
  max-height: calc(100vh - 100px);
`;
const SvgSergey = styled(SergeyCard)`
  width: 100%;
  max-height: calc(100vh - 100px);
`;

const cards = {
  dima: SvgDima,
  ilya: SvgIlya,
  marina: SvgMarina,
  sergey: SvgSergey,
};

export const BusinessCard: ComponentType<{ type: keyof typeof cards }> = ({
  type,
  className,
}) => {
  const Card = cards[type];
  return (
    <Wrapper
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: ["easeInOut"], duration: 1, delay: 0 }}
    >
      <Card />
    </Wrapper>
  );
};
