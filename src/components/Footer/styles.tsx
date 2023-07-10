import styled from "styled-components"
import instagram_logo from "../../assests/instagram_logo.jpeg";


export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;



`
export const Link_to = styled.a`
    
    text-decoration: none;
`


export const Footer1 = styled.div`
    left: 0px;
    background: #ffffff;
    margin-left: 19px;
    padding-top: 32px;
    padding-bottom: 24px;
`

export const Footer_box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    height: 100%;
`
export const Instagram_logo = styled.div`
    background-image: url(${instagram_logo});
    width: 32.93px;
    height: 32px;
`