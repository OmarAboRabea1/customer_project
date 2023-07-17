import { useState } from "react";
import { AllChefs, AllDishes, AllRestaurants, search_names } from "../../assests/Data"
import { Search_result_table, Search_result_container, Search_text_p } from "../SearchBar/styles"
import { Chef, Dish, Restaurant } from "../../assests/Types";
import { useSelector } from "react-redux";

interface props{
    menu : boolean
}
export const SearchMenuActive =(funcProops: props)=>{

    const [search, setSearch] = useState('');

    const all_retaurants = useSelector((state: any) => state.restaurants.value)
    const all_chefs = useSelector((state: any) => state.chefs.value)
    const all_dishes = useSelector((state: any) => state.dishes.value)

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };
    
      var data = {
        nodes: all_retaurants.filter((item: Restaurant) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
      var results2 = {
        nodes: all_dishes.filter((item: Dish) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
      var results3 = {
        nodes: all_chefs.filter((item: Chef) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };

      return(
        <h1>h</h1>
)
    

}