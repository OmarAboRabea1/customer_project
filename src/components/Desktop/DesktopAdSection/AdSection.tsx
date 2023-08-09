import React from 'react';
import { AdContainer, AdImage, AdSectionContainer, ButtonContainer, Heading, MoreForAds } from './styles';
import dopamine from '../../../assests/dopamine.jpeg'; 
import findYourSelf from '../../../assests/find_your_self.jpeg'; 
import { useNavigate } from "react-router-dom";


const DesktopAdSection = () => {

  const navigate = useNavigate();

    
    function handleAdClick(url: string) {
        window.open(url, '_blank');
    }

    const navigateToOurWork = () => {
      navigate('/ourWork');
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
              onClick={() => handleAdClick('https://me-qr.com/aysx8CU5')} 
            />
          </AdContainer>
          <ButtonContainer>
                <MoreForAds onClick={navigateToOurWork}> لجميع ورشاتنا ودوراتنا</MoreForAds>
            </ButtonContainer>
        </AdSectionContainer>
      );
}

export default DesktopAdSection;
