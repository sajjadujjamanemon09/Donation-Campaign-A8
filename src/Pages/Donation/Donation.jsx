import { useEffect, useState } from "react";

import DonatedCard from "../../components/Donations/DonatedCard";


const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [noFound, setNoFound]  = useState(false)

    const [isShow, setIsShow] = useState(false)

    useEffect(() =>{
        const donateItem = JSON.parse(localStorage.getItem('donate'))
        if(donateItem){
            setDonations(donateItem)
        }
        else{
            setNoFound('No Donation Found ')
        }
    },[])

    console.log(donations);

    return (
        <div>
            {
                noFound ? <p className="h-[80vh] text-5xl font-bold flex text-center items-center justify-center">{noFound}</p> : 
                <div>
                    <div  className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mx-4">
                    {
                  isShow ?   donations.map((donation) => (<DonatedCard key={donation.id} donation={donation}></DonatedCard>)) :   donations.slice(0,4).map(donation => (<DonatedCard key={donation.id} donation={donation}></DonatedCard>))
                    }
                    </div>
                   
                    <div className="flex justify-center my-9">
                    <button onClick={() =>setIsShow(!isShow)} className="btn bg-red-500 text-white">{isShow ?"See Less" : "See more"}</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;