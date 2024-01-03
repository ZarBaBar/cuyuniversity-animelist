"use client";

import AnimeList from "@/components/AnimeList";
import React, { useEffect, useState } from "react";
const { default: HeaderMenu } = require("@/components/utilities/HeaderMenu");
const { default: Pagination } = require("@/components/utilities/Pagination");

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const respone = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await respone.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};
export default Page;
