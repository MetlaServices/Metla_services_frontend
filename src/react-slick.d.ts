declare module 'react-slick' {
  import * as React from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    autoplay?: boolean;
    autoplaySpeed?: number;
  }

  export default class Slider extends React.Component<Settings> {}
}
