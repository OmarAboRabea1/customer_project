import React, { forwardRef } from 'react';
import {Title} from "../DesktopOurServices/styles";
import { AboutUsContainer, AboutUsDesc, AboutUsimages, AppleStore_image, EpicureLogo_image, Logo_box, PlayStore_image, Stores_box } from "./styles";



export const DesktopAboutUs = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return(
        <AboutUsContainer ref={ref}>

            <AboutUsimages>
            <AboutUsDesc>
                <Title>نبذة عنا</Title>
                <Title>سمير ابوربيع: </Title>
                <Title>حاصل على اللقب الاول في التربية اللا منهجية واللقب الثاني في الادارة التربوية وباحث دكتوراة في التنمية البشرية والارشاد الأسري، ومستشار في الارشاد الاسري والزوجي، اقدم تدريب للأفراد والعائلات والأزواج تشمل العديد من القضايا المختلفة مثل صعوبات العلاقات الزوجية والأسرية والذاتية ومشاكل التواصل واكتساب الأدوات اللازمة في التعامل مع التحديات المختلفة من اجل تحسين العلاقات بينهما أو تحسين أساليب الوالدية</Title>
            </AboutUsDesc>
            </AboutUsimages>

        </AboutUsContainer>
            
    )
});
