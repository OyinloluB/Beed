import React from "react";
import Styles from "./auction.module.scss";
import Countdown from "react-countdown";

const Auction = ({ eachInfo }) => {
  const today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <b>Auction Closed</b>;
    } else {
      return (
        <b style={{ fontSize: "14px" }}>
          {`${hours} hrs: ${minutes} min: ${seconds} secs`} left
        </b>
      );
    }
  };

  return (
    <div>
      <div className={Styles.auction}>
        <div className={Styles.auction_imageContainer}>
          <img
            src={eachInfo.pictures}
            alt={eachInfo.title}
            className={Styles.auction_image}
          />
          <p>
            {date > new Date(eachInfo.start_time).toDateString() ? (
              <b>Auction Closed</b>
            ) : (
              <Countdown renderer={renderer} date={eachInfo.start_time} />
            )}
          </p>
        </div>
        <div className={Styles.auction_details}>
          <p>
            <b>Title:</b> <span>{eachInfo.title}</span>
          </p>
          <p>
            <b>Start Time:</b>{" "}
            <span>{new Date(eachInfo.start_time).toDateString()}</span>
          </p>
          <p>
            <b>Followers:</b> <span>{eachInfo.participants.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auction;
