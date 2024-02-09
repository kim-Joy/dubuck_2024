
import PropTypes from "prop-types";
import "../../styles/scss/atomic.scss";

function Button({btnClass, handleClick, txtClass, text, icon}) {
  return (
    <button className={btnClass} onClick={handleClick}>
      <span className={txtClass}>{text}</span>
      <i className={icon}></i>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  txtClass: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired
}

export default Button;
