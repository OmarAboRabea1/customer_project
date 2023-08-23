import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../../assests/Data';
import { Container, Content_container, Description, Title } from './styles';
import { MobileNavBar } from '../../components/NavBar/MobileNavBar';
import MobileFooter from '../../components/Footer/Footer';

export const ArticleDetailPage: React.FC = () => {

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


  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === parseInt(id!));

  if (!article) return <div>Article not found</div>;

  return (
            <Container>
                <MobileNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
                <Content_container>
                    <Title>{article.title}</Title>
                    <Description dangerouslySetInnerHTML={{ __html: article.content }} />
                </Content_container>
                <MobileFooter ref={footerRef}/>
            </Container>

  );
};

export default ArticleDetailPage;