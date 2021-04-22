import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlantCard from "./PlantCard";
import { useParams } from "react-router-dom";
import { URL } from "../../APIURLS";

export const Plant = () => {
  const { id } = useParams();
  const [plant, setPlants] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch(URL + id)).json();
        if (response[0] == null) {
          return;
        } else {
          setPlants(response[0]);
        }
      } catch (error) {
        console.log("API Error: " + error);
      }
    })();
  }, []);

  return (
    <div>
      <div
        className="col d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <Row>
          <Col>
            <PlantCard plant={plant} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Plant;
