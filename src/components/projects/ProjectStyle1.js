import React from "react";

const ProjectStyle1 = ({
  imageSrc,
  //  title,
  // description,
  width,
}) => {
  return (
    <div
      className={`group mx-4 w-full   md:w-${width}  hover:shadow-xl hover:text-red-500 p-4`}
    >
      <img className="p-1  duration-500 delay-150 rounded-xl" src={imageSrc} />
      {/* <h3 className="mt-5 font-bold text-xl">{title}</h3>
      <p className="mt-2 font-semibold text-gray-700 text-base">{description}</p> */}
    </div>
  );
};

export default ProjectStyle1;