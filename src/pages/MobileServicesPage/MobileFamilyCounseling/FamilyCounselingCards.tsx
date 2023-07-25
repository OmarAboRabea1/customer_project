import React from 'react';
import { Title, CardsSection, ButtonContainer, Button_text, CardButton, CardContainer, CardDescription, CardPriceDescription, CardSubDescription, CardTitle, IconContainer, Price_container } from './styles';
import { WhatsappIcon } from '../../../components/Footer/styles';

interface CardProps {
    title: string;
    description: string;
}

const handleButtonClick = () => {
    window.location.href = "https://wa.me/+972547100240";
};

export const FamilyCounselingCards = () => (
    <CardsSection>
    <Title>كيفية الحصول على استشارة خاصة</Title>
    <CardContainer>
        <CardTitle>استشارة هاتفية</CardTitle>
        <CardDescription>استشارة عن طريق الهاتف</CardDescription>
        <CardDescription> ايام الثلاثاء والاربعاء من كل اسبوع </CardDescription>
        <CardDescription> 10:00 - 13:00 </CardDescription>
        <CardTitle>تكلفة الاستشارة</CardTitle>
        <Price_container>
        <CardPriceDescription> 150 شيكل </CardPriceDescription>
        <CardSubDescription>استشارة لمدة نصف ساعة </CardSubDescription>
        </Price_container>
        <ButtonContainer>
            <CardButton onClick={handleButtonClick}>
                <Button_text>للحجز</Button_text>
            <IconContainer>
                <WhatsappIcon href="https://wa.me/+972547100240"/>
            </IconContainer>
            </CardButton>
        </ButtonContainer>

    </CardContainer>
    <CardContainer>
        <CardTitle>استشارة هاتفية</CardTitle>
        <CardDescription>استشارة عن طريق الهاتف</CardDescription>
        <CardDescription> ايام الثلاثاء والاربعاء من كل اسبوع </CardDescription>
        <CardDescription> 10:00 - 13:00 </CardDescription>
        <CardTitle>تكلفة الاستشارة</CardTitle>
        <Price_container>
        <CardPriceDescription> 150 شيكل </CardPriceDescription>
        <CardSubDescription>استشارة لمدة نصف ساعة </CardSubDescription>
        </Price_container>
        <ButtonContainer>
            <CardButton onClick={handleButtonClick}>
                <Button_text>للحجز</Button_text>
            <IconContainer>
                <WhatsappIcon href="https://wa.me/+972547100240"/>
            </IconContainer>
            </CardButton>
        </ButtonContainer>

    </CardContainer>
    </CardsSection>

);
