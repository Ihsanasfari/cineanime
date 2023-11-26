import InputSearch from "./InputSearch";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 bg-primary3  px-32 text-white sticky top-0 z-10">
      <div className="flex items-center  font-semibold gap-x-16">
        <Link className="text-2xl font-bold" href="/">
          CineAnimeList
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/popular"
            className="transition ease-in-out duration-500 hover:text-primary1"
          >
            Top Anime
          </Link>
          <Link
            href="/ongoing"
            className="transition ease-in-out duration-500 hover:text-primary1"
          >
            Seasons Now Anime
          </Link>
        </div>
      </div>
      <InputSearch />
    </div>
  );
};

export default Navbar;
