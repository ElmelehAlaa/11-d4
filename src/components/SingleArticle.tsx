import { Button, Card, Col } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticles";
import { Link } from "react-router-dom";
interface SingleArticleProps {
  article: IArticle;
}
const SingleArticle = ({ article }: SingleArticleProps) => {
  return (
    <Col xs={"12"} md={"4"} lg={"3"}>
      <Card style={{ height: "500px" }}>
        <Card.Img
          style={{ width: "250px", height: "250px", objectFit: "contain" }}
          variant="top"
          src={article.image_url}
          alt="img-url"
        />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
            {article.summary}
          </Card.Text>
          <Button variant="primary">
            <Link className="text-white" to={`/${article.id}`}>
              Read article
            </Link>
          </Button>
          <p className="py-3">
            pubblicato il:{"  "}
            {article.published_at.toString()}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleArticle;
