import React from "react";
import Item from "./Item";
import Carousel from "./carousel";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "grey",
          height: "280px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Carousel />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <h2>Favorities</h2>
        <Item
          url={
            "https://cdn.britannica.com/s:690x388,c:crop/23/77423-004-0528CDE7/hamburger-food.jpg"
          }
          alt={"Burger"}
          info={
            "Hamburgers are customarily eaten as a sandwich, between two halves of a round bun. Mustard, mayonnaise, ketchup, and other condiments, along with garnishes of lettuce, onion, tomato, and sliced cucumber pickle, constitute the customary dressing. In the variation known as the cheeseburger, a slice of cheese is melted over the patty. The patty itself is often seasoned or augmented with chopped onions, spices, or bread crumbs before cooking."
          }
        ></Item>
        <Item
          url={
            "https://cdn.britannica.com/08/177308-131-DFD947AD/Food-Pizza-Basil-Tomato.jpg"
          }
          alt={"Pizza"}
          info={
            "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot."
          }
        ></Item>
        <Item
          url={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ch3skpwayvlsv1z15dlp"
          }
          alt={"Momos"}
          info={
            "Momo is a type of East and South Asian steamed filled dumpling. Momo is native to Tibet and Nepal. It is popular across a wider region of the Indian subcontinent. Momo is similar to Chinese baozi, jiaozi, and mantou, Mongolian buuz, Japanese gyoza, Korean mandu and Turkic manti, but heavily influenced by Nepali cuisine with South Asian spices and herbs. Momo are extremely popular in Nepal and can be found in every kind of shop from restaurants to street vendors"
          }
        ></Item>
        <Item
          url={
            "https://cdn.britannica.com/68/189768-050-FFE0964F/Tostadas-tortillas-meat-beans-tomatoes-cheese-lettuce.jpg"
          }
          alt={"Tortilla"}
          info={
            "Tortilla, round, thin, flat bread of Mexico made from unleavened cornmeal or, less commonly, wheat flour. Traditionally the corn (maize) for tortillas was boiled with unslaked lime to soften the kernels and loosen the hulls. (This lime was the principal source of calcium in the Mexican diet.) The grains were ground on a stone saddle quern, or metate. Small pieces of dough were patted by hand into thin disks, a task requiring considerable dexterity."
          }
        ></Item>
      </div>
    </>
  );
};

export default Home;
