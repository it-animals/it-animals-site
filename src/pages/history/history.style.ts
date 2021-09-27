import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import v from "../../ui/styles/_variables";

export const TimeLine = styled(VerticalTimeline)`
  position: relative;
  z-index: 16;
  &:before {
    background-color: ${v.accentColor};
  }
`;

export const CardHeading = styled.h3`
  font-size: 24px;
`;

export const Element = styled(VerticalTimelineElement)`
  & .vertical-timeline-element-content {
    box-shadow: -5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
  & .vertical-timeline-element-date {
    font-size: 14px !important;
    font-weight: bold;
  }
`;
