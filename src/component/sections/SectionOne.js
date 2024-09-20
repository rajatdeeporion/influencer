import React from "react";
import Style from "./Style/Style.module.css";
import { Stars } from "../../assets";
function SectionOne() {
  return (
    <div
      className={`${Style.sectionOne}
         bg-black w-full
         grid grid-cols-1

         `}
    >
      <div className={`${Style.textBox}
         text-left`}>
        <div className={`${Style.btn} h-8 w-1/2`}>
          <img src={Stars} alt="" className="w-4 h-4 ml-2" />
          <p className="ml-2 mt-3 mr-1">Frontend Developer Portfolio</p>
        </div>
        <h1 className="text-5xl  text-white font-bold">
          Providing
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9358e9] to-[#0cb2d5]">
            the best
          </span>
          <br /> project exprience
        </h1>
        <p className="text-[#9097a3] mt-4">
          Highly effective at developing and standardizing designs according to
          <br />
          company brand and objectives. Ready to bring my all to a growth-
          <br />
          oriented team.oriented team.
        </p>
      </div>
    </div>
  );
}

export default SectionOne;
