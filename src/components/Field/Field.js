import React from "react";
export default function Field(props) {
  let name = props.name
  if (props.yesterdayCompleted) {
    name += " (yesterday checked)"
  }
  return (
    <li className="rem stack-small">
      <div className="c-cb" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}/>
        <label className="rem-label" htmlFor={props.id}>
          {name}
        </label>
        <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
      
    </li>
  );
}