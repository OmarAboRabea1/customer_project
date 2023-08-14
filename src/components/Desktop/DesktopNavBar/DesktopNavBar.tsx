import { useNavigate } from "react-router-dom";
import { Nav_Container, StyledNavBar, Logo_img, Box_img, ButtonContainer, Button, Left_Container } from "./styles";
import { useEffect } from "react";

const DesktopNavBar = ({scrollToAboutUs, scrollToFooter, scrollToOurServices}: {scrollToAboutUs: () => void, scrollToFooter: () => void, scrollToOurServices: () => void}) => {

    const NavigateToWhatsApp = () => {
      window.open("https://wa.me/+972547100240");
  }

  let navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get('scrollTo');
  
    if (scrollTo === 'aboutUs') {
      setTimeout(() => {
        scrollToAboutUs();
      }, 1000);
    }
  }, [scrollToAboutUs]);
  
  const FuncScrollToAboutUs = () => {
    if (window.location.pathname === '/') {
      scrollToAboutUs();
    } else {
      navigate('/?scrollTo=aboutUs');
    }
  };
  
    return(
        <Nav_Container>
            <StyledNavBar>
                <Left_Container>
                    <ButtonContainer>
                        <Button onClick={NavigateToWhatsApp}>تواصل معنا</Button>
                        <Button onClick={FuncScrollToAboutUs}>من نحن</Button>
                        <Button onClick={scrollToOurServices}>خدماتنا</Button>
                    </ButtonContainer>
                </Left_Container>
                <Box_img>
                    <Logo_img href="/"/>
                </Box_img>
            </StyledNavBar>            
        </Nav_Container>
        
    )
}
export default DesktopNavBar;