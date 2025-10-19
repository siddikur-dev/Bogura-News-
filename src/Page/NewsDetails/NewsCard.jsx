import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, image_url, details, published_date, tags, rating } = news;

  return (
    <div>
      <h2>Bogura News</h2>
      <div className="max-w-4xl mx-auto bg-bg-base-100 shadow-md rounded-lg overflow-hidden">
        <img src={image_url} alt={title} className="w-full h-64 object-cover" />
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-color-secondary mb-4">
            {title}
          </h2>

          {/* Details */}
          <p className="text-color-secondary mb-4">{details}</p>
          <Link to={'/category/1'} className="mt-6 px-4 py-2 bg-primary  rounded transition">
            ← All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
