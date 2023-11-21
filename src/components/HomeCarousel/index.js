"use client";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { resolve } from "styled-jsx/css";

const getData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?limit=5`
  );
  const data = await response.json();

  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export default function HomeCarousel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    if (currentIndex === 0) {
      const newIndex = 4;
      setCurrentIndex(newIndex);
    } else {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };
  const nextSlide = () => {
    if (currentIndex === 4) {
      const newIndex = 0;
      setCurrentIndex(newIndex);
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="max-w-[1400px] h-[780px] m-auto  w-full relative group">
      <div
        className="w-full h-full bg-cover bg-center duration-500"
        style={{
          backgroundImage: `url(${data?.data[currentIndex].images?.webp?.image_url})`
        }}
      ></div>

      <button
        onClick={prevSlide}
        className="hidden group-hover:block transition ease-in-out duration-500 absolute top-[50%] -translate-x-0 left-5 px-1 py-2 border rounded-md text-white"
      >
        <BsChevronCompactLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden group-hover:block transition ease-in-out duration-500 absolute top-[50%] -translate-x-0 right-5 px-1 py-2 border rounded-md text-white"
      >
        <BsChevronCompactRight size={30} />
      </button>
    </div>
  );
}
