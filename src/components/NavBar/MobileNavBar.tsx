import React from 'react';
import MobileHamburger from "./MobileHamburger";
import { Box_img, Logo_img, Nav_Container } from './styles';
import { useNavigate } from 'react-router-dom';

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

  const NavigateToWhatsApp = () => {
    window.open("https://wa.me/+972547100240");
}
  let navigate = useNavigate();

const NavigateToOurWork = () => {
  navigate('/ourWork');
}


  
    return(
      <Nav_Container>
        <Box_img>
            <Logo_img href="/"/>
        </Box_img>
        <MobileHamburger 
          scrollToFooter={NavigateToWhatsApp}
          scrollToAboutUs={scrollToAboutUs}
          scrollToOurServices={NavigateToOurWork}
        />
      </Nav_Container>
    )
}
