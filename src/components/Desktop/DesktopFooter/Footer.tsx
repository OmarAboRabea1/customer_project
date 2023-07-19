import React, { forwardRef } from 'react';
import { ContactButtons, FooterContainer, IconContainer, LinkedInIcon, RightsText, WhatsappIcon } from './styles';

const DesktopFooter = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const currentYear = new Date().getFullYear();

    return(
        <FooterContainer ref={ref}>
          <RightsText>All rights reserved: Omar Abo Rabea {currentYear}</RightsText>
          <ContactButtons>
            <IconContainer>
                <LinkedInIcon href="https://www.linkedin.com/in/omar-abo-rabea-8695aa215/"/>
                <WhatsappIcon href="https://wa.me/+972539613663"/>
            </IconContainer>
          </ContactButtons>
        </FooterContainer>
    )
});
export default DesktopFooter;
