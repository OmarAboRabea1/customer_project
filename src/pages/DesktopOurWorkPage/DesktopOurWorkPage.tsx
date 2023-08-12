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
import marriage_workshop_image from '../../assests/marriageHero4.jpeg'
import marriage_workshop1 from '../../assests/marriage_workshop1.jpeg'
import marriage_workshop2 from '../../assests/marriage_workshop2.jpeg'
import marriage_workshop3 from '../../assests/marriage_workshop3.jpeg'
import marriage_workshop4 from '../../assests/marriage_workshop4.jpeg'
import marriage_workshop5 from '../../assests/marriage_workshop5.jpeg'
import marriage_workshop6 from '../../assests/marriage_workshop6.jpeg'
import marriage_workshop7 from '../../assests/marriage_workshop7.jpeg'
import marriage_workshop8 from '../../assests/marriage_workshop8.jpeg'
import dopamine from '../../assests/dopamine.jpeg'; 
import findYourSelf from '../../assests/find_your_self.jpeg'; 


import { AboutUsContainer, AboutUsDesc, CardContainer, Container, ContainerProfileImage, Description, ProfileImage, RegistrationButton, SoonContainer, SoonTitle, Title } from "./styles";
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';
import { WorkshopCard, WorkshopSlider } from './WorkshopCard';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';


