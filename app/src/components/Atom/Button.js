
import PropTypes from "prop-types";
import "../../styles/scss/atomic.scss";

const ButtonIcon = (props) => {
  return (
    <button 
      type="button"
      className={props.className} 
      onClick={props.click}
    >
      <span className={props.classSpan}>{props.text}</span>
      <i className={props.classI}><span className="visuallyhidden">아이콘</span></i>
    </button>
  );
}

const Button = (props) => {
  return (
    <button 
      className={props.className} 
      onClick={props.click}
    ><span className={props.classSpan}>{props.text}</span>
    </button>
  );
}


export {Button , ButtonIcon};
