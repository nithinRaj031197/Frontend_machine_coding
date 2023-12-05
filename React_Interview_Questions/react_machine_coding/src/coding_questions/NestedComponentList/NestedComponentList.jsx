import React from "react";

const NestedComponentList = ({ list }) => {
  return (
    <div>
      {list?.map((listItem) => (
        <div key={listItem.id}>
          <h1>{listItem.name}</h1>
          {listItem.children && <NestedComponentList list={listItem.children} />}
        </div>
      ))}
    </div>
  );
};

export default NestedComponentList;
