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
import OurWorkPage from "../pages/OurWorkPage/OurWorkPage";
import DesktopOurWorkPage from "../pages/DesktopOurWorkPage/DesktopOurWorkPage";
import ArticlesPage from "../pages/ArticlesPage/ArticlesPage";
import DesktopArticlesPage from "../pages/DesktopArticlesPage/DesktopArticlesPage";
import ArticleDetailPage from "../pages/ArticlesPage/ArticleDetailPage";
import DesktopArticleDetailPage from "../pages/DesktopArticlesPage/DesktopArticleDetailPage";

  
  const Routing = () => {
    const [windowSize, setWindowSize] = useState<Number>();
  
    var size = SetWindowSize();
  
    useEffect(() => {
      setWindowSize(size);
    });
  
    if (!windowSize) {
      return <div>Loading...</div>;
    }
  
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<HomePage />} />
              {Number(windowSize!) < 1024 &&
                <>
                  <Route path="about/sameir" element={<Sameir />} />
                  <Route path="about/faten" element={<Faten />} />
                  <Route path="about" element={<AboutUsPage />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="services/family_counseling" element={<MobileFamilyCounseling />} />
                  <Route path="services/self_improve" element={<MobileSelfImprove />} />
                  <Route path="services/couples_counseling" element={<MobileCouplesCounseling />} />
                  <Route path="ourWork" element={<OurWorkPage />} />
                  <Route path="articles" element={<ArticlesPage />} />
                  <Route path="/articles/:id" element={<ArticleDetailPage />} />

                </>
              }
              {Number(windowSize!) >= 1024 &&
                <>
                  <Route path="about/sameir" element={<DesktopSameirPage />} />
                  <Route path="about/faten" element={<DesktopFatenPage />} />
                  <Route path="about" element={<DesktopAboutUsPage />} />
                  <Route path="services" element={<DesktopServicesPage />} />
                  <Route path="services/family_counseling" element={<DesktopFamilyCounseling />} />
                  <Route path="services/self_improve" element={<DesktopSelfImprove />} />
                  <Route path="services/couples_counseling" element={<DesktopCouplesCounseling />} />
                  <Route path="ourWork" element={<DesktopOurWorkPage />} />
                  <Route path="articles" element={<DesktopArticlesPage />} />
                  <Route path="/articles/:id" element={<DesktopArticleDetailPage />} />
                </>
              }
            </Route>
          </Routes>
        </BrowserRouter>
    )
  }
  export default Routing;