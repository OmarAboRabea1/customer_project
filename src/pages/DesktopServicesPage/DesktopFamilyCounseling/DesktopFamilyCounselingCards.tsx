import React from 'react';
import { CardsSection, Title, ButtonContainer, Button_text, CardButton, CardContainer, CardDescription, CardPriceDescription, CardSubDescription, CardTitle, IconContainer, Cards_container } from './styles';
import { WhatsappIcon } from '../../../components/Footer/styles';

const handleButtonClick = () => {
    window.location.href = "https://wa.me/+972547100480";
};

export const FamilyCounselingCards = () => (
    <CardsSection>
    <Title>كيفية الحصول على استشارة خاصة</Title>
    <Cards_container>
        <CardContainer>
            <CardTitle>استشارة هاتفية</CardTitle>
            <CardDescription>استشارة عن طريق الهاتف</CardDescription>
            <CardDescription> ايام الاربعاء و الجمعة </CardDescription>
            <CardDescription> من الساعة الرابعة الى السابعة </CardDescription>
            <CardTitle>تكلفة الاستشارة</CardTitle>
            <CardPriceDescription> 100 شيكل </CardPriceDescription>
            <CardSubDescription>استشارة لمدة نصف ساعة </CardSubDescription>
            <ButtonContainer>
                <CardButton onClick={handleButtonClick}>
                    <Button_text>للحجز</Button_text>
                    <IconContainer>
                        <WhatsappIcon href="https://wa.me/+972547100480" />
                    </IconContainer>
                </CardButton>
            </ButtonContainer>
        </CardContainer>
            <CardContainer>
            <CardTitle>استشارة وجاهية</CardTitle>
            <CardDescription> استشارة بالزوم</CardDescription>
            <CardDescription> ايام الخميس والسبت </CardDescription>
            <CardDescription> من الساعة الرابعة الى السابعة </CardDescription>
            <CardTitle>تكلفة الاستشارة</CardTitle>
            <CardPriceDescription> 250 شيكل </CardPriceDescription>
            <CardSubDescription>استشارة لمدة ساعة </CardSubDescription>
            <ButtonContainer>
                <CardButton onClick={handleButtonClick}>
                    <Button_text>للحجز</Button_text>
                    <IconContainer>
                        <WhatsappIcon href="https://wa.me/+972547100480" />
                    </IconContainer>
                </CardButton>
            </ButtonContainer>
        </CardContainer>
    </Cards_container>
   
    </CardsSection>

);
