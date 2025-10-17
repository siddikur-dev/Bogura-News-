import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, total_view, rating, tags } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card w-full bg-base-100 shadow-md rounded-xl border border-gray-100">
      {/* Author Info */}
      <div className="flex items-center gap-3 px-4 pt-4">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={author.img} alt="Author" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">{author.name}</h2>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
        <div className="ml-auto flex gap-3 text-gray-500 text-lg cursor-pointer">
            <CiBookmark />
            <IoShareSocialOutline />

        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Tags + Details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        <p>
          <span className="text-gray-500">
            {formattedDate} | Tag Cloud Tags:{" "}
          </span>
          {tags.map((tag, i) => (
            <span key={i} className="text-orange-600">
              {tag}
              {i < tags.length - 1 && ", "}
            </span>
          ))}
        </p>
        <p className="mt-2">
          {details.slice(0, 150)}...
          <span className="text-orange-600 font-semibold cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
