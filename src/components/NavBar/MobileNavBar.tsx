import React, { useEffect, useState } from 'react';
import MobileHamburger from "./MobileHamburger";
import { Box_img, Logo_img, Nav_Container } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileNavBarProps {
  scrollToFooter: () => void;
  scrollToAboutUs: () => void;
  scrollToOurServices: () => void;
}

export const MobileNavBar: React.FC<MobileNavBarProps> = ({
  scrollToFooter,
  scrollToAboutUs,
  scrollToOurServices,
}) => {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get('scrollTo');
  
    if (scrollTo === 'aboutUs') {
      setTimeout(() => {
        scrollToAboutUs();
      }, 1000);
    }
  }, [scrollToAboutUs]);

  const location = useLocation();

  const NavigateToWhatsApp = () => {
    window.open("https://wa.me/+972547100480");
}
  let navigate = useNavigate();

const NavigateToServices = () => {
  navigate('/services');
  window.scrollTo(0, 0);
}

const NavigateToOurWork = () => {
  navigate('/ourWork');
  window.scrollTo(0, 0);
}

const FuncScrollToAboutUs = () => {
  if (window.location.pathname === '/') {
    scrollToAboutUs();
  } else {
    navigate('/?scrollTo=aboutUs');
  }
};

  
    return(
      <Nav_Container>
        <Box_img>
            <Logo_img href="/"/>
        </Box_img>
        <MobileHamburger 
          scrollToFooter={NavigateToWhatsApp}
          scrollToAboutUs={FuncScrollToAboutUs}
          scrollToOurServices={NavigateToServices}
          scrollToOurWork={NavigateToOurWork}
        />
        <>{console.log(scrollToAboutUs)}</>
      </Nav_Container>
    )
}
