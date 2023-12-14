import React, { useEffect } from "react";
import Button from "../../UI/Button";
import { getDonky } from "../../services/donki";

const Donki = () => {
  useEffect(() => {
    getDonky();
  },[]);
  return <div>{/* <Button content="CARAJO" action={getDonky}}/> */}</div>;
};

export default Donki;
