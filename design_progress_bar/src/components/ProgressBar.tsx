import { MAX, MIN } from "../utils";

type ProgressBarprops = {
  percent: number;
};
const ProgressBar = ({ percent }: ProgressBarprops) => {
  return (
    <>
      <div className="progress">
        <span style={{ color: percent > 49 ? "white" : "black" }}>{percent}%</span>
        <div
          style={{ transform: `scaleX(${percent / MAX})`, transformOrigin: "left" }}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={percent}
          role="progressbar"
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
