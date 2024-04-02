


const CreativeDomainDetails = ({ image, name, description, buttonLink }) => {
    return (
       
      <div className=" rounded-xl  items-center border-[1px] borer-white  my-5 py-5  justify-center bg-[#0000009a] xl:px-20 lg:px-12">
        <div className="h-1/2 p-2 py-5">
          <img src={image} alt="" />
        </div>
        <div className="h-1/2 p-5">
          <div className="text-3xl py-4 font-bold text-start text-slate-200">{name}</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>

    );
  };
  
  export default CreativeDomainDetails;