import React from "react";
import { Spinner } from "react-bootstrap";
import "../Loader/Loader.scss";

export const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden m-2">Loading...</span>
    </Spinner>
  );
};
