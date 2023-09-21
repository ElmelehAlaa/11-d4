import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticles";
import { Card } from "react-bootstrap";

const ArticleDetail = () => {
  const [singleDetailArticle, setSingleDetailArticle] = useState<IArticle | null>(null);
  const params = useParams();

  console.log("PARAMS", params);
  const fetchDetailArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id);
      if (resp.ok) {
        const articleFromApi = await resp.json();
        console.log(articleFromApi);
        setSingleDetailArticle(articleFromApi);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetailArticle();
  }, []);
  return (
    <div>
      {singleDetailArticle && (
        <Card>
          <Card.Title className="text-center fs-1">{singleDetailArticle.title}</Card.Title>
          {
            <Card.Img
              style={{ width: "400px", margin: "auto", objectFit: "scale-down" }}
              variant="top"
              src={singleDetailArticle.image_url}
            />
          }
          <p className="px-4">News Site: {singleDetailArticle.news_site}</p>

          <Card.Body>
            <Card.Text className="fs-3">{singleDetailArticle.summary}</Card.Text>
            <p className="px-4">Updated at: {singleDetailArticle.published_at.toString()}</p>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default ArticleDetail;
