import styled from "styled-components"

export const Services_Container = styled.div`
    width: 100%;
    height: fit-content;
    align-items: center;
    text-align: center;
    display: flex !important;
    flex-direction: column;
    background-color: #f0efeb; 


`
export const Title = styled.h2`
  font-size: 24px;
  color: #180466;
  direction: rtl;
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const Title_box = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
`
export const RestaurantCard = styled.div`
    width: 245px;
    height: 300.8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #F9F4EA;

`
export const RestaurantCard_desc = styled.div`
    height: 40%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;

`
export const ResName = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;

`
export const ResChef = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
`

export const RestaurantCard_img = styled.img`
    height: 100%;
    width: 100%;



`
export const slider_thumbs = styled.div`

    
    swiper-slide {
        position: absolute;
        cursor: pointer;
        border: 1px solid #fa0707;

        &-thumb-active {
            border-color: #ff02f2;
        }
    }

    
`
    
export const Container_for_cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    gap: 24px;

`

export const Card_container2 = styled.div`
    width: fit-content;
    height: fit-content;
    padding-left: 20px;
    padding-right: 20px;
`

export const AllRes_box = styled.div`
    width: 100%;
    height: fit-content;
    margin-right: 20px;
    padding-top: 18.2px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 10px;
`


export const ServicesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`

export const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const ServiceTitle = styled.h2`
  font-size: 1.2em;
  color: #333;
`

export const ServiceDescription = styled.p`
  font-size: 1em;
  color: #666;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    background-color: #f8f1f1;
    border-radius: 20px;
    margin: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

export const CardImage = styled.div<{imgUrl: string}>`
    width: 95%;
    height: 200px;
    border-radius: 15px;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center center;
`;

export const CardTitle = styled.h2`
    font-weight: bold;
    color: #333;
    margin-top: 10px;
`;

export const CardDescription = styled.p`
    color: #666;
    text-align: start;
    direction: rtl;
    margin: 20px;

`;


export const CardButton = styled.button`
display: inline-block;
border-radius: 30px;
padding: 10px 20px;
margin-top: 15px;
border: 2px solid #b58f8f;
background: white;
color: #b58f8f;
text-decoration: none;
font-size: 0.9em;
font-weight: bold;
letter-spacing: 1px;
position: relative;
overflow: hidden;
transition: color 0.4s ease-in-out;
z-index: 1;
&:before {
  content: "";
  position: absolute;
  background: #b58f8f;
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


export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #f0efeb;
    width: 90%;
    gap: 20px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 100px;
`;


export const MoreForCards = styled.button`
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
