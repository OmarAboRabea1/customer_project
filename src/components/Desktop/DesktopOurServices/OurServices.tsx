import React, { forwardRef } from 'react';
import { CardsContainer, ServiceTitle, ServicesSection, Services_Container, Title, Title_box } from "./styles"
import service1Image from "../../../assests/Claro_Res.svg"
import { ServiceCard } from './ResCard';


export const DesktopOurServices = forwardRef<HTMLDivElement, {}>((props, ref) => {

    return(
      <Services_Container>
        <ServicesSection ref={ref}>
          <CardsContainer>
              <ServiceCard
                  imgUrl={service1Image}
                  title="استشارات اسرية"
                  description="المركز يقدم خدمات لكل افراد الاسرة ويعنى بتزويد كل الآليات التي يحتاجها الفرد ضمن الاطر الاجتماعية كما ويعمل على دعم الأسر من الناحية الاجتماعية والتوعوية لدى الابناء والآباء كما يساهم المركز بتقديم الاستشارات العائلية اللازمة والحلول المساعدة  في التواصل والتعامل مع الابناء وبناء اسرة سعيدة ومتينة ومترابطة قادرة على حل المشكلات التي تواجهها في الحياة ضمن اساليب عصرية مدروسة ."
                  buttonUrl="/"
              />
              <ServiceCard
                  imgUrl={service1Image}
                  title="Card Title 2"
                  description="Card Description 2"
                  buttonUrl="/"
              />
              <ServiceCard
                  imgUrl={service1Image}
                  title="Card Title 3"
                  description="Card Description 3"
                  buttonUrl="/"
              />
          </CardsContainer>
        </ServicesSection>
      </Services_Container>
        
            
    )
});
