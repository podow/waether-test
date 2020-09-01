import styled from 'styled-components';
import { mainColor } from '../../variables';
import { device } from '../../breakpoints';

export const SliderItem = styled.div`
  background: ${mainColor} linear-gradient(90deg, #020024 0%, #0c2543 35%, #40a9ff 100%);
  cursor: pointer;
  border-radius: 14px;
  padding: 25px 35px;
  color: #fff;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }

    h2 {
      font-size: 3rem;
      line-height: 3.125rem;
      color: #fff;
      font-weight: 700;
    }

    div {
      span {
        font-size: 16px;
        font-weight: 700;

        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    .common {
      display: none;

      @media ${device.tablet} {
        display: block;
      }

      img.flag {
        padding: 0.2rem;
        background-color: #fff;
        border-radius: 0.25rem;
        max-width: 100%;
        height: auto;
        width: 80px;
      }

      h3 {
        color: rgba(255, 255, 255, 0.7);
        margin: 12px 0;
      }
    }

    .weather {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      p {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 24px;
        display: none:

        @media ${device.tablet} {
          display: block;
        }
      }
    }

    .temperature {
      h2 {
        color: rgba(255, 255, 255, 0.7);
        font-size: 6rem;
      }
    }
  }
`;

export const SliderInput = styled.div`
  padding-top: 25px;
`;

export const WeatherDetailedWrapper = styled.section`
  padding-bottom: 50px;
`;

export const WeatherDetailedImageRow = styled.section`
  display: flex;
  padding: 12px 0 24px;
`;

export const WeatherDetailedImageWrapper = styled.section`
  background-color: ${mainColor};
  border-radius: 50%;
`;
