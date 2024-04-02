import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import BlogImg from '../assets/images/blog.webp';
export default function Blog() {
  return (
    <div>
      <Navbar/>
      <div className="wrapper w-11/12 mx-auto">
      <div className='h-full mt-[108px] flex flex-wrap md:justify-center items-center ml-60'>
          <p className='font-oswald text-2xl text-orange-600 lg:w-[400px] pt-10 pl-5 paraContainer'>
            Blogs
          </p>
        </div>
        {/* <div className='flex md:justify-center items-center mt-4'>
          <h1 className='text-3xl font-bold pl-5 pb-2'>
            Formation of the organizational
          </h1>
        </div> */}
        {/* <div className='flex md:justify-center items-center mt-2'>
          <h1 className='text-3xl font-bold pl-6 pb-2'>
            structure of the community
          </h1>
        </div> */}
      </div>
      {/* Contents of card */}
      <div className='min-h-[100vh] grid p-4 justify-items-center sm:justify-center md:justify-center'>
        <div className='py-8 max-w-sm '>
          <div className='h-[480.84px] w-[422.33px] rounded overflow-hidden group relative shadow-lg max-w-sm '>
            <img
              src={BlogImg}
              className='h-[370px] w-[422.33px] object-cover'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                <h1>Blog Title</h1>
              </div>
              <div className='text-gray-500'>
                <p>Blog Desccription</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' min-w-[1080px] overflow-x-clip'>
      </div>
      <Footer/>
    </div>
  )
}
