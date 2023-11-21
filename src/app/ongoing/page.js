"use client";
import AnimeList from "@/components/AnimeList";
import HeadMenu from "@/components/utilities/HeadMenu";
import Pagination from "@/components/utilities/Pagination";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [ogAnime, setOgAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?page=${page}&limit=21`
    );
    const data = await response.json();
    setOgAnime(data);
  };
  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="px-32 py-12">
      <HeadMenu title="Seasons Now Anime" />
      <AnimeList api={ogAnime} />
      <Pagination
        page={page}
        lastPage={ogAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
