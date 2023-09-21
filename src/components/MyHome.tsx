import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import { IArticle } from "../interfaces/IArticles";

const MyHome = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const articlesFromApi = await resp.json();
        console.log(articlesFromApi.results);
        setArticles(articlesFromApi.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      <h1 className="text-center">Articles</h1>
      <Container>
        <Row className="gy-5">
          {articles.map((article) => (
            <SingleArticle key={article.id} article={article} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default MyHome;
