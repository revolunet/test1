import React from "react";
import gql from "fraql";
import RateTitle from "./RateTitle";

const RateCard = ({ rate }) => (
  <div style={{ margin: 20 }}>
    <RateTitle rate={rate} />
    <p>
      {rate.currency} - {rate.rate}
    </p>
  </div>
);

RateCard.fragments = {
  rate: gql`
    fragment _ on ExchangeRate {
      ${RateTitle.fragments.rate}
      currency
      rate
    }
  `
};

export default RateCard;
