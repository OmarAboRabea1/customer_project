import styled from "styled-components"
import profileImage from "../../assests/sameir_pic.jpeg";

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
    margin-top: 50px;
`
export const ProfileImageSameir = styled.div`
    width: 150px;
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


export const Title2 = styled.h2`
width: 100%;
  font-family: ${FontFamily};
  color: ${Colors.primary};
  margin: 0;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;

  }
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
`