import React from "react";
import { useNavigate } from "react-router-dom";
// import "./style.css";
export default function ApplyBtn() {
    const navigation = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <button onClick={()=>navigation("/hiring")} class="button mt-6 bg-orange-400 w-[200px] hover:bg-orange-800 transition-all">Apply Now</button>
    </div>
  );
}
