import styled, { keyframes } from "styled-components";
import heroImage from "../../../assests/marriageHero5.jpeg";
import search_img from "../../../assests/search_img.svg";
import facebookIcon from '../../../assests/FacebookIcon.svg';  
import whatsappIcon from '../../../assests/WhatsappIcon.svg';   
import instagramIcon from '../../../assests/InstagramIcon.svg'; 

export const Search_Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    margin-top: 100px;

`

export const Hero_box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 696px;
    background:url(${heroImage});
    background-position: center;
    background-size: 100vmax;
    background-repeat: no-repeat;
`   

export const SearchBar_box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    gap: 18px;
    width: 52%;
    height: 30%;
    background: rgba(255, 255, 255, 0.88);

`

export const Search_box = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 70%;
    height: 30px;
    border: 0.5px solid #000000;
    border-radius: 4px;


`

export const Search_input = styled.input`
    width: 100%;
    height: 83%;  
    padding: 10px 11.5px; 
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.29px;
    border: 0ch;
    background: none;
    color: #000000;
    outline: none;


`
export const On_search_img = styled.div`

    background-image: url(${search_img});
    background-repeat: no-repeat;
    width: 25px;
    height: 20px;
    margin-left: 12px;
`


export const Search_text_box = styled.div`
    width: 60%;
    height: 40%;

`



export const Search_result_container = styled.div`
    width: 90%;
    height: 150px;
    position: absolute;
    top: 210px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    background: rgba(255, 255, 255, 0.95);


`
export const Search_result_table = styled.div`
    width: 80%;
    height: fit-content;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;


`

export const Search_result_text = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`
export const nothing = styled.div`
    display: none;
`


export const Search_text_p = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`

export const Search_containerSec = styled.div`
    width: 100%;
    height: 100%;


`

export const HeroSection = styled.div`
  height: 600px; 
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white; 
`

export const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5em;  
  direction: rtl;
`;

export const Acronym = styled.span`
  font-size: 1.2em;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3.5em;

`;
export const Subtitle = styled.h2`
  font-size: 1.6em;
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
const glowingShadow = keyframes`
  0% {
    text-shadow: 0 0 5px #FFFF00, 0 0 10px #FFFF00, 0 0 15px #FFD700, 0 0 20px #FFD700, 0 0 25px #FFD700, 0 0 30px #FFD700;
  }
  100% {
    text-shadow: 0 0 10px #FFFF00, 0 0 20px #FFFF00, 0 0 30px #FFD700, 0 0 40px #FFD700, 0 0 50px #FFD700, 0 0 60px #FFD700;
  }
`;



export const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 1.1em;
  color: #2b00ff;
  font-weight: bold;
  background: -webkit-linear-gradient(5deg, #f6d47e, #f9f904);
  border: 2px solid white;
  border: 0px solid #000000; 
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: #030303;
    background: #f6d47e; 
    border: 2px solid #f9f904; 
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // space between the buttons
  margin-bottom: 2em; // for some space between the buttons and social media icons
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // space between the icons
`

export const SocialIcon = styled.a`
  display: block;
  width: 40px; // adjust size to fit your needs
  height: 40px;
  background-size: cover;
`

export const FacebookIcon = styled(SocialIcon)`
  background-image: url(${facebookIcon});
`

export const WhatsappIcon = styled(SocialIcon)`
  background-image: url(${whatsappIcon});
`

export const InstagramIcon = styled(SocialIcon)`
  background-image: url(${instagramIcon});
`
export const Title1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); 
  background: -webkit-linear-gradient(45deg, #f6d47e, #f9f904);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export const Acronym_small = styled.span`
  font-size: 1em;
  color: #00FFFF;  
font-size: 0.6em;
margin-left: 5px;
`;

export const Title_desc_box = styled.div`
width: fit-content;
align-items: center;
text-align: center;

`;