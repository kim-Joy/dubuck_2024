import PropTypes from "prop-types";

// label
const Label =(props) => {
  return(
    <label
    className={props.className}
    htmlFor={props.for}>
      {props.text}
    </label>
  )
}

// input
const Input =(props) => {
  return(
    <input 
      id={props.id}
      name={props.name}
      value={props.value}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      required = {props.required}
      disabled = {props.disabled}
    />
  )
}

//select custom
const Select = (props) => {
  return(
    <div class="select">
        <button 
          type="button" className="select-btn"
        >{props.text}
        <i className="arrow"><span className="visuallyhidden">화살표</span></i>
        </button>
        <ul className="option">
          <li>{props.text}</li>
        </ul>
    </div>
  )
}

export {Input , Label, Select};