import { FC } from "react";
import { Responsive } from "./ImageInterface";

const Source: FC<Responsive> = ({ responsive }) => {
  if (!responsive?.length) {
    return <></>;
  }

  return (
    <>
      {responsive.map(({ src, minWidth }, i) => (
        <source key={`media-${i}`} media={`(min-width: ${minWidth})`} srcSet={src} />
      ))}
    </>
  );
};

export default Source;
