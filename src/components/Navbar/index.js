import InputSearch from "./InputSearch";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 bg-primary3  px-32 text-white sticky top-0 z-10">
      <Link className="text-2xl font-bold" href="/">
        CineAnime
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
