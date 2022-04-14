import React from "react";
export default function Field(props) {
  return (
    <li className="rem stack-small">
      <div className="c-cb">
        <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}/>
        <label className="rem-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
    </li>
  );
}