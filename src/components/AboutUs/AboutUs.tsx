import React, { forwardRef } from 'react';
import { AboutUsContainer, AboutUsDesc, Description, Title } from './styles';



export const MobileAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <AboutUsContainer ref={ref}>
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
    );
});
