import styled from "styled-components"
import epicure_logo from "../../../assests/epicure_logo.svg"
import playStore from "../../../assests/playStore.svg"
import appleStore from "../../../assests/appleStore.svg"


export const Logo_box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const AboutUsimages = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
    gap: 30px;


`

export const EpicureLogo_image = styled.div`
    width: 100%;
    height: 166px;
    background-image: url(${epicure_logo});
    background-position: center;
    background-repeat: no-repeat;

`

export const Stores_box = styled.div`
    width: 100%;
    height: fit-content;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
`


export const PlayStore_image = styled.div`
    width: 100%;
    height: 70px;
    background-image: url(${playStore});
    background-repeat: no-repeat;

`

export const AppleStore_image = styled.div`
    width: 100%;
    height: 70px;
    background-image: url(${appleStore});
    background-repeat: no-repeat;


`
export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #222;
`;


export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #fff;
  line-height: 1.5;
`;

export const MoreButton = styled.button`
  background-color: #4F46E5; // Replace with your desired button color
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3730A3; // Replace with your desired hover color
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

export const AboutUsDesc = styled.div`
  width: 50%;
  text-align: center;
  padding: 40px;
`;
