import React, { Component } from 'react';
import Glide from '@glidejs/glide';

import { GlideTrack, SliderWrapper, SliderItem, GlideArrows } from './style';

import { IProps, IState } from '../../interfaces/components/slider';

export default class CommonSlider extends Component<IProps, IState> {
  private id;
  private slider;

  constructor(props: IProps) {
    super(props);
    this.slider = null;
    this.state = {
      slides: []
    };
  }

  componentDidMount(): void {
    this.initSlider();
    this.id = this.uniqueId();
  }

  private uniqueId = (): string =>
    `id_${(new Date().getTime() / Math.random())
      .toString(16)
      .replace('.', '')}`;

  private initSlider = (): void => {
    const { children, peek } = this.props;

    if (children && Array.isArray(children) && children.length) {
      this.setState(
        {
          slides: children.map((el, i) => (
            <SliderItem data-slide={i} key={i}>
              {el}
            </SliderItem>
          ))
        },
        () => {
          this.slider = new Glide(`#${this.id}`, {
            autoplay: false,
            peek: 100,
            animationDuration: 1000,
            type: 'carousel',
            animationTimingFunc: 'ease',
            startAt: 0,
            focusAt: 0,
            perView: 1,
            breakpoints: {
              550: {
                perView: 1,
                peek: {
                  before: peek ? peek : 0,
                  after: peek ? peek : 0
                }
              }
            }
          });

          this.slider.mount();
        }
      );
    }
  };

  render() {
    const { slides } = this.state;
    const { withoutArrows, trackAddStyles } = this.props;

    return (
      <SliderWrapper id={this.id}>
        {!withoutArrows && (
          <GlideArrows data-glide-el="controls">
            <span data-glide-dir="<">&#8592;</span>
            <span data-glide-dir=">">&#8594;</span>
          </GlideArrows>
        )}
        <GlideTrack style={trackAddStyles} data-glide-el="track">
          <ul>{slides}</ul>
        </GlideTrack>
      </SliderWrapper>
    );
  }
}
