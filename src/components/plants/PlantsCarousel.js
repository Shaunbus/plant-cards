import PlantsCard from "./PlantsCard";
import CardColumns from "react-bootstrap/CardColumns";

//This is the second child and is using Bootstrap CardColumns to give it the mosiac carousel layout of cards
//This is mapping all the values to the child PlantsCard

export const PlantsCarousel = ({ className, plant }) => (
  <div className={className}>
    <CardColumns>
      {plant.map((plant, index) => (
        <PlantsCard
          key={index}
          id={plant.id}
          name={plant.name}
          description={plant.description}
          image={plant.image}
        />
      ))}
    </CardColumns>
  </div>
);

export default PlantsCarousel;
