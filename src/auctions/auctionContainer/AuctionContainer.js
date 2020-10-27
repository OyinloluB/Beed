import React, { useEffect, useState } from "react";
import axios from "axios";
import Auction from "../auction/Auction";

import Styles from "./auctioncontainer.module.scss";

const AuctionContainer = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://staging.auction-service.beed.ng/api/v1/auction?limit=5&skip=0&state=pending"
      )
      .then((res) => {
        const data = res.data;
        const info = data.data.items;
        setInformation([...info]);
      });
  }, []);

  return (
    <div className={Styles.container}>
      {information.map((eachInfo) => (
        <Auction eachInfo={eachInfo} key={eachInfo._id} />
      ))}
    </div>
  );
};

export default AuctionContainer;
