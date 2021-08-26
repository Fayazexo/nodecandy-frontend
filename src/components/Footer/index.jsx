import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../images/logo2.svg";
import {
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Links</FooterLinkTitle>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">TOS</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Partners</FooterLinkTitle>
              <FooterLink
                onClick={() =>
                  openInNewTab("https://www.facebook.com/gearsbd.live")
                }
                to="/"
              >
                GearsBD
              </FooterLink>
              <FooterLink
                onClick={() =>
                  openInNewTab("https://www.facebook.com/VisuallyThinking")
                }
                to="/"
              >
                Think Visual
              </FooterLink>
              <FooterLink
                onClick={() =>
                  openInNewTab("https://www.facebook.com/CheatcodeNet")
                }
                to="/"
              >
                Cheatcode Network
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Nodecandy © {new Date().getFullYear()} All rights reserved.
              <br />
              Made with 💖 in Bangladesh
            </WebsiteRights>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={Logo} alt="" />
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/NodecandyBD"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/NodecandyBD"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/NodecandyBD"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/NodecandyBD"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
