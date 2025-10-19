import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { format } from "date-fns";
import RightAside from "../../Components/RightAside";
import NewsCard from "./NewsCard";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const allNews = useLoaderData();
  useEffect(() => {
    const filterNews = allNews.find((news) => news.id === id);
    setNews(filterNews);
  }, []);
  return (
    <div>
      <header className="poppins text-center">
        {/* Title */}
        <h2 className="header-font font-bold text-6xl mt-3">The Bogura News</h2>
        <p className="text-gray-500 text-base font-bold py-3">
          Journalism Without Fear or Favour
        </p>
        <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
      </header>
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <main className="col-span-8 bg-bg-base-100 p-4 rounded">
            <NewsCard news={news}></NewsCard>
        </main>
        <aside className="col-span-4 bg-bg-base-200 p-4 rounded">
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;
