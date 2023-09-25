/* eslint-disable react/prop-types */


const DonatedCard = ({ donation }) => {
    const {title,price, donate_picture, category, card_bg_color, text_color,category_bg_color,text_button_bg_color } = donation || {};
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl"  style={{backgroundColor: card_bg_color, color: text_color }}>
  <figure><img src={donate_picture} alt="Movie"/></figure>
  <div className="p-4">
    <h2 className="rounded w-20 text-center" style={{backgroundColor:category_bg_color}}>{category}</h2>
    <p className="text-2xl text-black font-bold">{title}</p>
    <p className="font-semibold">${price}</p>
    <div className="card-actions">
      <button className="btn text-white"  style={{backgroundColor:text_button_bg_color}}>View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonatedCard;