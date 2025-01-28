import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/Footer";

const Home = () => {
  const slideImages = [
    {
      url: "/mainbanner1 (1).jpg",
      title: "Our Products",
      description: "The first product of XYZ company",
      seeProduct: <a href="#">See Product</a>,
    },
    {
      url: "/mainbanner2.jpg",
      title: "Our Lanpo",
      description: "The second product",
      seeProduct: <a href="#">See Product</a>,
    },
    {
      url: "/mainbanner1.jpg",
      title: "Our Third Product",
      description: "The Hero product",
      seeProduct: <a href="#">See Product</a>,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="">
      <div className="relative flex justify-center items-center w-full">
        <div className="absolute flex flex-col ml-[60%] md:ml-[40%] lg:ml-[20%] lg:top-12 top-0 text-start transform -translate-x-1/2 translate-y-1/2 z-50">
          <h1 className="font-bold text-3xl text-black mb-4 text-center">
            {slideImages[currentIndex].title}
          </h1>
          <p className="text-black text-center">
            {slideImages[currentIndex].description}
          </p>
          <button className="bg-red-400 mt-2 flex mx-auto p-2 rounded-full">
            {slideImages[currentIndex].seeProduct}
          </button>
        </div>

        <SimpleImageSlider
          images={slideImages.map((slide) => ({
            url: slide.url,
          }))}
          width="100%"
          height={400}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={3}
          style={{ zIndex: 1 }}
          onStartSlide={(index) => setCurrentIndex(index - 1)}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-8 lg:mt-12 text-center mb-12 ">
        <h1 className="text-red-600 text-2xl font-bold">
          Good Life Good Product
        </h1>
        <p className="text-xl lg:text-sm mt-2 text-[#666666]">
          We believe that the value of life must not be only living in your
          zone..
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
