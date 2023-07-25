import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SetWindowSize from "../Helpers/SetWindowSize";
import Faten from "../pages/FatenPage/Faten";
import Sameir from "../pages/SameirPage/Sameir";
import DesktopFatenPage from "../pages/DesktopFatenPage/DesktopFatenPage";
import DesktopSameirPage from "../pages/DesktopSameirPage/DesktopSameirPage";
import HomePage from "../pages/HomePage/HomePage";
import DesktopFamilyCounseling from "../pages/DesktopServicesPage/DesktopFamilyCounseling/DesktopFamilyCounseling";
import DesktopSelfImprove from "../pages/DesktopServicesPage/DesktopSelfImprove/DesktopSelfImprove";
import DesktopCouplesCounseling from "../pages/DesktopServicesPage/DesktopCouplesCounseling/DesktopCouplesCounseling";
import MobileFamilyCounseling from "../pages/MobileServicesPage/MobileFamilyCounseling/MobileFamilyCounseling";
import MobileSelfImprove from "../pages/MobileServicesPage/MobileSelfImprove/MobileSelfImprove";
import MobileCouplesCounseling from "../pages/MobileServicesPage/MobileCouplesCounseling/MobileCouplesCounseling";



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
                    <Route path="about/Sameir" element={<MobileFamilyCounseling/>} />
                    <Route path="about/Faten" element={<MobileFamilyCounseling />} />
                    <Route path="services" element={<Faten />} />
                    <Route path="services/family_counseling" element={<MobileFamilyCounseling />} />
                    <Route path="services/self_improve" element={<MobileSelfImprove />} />
                    <Route path="services/couples_counseling" element={<MobileCouplesCounseling />} />

                </>

                }
                {Number(windowSize!) >= 1024 &&
                <>
                    <Route path="about/Sameir" element={<DesktopSameirPage />} />
                    <Route path="about/Faten" element={<DesktopFatenPage />} />
                    <Route path="services" element={<Faten />} />
                    <Route path="services/family_counseling" element={<DesktopFamilyCounseling />} />
                    <Route path="services/self_improve" element={<DesktopSelfImprove />} />
                    <Route path="services/couples_counseling" element={<DesktopCouplesCounseling />} />

                </>
                }

                </Route>
            </Routes>
            </BrowserRouter>
    )
    
}
export default Routing;


