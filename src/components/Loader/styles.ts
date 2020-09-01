import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%, 10% {
    transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
`;

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  position: fixed;
  .caption {
    margin: 0 auto;

    .cube {
      position: relative;
      transform: rotateZ(45deg);
      width: 50%;
      height: 50%;
      float: left;
      transform: scale(1.1);

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(52, 73, 94, 1);
        animation: ${animation} 2.76s infinite linear both;
        transform-origin: 100% 100%;
      }

      &-loader {
        width: 73px;
        height: 73px;
        margin: 0 auto;
        margin-top: 49px;
        position: relative;
        transform: rotateZ(45deg);

        div:nth-child(2) {
          transform: scale(1.1) rotateZ(90deg);
          &:before {
            animation-delay: 0.35s;
          }
        }

        div:nth-child(3) {
          transform: scale(1.1) rotateZ(270deg);
          &:before {
            animation-delay: 1.04s;
          }
        }

        div:last-child {
          transform: scale(1.1) rotateZ(180deg);
          &:before {
            animation-delay: 0.69s;
          }
        }
      }
    }
  }
`;
