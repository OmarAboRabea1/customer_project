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
                  title="Card Title 1"
                  description="Card Description 1"
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
