import styled from "@emotion/styled";
import React from "react";
import { Box, BoxProps } from "rebass";
import { width, height } from "styled-system";

import icons, { IconList } from "./icons";

interface IconProps extends BoxProps {
  name: keyof IconList;
  width?: number | number[];
  height?: any;
  isClickable?: boolean;
  isVerticalMiddle?: boolean;
}

const Icon = (props: IconProps) => {
  const {
    css,
    name,
    width,
    height,
    style,
    isClickable,
    isVerticalMiddle,
    ...boxProps
  } = props;
  return (
    <ResponsiveBox
      {...boxProps}
      width={width || icons[name].width}
      height={height || icons[name].height}
      style={{
        verticalAlign: isVerticalMiddle && "middle",
        cursor: isClickable && "pointer",
        ...style,
        position: "relative",
        display: "inline-block",
      }}
    >
      <svg
        viewBox={`0 0 ${icons[name].width} ${icons[name].height}`}
        style={{
          verticalAlign: "middle",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        {icons[name].svg}
      </svg>
    </ResponsiveBox>
  );
};

export default Icon;

const ResponsiveBox = styled(Box)`
  ${width}
  ${height}
`;
