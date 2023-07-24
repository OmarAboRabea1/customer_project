import styled from "styled-components"
import heroImage from "../../../assests/marriage_hero.jpeg";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        flex-direction: column;
    }
`;


export const CardsSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 992px) {
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #e5eef2;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid black; 
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        width: calc(50% - 2rem);
        margin-bottom: 2rem;
    }
`;

export const DesktopContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Cards_container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export const Cards_container2 = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
`
export const Title_box = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
`

export const Title = styled.h1`
    font-family: 'Helvetica Neue';
    direction: rtl; 
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
    color: #000000;
`
export const Secondary_title = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`



export const UnderlinedSpan = styled.span`

  text-decoration: underline;

`
 export const ResLink = styled.a`
    text-decoration: none;
 `

export const ResImg = styled.img` 
    width: 80%;
    height: 450px;
    background-position: center;
`
export const ClockImg = styled.img` 
    width: fit-content;
    height: fit-content;
    background-position: center;
`

export const ResImg_box = styled.div` 
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Res_container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


export const Box = styled.div`

    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const Empty_Box = styled.div`

    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    text-align: center;
`
export const Empty_text = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
    color: #000000;
`

export const Image = styled.img`
    width: 100%;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`;

export const CardTitle = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;

`;

export const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    direction: rtl; 
`;
export const CardPriceDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    direction: rtl; 
    
`;

export const CardSubDescription = styled.p`
    font-size: 0.7rem;
    line-height: 1.5;
    direction: rtl; 
    margin-bottom: 10px;  // reduced from 20px to 10px

`;

export const CardButton = styled.button`
    font-size: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: row-reverse ;
    color: #fff;
    background-color: #007BFF;
    border-radius: 5px;
    border: none;
    gap: 10px;
    cursor: pointer;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #0056b3;
    }
`;


export const Button_text = styled.p`
    font-size: 1.5rem;
    line-height: 0.5;
    padding-right: 11px;
    padding-left: 5px;
    direction: rtl; 
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px; // add space between the icon and the text
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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

export const Subtitle = styled.h2`

    font-size: 1.5rem;
    color: #000;
    padding: 10px;
    background-color: rgba(238, 238, 238, 0.7); //semi-transparent light grey
    border-radius: 15px;
    margin: 0;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); //drop shadow
    margin-bottom: 20px;
`;



export const Price_container = styled.div`
    width: 100%;
    font-size: 1.5rem;
    color: #000;
    background-color: rgba(233, 248, 236, 0.7); //semi-transparent light grey
    margin: 0;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); //drop shadow
    margin-bottom: 20px;
`;