import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { ArticleLink, ArticlesContainer, ArticlesDesc, Column, ColumnHeading, Container, Description, FatenContainer, Names, PicturesContainer, SameirContainer, Title, Title2 } from "./styles";
import DesktopNavBar from '../../components/Desktop/DesktopNavBar/DesktopNavBar';
import DesktopFooter from '../../components/Desktop/DesktopFooter/Footer';
import { Link } from 'react-router-dom';
import { articles } from '../../assests/Data';

const DesktopArticlesPage = () => {   // Updated the component name

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

    return (
        <Container>
            <DesktopNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices} />
            <ArticlesContainer>
            <Column>
                <ColumnHeading>الوالدية</ColumnHeading>
                {articles.slice(0, 3).map(article => (
                    <ArticleLink key={article.id} as={Link} to={`/articles/${article.id}`}>
                        {article.title}
                    </ArticleLink>
                ))}
            </Column>

            <Column>
                <ColumnHeading>النجاح</ColumnHeading>
                {articles.slice(3, 5).map(article => (
                    <ArticleLink key={article.id} as={Link} to={`/articles/${article.id}`}>
                        {article.title}
                    </ArticleLink>
                ))}
            </Column>

            <Column>
                <ColumnHeading>بر الوالدين</ColumnHeading>
                {articles.slice(5, 10).map(article => (
                    <ArticleLink key={article.id} as={Link} to={`/articles/${article.id}`}>
                        {article.title}
                    </ArticleLink>
                ))}
            </Column>
            </ArticlesContainer>
            <DesktopFooter ref={footerRef}/>
        </Container>
    )
}
export default DesktopArticlesPage;
