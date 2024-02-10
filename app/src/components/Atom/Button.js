
import PropTypes from "prop-types";

// button 
const Button = (props) => {
  return (
    <button 
     type="button"
      className={props.className} 
      onClick={props.onClick}
    ><span className={props.classSpan}>{props.text}</span>
    </button>
  );
}

// button icon 조합
const ButtonIcon = (props) => {
  return (
    <button 
      type="button"
      className={props.className} 
      oonClick={props.onClick}
    >
      <span className={props.classSpan}>{props.text}</span>
      <i className={props.classI}><span className="visuallyhidden">아이콘</span></i>
    </button>
  );
}




export {Button , ButtonIcon};
