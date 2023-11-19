import Header from "@/components/MovieList/Header";
import MovieList from "../components/MovieList";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=14`
  );
  const topAnime = await response.json();

  return (
    <div className="bg-primary3 px-32 py-12">
      <section>
        <Header title="Top Anime" linkHref="/populer" />
        <MovieList api={topAnime} />
      </section>
    </div>
  );
};
export default Page;
