import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1 color="#ffffff">Building a network for the <HeroH1 color="#b9189b">Smartest Generation</HeroH1></HeroH1>
        <HeroP>A bunch of creative people creating smart web experience for your creative ideas.</HeroP>
        <HeroBtnWrapper>
          <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Let's build one {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
