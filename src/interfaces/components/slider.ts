import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  peek?: number;
  withoutArrows?: boolean;
  trackAddStyles?: any;
}

export interface IState {
  slides: JSX.Element[];
  previewIndex?: number;
  currentSlide?: number;
}
