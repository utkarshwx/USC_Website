import React from "react";
import { useParams } from "react-router-dom";
import MainFrom from "./MainFrom";

export default function InputFrom() {
  const { type } = useParams();

  return (
    <div className="wrapper flex w-11/12 mx-auto my-10">
      {/* <div className="w-5/12"></div> */}
      <div className="md:w-7/12 w-full mx-auto">
        <div className="heading title text-3xl">
          Start Your Journey with Us: Fill Out Your Application Today
        </div>
        <p className="italic mt-2">
          Join a team that values innovation and excellence. Fill out your
          application and contribute to our continued success.
        </p>
        <div className="main_box">
          <MainFrom type={type} />
        </div>
      </div>
    </div>
  );
}
