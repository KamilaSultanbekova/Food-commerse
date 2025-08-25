import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPriceRange } from "../Slice/beveragesSlice";
import { useNavigate } from "react-router-dom";

export default function PriceFilter() {
  const dispatch = useDispatch();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const navigate = useNavigate();

  const handleFilter = () => {
    if (min !== "" && max !== "") {
      dispatch(setPriceRange({ min: Number(min), max: Number(max) }));
    } else {
      alert("Please enter both minimum and maximum prices.");
    }
  };

  const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <div className="w-full lg:w-64">
      <div className="p-4 border border-gray-300 rounded-lg">
        <h2 className="font-bold mb-2">Widget price filter</h2>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="number"
            value={min}
            required
            min="0"
            max="1000"
            onChange={(e) => setMin(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 w-20 sm:w-24"
          />
          <span>-</span>
          <input
            type="number"
            value={max}
            required
            min="0"
            max="1000"
            onChange={(e) => setMax(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 w-20 sm:w-24"
          />
        </div>

        <p className="mb-2">
          Price: ${min || 0} — ${max || 0}
        </p>

        <button
          onClick={handleFilter}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 w-full"
        >
          Filter
        </button>
      </div>

      <div className="mt-5">
        <h1 className="text-lg font-semibold">Product Categories</h1>

        {[
          { name: "Fruits & Vegetables", path: "/filterfruits" },
          { name: "Baby & Pregnancy" },
          { name: "Beverages", path: "/filterbeverages" },
          { name: "Meats & Seafood" },
          { name: "Biscuits & Snacks" },
          { name: "Breads & Bakery" },
          { name: "Frozen Foods" },
          { name: "Grocery & Staples" },
          { name: "Healthcare" },
          { name: "Household Needs" },
        ].map((cat, idx) => (
          <div key={idx} className="flex items-center gap-3 mt-2">
            <input
              type="checkbox"
              name={cat.name}
              value={cat.path || ""}
              onChange={cat.path ? handleChange : undefined}
            />
            <h1>{cat.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
