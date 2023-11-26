import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { getAnimeResponse } from "@/app/libs/api-libs";
export default function HomeCarousel() {
  const fetchData = async () => {
    const animeData = await get;
  };
  return (
    <div className="max-w-[1400px] h-[600px] m-auto  w-full relative group">
      <div className="w-full h-full bg-auto bg-center duration-500"></div>

      <button className="hidden group-hover:block transition ease-in-out duration-500 absolute top-[50%] -translate-x-0 left-5 px-1 py-2 border rounded-md text-white">
        <BsChevronCompactLeft size={30} />
      </button>
      <button className="hidden group-hover:block transition ease-in-out duration-500 absolute top-[50%] -translate-x-0 right-5 px-1 py-2 border rounded-md text-white">
        <BsChevronCompactRight size={30} />
      </button>
    </div>
  );
}
