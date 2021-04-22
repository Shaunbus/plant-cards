import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

//This is the final child of the plant card component
export const PlantsCard = ({ id, name, image }) => (
  <Card className="plantCard" bg="dark" text="white">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <div className="buttonContainer">
        <Link className="Link" to={"/plant/" + id}>
          <Button variant="primary"> View Plant</Button>
        </Link>
      </div>
    </Card.Body>
  </Card>
);

export default PlantsCard;
