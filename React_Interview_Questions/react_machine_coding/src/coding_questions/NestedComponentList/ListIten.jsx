import React from "react";
import { list } from "./lists";
import NestedComponentList from "./NestedComponentList";

const ListIten = () => {
  console.log(list);
  return (
    <div>
      <NestedComponentList list={list} />
    </div>
  );
};

export default ListIten;
