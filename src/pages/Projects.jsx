import bg from "../assets/images/rocket-dynamic-color.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import background from "../assets/images/GEO_SPHERES_03.png";
export const MainProject = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Navbar />
      <div style={{
       backgroundImage: `url(${background})`, backgroundSize:'cover',
      }} id="project_area" className=" h-[64%] w-full bg-project bg-center bg-contain bg-no-repeat flex items-center justify-center">
        <div>
          <div className=" mr-16 h-fit w-fit flex flex-col gap-5 justify-center items-center">
            <div className=" flex items-center justify-center h-fit w-fit">
              <img src={bg} className="" />
              <h1 className=" text-white text-6xl">PROJECTS</h1>
            </div>
            <div className="">
              <div className=" ml-20 h-fit w-fit p-8 border rounded-full px-24 shadow-3xl border-[#FFA371] shadow-[#FFA371]">
                <div className=" text-white md:text-2xl text-xl">Coming Soon!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
