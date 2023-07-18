import React from 'react';
import { AdContainer, AdImage, AdSectionContainer, Heading } from './styles';
import dopamine from '../../../assests/dopamine.jpeg'; // replace this with the path to your ad image
import findYourSelf from '../../../assests/find_your_self.jpeg'; // replace this with the path to your ad image

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
              onClick={() => handleAdClick('https://me-qr.com/HUGbGJMk')} // replace with the actual URL
            />
            <AdImage 
              src={findYourSelf} 
              alt="find your self" 
              onClick={() => handleAdClick('https://me-qr.com/HUGbGJMk')} // replace with the actual URL
            />
          </AdContainer>
        </AdSectionContainer>
      );
}

export default DesktopAdSection;
