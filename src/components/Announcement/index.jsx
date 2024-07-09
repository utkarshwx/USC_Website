import React from "react";
import img from "../../assets/images/annocment.png";
import ApplyBtn from "./ApplyBtn";
import Results from "../Results";
export default function Announcement() {
  return (
    <div className="w-screen my-10 py-8 min-h-[60vh]">
      <div className="wrapper w-11/12 flex mx-auto">
        <div className="w-11/12 text-center">
          {/* <div className="heading">
            <span className="italic playwrite-us-trad-annocment text-2xl text-orange-400 ">
              announcement
            </span>
            <h1 className="md:text-5xl text-4xl mt-4">
              Drive Innovation and Impact: We're Hiring for Tech and Non-Tech
              Domains!
            </h1>
          </div> */}
          {/* <ApplyBtn /> */}
          {/* <div
            style={{
              width: "80%",
              margin: "61px auto",
              height: "1px",
              background: "#f5deb347",
            }}
            className="w-full h-[2px] bg-white"
          ></div> */}
          <Results/>
        </div>
      </div>
    </div>
  );
}
