import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectHeading from '../components/projects/Projectheading';
import {galleryData} from '../data/gallery_data';
import ProjectItems1 from "../components/projects/Projectitems1";
import ProjectItems2 from "../components/projects/ProjectItems2";
export default function Gallery() {
  return (
    <div>
      <Navbar/>
      <ProjectHeading />
      <div className="h-full pb-20 w-full">
        {galleryData.map((gallery, index) => {
          return (
            <section key={index} className="md:mx-40 mx-4 pt-10">
              <h1 className=" border w-full font-semibold text-xl shadow-xl rounded-lg p-4 mb-8">
                {gallery.title}
              </h1>
              <ProjectItems1 photos={[gallery.photos[0], gallery.photos[1]]} />
              <ProjectItems2
                photos={[
                  gallery.photos[2],
                  gallery.photos[3],
                  gallery.photos[4],
                ]}
                index={index}
              />
              {/* <ProjectItems1 /> */}
            </section>
          );
        })}
      </div>
      <Footer/>
    </div>
  )
}
