import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import Swal from 'sweetalert2';

const Cards = ({ item }) => {
  const { name, image, price, equipment, _id } = item;
  const { user } = useContext(AuthContext);
  // console.log(user)

  const navigate = useNavigate();
  const location = useLocation();

  // add to cart button
  const handleAddtoCart = (item) => {
    // console.log("btn is clicked", item)
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      // console.log(cartItem)
      fetch("/carts", {
        method:"POST",
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } else {
      Swal.fire({
        title: "Sorry",
        text: "You need to login to proceed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00468B",
        cancelButtonColor: "#FF5252",
        confirmButtonText: "Signup"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/Signup',{state:{from: location}})
        }
      });
    }
  };

  return (
    <div className="card shadow-xl relative mr-5 md:my-5">
      <Link>
        <figure>
          <img
            src={item.image}
            alt="equipment"
            className="hover:scale-105 transition-all duration-300 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link>
          <h2 className="card-title">{item.name}!</h2>
        </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$ </span> {item.price}
          </h5>
          <button
            className="btn bg-deepblue text-white"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
