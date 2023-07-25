import React, { forwardRef } from 'react';
import styled from "styled-components";
import self_improve from "../../../assests/self_improve.jpeg";
import family_counsel from "../../../assests/counsel_family.jpeg";
import couple_counsel from "../../../assests/counsel1.jpeg";

export const Services_Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #f0efeb;
`;

export const ServicesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5em;
  padding-bottom: 10px;
  padding-top: 10px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: fit-content;
    background-color: #f8f1f1;
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const CardImage = styled.div<{imgUrl: string}>`
    width: 100%;
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
    text-align: center;
    direction: rtl;
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


export const Title = styled.h2`
  font-size: 24px;
  color: #180466;
  direction: rtl;
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 45px;
  }
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

export const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 100px;
`;