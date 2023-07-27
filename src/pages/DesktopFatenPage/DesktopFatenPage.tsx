import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, ContainerProfileImage, Description, ProfileImage, Title } from "./styles";
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
                    <Title>نبذة عن</Title>
                    <Title>سمير ابوربيع</Title>
                    <ProfileImage/>
                    </ContainerProfileImage>
                    <Description>خبرة طويلة في مجال التربية والارشاد والتدريب</Description>
                    <Description>مستشار في العلاقات الزوجية والاسرية والجنسية،</Description>
                    <Description>حاصل على اللقب الاول في التربية اللا منهجية واللقب الثاني في الادارة التربوية</Description>
                    <Description>باحث دكتوراة في التنمية البشرية والارشاد الاسري </Description>
                    <Description>PHD In Human Development And Family Counseling.</Description>
                    <Description>Simulation موجه مجموعات ومرشد محاكاة </Description>

                </AboutUsDesc>
            </AboutUsContainer>
            
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default Sameir;