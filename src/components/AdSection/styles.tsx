import styled from 'styled-components';

export const AdSectionContainer = styled.section`
  background-color: #F5F5F5;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  margin: 20px 0;
  margin-bottom: 80px;
  align-items: center;
`;

export const container_for_ads = styled.div`
  background-color: #F5F5F5;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  margin: 20px 0;
  margin-bottom: 80px;
  width: 80%;
  align-items: center;
`;



export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
`;

export const AdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AdImage = styled.img`
  width: 48%; // to leave some space between the images
  height: auto;
  border-radius: 10px;
`;

export const AdImageOut = styled.img`
  width: 90%; // to leave some space between the images
  height: auto;
  border-radius: 10px;
`;
