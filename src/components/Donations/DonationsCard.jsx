/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const {id, title, picture, category } = donation || {};

  return (
   <Link to={`donations/${id}`}>
    <div>
    <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body">
    <p className="">{category}</p>
    <h2 className="text-2xl font-semibold">{title}</h2>
  </div>
</div>
    </div>
   </Link>
  );
};

export default DonationsCard;
