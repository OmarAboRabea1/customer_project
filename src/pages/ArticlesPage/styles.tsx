import styled from "styled-components"
import profileImage from "../../assests/self_improve3.jpeg";



const Colors = {
    primary: '#4F46E5', // A shade of purple
    secondary: '#06D6A0', // A shade of green
    light: '#FAFAFA', // A light grey
    dark: '#171923', // A dark grey
}

const FontFamily = 'Arial, sans-serif';

export const Container = styled.div`
  background-color: ${Colors.light};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    min-height: 95vh;
    justify-content: space-between;
`
export const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px;
    background:     url(${profileImage}) no-repeat center; 
    background-size: cover;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  padding-top: 50px;
  align-items: flex-start;
  height: fit-content;
  flex-direction: column;
  direction: rtl;
  min-height: 720px;
  margin: 25px;
  gap: 10px;
  @media (max-width: 768px) {
      flex-direction: column;
      margin: 25px;
  }
`;

export const ArticlesDesc = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;  
  text-align: center;
  flex-direction: column;
  padding: 20px;
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
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: row-reverse ;
    padding: 20px;
  }
`;


export const Title = styled.h2`
  font-family: ${FontFamily};
  color: ${Colors.primary};
  font-size: 24px;
  margin-bottom: 20px;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
    direction: rtl;
  }
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

export const Description = styled.p`
  font-family: ${FontFamily};
  color: ${Colors.dark};
  line-height: 1.8;
  font-size: 18px;
  margin-bottom: 15px;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
    direction: rtl;
  }
`;

export const Names = styled.p`
  font-family: ${FontFamily};
  color: ${Colors.dark};
  line-height: 1.8;
  font-size: 18px;
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
    min-width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    direction: rtl;
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

export const ArrowButton = styled.span`
    float: right;
    cursor: pointer;
    padding-left: 5px;
`;

export const Columns_container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  direction: rtl;
  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const TitlesList = styled.div<{ isVisible: boolean }>`
    opacity: ${props => (props.isVisible ? 1 : 0)};
    max-height: ${props => (props.isVisible ? '1000px' : '0')};
    overflow: hidden;
    transition: opacity 0.3s, max-height 0.3s;
`;


export const Content_container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 50px;
  height: 100%;
  text-align: start;
  direction: rtl;
  @media (max-width: 450px) {
    width: 80%;
  }
`;
