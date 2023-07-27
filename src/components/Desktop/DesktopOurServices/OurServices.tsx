import React, { forwardRef } from 'react';
import { ButtonContainer, CardButton, MoreForCards, ServicesSection, Services_Container, Title } from "./styles"
import self_improve from "../../../assests/self_improve.jpeg"
import family_counsel from "../../../assests/family_counseling9.jpeg"
import couple_counsel from "../../../assests/counsel1.jpeg"
import { ServiceCard } from './ServiceCard';
import { useNavigate } from "react-router-dom";




export const DesktopOurServices = forwardRef<HTMLDivElement, {}>((props, ref) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/services');
  };

  return(
    <Services_Container>
      <Title>خدماتنا</Title>
      <ServicesSection ref={ref}>
            <ServiceCard
                imgUrl={self_improve}
                title="تطوير الذات"
                description="استشارات الأسرة هي خدمة مهمة تهدف إلى تعزيز التواصل والعلاقات العائلية ومساعدة الأسرة في التعامل مع التحديات والصعوبات التي تواجهها. تعتبر الأسرة البيئة الأولى التي ينمو فيها الفرد، وهي الأساس الذي يؤثر في نموه الجسدي والعاطفي والاجتماعي والنفسي. تقدم استشارات الأسرة بيئة آمنة للأفراد للتعبير عن أفكارهم ومشاعرهم وتبادل وجهات النظر وتساعد على بناء التفاهم والاحترام بين أفراد الأسرة، وتعزيز التواصل الفعال بينهم، كما وتوفر الأدوات والمهارات للتعامل بشكل أفضل مع الصراعات وحل المشكلات بطرق بناءة وفعالة. تتنوع مجالات استشارات الأسرة بحسب احتياجات كل أسرة، فقد تكون تلك الاحتياجات متعلقة بالتربية والتعامل مع المراهقين، أو التغلب على المشاكل المالية، أو تحسين التفاهم بين الزوجين."
                buttonUrl="/services/self_improve"
            />
            <ServiceCard
                imgUrl={couple_counsel}
                title="استشارات زوجية وجنسية"
                description="الاستشارات الزوجية هي عملية دعم ومساعدة تُقدم للأزواج بهدف تحسين جودة العلاقة بينهم والتعامل مع التحديات والمشاكل التي قد تواجههم في حياتهم الزوجية. تعد الاستشارات الزوجية آلية فعالة لتعزيز التواصل وبناء أسس قوية للثقة والاحترام المتبادل بين الشريكين. تتنوع أهمية الاستشارات الزوجية بحسب الوضع الزوجي والتحديات التي يواجهها كل زوج. فهي تساعد الأزواج على التعرف على مشاعرهم واحتياجاتهم العاطفية، وبالتالي تعزز فهمهم المتبادل وتحسّن جودة التفاهم بينهما. كما توفر الاستشارات الزوجية البيئة المثلى للتحدث عن القضايا المحتملة التي قد تكون صعبة أو محرجة للزوجين، وبذلك تساعد في تجنب التراكمات السلبية وتحسين حل المشكلات المشتركة."
                buttonUrl="/services/couples_counseling"
            />
            <ServiceCard
                imgUrl={family_counsel}
                title="استشارات اسرية"
                description="تطوير الذات والتنمية البشرية هو مجال شامل يهدف إلى تحسين وتطوير قدرات ومهارات الفرد وتعزيز نموه الشخصي والمهني والاجتماعي. يعتبر هذا المجال مثيرًا للاهتمام بالنسبة للأفراد الذين يسعون لتحقيق أهدافهم وتطوير إمكاناتهم الكامنة لتحقيق النجاح والسعادة في حياتهم. او ممن يسعون الى تعلم مهارات جديدة وتطوير القدرات والمواهب الخاصة بهم، بالإضافة الى تحسين الوعي الذاتي وتعزيز الثقة بالنفس والقدرة على تحديد الاهداف والعمل على تحقيقها ضمن خطة عملية ممنهجة. كما ويهدف إلى تعزيز المهارات الشخصية مثل التواصل الفعال وادارة الوقت والتخطيط الاستراتيجي والتركيز على نقاط القوة واكتشاف القدرات الكامنة والتعامل مع التحديات والضغوط الحياتية."
                buttonUrl="/services/family_counseling"
            />
      </ServicesSection>
      <ButtonContainer>
        <MoreForCards onClick={handleButtonClick}> لجميع خدماتنا</MoreForCards>
      </ButtonContainer>
    </Services_Container>
  );
});
