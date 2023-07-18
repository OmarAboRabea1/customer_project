import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Search_Container, HeroSection, Title, Subtitle, Button, ButtonContainer, IconContainer, FacebookIcon, WhatsappIcon, InstagramIcon, Acronym } from "./styles"



export const DesktopHeroSection = ({scrollToOurServices}: {scrollToOurServices: () => void}) => {

  const all_retaurants = useSelector((state: any) => state.restaurants.value)
  const all_chefs = useSelector((state: any) => state.chefs.value)
  const all_dishes = useSelector((state: any) => state.dishes.value)

  const [windowSize, setWindowSize] = useState<Number>()

  useEffect(()=>{
      setWindowSize(window.innerWidth)
  })

    return(
            <Search_Container>
                <HeroSection>
                    <Title>Aman Center<Acronym>- SFE</Acronym> </Title>
                    <Title>مركز الامان</Title>
                    <Subtitle>للاستشارات الزوجية, الاسرية وتطوير الذات</Subtitle>
                    <ButtonContainer>
                        <Button>تعرف على المزيد</Button>
                        <Button onClick={scrollToOurServices}>احجز استشارتك</Button>
                    </ButtonContainer>
                    <IconContainer>
                        <FacebookIcon href="https://www.facebook.com/afaq.edu"/>
                        <WhatsappIcon href="https://wa.me/+972547100240"/>
                        <InstagramIcon href="https://www.instagram.com/aman_academy_sfe/"/>
                    </IconContainer>
                </HeroSection>

        </Search_Container>
    )
}