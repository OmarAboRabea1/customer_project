import { CardButton, CardContainer, CardDescription, CardImage, CardTitle } from "./styles"
import service1Image from "../../../assests/Claro_Res.svg"
import { useNavigate } from "react-router-dom";

interface CardProps {
    imgUrl: string;
    title: string;
    description: string;
    buttonUrl: string;
}

export const ServiceCard: React.FC<CardProps> = ({imgUrl, title, description, buttonUrl}) => {
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(buttonUrl);
        window.scrollTo(0, 0);
    };    
    return (
        <CardContainer>
            <CardImage imgUrl={imgUrl} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardButton onClick={handleButtonClick}> تعرف على المزيد </CardButton>
        </CardContainer>
    )
}

