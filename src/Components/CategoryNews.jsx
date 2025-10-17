import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const idNumber = parseInt(id);
  //data from router use loader func
  const newsData = useLoaderData();
  //useEffect by data filter category ways
  useEffect(() => {
    if (idNumber === 0) {
      setCategoryNews(newsData);
    } else if (idNumber === 1) {
      const dailyData = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(dailyData);
    } else {
      const filteredNews = newsData.filter(
        (news) => news.category_id === idNumber
      );
      setCategoryNews(filteredNews);
    }
  }, [newsData, idNumber]);
  return <div>category news {categoryNews.length}</div>;
};

export default CategoryNews;
