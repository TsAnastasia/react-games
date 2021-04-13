import React from "react";
import { MemoryMaxPairCards } from "../../utils/constants";

const Setting = ({ onRestart, onChangePairCards, countPairCard }) => {
  const [countPairs, setCountState] = React.useState(countPairCard);

  const handleCountPairsChange = (event) => {
    onChangePairCards(event.target.value / 2);
  };

  React.useEffect(() => {
    setCountState(countPairCard);
  }, [countPairCard]);

  return (
    <div className="game__settings">
      <button type="button" className="setting__again" onClick={onRestart}>
        again
      </button>
      <div>
        <label>
          <span>{`${countPairCard * 2}`}</span>
          <input
            type="range"
            min="4"
            max={2 * MemoryMaxPairCards}
            step="2"
            value={2 * countPairs}
            onChange={handleCountPairsChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Setting;
