import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import PizzaUno from "../assets/img/pizzauno.jpg";
import PizzaDos from "../assets/img/pizzados.jpg";
import PizzaTres from "../assets/img/pizzatres.jpg";

const Home = () => {
  let imageUno = PizzaUno;
  let imageDos = PizzaDos;
  let imageTres = PizzaTres;

  return (
    <>
      <Header />
      <div className="d-flex justify-content-evenly flex-wrap mt-5">
        <CardPizza
          tittle="Pizza Napolitana"
          description="mozzarella, tomates, jamon, orégano"
          price="5.950"
          image={imageUno}
        />
        <CardPizza
          tittle="Pizza Española"
          description="Mozzarella, Gorgonzola, Parmesano, P rovolone"
          price="6.950"
          image={imageDos}
        />
        <CardPizza
          tittle="Pizza Peperoni"
          description="mozzarella, pepperoni, orégano"
          price="6.950"
          image={imageTres}
        />
      </div>
    </>
  );
};

export default Home;
