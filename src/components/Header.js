import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export const Header = ({ className }) => (
  <div className={className}>
    <Jumbotron>
      <h3>Shaun Bucyk Plant Carousel</h3>
    </Jumbotron>
  </div>
);

export default Header;
