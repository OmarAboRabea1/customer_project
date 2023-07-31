import styled from "styled-components"
import linkedInIcon from '../../../assests/LinkedInIcon.svg';  
import whatsappIcon from '../../../assests/WhatsappIcon.svg'; 

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  position: relative;
  bottom: 0;
  z-index: 1;
`

export const Footer_Container = styled.div`
    height: fit-content;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 900px    

`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // space between the icons
`

export const Footer_links = styled.a`
    text-align: center;
    text-decoration: none;
`

export const Footer_box = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    text-align: center;
`
export const Logo_box = styled.div`
    height: fit-content;
    width: 100%;
`
export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #333333;
  color: #ffffff;
  
`;
export const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333333;
`;

export const RightsText = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: white;
  padding-right: 30px;
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #ffffff;
  }
`;

export const SocialIcon = styled.a`
  display: block;
  width: 40px; // adjust size to fit your needs
  height: 40px;
  background-size: cover;
`


export const LinkedInIcon = styled(SocialIcon)`
  background-image: url(${linkedInIcon});
`

export const WhatsappIcon = styled(SocialIcon)`
  background-image: url(${whatsappIcon});
`