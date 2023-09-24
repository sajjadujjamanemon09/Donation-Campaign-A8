/* eslint-disable react/prop-types */

import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {
    console.log(donations);
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;