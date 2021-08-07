import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #000000;
`

export const FooterWrap = styled.div`
  padding: 70px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;


  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 17px;
  margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition: 0.2s ease-in all;

  &:hover {
    color: #b9189b;
    transition: 0.2s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #ffffff;
  font-size: 24px;
  transition: 0.2s ease-in all;

  &:hover {
    color: #b9189b;
    transition: 0.2s ease-out all;
  }
`