import Image from "next/image";
import Link from "next/link";
const MovieList = ({ api }) => {
  return (
    <div className="grid grid-cols-7 justify-items-center gap-x-1 gap-y-4 text-white ">
      {api.data.map((data) => {
        return (
          <Link
            key={data?.mal_id}
            href={`/movie/${data?.mal_id}`}
            className="flex flex-col gap-2 w-[200px]"
          >
            <div className="relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500">
              <Image
                alt=".."
                width={400}
                height={400}
                src={data?.images?.webp?.image_url}
                className="relative object-cover h-[286px] bg-white"
              />
              <div className="absolute rounded-full  bg-gradient-to-b from-20% from-primary1 to-primary2 to-90% translate-x-44 -top-4 p-[6px] text-sm ">
                {data?.score}
              </div>
            </div>

            <div className="max-w-full  text-sm hover:underline">
              {data?.title}&nbsp; ({data?.year})
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
