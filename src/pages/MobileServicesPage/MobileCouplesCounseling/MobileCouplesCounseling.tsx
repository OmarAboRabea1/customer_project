import Header from "../../../components/Header/Header";
import { useRef, useState } from 'react';

import { Container, Title, Title_box } from "./styles";
import DesktopFooter from "../../../components/Desktop/DesktopFooter/Footer";
import DesktopNavBar from "../../../components/Desktop/DesktopNavBar/DesktopNavBar";
import { useNavigate } from "react-router-dom";

const MobileCouplesCounseling=()=>{

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
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices} />
            <DesktopFooter/>      
        </Container>
        
    )
}
export default MobileCouplesCounseling;