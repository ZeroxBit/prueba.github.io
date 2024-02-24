import { FC } from "react";
import { Image as ImageProp } from "./ImageInterface";
import Source from "./Source";

const Image: FC<ImageProp> = ({ responsive, ...props }) => {
  return (
    <picture>
      <Source responsive={responsive} />

      <img {...props} />
    </picture>
  );
};

export default Image;
