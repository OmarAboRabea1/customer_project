import {
  Search_Container,
  HeroSection,
  Title,
  Subtitle,
  Button,
  ButtonContainer,
  IconContainer,
  FacebookIcon,
  WhatsappIcon,
  InstagramIcon,
  Acronym,
  Title1,
} from "./styles";

import { useNavigate } from "react-router-dom";

export const MobileHeroSection = ({
  scrollToOurServices,
}: {
  scrollToOurServices: () => void;
}) => {

  let navigate = useNavigate();

  const NavigateToOurWork = () => {
    navigate('/ourWork');
}

  return (
    <Search_Container>
      <HeroSection>
        <Title1>Aman Center<Acronym>- SFE</Acronym> </Title1>
        <Title>مركز الامان</Title>
        <Subtitle>للاستشارات الزوجية, الاسرية وتطوير الذات</Subtitle>
        <ButtonContainer>
          <Button onClick={NavigateToOurWork}>اعمالنا  </Button>
          <Button onClick={scrollToOurServices}>احجز استشارتك</Button>
        </ButtonContainer>
        <IconContainer>
          <FacebookIcon href="https://www.facebook.com" />
          <WhatsappIcon href="wa.me/+972547100240" />
          <InstagramIcon href="https://www.instagram.com/faten_haj_issa/" />
        </IconContainer>
      </HeroSection>
    </Search_Container>
  );
};