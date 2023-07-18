import React from 'react';
import { AdContainer, AdImage, AdSectionContainer, Heading } from './styles';
import dopamine from '../../../assests/dopamine.jpeg'; // replace this with the path to your ad image
import findYourSelf from '../../../assests/find_your_self.jpeg'; // replace this with the path to your ad image

const DesktopAdSection = () => {
    return (
        <AdSectionContainer>
          <Heading>ترقبوا قريبا</Heading>
          <AdContainer>
            <AdImage src={dopamine} alt="dopamine"/>
            <AdImage src={findYourSelf} alt="find your self"/>
          </AdContainer>
        </AdSectionContainer>
      );
}

export default DesktopAdSection;