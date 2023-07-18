import styled from "styled-components"
import heroImage from "../../../assests/marriage_hero.jpeg";
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


export const Search_text_h1 = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    font-color: white;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

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
  height: 80vh; 
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
  font-size: 3em; 
  text-align: center;
  margin-bottom: 1em; // for some space between the title and subtitle
`

export const Subtitle = styled.h2`
  font-size: 2em; // adjust this to fit your needs
  text-align: center;
  margin-bottom: 2em; // for some space between the subtitle and button
`

export const Button = styled.button`
  padding: 1em 2em; // adjust this to fit your needs
  font-size: 1em; // adjust this to fit your needs
  color: white; // for the white text
  background-color: transparent; // for the transparent background
  border: 2px solid white; // for the white border
  cursor: pointer;

  &:hover {
    // styles for when the button is hovered over, adjust this to fit your needs
    background-color: white;
    color: black;
  }
`

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