import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Plants from "./components/plants/Plants";
import Plant from "./components/plant/Plant";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Route exact path="/" component={Plants} />
          <Route path="/plant/:id" component={Plant} exact />
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
