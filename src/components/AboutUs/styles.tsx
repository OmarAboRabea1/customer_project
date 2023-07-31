import styled from "styled-components"


export const Logo_box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
`

export const AboutUsimages = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
    gap: 30px;
    @media (max-width: 768px) {
        margin: 20px;
    }
`

export const Stores_box = styled.div`
    width: 100%;
    height: fit-content;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #222;
  flex-direction: column;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`;

export const AboutUsDesc = styled.div`
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
    font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleSmaller = styled.h2`
    font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  direction: rtl;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 19px;
  color: #fff;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 19px;
  }
  direction: rtl;
`;
export const Description2 = styled.p`
  font-size: 19px;
  color: #fff;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 19px;
  }
  direction: rtl;
`;

export const MoreButton = styled.button`
  background-color: #4F46E5; // Replace with your desired button color
  color: #fff;
  border: none;
  font-size: 14px;
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
  background-color: #4F46E5; // Replace with your desired button color
  color: #fff;
  border: none;
  font-size: 15px;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3730A3; // Replace with your desired hover color
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 8px 16px;
  }
`;

