import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlantDeck from "./PlantsCarousel";
import { URL } from "../../APIURLS";

//This is the Parent of the Plants componenent this handles and updates state depending on what the user does

export const Plants = () => {
  const [plant, setPlants] = React.useState([]);

  //Initially pulling list of Plants here from DB using raect useEffect hook
  React.useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch(URL)).json();
        setPlants(response);
      } catch (error) {
        console.log("API Error: " + error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="col d-flex justify-content-center">
        <Row>
          <Col>
            <PlantDeck plant={plant} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Plants;
