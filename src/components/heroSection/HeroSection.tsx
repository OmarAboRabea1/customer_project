import { useSelector } from "react-redux";
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
} from "./styles";

export const MobileHeroSection = ({
  scrollToOurServices,
}: {
  scrollToOurServices: () => void;
}) => {
  const all_restaurants = useSelector((state: any) => state.restaurants.value);
  const all_chefs = useSelector((state: any) => state.chefs.value);
  const all_dishes = useSelector((state: any) => state.dishes.value);

  return (
    <Search_Container>
      <HeroSection>
        <Title>عيادة الامان</Title>
        <Subtitle>للاستشارات الزوجية, الاسرية, والجنسية</Subtitle>
        <ButtonContainer>
          <Button>تعرف على المزيد</Button>
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