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
export const ArticlesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  background-color: ${Colors.light};
  flex-direction: column;
  direction: rtl;
  min-height: 720px;
  padding: 80px;  
`;

export const ArticlesDesc = styled.div`
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

export const Title2 = styled.h2`
  font-family: ${FontFamily};
  color: ${Colors.primary};
  font-size: 24px;
  margin-bottom: 20px;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
    direction: rtl;
  }
`;

export const Names = styled.p`
  font-family: ${FontFamily};
  color: ${Colors.dark};
  line-height: 1.8;
  font-size: 24px;
  margin: 0;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0;
    direction: rtl;
  }
`;


export const PicturesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


export const SameirContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const FatenContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Column = styled.div`
    flex: 1;
    min-width: 300px;
    padding: 0 15px;
    box-sizing: border-box;
`;

export const ColumnHeading = styled.h2`
    font-size: 1.5em;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
`;

export const ArticleLink = styled.a`
    display: block;
    margin-bottom: 8px;
    color: #0645ad;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;