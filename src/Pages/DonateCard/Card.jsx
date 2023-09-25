/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Card = ({donation}) => {
    const {id, picture, title, description, price } = donation || {};

    const handleAddToDonation = ()=> {

        const addedDonateArray = []

        const donateItem = JSON.parse(localStorage.getItem('donate'))

        if(!donateItem){
            addedDonateArray.push(donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            toast("Thanks ! We received your Donation.");
        }
        else{

            const isExists = donateItem.find(donate => donate.id == id)
            if(!isExists){
                addedDonateArray.push(...donateItem,donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            toast("Thanks ! We received your Donation Successfully.");
            }
            else{
                toast("Warning ! Your Donation already has Done.");
            }
        }
    }


    const imageStyle = {
        width: "100%",
        height: "auto",
      };

    return (
        <div>
             <div className="hero h-[70vh] relative">
                <img className="pb-9" style={imageStyle} src={picture} alt="" />
        <div className="hero"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="absolute left-9 bottom-10">
        <button onClick={handleAddToDonation} 
        className="btn bg-red-500 text-white">Donate ${price}</button>
      </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold py-5">{title}</h1>
        <p>{description}</p>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Card;