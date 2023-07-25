import React, { forwardRef } from 'react';
import { AboutUsContainer, AboutUsDesc, Description, Title, MoreButton, MoreAboutButton, TitleSmaller } from './styles';
import { useNavigate } from "react-router-dom";

export const MobileAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const navigate = useNavigate();

    const navigateToFaten = () => {
        navigate('/about/faten');
    }

    const navigateToSameir = () => {
        navigate('/about/sameir');
    }


    const navigateToAbout = () => {
        navigate('/about');
    }

    return (
        <AboutUsContainer ref={ref}>
          <AboutUsDesc>
            <Title>من نحن</Title>
            <Description>يقدم المركز خدمات استشارية وتوجيهية للأفراد والازواج والعائلات الذين يبحثون عن التغيير الإيجابي في حياتهم.</Description>
            <MoreAboutButton onClick={navigateToAbout}> للمزيد من التفاصيل</MoreAboutButton>
          </AboutUsDesc>
          <AboutUsDesc>
            <TitleSmaller> تقدم الاستشارة والدورات على ايدي مختصي المركز:</TitleSmaller>
            <Description>سمير ابو ربيع: مستشار في التربية اللا منهجية </Description>
            <MoreButton onClick={navigateToSameir}>للمزيد عن سمير</MoreButton>
            <Description>فاتن حاج عيسى ابو ربيع: مستشارة في التربية اللا منهجية </Description>
            <MoreButton onClick={navigateToSameir}>للمزيد عن فاتن</MoreButton>
          </AboutUsDesc>
        </AboutUsContainer>
    );
});
