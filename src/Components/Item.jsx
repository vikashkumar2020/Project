import React from "react";
import '../App.css';

const Item = ({ url, alt, info }) => {
  return (
    <div className="item-div">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "250px",
          width: "300px",
          margin: "25px",
        }}
      >
        <img
          src={url}
          alt={alt}
          width="100%"
          height="100%"
        />
      </div>
      <div className="item-right">
        <div
          style={{
            display: "flex",
            height: "auto",
            width: "100%",
            fontSize: "18px",
            fontWeight:"500",
            margin:"10px 0px"
          }}
        >
          {alt}
        </div>
        <div
          style={{
            display: "flex",
            height: "auto",
            width: "100%",
            fontSize: "16px",
            margin:"10px 0px"
          }}
        >
          {info}
        </div>
      </div>
    </div>
  );
};

export default Item;
