import Link from "next/link";
const Header = ({ title, linkHref }) => {
  return (
    <div className="flex items-center justify-between text-white ">
      <h2 className="text-4xl  font-semibold py-8">{title}</h2>
      {linkHref ? (
        <Link
          className="rounded-md py-1 px-2 transition bg-white bg-opacity-5 ease-in-out duration-700 hover:bg-opacity-90 hover:bg-primary1"
          href={linkHref}
        >
          Lihat Semua
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
