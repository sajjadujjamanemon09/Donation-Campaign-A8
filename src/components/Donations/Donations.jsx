/* eslint-disable react/prop-types */

import DonationsCard from "./DonationsCard";

const Donations = ({donations, searchCategory}) => {

    const search = searchCategory;
    const searchCase = search.toLowerCase();

    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donations.filter((dtn) => {
                        return searchCase == '' ? dtn : dtn?.category?.toLowerCase().includes(searchCase);
                    }).map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;

{/* {
                    donations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                } */}