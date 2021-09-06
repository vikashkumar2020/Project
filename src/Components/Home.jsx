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
          backgroundColor: "#171a29",
          height: "280px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Carousel />
      </div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}>
        <h2>My Favorities</h2>
        <Item></Item>
      </div>
    </>
  );
};

export default Home;
