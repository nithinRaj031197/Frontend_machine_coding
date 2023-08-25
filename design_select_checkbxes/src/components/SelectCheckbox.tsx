import React, { useState } from "react";

const SelectCheckbox = () => {
  const items = [
    { id: "1", task: "Wake up" },
    { id: "2", task: "Brush and take Bath" },
    { id: "3", task: "Have Breakfast" },
    { id: "4", task: "Work" },
  ];
  const [isDeleteButton, setisDeleteButton] = useState(false);

  const [todos, setTodos] = useState<{ id: string; task: string }[]>(items);

  const [checkedItems, setCheckedItems] = useState<Array<string>>([]);

  const handleCheckbox = (index: string) => {
    setisDeleteButton(true);
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((item: string) => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const handleDelete = () => {
    setTodos(todos.filter((item, i) => !checkedItems.includes(item.id)));
    setisDeleteButton(false);
  };

  const handleSelectAll = () => {
    setCheckedItems(items.map((item) => item.id));
    setisDeleteButton(true);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div onClick={handleSelectAll}>Select All</div>
        <div>
          {isDeleteButton && checkedItems.length !== 0 ? (
            <button onClick={() => handleDelete()}>x</button>
          ) : (
            <></>
          )}
        </div>
      </div>
      {todos?.map((todo, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              name="todo"
              id="todo"
              onChange={() => handleCheckbox(todo.id)}
              checked={checkedItems.includes(todo.id)}
            />
            <label>{todo.task}</label>
            {/* {checkedItems.includes(todo.id) ? (
              <button onClick={() => handleDelete()}>X</button>
            ) : (
              <></>
            )} */}
          </div>
        );
      })}
    </div>
  );
};

export default SelectCheckbox;
