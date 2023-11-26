import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import HomeCarousel from "@/components/HomeCarousel";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=14`
  );
  const topAnime = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=14`
  );
  const ongoingAnime = await response2.json();

  return (
    <div className="px-32 py-12">
      <section>
        <HomeCarousel />
      </section>
      <section>
        <Header title="Top Anime" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Seasons Now Anime" linkHref="/ongoing" />
        <AnimeList api={ongoingAnime} />
      </section>
    </div>
  );
};
export default Page;
