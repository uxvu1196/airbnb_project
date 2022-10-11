import React from "react";
import "./Card.css";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {/* if the first statement is true then the div is showed */}
      {/* {!props.openSpots && <div className="card--badge">SOLD OUT</div>} */}
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      {props.openSpots > 0 && <div className="card--badge">ONLINE</div>}
      {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
    /*     <div className="card">
      Public
      <img src={`../images/${props.img}`} className="card--image" />
      <div className="card--stats">
        Source
        <img src={require("../../Images/star.png")} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div> */
  );
}
