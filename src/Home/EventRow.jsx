import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "E:/Kenil/CommWhale/Front-end/comm-whale/src/Assests/image.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import "../CSS/Home/EventRow.css";

const ITEM_WIDTH = 480;

export default function EventRow({ title, data }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();

  const handelScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (newScrollPosition < 0) {
      setScrollPosition(0);
    } else {
      setScrollPosition(newScrollPosition);
    }
    ref.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div
        className="overflow_btn scroll_left"
        onClick={() => {
          handelScroll(-ITEM_WIDTH);
        }}
      >
        <FaChevronLeft />
      </div>
      <div className="event_row" ref={ref}>
       
          {data
            ? data.map((events) => {
                return (
                  <>
                  <div className="poster">
                    <div className="event_img">
                      <img src={img} alt={events.imgAlt} />
                    </div>
                    <div className="description">
                      <div className="detail">
                        <h3>{events.title}</h3>
                        <p>{events.place}</p>
                        <p>{events.about}</p>
                        <p>{events.date}</p>
                      </div>
                      <div className="extra">
                        <h4>{events.price}</h4>
                        <NavLink to='/event'>
                        
                        <button className="event_btn">Show</button>
                        </NavLink>
                      </div>
                    </div>
                    </div>
                  </>
                );
              })
            : "Loading"}
      

      </div>
      <div
        className="overflow_btn scroll_right"
        onClick={() => {
          handelScroll(ITEM_WIDTH);
        }}
      >
        <FaChevronRight />
      </div>
    </div>
  );
}
