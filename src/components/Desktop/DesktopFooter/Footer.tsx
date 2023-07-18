import React, { forwardRef } from 'react';
import { ContactButtons, FooterContainer, IconContainer, RightsText } from './styles';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../DesktopHeroSection/styles';

const DesktopFooter = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const currentYear = new Date().getFullYear();

    return(
        <FooterContainer ref={ref}>
          <RightsText>All rights reserved: Omar Abo Rabea {currentYear}</RightsText>
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
