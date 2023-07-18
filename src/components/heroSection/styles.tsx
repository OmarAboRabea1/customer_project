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
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 0.8em;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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
