import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, ContainerProfileImage, Description, ProfileImageSameir, Title, Title2, TitleContainer } from "./styles";
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
                            <Title>سمير ابوربيع</Title>
                            <Title2> Sameir Abo Rabia</Title2>
                        </TitleContainer>
                    <ProfileImageSameir/>
                    </ContainerProfileImage>
                    <Description>مستشار في العلاقات الزوجية والاسرية والجنسية</Description>
                    <Description>استشارات زوجية وأسرية وإرشادات تربوية خاصة للآباء والأمهات باساليب <br/> التربية الوالدية الحديثة وطرق التعامل مع الأبناء بحسب طريقة S.F.E</Description>
                    <Description>حاصل على اللقب الاول في التربية اللا منهجية واللقب الثاني في الادارة التربوية</Description>
                    <Description>باحث دكتوراة في التنمية البشرية والارشاد الاسري </Description>
                    <Description>PHD In Human Development And Family Counseling</Description>
                    <Description>Simulation موجه مجموعات ومرشد محاكاة </Description>
                    <Description>خبرة طويلة في مجال التربية والارشاد والتدريب</Description>
                </AboutUsDesc>
            </AboutUsContainer>
            
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default Sameir;