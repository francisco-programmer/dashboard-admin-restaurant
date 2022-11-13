import React from "react";
import { Link } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";



const CardTicket = (props) => {

  

  const {ticket, name, price, image} = props;

  let status = "";
  let textColor = "";

  switch (ticket) {
    case "pending":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      break;
    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "close":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case "total":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;
  }

  return (
   
   <div className="bg-secondary-100 p-2 rounded-xl w-48">
    <img src={image}  className="h-40 w-full"/>
    <div>
      <p className="text-xl text-sky-400 text-center">{name}</p>
      <p className="text-xl hover:underline text-center">${price}</p>
    </div>
   
     
      
    </div>
    
  );
};

export default CardTicket;
