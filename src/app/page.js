import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";

const Page = async () => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await respone.json();

  return (
    <>
      {/* Anime Paling Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
