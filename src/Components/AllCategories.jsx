import React, { Suspense, use } from "react";
import { Link } from "react-router";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const AllCategories = () => {
  const categoriesData = use(categoriesPromise);
  return (
    <div>
      <h2 className="text-lg font-bold">
        All Categories ({categoriesData.length})
        <div className="flex flex-col gap-2 mt-5">
          {categoriesData.map((data) => (
            <Suspense fallback={<span>Loading...</span>} key={data.id}>
              <Link
                
                to={`category/${data.id}`}
                className="btn btn-secondary/30"
              >
                {data.name}
              </Link>
            </Suspense>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default AllCategories;
