import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, author, category_id } = news;

  console.log(news);
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/catagory/${category_id}`}>
          <Button variant="primary">see the all catagory news</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
