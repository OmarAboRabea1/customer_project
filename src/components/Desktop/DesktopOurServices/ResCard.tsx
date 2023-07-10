import { CardButton, CardContainer, CardDescription, CardImage, CardTitle, Card_container2, CardsContainer, ResChef, ResName, RestaurantCard, RestaurantCard_desc, RestaurantCard_img } from "./styles"
import service1Image from "../../../assests/Claro_Res.svg"

interface CardProps {
    imgUrl: string;
    title: string;
    description: string;
    buttonUrl: string;
}

export const ServiceCard: React.FC<CardProps> = ({imgUrl, title, description, buttonUrl}) => {
    const handleButtonClick = () => {
        window.open(buttonUrl, '_blank');
    };    return (
        <CardContainer>
            <CardImage imgUrl={imgUrl} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardButton onClick={handleButtonClick}> تعرف على المزيد </CardButton>
        </CardContainer>
    )
}

