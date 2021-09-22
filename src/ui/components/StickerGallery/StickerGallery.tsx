import styled, { keyframes } from "styled-components";
import v from "../../styles/_variables";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const stickerAnimate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Container = styled.div`
  width: 360px;
  height: 360px;

  position: relative;
  animation: ${rotate} 180s linear infinite;
  transform-origin: center;
`;

const Sticker = styled.div`
  width: 120px;
  height: 120px;
  transform-origin: center;
  background-size: 85%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${v.backgroundColor};
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  height: 33.3333333%;
  align-items: center;
`;
const Between = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33.3333333%;
`;

const StickerTop = styled(Sticker)`
  animation: ${stickerAnimate} 180s linear infinite;
  background-image: url("/images/sticker1.svg");
`;

const StickerCenterLeft = styled(Sticker)`
  top: 50%;
  left: 0;
  animation: ${stickerAnimate} 180s linear infinite;
  background-image: url("/images/sticker2.svg");
`;
const StickerCenterRight = styled(Sticker)`
  top: 50%;
  right: 0;
  animation: ${stickerAnimate} 180s linear infinite;
  background-image: url("/images/sticker3.svg");
`;
const StickerBottom = styled(Sticker)`
  animation: ${stickerAnimate} 180s linear infinite;
  background-image: url("/images/sticker4.svg");
`;

export const StickerGallery: ComponentType<unknown> = ({ className }) => {
  return (
    <Container className={className}>
      <Center>
        <StickerTop />
      </Center>
      <Between>
        <StickerCenterLeft />
        <StickerCenterRight />
      </Between>
      <Center>
        <StickerBottom />
      </Center>
    </Container>
  );
};
