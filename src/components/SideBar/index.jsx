import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='getstarted' onClick={toggle}>Get Started</SidebarLink>
          <SidebarLink to='whyus' onClick={toggle}>Why Us?</SidebarLink>
          <SidebarLink to='collaborate' onClick={toggle}>Collaborate</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
