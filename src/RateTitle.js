import React from "react";
import gql from "fraql";

const RateTitle = ({ rate }) => <h2>{rate.name}</h2>;

RateTitle.fragments = {
  rate: gql`
    fragment _ on ExchangeRate {
      name
    }
  `
};

export default RateTitle;
