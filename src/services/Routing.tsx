import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SetWindowSize from "../Helpers/SetWindowSize";
import ChefPage from "../pages/ChefsPage/ChefPage/ChefPage";
import Chefs from "../pages/ChefsPage/Chefs";
import DesktopChefPage from "../pages/DesktopServicesPage/DesktopChefPage/DesktopChefPage";
import DesktopChefs from "../pages/DesktopServicesPage/DesktopChefs";
import DesktopRestaurantPage from "../pages/DesktopRestaurantsPage/DesktopRestaurantPage/Restaurant";
import DesktopRestaurants from "../pages/DesktopRestaurantsPage/DesktopRestaurants";
import HomePage from "../pages/HomePage/HomePage";
import RestaurantPage from "../pages/RestaurantsPage/RestaurantPage/Restaurant";
import Restaurants from "../pages/RestaurantsPage/Restaurants";
import Faten from "../pages/FatenPage/Faten";
import Sameir from "../pages/SameirPage/Sameir";
import DesktopFatenPage from "../pages/DesktopFatenPage/DesktopFatenPage";
import DesktopSameirPage from "../pages/DesktopSameirPage/DesktopSameirPage";



const Routing=()=>{
    const [windowSize, setWindowSize] = useState<Number>()
    var size = SetWindowSize()

    useEffect(()=>{
        setWindowSize(size)
    })
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                <Route index element={<HomePage />} />
                {Number(windowSize!) < 1024 &&
                <>
                    <Route path="about/Sameir" element={<Sameir/>} />
                </>

                }
                {Number(windowSize!) >= 1024 &&
                <>
                    <Route path="about/Sameir" element={<DesktopSameirPage />} />
                </>
                }
                {Number(windowSize!) < 1024 &&
                <>
                    <Route path="about/Faten" element={<Faten />} />

                </>

                }
                {Number(windowSize!) >= 1024 &&
                <>
                    <Route path="about/Faten" element={<DesktopFatenPage />} />

                </>
                
                }

                </Route>
            </Routes>
            </BrowserRouter>
    )
    
}
export default Routing;


