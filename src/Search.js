import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";

const DropDown = ({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  if (!toggle) {
    return null;
  }
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          onClick={() => onSortByChange("petName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Pet Name {sortBy === "petName" && <BiCheck />}
        </div>

        <div
          onClick={() => onSortByChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Owner Name {sortBy === "ownerName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("aptDate")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Date {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  sortBy,
  onOrderByChange,
  orderBy,
  onSortByChange,
}) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    //py-5 means padding top and bottom of 5px this is tailwind css property
    <div className="py-5 pl-8">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
          <BiSearch />
          <label htmlFor="query" className="sr-only"></label>
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          className="pl-9 peer block min-h-[auto] rounded-border ring-2 focus:ring-transparent bg-gray px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear  peer-focus:text-primary data-[te-input-state-active] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary w-[94.5%] sm:text-sm "
          placeholder="Search"
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
        />
        <div className="absolute inset-y-0 pr-8 right-0 flex items-center">
          <div>
            <button
              type="button"
              onClick={() => {
                setToggleSort(!toggleSort);
              }}
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset-2 flex items-center"
              id="option-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort by <BiCaretDown className="ml-2" />
            </button>
            <DropDown
              toggle={toggleSort}
              sortBy={sortBy}
              onSortByChange={(mySort) => onSortByChange(mySort)}
              orderBy={orderBy}
              onOrderByChange={(myOrder) => {
                onOrderByChange(myOrder);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
