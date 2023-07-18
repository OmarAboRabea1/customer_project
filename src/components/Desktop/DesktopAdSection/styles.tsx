import styled from 'styled-components';

export const AdSectionContainer = styled.section`
  background-color: #F5F5F5;
  padding: 50px;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  margin: 20px 0;
  margin-bottom: 100px;
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 36px;
`;

export const AdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AdImage = styled.img`
  width: 48%; // to leave some space between the images
  height: auto;
  border-radius: 10px;
`;
