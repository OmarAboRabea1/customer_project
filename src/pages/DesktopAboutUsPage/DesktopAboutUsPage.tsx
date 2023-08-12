import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, Description, FatenContainer, Names, PicturesContainer, SameirContainer, Title, Title2 } from "./styles";
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';
import { ProfileImageSameir } from '../SameirPage/styles';
import { ProfileImageFaten } from '../FatenPage/styles';

const DesktopAboutUsPage = () => {   // Updated the component name

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

    return (
        <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices} />
            <AboutUsContainer>
                <AboutUsDesc>
                <Title2> مركز الامان</Title2>
                <Description>الامان للاستشارات الزوجية والاسرية والجنسية يسعى الى تقديم الادوات الفعلية للازواج للحصول على علاقات زوجية آمنة وطرق تساعد الازواج للحلول العملية, اللازمة في حل الخلافات والمشاكل الزوجية ووسائل فعلية لمشاكلهم الجنسية.</Description>
                <Description> بالاضافة الى تقديم استشارات عائلية التي تدعم الاباء في كيفية التعامل مع ابنائهم.</Description>
                <Description>الامان يسعى الى تطوير الفرد والتعرف على ذاته ويساعده على تعريف هدفه في الحياة للوصول الى النسخة الافضل من نفسه.</Description>
                <Description>المركز بادارة المستشارين:</Description>
                <PicturesContainer>
                    <SameirContainer>
                        <Names>سمير ابو ربيع</Names>
                        <Names> Sameir Abo Rabia</Names>
                        <ProfileImageSameir/>
                    </SameirContainer>
                    <FatenContainer>
                    <Names>فاتن حاج عيسى - ابو ربيع</Names>
                    <Names>Faten Haj Issa - Abo Rabia</Names>
                    <ProfileImageFaten/>
                    </FatenContainer>
                </PicturesContainer>
                </AboutUsDesc>
            </AboutUsContainer>

            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default DesktopAboutUsPage;
