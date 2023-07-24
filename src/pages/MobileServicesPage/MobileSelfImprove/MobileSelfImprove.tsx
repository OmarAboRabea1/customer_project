import Header from "../../../components/Header/Header";
import { useRef, useState } from 'react';

import { CardButton, CardsSection, Container, Description, Image, Subtitle, Title, Title_box } from "./styles";
import { useNavigate } from "react-router-dom";
import { MobileNavBar } from "../../../components/NavBar/MobileNavBar";
import MobileFooter from "../../../components/Footer/Footer";
import { SelfImproveCard } from "./SelfImproveCards";
import { Acronym, Button, ButtonContainer, FacebookIcon, HeroSection, IconContainer, InstagramIcon, Search_Container, WhatsappIcon } from "../../../components/heroSection/styles";

const MobileSelfImprove=()=>{

    const footerRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const ourServicesRef = useRef<HTMLDivElement>(null);

    let navigate = useNavigate();

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToOurServices = () => {
        navigate('/services');
    }

    return(
        <Container>
            <MobileNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices} />
            <Search_Container>
                <HeroSection>
                    <Subtitle>استشارة نفسية</Subtitle>
                    <IconContainer>
                        <FacebookIcon href="https://www.facebook.com/afaq.edu"/>
                        <WhatsappIcon href="https://wa.me/+972547100240"/>
                        <InstagramIcon href="https://www.instagram.com/aman_academy_sfe/"/>
                    </IconContainer>
                </HeroSection>

            </Search_Container>
            <SelfImproveCard/>
            <MobileFooter/>      
        </Container>
        
    )
}

export default MobileSelfImprove;