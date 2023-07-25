import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { AboutUsContainer, AboutUsDesc, Container, Description, Title } from "./styles";
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';
import { ServicesSection, Services_Container } from '../../components/Desktop/DesktopOurServices/styles';
import { ServiceCard } from '../../components/Desktop/DesktopOurServices/ServiceCard';
import self_improve from "../../assests/self_improve.jpeg"
import family_counsel from "../../assests/counsel_family.jpeg"
import couple_counsel from "../../assests/counsel1.jpeg"


const DesktopServicesPage=()=>{

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
        navigate('/services');
    }

    return(
        <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <Services_Container>
                <ServicesSection>
                        <ServiceCard
                        imgUrl={self_improve}
                        title="تطوير الذات"
                        description="تطوير الذات والتنمية البشرية هو مجال شامل يهدف إلى تحسين وتطوير قدرات ومهارات الفرد وتعزيز نموه الشخصي والمهني والاجتماعي. يعتبر هذا المجال مثيرًا للاهتمام بالنسبة للأفراد الذين يسعون لتحقيق أهدافهم وتطوير إمكاناتهم الكامنة لتحقيق النجاح والسعادة في حياتهم. او ممن يسعون الى تعلم مهارات جديدة وتطوير القدرات والمواهب الخاصة بهم، بالاضافة الى تحسين الوعي الذاتي وتعزيز الثقة بالنفس والقدرة على تحديد الاهداف والعمل على تحقيقها ضمن خطة عملية ممنهجة. كما ويهدف إلى تعزيز المهارات الشخصية مثل التواصل الفعال والتحكم في الوقت والتخطيط الاستراتيجي والتركيز على نقاط القوة واكتشاف القدرات الكامنة بكل شخص والتعامل مع التحديات والضغوط الحياتية."
                        buttonUrl="/services/self_improve"
                    />
                    <ServiceCard
                        imgUrl={couple_counsel}
                        title="استشارات زوجية وجنسية"
                        description="الاستشارات الزوجية هي عملية دعم ومساعدة تُقدم للأزواج بهدف تحسين جودة العلاقة بينهم والتعامل مع التحديات والمشاكل التي قد تواجههم في حياتهم الزوجية. تعد الاستشارات الزوجية آلية فعالة لتعزيز التواصل الصحي وبناء أسس قوية للثقة والاحترام المتبادل بين الشريكين.
                        تتنوع أهمية الاستشارات الزوجية بحسب الوضع الزوجي والتحديات التي يواجهها كل زوج. فهي تساعد الأزواج على التعرف على مشاعرهم واحتياجاتهم العاطفية، وبالتالي تعزز فهمهم المتبادل وتحسّن جودة التفاهم بينهما. كما توفر الاستشارات الزوجية والجنسية البيئة المثلى للتحدث عن القضايا المحتملة التي قد تكون صعبة أو محرجة للزوجين، وبذلك تساعد في تجنب التراكمات السلبية وتحسين حل المشكلات المشتركة.
                        تُعد الاستشارات الزوجية أداة قوية وضرورية لبناء علاقات زوجية صحية ومستقرة وتوفر المساعدة والدعم للأزواج في تحسين التواصل والفهم المتبادل وحل المشكلات، مما يسهم في بناء علاقة زوجية سعيدة ومتينة تستمر على المدى الطويل. تتمثل خدمات المركز الخاصة بالاستشارات الزوجية في تقديم جلسات استشارية فردية وزوجية وتقديم الإرشادات والنصائح اللازمة للتعامل مع المشاكل والتحديات المختلفة."
                        buttonUrl="/services/couples_counseling"
                    />
                    <ServiceCard
                        imgUrl={family_counsel}
                        title="استشارات اسرية"
                        description="استشارات الأسرة هي خدمة مهمة تهدف إلى تعزيز التواصل والعلاقات العائلية ومساعدة الأسرة في التعامل مع التحديات والصعوبات التي تواجهها. تعتبر الأسرة البيئة الأولى التي ينمو فيها الفرد، وهي الأساس الذي يؤثر في نموه الجسدي والعاطفي والاجتماعي والنفسي. ومن هنا يكمن أهمية استشارات الأسرة في تقديم الدعم والتوجيه للأسرة للتعامل بشكل صحيح مع التحديات اليومية والمشاكل المختلفة.
                        تقدم استشارات الأسرة بيئة آمنة للأفراد للتعبير عن أفكارهم ومشاعرهم وتبادل وجهات النظر. يتم التركيز في هذه الاستشارات على بناء التفاهم والاحترام بين أفراد الأسرة، وتعزيز التواصل الفعال بينهم. تُعزز الاستشارات الأسرة أيضًا الوعي بأنماط التفاعل العائلي وتوفر الأدوات والمهارات للتعامل بشكل أفضل مع الصراعات وحل المشكلات بطرق بناءة وفعالة.
                        بفضل استشارات الأسرة، يتمكن أفراد الأسرة من التحدث عن المواضيع الحساسة والمهمة بثقة وصدق، وبالتالي تساعد على تعزيز روابط العاطفة والتقارب بينهم. كما تعمل هذه الاستشارات على توفير استراتيجيات ونصائح تساعد الأسرة في التغلب على التحديات النمطية والتوجه نحو نمط حياة صحي ومستقر.                
                        تتنوع مجالات استشارات الأسرة بحسب احتياجات كل أسرة. قد تكون تلك الاحتياجات متعلقة بالتربية الأبوية والتعامل مع المراهقين، أو التغلب على المشاكل المالية والعملية، أو معالجة الصراعات العائلية وتحسين التفاهم بين الزوجين، وغيرها من القضايا.
                        تُعد استشارات الأسرة أداة قوية لتعزيز صحة وسعادة الأسرة، وتحقيق التوازن والانسجام بين أفرادها. تمنح الأسرة الفرصة لتطوير روابطها والتعلم من بعضها البعض، وبالتالي تحقيق بيئة أكثر تعاونية ومحبة تساهم في تحسين جودة حياة جميع أفرادها."
                        buttonUrl="/services/family_counseling"
                    />
                </ServicesSection>
            </Services_Container>
            
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default DesktopServicesPage;