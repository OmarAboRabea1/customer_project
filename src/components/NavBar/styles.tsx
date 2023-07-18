import React ,{ useEffect, useState } from "react";
import styled, {keyframes} from "styled-components"
import logo from "../../assests/Logo.jpeg";


interface HamburgerLineProps {
    open: boolean;
  }
  
  interface MobileMenuProps {
    open: boolean;
  }

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #222;
`;

export const Left_Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;


export const Logo_img1 = styled.a`
  display: block;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  color: #222;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;


export const HamburgerLine = styled.div<HamburgerLineProps>`
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin-bottom: 4px;
  transition: all 0.3s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ open }) =>
    open &&
    `
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `}
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MobileButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
`;


interface HamburgerProps {
  open: boolean;
}

export const MobileMenu = styled.div`
  position: relative;
`;

export const Hamburger = styled.div<HamburgerProps>`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 3; // increased the z-index 

  width: 2rem;
  height: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#0d2538' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;


export const Nav = styled.nav<HamburgerProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  right: 0;
  height: 300px;
  width: 80%;
  padding-top: 2rem;
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  button {
    color: #fff;
    font-size: 20px;
    margin: 10px 0;
    background: transparent;
    border: none;
    text-align: right;
    padding-right: 20px;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }
  }
`;
export const Nav_Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    background-color: #ffff;
    z-index: 100; // Ensure it appears over the rest of the content
`;


export const Box_img = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    height: 100%;
`


export const Logo_img = styled.a`
    background-image: url(${logo});
    background-size: contain;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;

`