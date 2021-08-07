import React from 'react'
import Image from '../../images/image.jpg'
import { Figure, FigureContainer, FirstFont, Photo, PortfolioContainer, PortfolioH1, PortfolioWrapper, SecondFont, Title } from './ServiceElements'
const Services = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioH1>Portfolio</PortfolioH1>
      <PortfolioWrapper>
      <FigureContainer> 
          <Photo src={Image} alt="" />
          <Figure>
            <FirstFont />
            <SecondFont />
            <Title>GearsBD</Title>
          </Figure>
        </FigureContainer>
        <FigureContainer> 
          <Photo src={Image} alt="" />
          <Figure>
            <FirstFont />
            <SecondFont />
            <Title>Tou</Title>
          </Figure>
        </FigureContainer>
        <FigureContainer> 
          <Photo src={Image} alt="" />
          <Figure>
            <FirstFont />
            <SecondFont />
            <Title>Tou</Title>
          </Figure>
        </FigureContainer>
        <FigureContainer> 
          <Photo src={Image} alt="" />
          <Figure>
            <FirstFont />
            <SecondFont />
            <Title>Tou</Title>
          </Figure>
        </FigureContainer>
        <FigureContainer> 
          <Photo src={Image} alt="" />
          <Figure>
            <FirstFont />
            <SecondFont />
            <Title>Tou</Title>
          </Figure>
        </FigureContainer>
        <FigureContainer> 
          <Photo src={Image} alt="" />
          <Figure>
            <FirstFont />
            <SecondFont />
            <Title>Tou</Title>
          </Figure>
        </FigureContainer>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Services
