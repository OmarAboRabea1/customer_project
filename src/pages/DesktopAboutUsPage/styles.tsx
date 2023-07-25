import styled from "styled-components"

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
  padding: 80px;  // Increased padding for desktop
`;

export const AboutUsDesc = styled.div`
  text-align: center;
  padding: 60px;  // Increased padding for desktop
`;

export const Title = styled.h2`
  font-family: ${FontFamily};
  font-size: 36px;  // Increased font size for desktop
  color: ${Colors.primary};
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-family: ${FontFamily};
  font-size: 24px;  // Increased font size for desktop
  color: ${Colors.dark};
  line-height: 1.8;
  margin-bottom: 30px;  // Increased margin-bottom for desktop
`;
