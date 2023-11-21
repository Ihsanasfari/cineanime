"use client";
import MovieList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}&page=${page}&limit=21`
    );
    const data = await response.json();
    setSearchAnime(data);
  };
  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="bg-primary3 px-32 py-12">
      <Header title={`Searched for ${decodedKeyword}`} />
      <MovieList api={searchAnime} />
      <Pagination
        page={page}
        lastPage={searchAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};
export default Page;
