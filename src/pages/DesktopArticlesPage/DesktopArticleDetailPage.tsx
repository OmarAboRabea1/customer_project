import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../../assests/Data';
import { Container, Container_for_content, Content_container, Description, Title } from './styles';
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';

export const DesktopArticleDetailPage: React.FC = () => {

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

  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === parseInt(id!));

  if (!article) return <div>Article not found</div>;

  return (
          <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices} />
            <Container_for_content>
              <Content_container>
                <Title>{article.title}</Title>
                <Description dangerouslySetInnerHTML={{ __html: article.content }} />
              </Content_container>
            </Container_for_content>
            <DesktopFooter ref={footerRef}/>
          </Container>
  );
};

export default DesktopArticleDetailPage;