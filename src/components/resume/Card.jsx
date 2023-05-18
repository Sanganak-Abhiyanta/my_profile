import React from "react";

export default function Card(props) {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year} </span>
      <h3 className="timeline__title">{props.tilte} </h3>
      <p className="timeline_text">{props.desc} </p>
    </div>
  );
}
