import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, Description, Title } from "./styles";
import { MobileNavBar } from '../../components/NavBar/MobileNavBar';
import MobileFooter from '../../components/Footer/Footer';

const AboutUsPage=()=>{

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
                <Title>نبذة عنا</Title>
                <Title> مركز الامان</Title>
                <Description>الامان للاستشارات الزوجية والاسرية والجنسية يسعى الى تقديم الادوات الفعلية للازواج</Description>
                <Description>للحصول على علاقات زوجية آمنة وطرق تساعد الازواج للحلول العملية</Description>
                <Description>اللازمة في حل الخلافات والمشاكل الزوجية ووسائل فعلية لمشاكلهم الجنسية ،</Description>
                <Description> بالاضافة الى تقديم استشارات عائلية التي تدعم الاباء في كيفية التعامل مع ابنائهم .</Description>
                <Description>الامان يسعى الى تطوير الفرد والتعرف على ذاته ويساعده على تعريف هدفه في الحياة للوصول الى النسخة الافضل من نفسه.</Description>
            </AboutUsDesc>
            </AboutUsContainer>
            
            <MobileFooter ref={footerRef}/>
        </Container>
    )
}
export default AboutUsPage;