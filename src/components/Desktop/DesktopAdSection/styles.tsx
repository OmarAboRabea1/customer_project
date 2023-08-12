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

export const MoreForAds = styled.button`
    display: inline-block;
    border-radius: 30px;
    padding: 10px 20px;
    margin-top: 15px;
    border: 2px solid #d26868;
    background: white;
    color: #c06565;
    text-decoration: none;
    font-size: 1.6em;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        background: #f68787;
        bottom: 0;
        right: 0;
        width: 0;
        height: 100%;
        z-index: -1;
        direction: rtl;
        transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: 0.2s;
    }

    &:hover {
        color: white;
        transition: color 0.1s ease-in-out;
        &:before {
            width: 100%;
            transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 15px;

`;