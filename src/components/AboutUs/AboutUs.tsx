import React, { forwardRef } from 'react';
import { AboutUsContainer, AboutUsDesc, Description, Title, MoreButton, MoreAboutButton, TitleSmaller, Description2 } from './styles';
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
            <Description>سمير ابو ربيع :  استشاري  في  العلاقات  الزوجية,  الاسرية والجنسية </Description>
            <MoreButton onClick={navigateToSameir}>للمزيد عن سمير</MoreButton>
            <Description2>فاتن حاج عيسى ابو ربيع: مستشارة في العلاقات الزوجية والاسرية  </Description2>
            <MoreButton onClick={navigateToSameir}>للمزيد عن فاتن</MoreButton>
          </AboutUsDesc>
        </AboutUsContainer>
    );
});
