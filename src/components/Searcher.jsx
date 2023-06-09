import React, { useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/dataSlice";

const Searcher = () => {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();

  const Onchange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
    //console.log(search);
    dispatch(setSearch(search.toLowerCase()));
  };

  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: "3rem" }}
      onChange={(e) => Onchange(e)}
    />
  );
};

export default Searcher;
