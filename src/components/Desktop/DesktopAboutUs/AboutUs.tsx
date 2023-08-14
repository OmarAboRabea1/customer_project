import React, { forwardRef, useContext, useEffect } from 'react';
import { AboutUsContainer, AboutUsDesc, Description, Title, MoreButton, MoreAboutButton, TitleSmaller, Description2 } from './styles';
import { useNavigate } from "react-router-dom";
import useScrollPosition from '../../../Helpers/ScrollToPosition';

export const DesktopAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {
  useScrollPosition("Home")

    const navigate = useNavigate();

    const navigateToPage = (url: string) => {
      const scrollPosition = window.scrollY;
      window.history.pushState({ scrollPosition }, '', window.location.href);
  
      navigate(url);
      window.scrollTo(0, 0);
    }
    
    useEffect(() => {
      const handlePopState = (event: PopStateEvent) => {
        if (event.state && event.state.scrollPosition) {
          window.scrollTo(0, event.state.scrollPosition);
        }
      };
  
      window.addEventListener('popstate', handlePopState);
  
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }, []);

    const navigateToFaten = () => {
        navigate('/about/faten');
        window.scrollTo(0, 0);
    }

    const navigateToSameir = () => {
        navigate('/about/sameir');
        window.scrollTo(0, 0);
    }

    const navigateToAbout = () => {
        navigate('/about');
        window.scrollTo(0, 0);
    }


    return (
      <AboutUsContainer ref={ref}>
      <AboutUsDesc>
        <Title>من نحن</Title>
        <Description> مركز الامان هو مركز مختص بالاستشارات الزوجية والاسرية والجنسية <br/> يقدم دورات في تطوير الذات</Description>
        <MoreAboutButton onClick={navigateToAbout}> للمزيد من التفاصيل</MoreAboutButton>
      </AboutUsDesc>
      <AboutUsDesc>
        <TitleSmaller> تقدم الاستشارات والدورات على ايدي مختصين:</TitleSmaller>
        <Description>سمير ابو ربيع :  استشاري  في  العلاقات  الزوجية,  الاسرية والجنسية </Description>
        <MoreButton onClick={() => navigateToPage('/about/sameir')}>للمزيد عن سمير</MoreButton>
        <Description2>فاتن حاج عيسى ابو ربيع: مستشارة في العلاقات الزوجية,  الاسرية والجنسية  </Description2>
        <MoreButton onClick={() => navigateToFaten()}>للمزيد عن فاتن</MoreButton>
      </AboutUsDesc>
    </AboutUsContainer>
    );
});
