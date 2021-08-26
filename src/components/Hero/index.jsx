import React, { useState } from "react";
import { Button } from "../LetsBuildOne";
import { Button as DribbbleButton } from "../Dribbble";
import {
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1 color="#111111">
          Creating Fast Websites{" "}
          <HeroH1 color="#111111">For Smartest Generation</HeroH1>
        </HeroH1>
        <HeroP>
          A bunch of creative people creating smart web experience for your
          creative ideas. From Mobile Apps to Interactive Websites, One solution
          to all problems.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={() => openInNewTab("https://www.facebook.com/NodecandyHQ")}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Facebook
          </Button>
          <DribbbleButton
            onClick={() => openInNewTab("https://dribbble.com/fayaze")}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Dribbble
          </DribbbleButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
