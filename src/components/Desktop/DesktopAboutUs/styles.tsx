import styled from "styled-components"


export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #222;
  flex-direction: column;
  padding: 60px;
`;

export const AboutUsDesc = styled.div`
  text-align: center;
  padding: 60px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #fff;
  margin-bottom: 30px;
  direction: rtl;
`;

export const TitleSmaller = styled.h2`
  font-size: 32px;
  color: #fff;
  margin-bottom: 30px;
  direction: rtl;
`;

export const Description = styled.p`
  font-size: 24px;
  color: #fff;
  line-height: 1.5;
  direction: rtl;
`;

export const MoreButton = styled.button`
  background-color: #4F46E5; // Replace with your desired button color
  color: #fff;
  border: none;
  padding: 15px 30px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3730A3; // Replace with your desired hover color
  }
  font-size: 16px;
`;

export const MoreAboutButton = styled.button`
  background-color: #4F46E5; // Replace with your desired button color
  color: #fff;
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
