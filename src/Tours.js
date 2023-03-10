import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} handleTour={handleTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
