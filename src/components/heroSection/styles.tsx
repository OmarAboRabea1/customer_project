import styled from "styled-components";
import heroImage from "../../assests/marriage_hero.jpeg";
import facebookIcon from "../../assests/FacebookIcon.svg";
import whatsappIcon from "../../assests/WhatsappIcon.svg";
import instagramIcon from "../../assests/InstagramIcon.svg";

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
  font-size: 2em;
  margin-bottom: 0.5em;
  font-family: 'Arial', sans-serif; // add a font of your choice here
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); // adds a shadow to the text
  /* Adding a bright gradient color to the title text */
  background: -webkit-linear-gradient(45deg, #FF8C00, #FFFF00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title1 = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-family: 'Arial', sans-serif; // add a font of your choice here
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); // adds a shadow to the text
  /* Adding a bright gradient color to the title text */
  background: -webkit-linear-gradient(45deg, #FF8C00, #FFFF00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: 1em;
  margin-bottom: 1em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); // Shadow to make it pop out
  text-align: center;
  font-weight: bold; // Make the font weight heavier

  /* Adding a bright gradient color to the title text */
  background: -webkit-linear-gradient(45deg, #f39625, #f4f437);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 0.6em;
  color: #0b0a0a;
  background: -webkit-linear-gradient(45deg, #f4efe8, #f6f6de); // Apply the linear gradient as the background
  border: 2px solid white;
  border: 2px solid #f39625; // Apply the orange color from the gradient to the border
  cursor: pointer;
  &:hover {
    color: #f39625;
    background: #ffffff; // Change to white background color
    border: 2px solid #f39625; 
  }
`;

export const Acronym = styled.span`
  color: #00FFFF;  // use a contrasting color to make it stand out
  font-size: 0.6em; // slightly smaller font size
  margin-left: 5px; // little space from the main title
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
