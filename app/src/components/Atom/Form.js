import PropTypes from "prop-types";
import "../../styles/scss/atomic.scss";


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

const Label =(props) => {
  return(
    <label
    className={props.className}
    for={props.for}>
      {props.text}
    </label>
  )
}

export {Input , Label, Select};