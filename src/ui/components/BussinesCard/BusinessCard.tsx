import styled from "styled-components";
import { motion } from "framer-motion";

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

export const BusinessCard: ComponentType<{ path: string }> = ({
  path,
  className,
}) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: ["easeInOut"], duration: 1, delay: 0 }}
    >
      <img src={path} className={className} alt="" />
    </Wrapper>
  );
};
