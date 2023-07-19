import React, { forwardRef } from 'react';
import { AboutUsContainer, AboutUsDesc, Description, Title, MoreButton } from './styles';
import { useNavigate } from "react-router-dom";

export const MobileAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const navigate = useNavigate();

    const navigateToFaten = () => {
        navigate('/about/faten');
    }

    const navigateToSameir = () => {
        navigate('/about/sameir');
    }

    return (
        <AboutUsContainer ref={ref}>
          <AboutUsDesc>
            <Title>فاتن ابوربيع</Title>
            <Description>حاصلة على اللقب الأول في التربية اللا منهجية واللقب الثاني في الإدارة التربوية</Description>
            <Description>باحثة دكتوراة في التنمية البشرية والإرشاد الأسري، ومستشارة في الإرشاد الأسري والزوجي</Description>
            <MoreButton onClick={navigateToFaten}>أعرف أكثر عن فاتن</MoreButton>
          </AboutUsDesc>
          <AboutUsDesc>
            <Title>سمير ابوربيع</Title>
            <Description>حاصل على اللقب الأول في التربية اللا منهجية واللقب الثاني في الإدارة التربوية</Description>
            <Description>باحث دكتوراة في التنمية البشرية والإرشاد الأسري، ومستشار في الإرشاد الأسري والزوجي</Description>
            <MoreButton onClick={navigateToSameir}>أعرف أكثر عن سمير</MoreButton>
          </AboutUsDesc>
        </AboutUsContainer>
    );
});
