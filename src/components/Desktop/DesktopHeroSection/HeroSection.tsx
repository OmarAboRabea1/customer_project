import { Search_Container, HeroSection, Title, Subtitle, Button, ButtonContainer, IconContainer, FacebookIcon, WhatsappIcon, InstagramIcon, Acronym } from "./styles"
import { useNavigate } from "react-router-dom";



export const DesktopHeroSection = ({scrollToOurServices}: {scrollToOurServices: () => void}) => {

  let navigate = useNavigate();

  const NavigateToOurWork = () => {
    navigate('/ourWork');
}

    return(
            <Search_Container>
                <HeroSection>
                    <Title>Aman Center<Acronym>- SFE</Acronym> </Title>
                    <Title>مركز الامان</Title>
                    <Subtitle>للاستشارات الزوجية, الاسرية وتطوير الذات</Subtitle>
                    <ButtonContainer>
                        <Button onClick={NavigateToOurWork}> اعمالنا </Button>
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