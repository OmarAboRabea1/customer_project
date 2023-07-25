import styled from "styled-components"
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
export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: ${Colors.light};
  flex-direction: row;
  padding: 50px;
  @media (max-width: 768px) {
      flex-direction: column;
      padding: 25px;
  }
`;

export const AboutUsDesc = styled.div`
  text-align: center;
  padding: 40px;
  @media (max-width: 768px) {
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
  line-height: 1.8;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;