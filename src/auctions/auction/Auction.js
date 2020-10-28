import React from "react";
import Styles from "./auction.module.scss";
import DateCountdown from "react-date-countdown-timer";

const Auction = ({ eachInfo }) => {
  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <b>Auction Closed</b>;
  //   } else {
  //     return (
  //       <b style={{ fontSize: "14px" }}>
  //         {`${hours} hrs: ${minutes} min: ${seconds} secs`} left
  //       </b>
  //     );
  //   }
  // };

  const countDownDate = new Date(eachInfo.start_time);

  const timeDifference =
    new Date().getTime() - new Date(eachInfo.start_time).getTime();

  console.log(timeDifference);

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
            {timeDifference > new Date(eachInfo.start_time).toDateString() ? (
              <b>Auction Closed</b>
            ) : (
              <DateCountdown
                dateTo={countDownDate.toISOString()}
                locales={["year", "month", "day", "hr", "min", "sec"]}
                locales_plural={[
                  "years",
                  "months",
                  "days",
                  "hrs",
                  "mins",
                  "secs",
                ]}
              />
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
