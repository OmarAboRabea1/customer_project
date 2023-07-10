import React, { forwardRef } from 'react';
import {Title} from "../DesktopOurServices/styles";
import { AboutUsContainer, AboutUsDesc, AboutUsimages, AppleStore_image, EpicureLogo_image, Logo_box, PlayStore_image, Stores_box } from "./styles";



export const DesktopAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return(
        <AboutUsContainer ref={ref}>

            <AboutUsimages>
            <AboutUsDesc>
                <Title>ABOUT US:</Title>
                <Title>I am Faten Haj Aesa, Graduated with B.A from Gordon Academy</Title>
                <Title>Studying M.A in Managing</Title>
            </AboutUsDesc>
            </AboutUsimages>

        </AboutUsContainer>
            
    )
});
