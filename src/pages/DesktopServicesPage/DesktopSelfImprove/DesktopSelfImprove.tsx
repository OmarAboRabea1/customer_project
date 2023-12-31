import { useRef } from 'react';
import { Container, HeroSection, CardsSection, Subtitle, CardButton, IconContainer} from "./styles";
import { useNavigate } from "react-router-dom";
import DesktopNavBar from '../../../components/Desktop/DesktopNavBar/DesktopNavBar';
import { SelfImproveCard } from './DesktopSelfImproveCards';
import DesktopFooter from '../../../components/Desktop/DesktopFooter/Footer';
import { FacebookIcon, InstagramIcon, Search_Container, WhatsappIcon } from '../../../components/Desktop/DesktopHeroSection/styles';

const DesktopSelfImprove = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const ourServicesRef = useRef<HTMLDivElement>(null);

    let navigate = useNavigate();

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToOurServices = () => {
        navigate('/services');
    }

    return (
        <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices} />
            <Search_Container>
                <HeroSection>
                    <Subtitle>تطوير الذات</Subtitle>
                    <IconContainer>
                        <FacebookIcon href="https://www.facebook.com/afaq.edu" />
                        <WhatsappIcon href="https://wa.me/+972547100480" />
                        <InstagramIcon href="https://www.instagram.com/aman_academy_sfe/" />
                    </IconContainer>
                </HeroSection>
            </Search_Container>
            <SelfImproveCard />
            <DesktopFooter />  
        </Container>
    )
}

export default DesktopSelfImprove;
