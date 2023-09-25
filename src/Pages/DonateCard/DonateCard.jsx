/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const DonateCard = () => {
  const [donation, setDonation] = useState({});

  const { id } = useParams();

  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations?.find((donation) => donation.id == id);

    setDonation(findDonation);
  }, [id, donations]);

  console.log(donation);

  return (
    <div className="py-9">
      <Card donation={donation}></Card>
    </div>
  );
};

export default DonateCard;
