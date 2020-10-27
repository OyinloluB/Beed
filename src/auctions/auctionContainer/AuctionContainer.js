import React, { useEffect, useState } from "react";
import axios from "axios";
import Auction from "../auction/Auction";

import Styles from "./auctioncontainer.module.scss";

const AuctionContainer = () => {
  const [information, setInformation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://staging.auction-service.beed.ng/api/v1/auction?limit=5&skip=0&state=pending"
      )
      .then((res) => {
        const data = res.data;
        const info = data.data.items;
        setInformation([...info]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        backgroundColor: " #F3F1F1",
        padding: "60px",
        minheight: "100vh",
      }}
    >
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Auctions
      </h3>

      <div className={Styles.container}>
        {loading ? (
          "Loading..."
        ) : (
          <>
            {information.map((eachInfo) => (
              <Auction eachInfo={eachInfo} key={eachInfo._id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AuctionContainer;
