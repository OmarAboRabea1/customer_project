import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { ArrowButton, ArticleLink, ArticlesContainer, ArticlesDesc, Column, ColumnHeading, Columns_container, Container, Description, FatenContainer, Names, PicturesContainer, SameirContainer, Title, Title2, TitlesList } from "./styles";
import { MobileNavBar } from '../../components/NavBar/MobileNavBar';
import MobileFooter from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { articles } from '../../assests/Data';


const ArticlesPage=()=>{

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

    return(
        <Container>
            <MobileNavBar scrollToAboutUs={scrollToAboutUs} scrollToFooter={scrollToFooter} scrollToOurServices={scrollToOurServices}/>
            <ArticlesContainer>
                <CollapsibleComponent title="انا وطفلي" articles={articles.slice(0, 2)} />
                <CollapsibleComponent title="اسئلة واستشارات" articles={articles.slice(2, 4)} />
                <CollapsibleComponent title="اباء وابناء" articles={articles.slice(4, 8)} />
                <CollapsibleComponent title="طور ذاتك" articles={articles.slice(8, 10)} />
            </ArticlesContainer>
            <MobileFooter ref={footerRef}/>
        </Container>
    )
}
export default ArticlesPage;
type Article = {
    id: number;
    title: string;
};

type CollapsibleProps = {
    title: string;
    articles: Article[];
};


const CollapsibleComponent: React.FC<CollapsibleProps> = ({ title, articles }) => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(prev => !prev);
    };

    return (
        <Columns_container>
            <Column>
                <ColumnHeading>
                    {title}
                    <ArrowButton onClick={toggleVisibility}>{visibility ? "🔺" : "🔻"}</ArrowButton>
                </ColumnHeading>
                <TitlesList isVisible={visibility}>
                    {articles.map(article => (
                        <ArticleLink key={article.id} as={Link} to={`/articles/${article.id}`}>
                            {article.title}
                        </ArticleLink>
                    ))}
                </TitlesList>
            </Column>
        </Columns_container>
    );
};
