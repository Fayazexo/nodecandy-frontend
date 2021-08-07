import React, { useState } from 'react';
import Collaborate from '../components/Collaborate';
import { data as CollaborateData } from '../components/Collaborate/Data';
import Contact from '../components/Contact';
import { data as ContactUsData } from '../components/Contact/Data';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import { data as GetStartedData } from '../components/GetStarted/Data';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import WhyUs from '../components/WhyUs';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <GetStarted {...GetStartedData}/>
      <WhyUs />
      <Collaborate {...CollaborateData}/>
      <Contact {...ContactUsData}/>
      <Footer />
    </>
  )
}

export default Home
