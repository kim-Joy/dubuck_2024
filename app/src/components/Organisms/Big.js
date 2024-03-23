
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/common/dubuck.png';

const Dubuck = <img src={Image} className="dubuck_symbolon" alt="두벅이" />

// 상단 빅 배너
function Big() {
  const email_key = sessionStorage.getItem("EMAIL_KEY");
  const email_pw = sessionStorage.getItem("EMAIL_PW");
  let linkTo;

  if(email_key === null && email_pw === null) {
    linkTo = '/';
  } else {
    linkTo = '/Main';
  }

  return (
    <section className="Big">
      <div className="group">
        <Link to={linkTo}>
          <h1 className="logo">
            <span className="visuallyhidden">dubuck</span>
          </h1>
        </Link>
        <h2>두벅 영워드</h2>
        <p>차 없는 나는 두벅이, 두벅두벅 걸어 가면서 공부하는 영단어</p>
      </div>
      {Dubuck}
    </section>
  );
}

export default Big;
