import styled from "styled-components"
import { Button } from '@material-ui/core';

import profileImage from "../../assests/self_improve3.jpeg";

// Add this at the top of your styles.tsx file
const Colors = {
    primary: '#4F46E5', // A shade of purple
    secondary: '#06D6A0', // A shade of green
    light: '#FAFAFA', // A light grey
    dark: '#171923', // A dark grey
}

const FontFamily = 'Arial, sans-serif';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    min-height: 95vh;
    justify-content: space-between;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 40px;
    flex-wrap: nowrap;
    width: 100%;
    
`;


export const ProfileImage = styled.div`
    width: 100px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px;
    background: url(${profileImage}) no-repeat center; 
    background-size: cover;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: ${Colors.light};
  flex-direction: column;
  padding: 50px;
  @media (max-width: 768px) {
      flex-direction: column;
      padding: 25px;
  }
`;

export const AboutUsDesc = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;  
  flex-direction: column;
  text-align: center;
  padding: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ContainerProfileImage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;  
  justify-content: space-between;  
  flex-direction: row-reverse;
  text-align: center;
  padding: 40px;
  @media (max-width: 768px) {
    flex-direction: column-reverse ;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-family: ${FontFamily};
  font-size: 32px;
  color: ${Colors.primary};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-family: ${FontFamily};
  font-size: 20px;
  color: ${Colors.dark};
  line-height: 1.5;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;




export const WorkshopCard_container = styled.div`
    width: fit-content;
    margin: 10px;
    display: flex;
    flex-direction: row;
`;

export const ContainerWorkshopCards = styled.div`
  padding-top: 30px;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const WorkshopImage = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`;

export const WorkshopButton = styled.button`
  background-color: #f7efef; 
  color: #0c0c0c; 
  border: 1px solid #f9a0a0; 
  font-size: 20px;
  transition: all 0.3s ease; 
  &:hover {
      background-color: #544a4a; 
      color: #f18e8e; 
      border: 1px solid #ec0404; 
      cursor: pointer;
  }
`;


export const StyledSliderImage = styled.img`
    width: 90%;
    height: 80%;
`;

export const SliderImage_container = styled.div`
    width: 80%;
    height: 80%;

`;


export const InModal_container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;