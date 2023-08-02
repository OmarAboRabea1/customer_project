import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import image_1 from '../../assests/Family_counseling.jpeg'
import image_2 from '../../assests/family_counseling2.jpeg'
import image_3 from '../../assests/family_counseling3.jpeg'
import image_4 from '../../assests/family_counseling4.jpeg'
import image_5 from '../../assests/family_counseling8.jpeg'
import image_6 from '../../assests/family_counseling6.jpeg'
import image_7 from '../../assests/family_counseling7.jpeg'




import { AboutUsContainer, AboutUsDesc, CardContainer, Container, ContainerProfileImage, Description, ProfileImage, Title } from "./styles";

import { WorkshopCard, WorkshopSlider } from './WorkshopCard';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { MobileNavBar } from '../../components/NavBar/MobileNavBar';
import MobileFooter from '../../components/Footer/Footer';


const OurWorkPage=()=>{

    const footerRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const ourServicesRef = useRef<HTMLDivElement>(null);

    let navigate = useNavigate();

    
    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToOurServices = () => {
        navigate('/Services');
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const images = [image_2, image_3, image_4]; 


    const [modalImages, setModalImages] = useState<string[]>([]);

    const handleButtonClick = (images: string[]) => {
        setModalImages(images);
        setModalOpen(true);
    };
    
    return(
        <Container>
            <MobileNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <CardContainer>
                <WorkshopCard 
                image={image_1} 
                description='بصفحة اعمالنا في بس موضوعين ... اذا بدنا نزيد كمان اشي .. يعني اسا بدنا نحط الورشتين بصور صغيرة وكمان بدنا نحط عن الزواج الناجح وويكون في شرح بسيط ومعرض صور' 
                LongDescription='بصفحة اعمالنا في بس موضوعين ... اذا بدنا نزيد كمان اشي .. يعني اسا بدنا نحط الورشتين بصور صغيرة وكمان بدنا نحط عن الزواج الناجح وويكون في شرح بسيط ومعرض صور' 
                onButtonClick={() => handleButtonClick([image_2, image_3, image_4])} />
                <WorkshopCard 
                image={image_5} 
                description='اسم الورشة ... صورة مصغرة عن الورشة .... كبسة المزيد واءا بكبس بنتقل لشرح عن الورشة وكبسة معرض صور اللي فيهن صور مع السابق والتالي زي اللي عملتها' 
                LongDescription='اسم الورشة ... صورة مصغرة عن الورشة .... كبسة المزيد واءا بكبس بنتقل لشرح عن الورشة وكبسة معرض صور اللي فيهن صور مع السابق والتالي زي اللي عملتها' 
                onButtonClick={() => handleButtonClick([image_6, image_7, image_1])} />   
                <WorkshopCard 
                image={image_5} 
                description='اسم الورشة ... صورة مصغرة عن الورشة .... كبسة المزيد واءا بكبس بنتقل لشرح عن الورشة وكبسة معرض صور اللي فيهن صور مع السابق والتالي زي اللي عملتها' 
                LongDescription='اسم الورشة ... صورة مصغرة عن الورشة .... كبسة المزيد واءا بكبس بنتقل لشرح عن الورشة وكبسة معرض صور اللي فيهن صور مع السابق والتالي زي اللي عملتها' 
                onButtonClick={() => handleButtonClick([image_6, image_7, image_1])} />   

            </CardContainer>
            <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}
                style={{
                    overlay: { 
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        width: '50%',  
                        height: '60%',
                        alignItems: 'center',
                        marginTop: '50px', 
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)'                    },
                    }} 
            >
            <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', right: 30, top: 30, background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer' }}>X</button>

            <WorkshopSlider 
                    images={modalImages}
                    prevButton={(onClick: () => void) => <FiArrowLeftCircle onClick={onClick} color="red" size="2em" />}
                    nextButton={(onClick: () => void) => <FiArrowRightCircle onClick={onClick} color="red" size="2em" />}
                />
                </Modal>
            <MobileFooter ref={footerRef}/>
        </Container>
    )
}
export default OurWorkPage;