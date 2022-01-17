import React from 'react';
import {Image, ImageProps, ImageStyle} from 'react-native';
import styles from './ThumbnailStyle';

export type ThumbnailPropsTypes = ImageProps & {
  imageSize?: number;
};

function Thumbnail(props: ThumbnailPropsTypes): JSX.Element {
  const extraStyle: ImageStyle = {};
  if (props.imageSize) {
    extraStyle.width = props.imageSize;
    extraStyle.height = props.imageSize;
    extraStyle.borderRadius = props.imageSize / 2;
  }
  return (
    <Image style={[styles.container, props.style, extraStyle]} {...props} />
  );
}

export default Thumbnail;
