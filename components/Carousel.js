import React,{useState, useEffect} from "react";
// import Images from '@/components/Images';
import img1 from './images/img1.png'
const images = [
//    ' https://picsum.photos/200',
'./images/img1.png'
//     './images/img1.png',
//   './images/img2.png',
//   './images/img3.png',
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="relative">
        <div className="h-full">
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="w-full h-64 object-cover rounded-lg"
          />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
          >
            &#8594;
          </button>
        </div>
        {/* <div className="flex justify-center absolute self-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full  ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Carousel;
