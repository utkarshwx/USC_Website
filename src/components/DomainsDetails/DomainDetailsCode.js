


const TechDomainDetails = ({ image, name, description, buttonLink }) => {
    return (
       
      <div className="w-full rounded-xl  items-center flex flex-wrap my-5 py-5  justify-center bg-[#0000009a] xl:px-20 lg:px-12">
        <div className="md:w-1/3 w-full p-2 py-5  ">
          <img src={image} alt="" />
        </div>
        <div className="md:w-2/3 w-full p-5">
          <div className="text-4xl py-4 font-bold text-center text-orange-500">{name}</div>
          <div className="text-sm">{description}</div>
          <div><a target="_blank" href={buttonLink}><button className="px-16 p-4 my-5 mt-10 text-lg rounded-xl bg-orange-400 text-nowrap hover:bg-orange-500 hover:shadow-md duration-300">More Info</button></a></div>
        </div>
      </div>

    );
  };
  
  export default TechDomainDetails;
  
