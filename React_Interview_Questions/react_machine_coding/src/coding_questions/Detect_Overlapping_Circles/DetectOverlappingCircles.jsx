import React, { useEffect, useState } from "react";
const RADIUS = 50;

const DetectOverlappingCircles = () => {
  const [circleCordinates, setCircleCordinates] = useState([]);

  useEffect(() => {
    document.addEventListener("click", drawCircle);

    () => document.removeEventListener("click", drawCircle);
  }, []);

  function drawCircle(event) {
    const { clientX, clientY } = event;

    const newCircleCordinates = {
      top: clientY - RADIUS,
      left: clientX - RADIUS,
      bottom: clientY + RADIUS,
      right: clientX + RADIUS,
      background: "green",
    };

    setCircleCordinates((prev) => {
      for (let i = 0; i < prev.length; i++) {
        const collides = detectCollision(newCircleCordinates, prev[i]);
        if (collides) {
          newCircleCordinates.background = "red";
          break;
        }
      }

      return [...prev, newCircleCordinates];
    });
  }

  function detectCollision(circle1, circle2) {
    const collides = !(
      circle1.top > circle2.bottom ||
      circle1.right < circle2.left ||
      circle1.bottom < circle2.top ||
      circle1.left > circle2.right
    );

    return collides;
  }

  return (
    <div>
      <h1>DetectOverlappingCircles</h1>
      {circleCordinates?.map((circle) => (
        <Circle key={circle.top + circle.left + circle.bottom + circle.right} {...circle} />
      ))}
    </div>
  );
};

export default DetectOverlappingCircles;

function Circle({ top, left, background }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        background,
        borderRadius: "50%",
        width: 2 * RADIUS,
        height: 2 * RADIUS,
      }}
    ></div>
  );
}
