import React, { forwardRef } from 'react';
import { CardsContainer, ServiceTitle, ServicesSection, Services_Container, Title, Title_box } from "./styles"
import self_improve from "../../assests/self_improve.jpeg"
import family_counsel from "../../assests/counsel_family.jpeg"
import couple_counsel from "../../assests/counsel1.jpeg"



import { ServiceCard } from './ServiceCard';


export const MobileOurServices = forwardRef<HTMLDivElement, {}>((props, ref) => {

    return(
      <Services_Container>
        <ServicesSection ref={ref}>
          <CardsContainer>
              <ServiceCard
                  imgUrl={self_improve}
                  title="تطوير الذات"
                  description="تطوير الذات والتنمية البشرية هي عمليات تهدف إلى تحسين الأداء الشخصي والمهني والاجتماعي للفرد. وتشمل هذه العمليات تعلم مهارات جديدة وتطوير القدرات والمواهب الخاصة بالفرد، وتحسين الوعي الذاتي وتعزيز الثقة بالنفس  والقدرة على تحديد الاهداف والعمل على انجازها ضمن خطة عملية مدروسة وممنهجة . المختصون يوفرون هذه الخدمة من خلال التعلم والتدريب العملي الذي يهدف الى تحسين التواصل بين الفرد والمجتمع والتركيز على نقاط القوة وتطوير الذات واكتشاف القدرات الكامنة بكل شخص وتحقيق الاهداف على ارض الواقع ."
                  buttonUrl="/services/self_improve"
              />
              <ServiceCard
                  imgUrl={couple_counsel}
                  title="استشارات زوجية وجنسية"
                  description="مركز الأمان يوفر خدمات استشارية للأفراد والعائلات الذين يعانون من مشاكل زوجية وجنسية ويهدف هذا المركز إلى توفير الدعم والمساعدة اللازمة للازواج

                  يشمل نطاق الاستشارات العديد من القضايا المختلفة، مثل صعوبات العلاقات الزوجية والمشاكل العاطفية للأفراد، ومشاكل التواصل وفهم الطرف الآخر واكتساب الادوات اللازمة في التعامل معه.
                  
                  تتمثل خدمات المركز  الخاصة بالاستشارات الزوجية في تقديم جلسات استشارية فردية وزوجية وتقديم الإرشادات والنصائح اللازمة للتعامل مع المشاكل والتحديات المختلفة ."
                  buttonUrl="/services/couples_counseling"
              />
              <ServiceCard
                  imgUrl={family_counsel}
                  title="استشارات اسرية"
                  description="المركز يقدم خدمات لكل افراد الاسرة ويعنى بتزويد كل الآليات التي يحتاجها الفرد ضمن الاطر الاجتماعية كما ويعمل على دعم الأسر من الناحية الاجتماعية والتوعوية لدى الابناء والآباء كما يساهم المركز بتقديم الاستشارات العائلية اللازمة والحلول المساعدة  في التواصل والتعامل مع الابناء وبناء اسرة سعيدة ومتينة ومترابطة قادرة على حل المشكلات التي تواجهها في الحياة ضمن اساليب عصرية مدروسة ."
                  buttonUrl="/services/family_counseling"
              />
          </CardsContainer>
        </ServicesSection>
      </Services_Container>
        
            
    )
});
