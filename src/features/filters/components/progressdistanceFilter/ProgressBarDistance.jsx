import "./ProgressBarDistance.css";
import { setMaxDistance } from "../../filterSlice";
import { useSelector, useDispatch } from "react-redux";

function ProgressBarDistance({ max = 100 }) { 
  const distance = useSelector((state) => state.filters.maxDistance) ?? 0 ; 
  const dispatch = useDispatch();

  const percentage = Math.min((distance / max) * 100, 100);
  return (
    <div className="distance-filter">
      <label className="distance-label">
        Distance maximale <span>{distance} km</span>
      </label>

      <input
        type="range"
        min="0"
        max={max}
        value={distance}
        onChange={(e) =>
          dispatch(setMaxDistance(Number(e.target.value)))
        }
        className="distance-range"
      />

      <div
        className="progress-wrapper"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={distance}
      >
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBarDistance;
