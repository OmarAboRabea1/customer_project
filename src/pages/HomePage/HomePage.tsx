import React, { useRef } from 'react';
import { AboutUs } from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { PopularRes } from "../../components/PopularRes/PopularRes"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { SignatureFilter } from "../../components/Signature/SignatureFilter"
import { SignatureDish } from "../../components/SignatureDish/SignatureDish"
import { WeekChef } from "../../components/WeekChef/WeekChef"
import { Container } from "./styles"
import { useEffect, useState } from "react";
import { DesktopSearchBar } from "../../components/Desktop/DesktopSearchBar/SearchBar"
import  SetWindowSize  from "../../Helpers/SetWindowSize"
import { DesktopOurServices } from "../../components/Desktop/DesktopOurServices/OurServices"
import { DesktopSignatureDish } from "../../components/Desktop/DesktopSignatureDish/SignatureDish"
import { DesktopSignatureFilter } from "../../components/Desktop/DesktopSignature/SignatureFilter"
import { DesktopWeekChef } from "../../components/Desktop/DesktopWeekChef/WeekChef"
import { DesktopAboutUs } from "../../components/Desktop/DesktopAboutUs/AboutUs"
import DesktopFooter from "../../components/Desktop/DesktopFooter/Footer"
import NavBar from "../../components/NavBar/NavBar"
import DesktopNavBar from "../../components/Desktop/DesktopNavBar/DesktopNavBar"
import { FooterContext } from '../../Helpers/FooterContext';


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
                <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
                <DesktopSearchBar scrollToOurServices={scrollToOurServices}/>
                <DesktopOurServices ref={ourServicesRef}/>
                <DesktopAboutUs ref={aboutUsRef}/>
                <DesktopFooter ref={footerRef}/>
                </>
            }           
            {Number(windowSize!) >= 1024 &&
                <>
                <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
                <DesktopSearchBar scrollToOurServices={scrollToOurServices}/>
                <DesktopOurServices ref={ourServicesRef}/>
                <DesktopAboutUs ref={aboutUsRef}/>
                <DesktopFooter ref={footerRef}/>
                </>
            }  
        </Container>
    )
}
export default HomePage