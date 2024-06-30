import React from "react";
import { NonTechHiringData, TechHiringData } from "../../data/hinring_data";
import HiringBtn from "./HiringBtn";
import { useNavigate } from "react-router-dom";

export default function Hiring() {
  const navigate = useNavigate();
  return (
    <div className="my-6 main_wrapper pt-20 w-screen min-h-[60vh]">
      <div className="box  w-11/12 mx-auto  p-5 rounded-md">
        <div className="title text-center mx-auto my-2 text-4xl">
          Be Part of Our Community <br />
          Diverse{" "}
          <span className="italic text-orange-500">Tech and Non-Tech </span>
          Roles
        </div>
        <div className="domains flex mt-14 flex-wrap gap-2 justify-around">
          <div className="tech bg-[#34495e] p-5 rounded-md md:w-5/12 w-full ">
            <div className="title text-2xl">Join Our Tech Team</div>
            <div className="wrapper py-6 flex flex-wrap">
              {TechHiringData.map((item) => (
                <div className="box my-2 w-4/12" id={item.id}>
                  <div className="icon bg-[#e67e22] rounded-full flex justify-center items-center w-[40px] h-[40px] text-2xl">
                    {item.icon}
                  </div>
                  <div className="title_text mt-2">{item.name}</div>
                </div>
              ))}
            </div>
            <HiringBtn onTap={() => navigate("/input_form/tech")} />
          </div>
          <div className="non_tech bg-[#34495e] p-5 rounded-md md:w-5/12 w-full ">
            <div className="title text-2xl">Join Our Non-Tech Team</div>
            <div className="wrapper py-6 flex flex-wrap">
              {NonTechHiringData.map((item) => (
                <div className="box w-4/12" id={item.id}>
                  <div className="icon bg-[#e67e22] rounded-full flex justify-center items-center w-[40px] h-[40px] text-2xl">
                    {item.icon}
                  </div>
                  <div className="title_text mt-2">{item.name}</div>
                </div>
              ))}
            </div>
            <HiringBtn onTap={() => navigate("/input_form/non-tech")} />
          </div>
        </div>
      </div>
    </div>
  );
}
