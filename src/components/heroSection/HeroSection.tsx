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
  GlobalStyle,
  Acronym_small,
  Title_desc_box,
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
    window.scrollTo(0, 0);
}
const NavigateToServices = () => {
  navigate('/services');
  window.scrollTo(0, 0);
}

  return (
    <Search_Container>
      <GlobalStyle/>
      <HeroSection>
        <Title1>Aman Center <Acronym_small>S.F.E</Acronym_small></Title1>
        <Acronym>Social Family Education</Acronym>
        <Title_desc_box>
          <Title>مركز الامان</Title>
          <Subtitle>للاستشارات الزوجية والاسرية<br/> وتطوير الذات</Subtitle>
        </Title_desc_box>
        <ButtonContainer>
          <Button onClick={NavigateToOurWork}>اعمالنا  </Button>
          <Button onClick={NavigateToServices}>احجز استشارتك</Button>
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