import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collections = () => {
  const { products } = useContext(ProductsContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  // Pagination
  const [page, setPage] = useState(1);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const pageSize = 8;
  const [totalPages, setTotalPages] = useState(
    Math.round(products.length / pageSize)
  );
  const pageNumberLimit = 5;

  const PaginatedNumbers = ({ totalPages, page }) => {
    return Array.from({ length: totalPages }, (num, index) => {
      if (index < maxPageNumberLimit && index >= minPageNumberLimit) {
        return (
          <button
            key={index + 1}
            onClick={() => setPage(index + 1)}
            className={`${
              page === index + 1
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-50"
            } border-gray-300 relative inline-flex items-center px-4 py-2 border rounded-lg text-sm font-medium`}
          >
            {index + 1}
          </button>
        );
      } else {
        return null;
      }
    });
  };

  const incrementPage = () => {
    setPage(page + 1);
    if (page + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const decrementPage = () => {
    setPage(page - 1);
    if ((page - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let pCOpy = products.slice();

    if (search) {
      pCOpy = pCOpy.filter((item) =>
        item.name.trim().toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    if (category.length > 0) {
      pCOpy = pCOpy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      pCOpy = pCOpy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(pCOpy.slice((page - 1) * pageSize, page * pageSize));
    setTotalPages(Math.round(pCOpy.length / pageSize));
  };

  const sortProducts = () => {
    let faCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(faCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(faCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  const onSelectDropdown = (type) => {
    setSortType(type);
    setDropDown(!dropDown);
  };

  useEffect(() => {
    setPage(1);
    setMinPageNumberLimit(0);
    setMaxPageNumberLimit(5);

    applyFilters();
  }, [category, subCategory, search]);

  useEffect(() => {
    setPage(1);
    setMinPageNumberLimit(0);
    setMaxPageNumberLimit(5);

    sortProducts();
  }, [sortType]);

  useEffect(() => {
    applyFilters();
  }, [page]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="Arrow"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        <div
          className={`border border-gray-300 rounded-md pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 rounded-md pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-5 lg:flex-row justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 lg:mx-3 rounded-full sm:w-full lg:w-[40%]">
            <input
              className="flex-1 outline-none bg-inherit text-sm"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img className="w-4" src={assets.search_icon} alt="Search" />
          </div>
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={() => setDropDown(!dropDown)}
                  className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Sort
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  dropDown ? "visible" : "invisible"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    onClick={() => onSelectDropdown("relavent")}
                    className={`block px-4 py-2 text-sm ${
                      sortType === "relavent"
                        ? "font-medium text-gray-900"
                        : "text-gray-500"
                    }`}
                    role="button"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Relavent
                  </a>
                  <a
                    href="#"
                    onClick={() => onSelectDropdown("low-high")}
                    className={`block px-4 py-2 text-sm ${
                      sortType === "low-high"
                        ? "font-medium text-gray-900"
                        : "text-gray-500"
                    }`}
                    role="button"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    Price: Low to High
                  </a>
                  <a
                    href="#"
                    onClick={() => onSelectDropdown("high-low")}
                    className={`block px-4 py-2 text-sm ${
                      sortType === "high-low"
                        ? "font-medium text-gray-900"
                        : "text-gray-500"
                    }`}
                    role="button"
                    tabIndex="-1"
                    id="menu-item-4"
                  >
                    Price: High to Low
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 justify-center mt-10 mb-5">
          <button
            disabled={page === 1}
            onClick={decrementPage}
            className="relative inline-flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </button>
          <PaginatedNumbers totalPages={totalPages} page={page} />
          <button
            disabled={page === totalPages}
            onClick={incrementPage}
            className="relative inline-flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
