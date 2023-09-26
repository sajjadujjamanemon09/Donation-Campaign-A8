/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const {id, title, picture, category, card_bg_color, text_color,category_bg_color } = donation || {};

  return (
   <Link to={`donations/${id}`}>
    <div>
    <div className="card w-full h-64 card-compact bg-base-100 shadow-xl"
    style={{backgroundColor: card_bg_color, color: text_color }}>
  <figure><img className="w-full" src={picture} alt="" /></figure>
  <div className="card-body h-1/3">
    <p className="rounded w-20 text-center" style={{backgroundColor:category_bg_color}}>{category}</p>
    <h2 className="text-xl font-semibold pb-4">{title}</h2>
  </div>
</div>
    </div>
   </Link>
  );
};

export default DonationsCard;
