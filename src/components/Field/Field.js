import React from "react";
export default function Field(props) {
  let name = props.name
  if (props.yesterdayCompleted) {
    name += " (yesterday checked)"
  }
  return (
    <li className="rem stack-small">
      <div className="c-cb">
        <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}/>
        <label className="rem-label" htmlFor={props.id}>
          {name}
        </label>
      </div>
    </li>
  );
}