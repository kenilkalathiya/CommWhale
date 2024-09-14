import React from "react";

import "../CSS/app.css";
import ImageSlide from "../Home/ImageSlide";
import images from "../Data/ImageData";
import eventRow from "../Data/EventRow";
import EventRow from "./EventRow";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
    
      <ImageSlide>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </ImageSlide>
        <EventRow title="Upcoming Events" data={eventRow}/>
        <EventRow title="Featured Events"data={eventRow}/>
        <Footer/>
    </>
  );
}
