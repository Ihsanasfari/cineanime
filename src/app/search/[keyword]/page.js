import MovieList from "@/components/MovieList";
import Header from "@/components/MovieList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <div className="bg-primary3 px-32 py-12">
      <section>
        <Header title={`Searched for ${keyword}`} />

        <MovieList api={searchAnime} />
      </section>
    </div>
  );
};
export default Page;
