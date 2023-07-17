import React from 'react';
import MobileHamburger from "./MobileHamburger";
import { Box_img, Logo_img, Nav_Container } from './styles';

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
    return(
      <Nav_Container>
        <Box_img>
            <Logo_img href="/"/>
        </Box_img>
        <MobileHamburger 
          scrollToFooter={scrollToFooter}
          scrollToAboutUs={scrollToAboutUs}
          scrollToOurServices={scrollToOurServices}
        />
      </Nav_Container>
    )
}
