import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const animeById = await response.json();
  const data = animeById?.data;

  return (
    <div className="bg-white min-h-screen px-32">
      {data?.title}
      <Image
        className="w-[400px]"
        width={400}
        height={400}
        alt=".."
        src={data?.images.webp.image_url}
      />
    </div>
  );
};
export default Page;
