import styled from "styled-components"


export const AboutUsContainer = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #5E17EB;
  flex-direction: column;
`;

export const AboutUsDesc = styled.div`
  text-align: center;
  padding: 60px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #FBD02F;
  margin-bottom: 30px;
  direction: rtl;
  
`;

export const TitleSmaller = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 30px;
  direction: rtl;
  color: #FBD02F;
  margin-bottom: 20px;
    direction: rtl;
    font-weight: bold;
`;

export const Description = styled.p`
  font-size: 26px;
  line-height: 1.5;
  direction: rtl;
  color: #FBD02F;
  line-height: 1.5;
  font-weight: bold;
  direction: rtl;
`;

export const MoreButton = styled.button`
  background-color: #000000; // Replace with your desired button color
  color: #FBD02F;
  border: none;
  font-size: 22px;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3730A3; // Replace with your desired hover color
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;


export const MoreAboutButton = styled.button`
  background-color: #000000; 
  color: #FBD02F;
  border: none;
  padding: 15px 30px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3730A3; // Replace with your desired hover color
  }
  font-size: 18px;
`;

export const Description2 = styled.p`
  font-size: 26px;
  color: #FBD02F;
  line-height: 1.5;
      font-weight: bold;
  @media (max-width: 768px) {
    font-size: 19px;
  }
  direction: rtl;
`;

