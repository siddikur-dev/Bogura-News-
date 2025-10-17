import React, { Suspense, use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const AllCategories = () => {
  const categoriesData = use(categoriesPromise);

  return (
    <div>
      <h2 className="text-lg font-bold">
        All Categories ({categoriesData.length})
        <div className="flex flex-col gap-2 mt-5">
          {categoriesData.map((data, i) => (
            <NavLink
              key={i}
              to={`category/${data.id}`}
              className={({ isActive }) =>
                `btn transition-colors ${
                  isActive
                    ? "btn-secondary text-white" // active color
                    : "btn-secondary/30 text-gray-700" // normal
                }`
              }
            >
              {data.name}
            </NavLink>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default AllCategories;
