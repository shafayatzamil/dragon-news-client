import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { BsBookmarks, BsShareFill,BsStarFill,BsEyeFill} from "react-icons/bs";


const NewsSummaryCard = ({ news }) => {
  const { title, total_view, _id, details, image_url, author,rating} = news;
  return (
    <Card className="text-center mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image roundedCircle src={author.img} style={{height:'60px'}
        }></Image>
        <div className="ms-2">
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
        </div>
        </div>
        <div>
            <BsBookmarks></BsBookmarks>
            <BsShareFill></BsShareFill>
        </div>
        
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Reade mode</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>
            <BsStarFill className="text-danger me-2"></BsStarFill>
            <span>{rating?.number}</span>
        </div>
        <div>
            <BsEyeFill></BsEyeFill>
            <span >{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
