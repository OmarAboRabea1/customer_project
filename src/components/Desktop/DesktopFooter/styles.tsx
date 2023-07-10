import styled from "styled-components"
import instagram_logo from "../../../assests/instagram_logo.jpeg";


export const Container = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    bottom: 0px;
    justify-content: center;
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

export const Instagram_logo = styled.div`
    background-image: url(${instagram_logo});
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
`

export const FooterContainer = styled.footer`
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