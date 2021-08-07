import React from 'react';
import { FaAt, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import image from '../../images/Coffee.svg';
import { Button } from '../ContactButtons';
import { BtnWrap, ButtonContainer, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements';


const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonContainer>
                <BtnWrap>
                  <Button onClick={() => openInNewTab('https://wa.link/k533ns')} to='/'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  ><FaWhatsapp />
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={() => openInNewTab('https://m.me/NodecandyBD')} to='/'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  ><FaFacebookMessenger />
                  </Button>
                </BtnWrap>
                <BtnWrap>
                  <Button onClick={() => openInNewTab('mailto:hello@nodecandy.com')} to='/'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  ><FaAt />
                  </Button>
                </BtnWrap>
                </ButtonContainer>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
