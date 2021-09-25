import styled from "styled-components";
import v from "../../styles/_variables";
import Particles from "react-particles-js";
import React, { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";
import { particlesConfig } from "./effectConfig";

export const Background = styled.div<{ forPreview: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.forPreview ? "0" : "1")};
`;

export const BackgroundEffect: ComponentType<{
  width?: string;
  height?: string;
  forPreview?: boolean;
  config?: keyof typeof particlesConfig;
}> = React.memo(({ forPreview = false, width, height, config = "default" }) => {
  const [effectWidth, setEffectWidth] = useState("0px");
  const [wHeight, setHeight] = useState(0);
  const wWidth = useWindowWidth();
  // Счет ширины окна
  useEffect(() => {
    if (forPreview) {
      setEffectWidth(wWidth < 1320 ? "75px" : "300px");
      return;
    }
    setEffectWidth(width ?? "100%");
  }, [wWidth]);
  useEffect(() => {
    setTimeout(() => {
      setHeight(1);
    }, 50);
  }, []);
  //Счет высоты body
  useEffect(() => {
    if (document) {
      setHeight(document.body.clientHeight - 5);
    }
  });

  return (
    <Background
      forPreview={forPreview}
      style={{
        width: effectWidth,
        height: height ?? "100%",
      }}
    >
      <Particles
        width={effectWidth ?? "100%"}
        height={`${wHeight}px`}
        params={particlesConfig[config!]}
      />
    </Background>
  );
});
