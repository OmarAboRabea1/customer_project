import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AllChefs, AllDishes, AllRestaurants, search_names } from "../../../assests/Data"
import { Chef, Dish, Restaurant } from "../../../assests/Types";
import { Link_to } from "../../NavBar/styles";
import { Search_Container, Hero_box, SearchBar_box, Search_box, Search_input, Search_text_h1, On_search_img, Search_text_box, Search_result_table, Search_result_container, Search_text_p, HeroSection, Title, Subtitle, Button, ButtonContainer, IconContainer, FacebookIcon, WhatsappIcon, InstagramIcon } from "./styles"



export const DesktopSearchBar = ({scrollToOurServices}: {scrollToOurServices: () => void}) => {

  const all_retaurants = useSelector((state: any) => state.restaurants.value)
  const all_chefs = useSelector((state: any) => state.chefs.value)
  const all_dishes = useSelector((state: any) => state.dishes.value)

  const [windowSize, setWindowSize] = useState<Number>()

  useEffect(()=>{
      setWindowSize(window.innerWidth)
  })

    return(
            <Search_Container>
                <HeroSection>
                    <Title>عيادة الامان</Title>
                    <Subtitle>للاستشارات الزوجية, الاسرية, والجنسية</Subtitle>
                    <ButtonContainer>
                        <Button>تعرف على المزيد</Button>
                        <Button onClick={scrollToOurServices}>احجز استشارتك</Button>
                    </ButtonContainer>
                    <IconContainer>
                        <FacebookIcon href="https://www.facebook.com"/>
                        <WhatsappIcon href="https://www.twitter.com"/>
                        <InstagramIcon href="https://www.instagram.com"/>
                    </IconContainer>
                </HeroSection>

        </Search_Container>
    )
}