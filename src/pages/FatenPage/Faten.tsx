import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, ContainerProfileImage, Description, ProfileImage, Title } from "./styles";
import { MobileNavBar } from '../../components/NavBar/MobileNavBar';
import MobileFooter from '../../components/Footer/Footer';

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
            <MobileNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <AboutUsContainer>
                <AboutUsDesc>
                    <ContainerProfileImage>
                    <Title>نبذة عن</Title>
                    <Title>فاتن حاج عيسى ابوربيع</Title>
                    <ProfileImage/>
                    </ContainerProfileImage>
                    <Description>مستشارة بالعلاقات الزوجية والاسرية والجنسية </Description>
                    <Description>حاصلة على اللقب الاول في التربية المجتمعية </Description>
                    <Description>موجهة مجموعات ومدربة في تطوير الذات </Description>
                    <Description>باحثة دكتوراة في العلاقات الاسرية</Description>
                    <Description>PHD In Family Counseling.</Description>
                    <Description>Simulation موجهة مجموعات ومرشدة محاكاة </Description>

                </AboutUsDesc>
            </AboutUsContainer>
            
            <MobileFooter ref={footerRef}/>
        </Container>
    )
}
export default Sameir;