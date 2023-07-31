import React from 'react';
import { AdContainer, AdImage, AdSectionContainer, Heading } from './styles';
import dopamine from '../../../assests/dopamine.jpeg'; 
import findYourSelf from '../../../assests/find_your_self.jpeg'; 

const DesktopAdSection = () => {
    
    function handleAdClick(url: string) {
        window.open(url, '_blank');
    }

    return (
        <AdSectionContainer>
          <Heading>ترقبوا قريبا</Heading>
          <AdContainer>
            <AdImage 
              src={dopamine} 
              alt="dopamine" 
              onClick={() => handleAdClick('https://me-qr.com/HUGbGJMk')} 
            />
            <AdImage 
              src={findYourSelf} 
              alt="find your self" 
              onClick={() => handleAdClick('https://me-qr.com/HUGbGJMk')} 
            />
          </AdContainer>
        </AdSectionContainer>
      );
}

export default DesktopAdSection;
