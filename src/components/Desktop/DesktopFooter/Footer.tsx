import React, { forwardRef } from 'react';
import { Container, Footer_links, Footer_box, Footer_Container, Instagram_logo, Logo_box, IconContainer, FooterLine, RightsText, ContactButtons, Button, FooterContainer } from "./styles"
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../DesktopSearchBar/styles';

const DesktopFooter = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const currentYear = new Date().getFullYear();

    return(
        <FooterContainer ref={ref}>
      <RightsText>All rights reserved: Omar Abo Rabea</RightsText>
      <ContactButtons>
        <IconContainer>
            <FacebookIcon href="https://www.facebook.com"/>
            <WhatsappIcon href="wa.me/+972547100240"/>
            <InstagramIcon href="https://www.instagram.com/faten_haj_issa/"/>
        </IconContainer>
      </ContactButtons>
        </FooterContainer>

    )
});
export default DesktopFooter;