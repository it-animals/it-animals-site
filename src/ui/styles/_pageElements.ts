import { motion } from "framer-motion";
import styled from "styled-components";

export const TextBlock = styled(motion.div)`
  max-width: 550px;
`;
export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Section = styled.main`
  margin-top: 35px;
`;
export const Heading = motion.h2;