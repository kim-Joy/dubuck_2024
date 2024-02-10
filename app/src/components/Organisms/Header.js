import { useNavigate } from 'react-router-dom';


/* logo header */
function Header(){
  return(
    <header className="Header">
      <h1>Logo</h1>
    </header>
  )
}

/* title  header */
function HeaderTitle(props) {
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate(-1); 
  }; 

  return (
    <header className="Header">
      <button 
        className="hd-back"
        onClick={handleBack}
      >
        <span className="visuallyhidden">뒤로가기</span>
      </button>
      <h2>{props.title}</h2>
    </header>
  );
}


export {Header, HeaderTitle} ;
