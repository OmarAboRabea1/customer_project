import React, { forwardRef, useContext } from 'react';
import { AboutUsContainer, AboutUsDesc, Description, Title, MoreButton, MoreAboutButton, TitleSmaller, Description2 } from './styles';
import { useNavigate } from "react-router-dom";
import { ScrollContext } from '../../../Helpers/ScrollContext';

export const DesktopAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {

    const navigate = useNavigate();
    const { saveScroll } = useContext(ScrollContext); 


    const navigateToFaten = () => {
        saveScroll(); 
        navigate('/about/faten');
    }

    const navigateToSameir = () => {
        saveScroll(); 
        navigate('/about/sameir');
    }

    const navigateToAbout = () => {
        saveScroll(); 
        navigate('/about');
    }


    return (
        <AboutUsContainer ref={ref}>
          <AboutUsDesc>
            <Title>من نحن</Title>
            <Description> مركز الامان هو مركز مختص بالاستشارات الزوجية والاسرية والجنسية بالاضافة الى دورات في تطوير الذات</Description>
            <MoreAboutButton onClick={navigateToAbout}> للمزيد من التفاصيل</MoreAboutButton>
          </AboutUsDesc>
          <AboutUsDesc>
            <TitleSmaller> تقدم الاستشارة والدورات على ايدي مختصين:</TitleSmaller>
            <Description>سمير ابو ربيع :  استشاري  في  العلاقات  الزوجية,  الاسرية والجنسية </Description>
            <MoreButton onClick={navigateToSameir}>للمزيد عن سمير</MoreButton>
            <Description>فاتن حاج عيسى ابو ربيع: مستشارة في العلاقات الزوجية والاسرية  </Description>
            <MoreButton onClick={navigateToFaten}>للمزيد عن فاتن</MoreButton>
          </AboutUsDesc>
        </AboutUsContainer>
    );
});
