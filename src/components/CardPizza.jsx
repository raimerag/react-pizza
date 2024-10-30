import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPizza = ({ tittle, description, price, image }) => {
  return (
    <>
      <Card className="mt-3" style={{ width: "18rem", height: "40rem" }}>
        <Card.Img style={{ height: "23rem" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
          <Card.Text className="text-center">Ingredientes</Card.Text>
          <Card.Text>🍕{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between m-3">
          <Button className="" variant="dark">
            Ver Más 👀
          </Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card>
    </>
  );
};

export default CardPizza;
