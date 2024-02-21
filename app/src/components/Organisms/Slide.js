import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function SwipeToSlide() {
  const today_list = [
    {key: "1", data: "2023.04.27", num: "104", answer: "100", wrong: "0", to: "/Result_View", score: true, perfect: "perfect"},
    {key: "2", data: "2023.04.27", num: "103", answer: "5", wrong: "5", to: "/Result_View", score: true, perfect: ""},
    {key: "3", data: "2023.04.27", num: "102", answer: "2", wrong: "8", to: "/Result_View", score: true, perfect: ""},
    {key: "4", data: "2023.04.27", num: "101", answer: "70", wrong: "0", to: "/Result_View", score: true, perfect: "perfect"}
  ]
  const settings = {
    infinite: false,
    dot: false,
    arrow: false,
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          }
      },
    ]
  }

  return (
    <ul className="slider-container">
      <Slider {...settings}>
        {today_list.map((item) =>(
            <li className="item">
              <Link to={item.to}>
                <button className="btn">
                  <div className="count-group"> 
                    <p className="data">{item.data}</p>
                    <strong className="num">{item.num}</strong>
                  </div>
                  <p className="perfect">{item.perfect}</p>
                  <div className="score">
                    <dl>
                      <dt>정답수</dt>
                      <dd>{item.answer}</dd>
                    </dl>
                    <dl>
                      <dt>오답수</dt>
                      <dd>{item.wrong}</dd>
                    </dl>
                  </div>
                </button>
              </Link>
            </li>
          ))}
      </Slider>
    </ul>
  );
}

export default SwipeToSlide;