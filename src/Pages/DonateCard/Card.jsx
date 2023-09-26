/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Card = ({donation}) => {
    const {id, picture, title, description, price, text_button_bg_color } = donation || {};

    const handleAddToDonation = ()=> {

        const addedDonateArray = []

        const donateItem = JSON.parse(localStorage.getItem('donate'))

        if(!donateItem){
            addedDonateArray.push(donation)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            toast("Thanks ! We received your Donation Successfully.");
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
        <div className='px-6'>
             <div className="relative">
                <div><img className="hero h-[70vh] " style={imageStyle} src={picture} alt="" /></div>
        <div className="absolute inset-x-0 left-0 bottom-0 bg-opacity-50 py-5 bg-black">
        <button onClick={handleAddToDonation} 
        className="btn  text-white ml-8 " style={{backgroundColor:text_button_bg_color}}>Donate ${price}</button>
          </div>
        </div>
        <h1 className="text-3xl font-bold py-5">{title}</h1>
        <p>{description}</p>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Card;