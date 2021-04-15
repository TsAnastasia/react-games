import React from "react";
import { MEMORY_MAX_PAIR_CARDS } from "../../utils/constants";

const Setting = ({ onRestart, onChangePairCards, countPairCard }) => {
  const [countPairs, setCountState] = React.useState(countPairCard);

  const handleCountPairsChange = (event) => {
    onChangePairCards(event.target.value / 2);
  };

  React.useEffect(() => {
    setCountState(countPairCard);
  }, [countPairCard]);

  return (
    <div className="game__settings game__settings_size_m">
      <button type="button" className="game__settings-item" onClick={onRestart}>
        again
      </button>
      <div className="game__settings-item">
        <label className="game__settings-range" title="count cards">
          <span className="game__settings-label">{`${countPairCard * 2}`}</span>
          <input
            type="range"
            className="game__settings-input-range"
            min="4"
            max={2 * MEMORY_MAX_PAIR_CARDS}
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
