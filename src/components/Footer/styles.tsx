import styled from "styled-components"
import linkedInIcon from '../../assests/LinkedInIcon.svg';  
import whatsappIcon from '../../assests/WhatsappIcon.svg'; 

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #333333;
  color: #ffffff;
  text-align: center;
`;

export const RightsText = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: white;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
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
