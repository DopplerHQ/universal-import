import * as React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  height: number;
};

const Logo = (props: LogoProps) => {
  const { height, ...rest } = props;

  return (
    <svg
      height={height / 2}
      viewBox="0 0 90 90"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.652 0C.933 0 .508.794.895 1.4L17.03 26.655a7.25 7.25 0 0 0 6.113 3.353h21.824c8 0 13 7.073 12.97 14.992-.029 7.92-5.358 14.922-12.97 14.922h-23.3a2.416 2.416 0 0 0-2.416 2.42v25.24A2.413 2.413 0 0 0 21.663 90h29.764C77.181 90 89.984 65.566 90 45c.016-20.566-12.638-45-38.573-45H1.652ZM12.24 59.992H6.444C2.885 59.992 0 63.349 0 67.49v21.847c0 .359.291.65.65.65h5.794c3.56 0 6.445-3.357 6.445-7.499V60.642a.65.65 0 0 0-.65-.65Z"
        fill="#fff"
        preserveAspectRatio="none"
      />
    </svg>
  );
};

export default Logo;
