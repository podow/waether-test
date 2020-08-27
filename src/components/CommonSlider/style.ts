import styled from 'styled-components';
import { device } from '../../breakpoints';

export const SliderWrapper = styled.div`
  position: relative;

  .glide__arrow--left,
  .glide__arrow--right {
    padding: 0 !important;
  }
`;

export const GlideArrows = styled.div`
  position: absolute;
  top: -60px;
  right: 40px;
  left: auto;
  display: flex;

  @media ${device.laptop} {
    right: calc((100% - 1070px) / 2);
  }

  @media ${device.laptopL} {
    right: calc((100% - 1170px) / 2);
  }

  span {
    color: #fff;
    display: block;
    cursor: pointer;
    margin-right: 10px;
  }
`;

export const GlideTrack = styled.div`
  overflow: hidden;

  ul {
    display: flex;
    list-style: none;
  }
`;

export const SliderItem = styled.div`
  @media ${device.mobileS} {
    margin-inline-start: 25px;
    margin-inline-end: 25px;
  }
  @media ${device.tablet} {
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
  div {
    h3 {
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }
`;
