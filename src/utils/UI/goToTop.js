import React from 'react'
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";
export default function GoToTop({onTap}) {
    return (
        <div onClick={onTap} tabindex="0" className="plusButton">
            <IoIosArrowUp className="plusIcon" />
            {/* <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <g mask="url(#mask0_21_345)">
                    <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                </g>
            </svg> */}
        </div>
    )
}
