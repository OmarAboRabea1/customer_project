import { Nav_Container, StyledNavBar, Logo_img, Box_img, ButtonContainer, Button, Left_Container } from "./styles";

const DesktopNavBar = ({scrollToAboutUs, scrollToFooter, scrollToOurServices}: {scrollToAboutUs: () => void, scrollToFooter: () => void, scrollToOurServices: () => void}) => {

    const NavigateToWhatsApp = () => {
      window.open("https://wa.me/+972547100240");
  }
  
    return(
        <Nav_Container>
            <StyledNavBar>
                <Left_Container>
                    <ButtonContainer>
                        <Button onClick={NavigateToWhatsApp}>تواصل معنا</Button>
                        <Button onClick={scrollToAboutUs}>من نحن</Button>
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