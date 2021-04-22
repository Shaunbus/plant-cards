import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

//This is the final child of the single plant card view.

export const PlantCard = ({ className, plant }) => (
  <div className={className}>
    <Card className="plantCard" bg="dark" text="white">
      <Card.Img variant="top" src={plant.image} />
      <Card.Body>
        <Card.Title>{plant.name}</Card.Title>
        <Card.Text>{plant.description}</Card.Text>
        <div className="buttonContainer">
          <Link to={"/"}>
            <Button className="mt-3" variant="primary">
              Go Back
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default PlantCard;
