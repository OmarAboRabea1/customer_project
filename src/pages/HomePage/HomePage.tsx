import React, { useRef } from 'react';
import { Container } from "./styles"
import { useEffect, useState } from "react";
import { DesktopHeroSection } from "../../components/Desktop/DesktopHeroSection/HeroSection"
import  SetWindowSize  from "../../Helpers/SetWindowSize"
import { DesktopOurServices } from "../../components/Desktop/DesktopOurServices/OurServices"
import { DesktopAboutUs } from "../../components/Desktop/DesktopAboutUs/AboutUs"
import DesktopFooter from "../../components/Desktop/DesktopFooter/Footer"
import DesktopNavBar from "../../components/Desktop/DesktopNavBar/DesktopNavBar"
import { MobileNavBar } from '../../components/NavBar/MobileNavBar';
import { MobileHeroSection } from '../../components/heroSection/HeroSection';
import { MobileOurServices } from '../../components/OurServices/OurServices';
import { MobileAboutUs } from '../../components/AboutUs/AboutUs';
import MobileFooter from '../../components/Footer/Footer';
import MobileAdSection from '../../components/AdSection/AdSection';
import DesktopAdSection from '../../components/Desktop/DesktopAdSection/AdSection';


const HomePage=()=>{
    const [windowSize, setWindowSize] = useState<Number>()
    var size = SetWindowSize()
    const footerRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const ourServicesRef = useRef<HTMLDivElement>(null);

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToOurServices = () => {
        ourServicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }


    useEffect(()=>{
        setWindowSize(size)
    })
    return(
        <Container>
            {Number(windowSize!) < 1024 &&
                <>
                <MobileNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
                <MobileHeroSection scrollToOurServices={scrollToOurServices}/>
                <MobileAdSection/>
                <MobileOurServices ref={ourServicesRef}/>
                <MobileAboutUs ref={aboutUsRef}/>
                <MobileFooter ref={footerRef}/>
                </>
            }           
            {Number(windowSize!) >= 1024 &&
                <>
                <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
                <DesktopHeroSection scrollToOurServices={scrollToOurServices}/>
                <DesktopAdSection/>
                <DesktopOurServices ref={ourServicesRef}/>
                <DesktopAboutUs ref={aboutUsRef}/>
                <DesktopFooter ref={footerRef}/>
                </>
            }  
        </Container>
    )
}
export default HomePage