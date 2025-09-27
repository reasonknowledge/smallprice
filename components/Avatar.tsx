import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import * as colors from "../colors/Colors";

interface AvatarProps {
  source?: ImageSourcePropType;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({ source, width = 30, height = 30 }) => {
  const defaultImage = require("../assets/image1.jpg");
  return (
    <Image
      source={source || defaultImage}
      style={{
        width,
        height,
        borderRadius: 30,
      }}
    />
  );
};

export default Avatar;
