import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, Description, Title } from "./styles";
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';

const DesktopSameirPage=()=>{

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
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <AboutUsContainer>
                <AboutUsDesc>
                    <Title>نبذة عنا</Title>
                    <Title>سمير ابوربيع</Title>
                    <Description>حاصل على اللقب الأول في التربية اللا منهجية واللقب الثاني في الإدارة التربوية</Description>
                    <Description>باحث دكتوراة في التنمية البشرية والإرشاد الأسري، ومستشار في الإرشاد الأسري والزوجي</Description>
                    <Description>يقدم تدريبًا للأفراد والعائلات والأزواج تشمل العديد من القضايا المختلفة</Description>
                    <Description>مثل صعوبات العلاقات الزوجية والأسرية والذاتية ومشاكل التواصل</Description>
                    <Description>يهدف لتمكين الأفراد وتزويدهم بالأدوات اللازمة لتحسين العلاقات والأساليب الوالدية</Description>
                </AboutUsDesc>
            </AboutUsContainer>
            
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default DesktopSameirPage;