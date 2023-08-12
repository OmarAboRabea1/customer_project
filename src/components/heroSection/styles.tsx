import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import heroImage from "../../assests/marriageHero5.jpeg";
import facebookIcon from "../../assests/FacebookIcon.svg";
import whatsappIcon from "../../assests/WhatsappIcon.svg";
import instagramIcon from "../../assests/InstagramIcon.svg";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ArabicFont';
    src: url('../../assets/Fonts/ReemKufi-VariableFont_wght.ttf') format('truetype');
  }
`;

export const Search_Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  margin-top: 70px;
`;

export const HeroSection = styled.div`
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.8em;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5em;
  @media (max-width: 450px) {
    font-size: 1.8em;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5em;  
  }
`;

export const Title1 = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: 1.3em;
  margin: 0;
  padding: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  text-align: center;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3em;

`;

export const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 0.6em;
  color: #2b00ff;
  font-weight: bold;
  background: -webkit-linear-gradient(5deg, #f6d47e, #f9f904);
  border: 2px solid white;
  border: 0px solid #000000; 
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: #f39625;
    background: #ffffff; 
    border: 2px solid #f39625; 
  }
`;

export const Acronym = styled.span`
  font-size: 0.9em;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3.5em;

`;


export const Acronym_small = styled.span`
  font-size: 0.9em;
  color: #00FFFF;  
font-size: 0.6em;
margin-left: 5px;
`;

export const Title_desc_box = styled.div`
width: fit-content;

`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 1em;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  background-size: cover;
`;

export const FacebookIcon = styled(SocialIcon)`
  background-image: url(${facebookIcon});
`;

export const WhatsappIcon = styled(SocialIcon)`
  background-image: url(${whatsappIcon});
`;

export const InstagramIcon = styled(SocialIcon)`
  background-image: url(${instagramIcon});
`;
