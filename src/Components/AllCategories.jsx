import React, { use } from "react";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const AllCategories = () => {
  const categoriesData = use(categoriesPromise);
  return (
    <div>
      <h2 className="text-lg font-bold">
        All Categories ({categoriesData.length})
      </h2>
    </div>
  );
};

export default AllCategories;
