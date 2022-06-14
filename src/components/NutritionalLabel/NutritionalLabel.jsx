import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({item}) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((elem, i) => (
        <NutritionalLabelFact key={i} label={elem.label} value={
          item[elem.attribute]
        }/>
        ))
        }</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.value}</span>
    </li>
  )
}

export default NutritionalLabel
