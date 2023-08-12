import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, ContainerProfileImage, Description, ProfileImageFaten, Title, Title2, TitleContainer } from "./styles";
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';

const Sameir=()=>{

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
        navigate('/Services');
    }

    return(
        <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <AboutUsContainer>
                <AboutUsDesc>
                <ContainerProfileImage>
                        <TitleContainer>
                            <Title>فاتن حاج عيسى - ابوربيع</Title>
                            <Title2> Faten Haj Issa - Abo Rabia</Title2>
                        </TitleContainer>
                        <ProfileImageFaten/>
                        </ContainerProfileImage>
                        <Description>مستشارة بالعلاقات الزوجية والاسرية والجنسية </Description>
                        <Description>حاصلة على اللقب الاول في التربية المجتمعية </Description>
                        <Description>حاصلة على اللقب الثاني في ادارة الاجهزة التربوية</Description>
                        <Description>موجهة مجموعات ومدربة في تطوير الذات </Description>
                        <Description>باحثة دكتوراة في العلاقات الاسرية</Description>
                        <Description>PHD In Family Counseling.</Description>
                        <Description>Simulation موجهة مجموعات ومرشدة محاكاة </Description>

                </AboutUsDesc>
            </AboutUsContainer>
            
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default Sameir;