import "./checkboxList.css";
import { useState } from "react";

export default function CheckBoxList() {
  const [leftList, setLeftList] = useState([
    { id: 1, val: 1, checked: false },
    { id: 2, val: 2, checked: false },
    { id: 3, val: 3, checked: false },
    { id: 4, val: 4, checked: false },
  ]);
  const [rightList, setRightList] = useState([]);

  const handleChecked = (event, item, direction) => {
    if (direction === "left") {
      setLeftList(
        leftList.map((prev) => {
          if (prev.id === item.id) {
            return { ...prev, checked: event.target.checked };
          } else {
            return prev;
          }
        })
      );
    } else {
      setRightList(
        rightList.map((prev) => {
          if (prev.id === item.id) {
            return { ...prev, checked: event.target.checked };
          } else {
            return prev;
          }
        })
      );
    }
  };

  const handleLeftClick = () => {
    const newList = rightList
      .map((rightItem) => {
        if (rightItem.checked) {
          return { ...rightItem, checked: !rightItem.checked };
        }
      })
      .filter((item) => item !== undefined);

    setLeftList([...leftList, ...newList].sort((a, b) => a.id - b.id));

    setRightList(rightList.filter((val) => !val.checked));
  };

  const handleRightClick = () => {
    const newList = leftList
      .map((item) => {
        if (item.checked) {
          return { ...item, checked: !item.checked };
        }
      })
      .filter((item) => item !== undefined);

    setRightList([...rightList, ...newList].sort((a, b) => a.id - b.id));
    setLeftList(leftList.filter((val) => !val.checked));
  };

  return (
    <div className="App">
      <List list={leftList} handleChecked={handleChecked} direction="left" />
      <ArrowButton handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      <List list={rightList} handleChecked={handleChecked} direction="right" />
    </div>
  );
}

function List({ list, handleChecked, direction }) {
  return (
    <div className="list_container">
      {list?.map(
        (elem, index) =>
          elem && (
            <label key={index}>
              <input type="checkbox" checked={elem?.checked} onChange={(e) => handleChecked(e, elem, direction)} />
              {elem?.val}
            </label>
          )
      )}
    </div>
  );
}

function ArrowButton({ handleLeftClick, handleRightClick }) {
  return (
    <div className="arrow_buttons">
      <button onClick={handleRightClick}>&gt;</button>
      <button onClick={handleLeftClick}>&lt;</button>
    </div>
  );
}
