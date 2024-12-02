import React from "react";
import "./SearchBox.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label className="search-label">
        Find contact by name
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={handleSearch}
        ></input>
      </label>
    </>
  );
}
