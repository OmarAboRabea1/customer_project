import React, { forwardRef } from 'react';
import { ServicesSection, Services_Container } from "./styles"
import self_improve from "../../../assests/self_improve.jpeg"
import family_counsel from "../../../assests/counsel_family.jpeg"
import couple_counsel from "../../../assests/counsel1.jpeg"
import { ServiceCard } from './ServiceCard';




export const DesktopOurServices = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return(
    <Services_Container>
      <ServicesSection ref={ref}>
            <ServiceCard
                imgUrl={self_improve}
                title="تطوير الذات"
                description="تطوير الذات والتنمية البشرية هي عمليات تهدف إلى تحسين الأداء الشخصي والمهني والاجتماعي للفرد. وتشمل هذه العمليات تعلم مهارات جديدة وتطوير القدرات والمواهب الخاصة بالفرد، وتحسين الوعي الذاتي وتعزيز الثقة بالنفس  والقدرة على تحديد الاهداف والعمل على انجازها ضمن خطة عملية مدروسة وممنهجة . المختصون يوفرون هذه الخدمة من خلال التعلم والتدريب العملي الذي يهدف الى تحسين التواصل بين الفرد والمجتمع والتركيز على نقاط القوة وتطوير الذات واكتشاف القدرات الكامنة بكل شخص وتحقيق الاهداف على ارض الواقع ."
                buttonUrl="/services/self_improve"
            />
            <ServiceCard
                imgUrl={couple_counsel}
                title="استشارات زوجية وجنسية"
                description="مركز الأمان يوفر خدمات استشارية للأفراد والعائلات الذين يعانون من مشاكل زوجية وجنسية ويهدف هذا المركز إلى توفير الدعم والمساعدة اللازمة للازواج. يشمل نطاق الاستشارات العديد من القضايا المختلفة، مثل المشاكل في العلاقات الزوجية، والعلاقات الجنسية، والعنف الأسري، والقضايا المتعلقة بالتوتر العاطفي والنفسي. الهدف الأساسي هو تحسين الحياة الزوجية والجنسية للأزواج وتعزيز التواصل الفعال بينهم والحفاظ على العلاقة السليمة والمحبة بين الأزواج."
                buttonUrl="/services/couples_counseling"
            />
            <ServiceCard
                imgUrl={family_counsel}
                title="استشارات اسرية"
                description="تقدم الاستشارات الأسرية دعماً ومساعدة للأفراد والأزواج والعائلات الذين يواجهون صعوبات وتحديات في الحياة. تساعد الاستشارات الأسرية في تعزيز التفاهم والتواصل بين أفراد الأسرة، وتعالج القضايا والمشكلات التي قد تؤدي إلى التوتر والاضطرابات في الأسرة. وتهدف إلى تقديم الدعم والمشورة للأفراد والعائلات لتحسين علاقاتهم وتحقيق التوازن والسلام في الحياة الأسرية."
                buttonUrl="/services/family_counseling"
            />
      </ServicesSection>
    </Services_Container>
  );
});
