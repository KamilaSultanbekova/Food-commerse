import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPriceRange } from "../Slice/fruitSlice";
import { useNavigate } from "react-router-dom";

export default function PriceFilter() {
  const dispatch = useDispatch();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const navigate = useNavigate();

  const handleFilter = () => {
    dispatch(setPriceRange({ min: Number(min), max: Number(max) }));
  };

  const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <div>
      <div className="p-4 border border-gray-300 rounded-lg w-64">
        <h2 className="font-bold mb-2">Widget price filter</h2>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 w-20"
          />
          <span>-</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 w-20"
          />
        </div>

        <p className="mb-2">
          Price: ${min} — ${max}
        </p>

        <button
          onClick={handleFilter}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Filter
        </button>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">Product Categories</h1>
        <div className="flex items-center gap-3 mt-2">
          <input
            onChange={handleChange}
            value="/filterfruits"
            type="checkbox"
            name="Fruits & Vegetables"
          />
          <h1>Fruits & Vegetables</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Baby & Pregnancy" />
          <h1>Baby & Pregnancy</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input
            onChange={handleChange}
            value="/filterbeverages"
            type="checkbox"
            name="Beverages"
          />
          <h1>Beverages</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Meats & Seafood" />
          <h1>Meats & Seafood</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Biscuits & Snacks" />
          <h1>Biscuits & Snacks</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Breads & Bakery" />
          <h1>Breads & Bakery</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Frozen Foods" />
          <h1>Frozen Foods</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Grocery & Staples" />
          <h1>Grocery & Staples</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Healthcare" />
          <h1>Healthcare</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="Household Needs" />
          <h1>Household Needs</h1>
        </div>
      </div>
    </div>
  );
}
