import React from "react";
import review from "../reviews";

const Testimonial = () => {
  return (
    <div className="review-container">
      <div className="review-header">
        <h3>Customer Reviews</h3>
      </div>
      <div className="cards">
        {review.map((review) => (
          <div key={review.id} className="review-items">
            <img src={review.image} alt="" />
            <div className="review-content">
              <p className="yellow-star">★★★★★</p>
              <p>{review.description}</p>
              <p>...{review.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Testimonial;