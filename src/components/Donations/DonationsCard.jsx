/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const {id, title, picture, category, card_bg_color, text_color,category_bg_color } = donation || {};

  return (
   <Link to={`donations/${id}`}>
    <div>
    <div className="card card-compact bg-base-100 shadow-xl"
    style={{backgroundColor: card_bg_color, color: text_color }}>
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body">
    <p className="rounded w-20 text-center" style={{backgroundColor:category_bg_color}}>{category}</p>
    <h2 className="text-2xl font-semibold">{title}</h2>
  </div>
</div>
    </div>
   </Link>
  );
};

export default DonationsCard;