const DesktopOurWorkPage=()=>{

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

    function handleAdClick() {
        if (modalImages.includes('find_your_self')) {
            window.open("https://me-qr.com/aysx8CU5");
    }
        else if (modalImages.includes('dopamine')) {
            window.open("https://me-qr.com/HUGbGJMk");
        }
}
    
    return(
        <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <CardContainer>
            <WorkshopCard
                title='الزواج الناجح' 
                image={marriage_workshop_image} 
                description='برنامج الزواج الناجح هو ورشة تثقيفية تهدف إلى تزويد الخطاب أو الأزواج الجدد بالمعلومات والمهارات اللازمة لبناء علاقة زوجية ناجحة ومستدامة, وتوفير فهم شامل للتحديات والمشاكل التي قد تواجهها الأزواج في حياتهم الزوجية وتقديم الأدوات والاستراتيجيات للتعامل معها بشكل فعال.' 
                LongDescription='يتضمن برنامج الزواج الناجح مجموعة متنوعة من المواضيع والمهارات الأساسية مثل مهارات التواصل الفعال بين الشريكين، حل المشكلات واتخاذ القرارات المشتركة، إدارة الصراعات وبناء الثقة والاحترام المتبادل. بالإضافة إلى ذلك، يتضمن البرنامج أيضًا مناقشات حول التوقعات والقيم الزوجية، وتوازن الحياة الشخصية والمهنية، والتعامل مع التحديات اليومية مثل التوتر والتعب, وتتضمن الورشة أيضًا نصائح ومشورة من أزواج ذوي خبرة أو خبراء في مجال علاقات الزواج.
                خلال الورشة، يتم توفير فرص للمشاركة النشطة والتفاعل مع الأزواج الآخرين، مما يساعد على تبادل الخبرات والتعلم من تجارب الآخرين, قد تشمل الأنشطة العملية والتمارين التطبيقية لتعزيز فهم الأزواج للمفاهيم والمهارات المطروحة.
                
                يهدف برنامج الزواج الناجح إلى تمكين الأزواج من بناء أساس قوي لعلاقتهم الزوجية وتعزيز روابطهم العاطفية والاجتماعية, من خلال توفير المعلومات والأدوات اللازمة، يمكن للأزواج الجدد أو المتزوجين حديثًا تجاوز التحديات المشتركة وتحقيق سعادة واستقرار في حياتهم الزوجية.' 
                onButtonClick={() => handleButtonClick([marriage_workshop1, marriage_workshop2, marriage_workshop3, marriage_workshop4, marriage_workshop5, marriage_workshop6, marriage_workshop7, marriage_workshop8])} />   
                <WorkshopCard 
                title='دوبامين' 
                image={dopamine} 
                description='ورشة بعنوان "دوبامين" تهدف إلى تعزيز وتحسين الاتصال والتفاهم بين الأزواج. يعتبر التواصل الفعال أحد أساسيات العلاقة الزوجية الناجحة، حيث يساهم في بناء الثقة والتواصل العميق وحل المشكلات بشكل صحيح وفعال …' 
                LongDescription='تتضمن ورشة العمل هذه استعراضًا للمفاهيم الأساسية التي تساهم في تحسين التواصل، مثل الاستماع الفعّال والتعبير الصريح. سيتعلم المشاركون كيفية الاستماع بعمق لشريكهم، وفهم احتياجاته ومشاعره بدقة. ستتناول الورشة أيضًا أساليب التواصل الفعّالة، مثل استخدام لغة مشتركة وتوضيح الأفكار بشكل واضح وصريح. بالإضافة إلى ذلك تساعد الورشة الأزواج على تطبيق المهارات المكتسبة في الحياة العملية وتشجع المشاركين على التواصل المفتوح والصادق، وتعزيز العلاقات الإيجابية وتعزيز الروابط العاطفية.

                من خلال حضور ورشة العمل "التواصل بين الزوجين"، ستكتسب المهارات والأدوات اللازمة لتحسين الاتصال بينك وبين شريك حياتك. ستتعلم كيفية التعبير عن مشاعرك بشكل صحيح وكيفية فهم احتياجات شريكك بشكل أفضل. ستكون هذه الورشة فرصة للنمو الشخصي وتعزيز الرابطة العاطفية بينكما، وبالتالي تعزيز سعادة واستقرار العلاقة الزوجية.' 
                onButtonClick={() => handleButtonClick(['dopamine'])} />   
                <WorkshopCard 
                title='جد نفسك' 
                image={findYourSelf} 
                description='ورشة "جد نفسك" تهدف إلى تعزيز القوة الكامنة في داخلك بواسطة استكشاف وتطوير قدراتك وإمكاناتك الداخلية. عن طريق تعزيز الثقة بالنفس وتحقيق النجاح والتحقق من طموحاتك الشخصية.' 
                LongDescription='تعزيز القوة الكامنة في داخلك يعني استكشاف وتطوير إمكاناتك ومهاراتك الداخلية لتحقيق النجاح والتحسين الشخصي, يشمل ذلك تغيير النمط السلبي للتفكير واعتماد نظرة إيجابية تجاه الذات والقدرات. من خلال تحديد الأهداف ووضع خطط عمل ملموسة, يمكنك تطوير قدراتك وتحقيق طموحاتك. يجب أن تكون ملتزمًا بالنمو الشخصي والتعلم المستمر، والاستفادة من الفرص التي تقدمها الحياة لتوسيع مداركك وتجربة أشياء جديدة, بالتفاؤل والثقة بنفسك واستعدادك لتحدي الصعاب، يمكنك استكشاف وتعزيز القوة الكامنة في داخلك وتحقيق إمكاناتك الحقيقية.' 
                onButtonClick={() => handleButtonClick(['find_your_self'])} />   
                <WorkshopCard 
                title='ارشاد والدية' 
                image={image_6} 
                description=' الارشاد الوالدي والأسري هو طريقة لتزويد الأب والأم بالأدوات اللازمة التي تساعدهم في التعاملات اليومية مع أبنائهم وكيفية التعامل مع التحديات التي تواجههم في كل المراحل الحياتية، من جيل الطفولة المبكرة وحتى ما بعد جيل المراهقة' 
                LongDescription=' ما هو الهدف من توجيه الوالدين؟  أغلب المتزوجين يطمحون أن يكونوا آباء وأمهات، لكن الكثير منهم ممن لا يعرفون كيف ولم يتعلموا أن يكونوا كذلك أو قبل ذلك كيف يكونوا أزواج، ونظرا لعدم تعلمهم المهارات الزوجية والوالدية فقد يقعوا بمطبات عديدة مما يؤدي إلى تعثرهم، وفي كثير من الأحيان نشعر بالارتباك زعدم معرفة الطريقة التي يجب أن نتعامل بها في مثل تلك الظروف. الارشاد الوالدي والأسري هو طريقة لتزويد الأب والأم بالأدوات اللازمة التي تساعدهم في التعاملات اليومية مع أبنائهم وكيفية التعامل مع التحديات التي تواجههم في كل المراحل الحياتية، من جيل الطفولة المبكرة وحتى ما بعد جيل المراهقة، مثل وضع الحدود، والتعامل مع نوبات الغضب، وتنظيم الوقت، والتعامل مع الاحباطات عند الطفل. يتم تدريب الوالدين عبر الانترنت والهاتف او في العيادة الخاصة أو في المنزل عن طريق مرشدين مهنيين وخبرة في المجال والذي من خلاله نعطي للوالدين الادوات والطرق في كيفية التعامل مع تلك الحالات أو من خلال مراقبة السلوك الروتيني للوالدين والأبناء وتحديد أنماط السلوك الخاطئة مما يساعد الوالدين على تغيير المفاهيم التربوية والتعامل بشكل صحي مع تحديات الأبوة والأمومة والتعامل مع التحديات السلوكية والعاطفية لدى الأطفال زمحاولة حل النزاعات والأزمات في الأسرة من خلال اكتساب مهارات لبناء نموذج تربوي وتحسين التواصل والجو العائلي داخل الأسرة.' 
                onButtonClick={() => handleButtonClick([image_5, image_7, image_1])} />   

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
                        transform: 'translate(-50%, -50%)'                    
                    },
                    }} 
            >
            <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', right: 10, top: 10, background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer' }}>X</button>

            {
                modalImages.length > 1 ? (
                    <WorkshopSlider 
                    images={modalImages}
                    prevButton={(onClick: () => void) => <FiArrowLeftCircle onClick={onClick} color="red" size="2em" />}
                    nextButton={(onClick: () => void) => <FiArrowRightCircle onClick={onClick} color="red" size="2em" />}
                    />
                ) : (

                    <SoonContainer>
                        <SoonTitle>قريبا</SoonTitle>
                        <RegistrationButton onClick={handleAdClick}>اضغط للتسجيل</RegistrationButton>
                    </SoonContainer>

                    )
            }
                </Modal>
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default DesktopOurWorkPage;