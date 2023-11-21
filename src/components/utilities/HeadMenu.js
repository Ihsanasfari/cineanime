import Link from "next/link";
const HeadMenu = ({ title }) => {
  return (
    <div className="flex items-center justify-between text-white ">
      <h2 className="text-4xl  font-semibold py-8">{title}</h2>
    </div>
  );
};

export default HeadMenu;
