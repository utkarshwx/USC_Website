import CreativeDomainDataRenderer from '../components/DomainsDetails/CreativeDomainRender';
import Navbar from '../components/navbar';
import DomainDataRenderer from '../components/DomainsDetails/DomainDetailsRender';

export default function Domains() {
  return (
    <section className='bg-domain mx-auto'>
  
<Navbar/>
<div className='flex mx-auto justify-center font-bold my-10'><h1 className='md:text-6xl text-4xl text-orange-600 '>TECH</h1>
  <h1 className='md:text-6xl text-4xl text-white pl-5'> DOMAINS</h1>
  </div>  
    <div className='bg-domain-box  xl:mx-36 lg:mx-16 mx-4 my-20 xl:p-20 lg:p-8 rounded-2xl'>
<DomainDataRenderer/>

    </div>
    <div className='flex mx-auto justify-center font-bold mt-16  my-5'><h1 className='md:text-6xl text-4xl  text-white '>CREATIVE </h1>
  <h1 className='md:text-6xl  text-orange-600 text-4xl pl-5'> DOMAINS</h1>
  </div>  
    <div className='bg-domain-box xl:mx-36 lg:mx-16  mx-4 my-20 xl:p-20 lg:p-8 rounded-2xl'>
  <div className="md:flex md:flex-wrap">
    {[...Array(2)].map((_, index) => (
      <div key={index} className="md:w-1/2  p-4">
        <CreativeDomainDataRenderer />
      </div>
    ))}
  </div>
</div>


    </section>
  );
}
