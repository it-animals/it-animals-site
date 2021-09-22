import styled from "styled-components";
import v from "../../styles/_variables";
import Particles from "react-particles-js";
import React, { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";

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
}> = React.memo(({ forPreview = false, width, height }) => {
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
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            color: {
              value: [v.secondColor, v.primaryColor, v.accentColor],
            },
            size: {
              value: 8,
              random: true,
              anim: {
                speed: 2,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            shape: {
              type: ["square"],
            },
            move: {
              random: false,
              speed: 0.2,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
    </Background>
  );
});
