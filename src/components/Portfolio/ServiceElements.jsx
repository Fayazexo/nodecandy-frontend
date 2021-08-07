import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Lato from './Fonts/Lato-Regular.ttf';
import SedgwickAveDisplay from './Fonts/SedgwickAveDisplay-Regular.ttf';

export const PortfolioContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    transition: ease 0.3s all;
    height: 950px;
  }
  @media screen and (max-width: 768px) {
    height: 950px;
    transition: ease 0.3s all;
  }
  @media screen and (max-width: 580px) {
    height: 1650px;
    transition: ease 0.3s all;
  }
  @media screen and (max-width: 480px) {
    height: 1650px;
    transition: ease 0.3s all;
  }
 `
export const PortfolioWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-row-gap: 4rem;
    grid-column-gap: 3rem;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      transition: ease 0.3s all;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr 1fr;
      padding: 0 20px;
      transition: ease 0.3s all;
  }
    @media screen and (max-width: 580px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
      transition: ease 0.3s all;
  }
`
export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    transition: ease 0.3s all;
  }  
`

export const FirstFont = createGlobalStyle`
    @font-face {
    font-family: 'SedgwickAveDisplay';
    src: url(${SedgwickAveDisplay}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}
`
export const SecondFont = createGlobalStyle`
    @font-face {
    font-family: 'Lato';
    src: url(${Lato}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}
`
export const Figure = styled.div`
    transition: transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 100ms ease-in;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`

export const FigureContainer = styled.div`
    position: relative;
    width: 250px;
    height: 170px;
    transition: transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.05) skewY(-1deg);
        & ${Figure} {
            opacity: 1;
            transform: scale(0.91);
            cursor: pointer;
        }
    }

`

export const popIn = keyframes`
    13% {
    transform: scaleX(0.89) scaleY(0.75);
    opacity: 0;
}
    100% {
    transform: skewY(-13deg);
    opacity: 1;
}
`

export const popInImage = keyframes`
    0% {
        transform: skewY(5deg) scaleX(0.89) scaleY(0.89);
        opacity: 0;
  }

    100% {
        opacity: 1;
  }
`

export const Photo = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0px 21px 32px 0px rgba(16, 6, 37, 0.89);
    animation: ${popInImage} 700ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;
    animation-delay: 500ms;
    opacity: 0;
    transform: skewY(1deg);
`

export const Tagline = styled.span`
    position: absolute;
    display: block;
    background: linear-gradient(-55deg, #ffffff 0%, #f7f4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Lato";
    transform: skewY(-13deg);
    text-shadow: 0px 21px 32px 0px rgba(8, 40, 34, 0.89);
    animation: ${popIn} 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;
    opacity: 0;
    top: -44px;
    left: 44px;
    font-size: 16px;
    animation-delay: calc(500ms + 1 * 100ms);
`

export const Title = styled.span`
    position: absolute;
    display: block;
    background: linear-gradient(-55deg, #ffffff 0%, #f7f4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Lato";
    transform: skewY(-13deg);
    text-shadow: 0px 21px 32px 0px rgba(8, 40, 34, 0.89);
    animation: ${popIn} 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;
    opacity: 0;
    top: -34px;
    left: -21px;
    font-size: 60px;
    font-family: "SedgwickAveDisplay";
    animation-delay: calc(500ms + 2 * 100ms);
`

export const Project = styled.span`
    position: absolute;
    display: block;
    background: linear-gradient(-55deg, #ffffff 0%, #f7f4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Lato";
    transform: skewY(-13deg);
    text-shadow: 0px 21px 32px 0px rgba(8, 40, 34, 0.89);
    animation: ${popIn} 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;
    opacity: 0;
    bottom: -38px;
    right: -21px;
    font-size: 60px;
    font-family: "SedgwickAveDisplay";
    animation-delay: calc(500ms + 3 * 100ms);
`

export const Links = styled.span`
    position: absolute;
    display: block;
    background: linear-gradient(-55deg, #ffffff 0%, #f7f4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Lato";
    transform: skewY(-13deg);
    text-shadow: 0px 21px 32px 0px rgba(8, 40, 34, 0.89);
    animation: ${popIn} 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;
    opacity: 0;
    bottom: -50px;
    right: -21px;
    font-size: 16px;
    animation-delay: calc(500ms + 4 * 100ms);
`
