interface IconListProps {
  width: number;
  height: number;
  svg: JSX.Element;
}

export interface IconList {
  x: IconListProps;
}

const icons: IconList = {
  x: {
    width: 19,
    height: 19,
    svg: (
      <g>
        <path strokeLinecap="round" stroke="currentColor" d="M18 18L0 0" />
        <path strokeLinecap="round" stroke="currentColor" d="M18 0L0 18" />
      </g>
    ),
  }
};

export default icons;
