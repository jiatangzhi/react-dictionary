import React from "react";
import "./Synonyms.js";

export default function Synonyms(props) {
  <ul className="Synonyms">
    {props.synonyms.map(function (synonym, index) {
      return <li key={index}>{synonym}</li>;
    })}
  </ul>;
}
