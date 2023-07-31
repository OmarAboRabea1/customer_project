import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
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
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import DesktopAboutUsPage from "../pages/DesktopAboutUsPage/DesktopAboutUsPage";
import DesktopServicesPage from "../pages/DesktopServicesPage/DesktopServicesPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import { ScrollContext, useScroll } from "../Helpers/ScrollContext";
import OurWorkPage from "../pages/OurWorkPage/OurWorkPage";
import DesktopOurWorkPage from "../pages/DesktopOurWorkPage/DesktopOurWorkPage";



const ScrollManager = () => {
    const location = useLocation();
    const { saveScroll, restoreScroll } = useScroll();
  
    useEffect(() => {
      restoreScroll();
      return () => saveScroll();
    }, [location, restoreScroll, saveScroll]);
  
    return null; // this component doesn't render anything, it just manages scroll
  };
  
  const Routing = () => {
    const [windowSize, setWindowSize] = useState<Number>();
    const { scrollPosition, saveScroll, restoreScroll } = useScroll();
  
    var size = SetWindowSize();
  
    useEffect(() => {
      setWindowSize(size);
    });
  
    if (!windowSize) {
      return <div>Loading...</div>;
    }
  
    return (
      <ScrollContext.Provider value={{ scrollPosition, saveScroll, restoreScroll }}>
        <BrowserRouter>
          <ScrollManager /> {/* add this line */}
          <Routes>
            <Route path="/" >
              <Route index element={<HomePage />} />
              {Number(windowSize!) < 1024 &&
                <>
                  <Route path="about/Sameir" element={<Sameir />} />
                  <Route path="about/Faten" element={<Faten />} />
                  <Route path="about" element={<AboutUsPage />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="services/family_counseling" element={<MobileFamilyCounseling />} />
                  <Route path="services/self_improve" element={<MobileSelfImprove />} />
                  <Route path="services/couples_counseling" element={<MobileCouplesCounseling />} />
                  <Route path="ourWork" element={<OurWorkPage />} />
                </>
              }
              {Number(windowSize!) >= 1024 &&
                <>
                  <Route path="about/Sameir" element={<DesktopSameirPage />} />
                  <Route path="about/Faten" element={<DesktopFatenPage />} />
                  <Route path="about" element={<DesktopAboutUsPage />} />
                  <Route path="services" element={<DesktopServicesPage />} />
                  <Route path="services/family_counseling" element={<DesktopFamilyCounseling />} />
                  <Route path="services/self_improve" element={<DesktopSelfImprove />} />
                  <Route path="services/couples_counseling" element={<DesktopCouplesCounseling />} />
                  <Route path="ourWork" element={<DesktopOurWorkPage />} />

                </>
              }
            </Route>
          </Routes>
        </BrowserRouter>
      </ScrollContext.Provider>
    )
  }
  export default Routing;