import styled from "styled-components"
import instagram_logo from "../../../assests/instagram_logo.jpeg";


export const Container = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    bottom: 0px;
    justify-content: center;
`

export const Footer_Container = styled.div`
    height: fit-content;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 900px    

`

export const Footer_links = styled.a`
    text-align: center;
    text-decoration: none;
`

export const Footer_box = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    text-align: center;
`
export const Logo_box = styled.div`
    height: fit-content;
    width: 100%;
`

export const Instagram_logo = styled.div`
    background-image: url(${instagram_logo});
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
`