import React from "react";
import specials from "../specials";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id, "clicked");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been confirmed.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h3>Chef's specials</h3>
        <button>Menu</button>
      </div>
      <div className="cards">
        {specials.map((special) => (
          <div key={special.id} className="menu-items">
            <img src={special.image} alt="t" />
            <div className="menu-content">
              <div className="heading">
                <h4>{special.title}</h4>
                <p>${special.price}</p>
              </div>
              <p>{special.description}</p>
              <button className="orderbtn" data-testid="orderbtn" onClick={() => handleOrder(special.id)}>Order now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Menu;