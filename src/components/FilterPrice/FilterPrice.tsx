import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState } from 'react';
import './MultiRangeSlider.scss';

const FilterPrice = () => {
  const [rangeValue, setRangeValue] = useState(10000);
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  return (
    <div className="sidebar__brand sidebar__filter-container">
      <div className="sidebar__header-container">
        <h4 className="sidebar__header sidebar__brand-header">ЦЕНА</h4>
        <button className="sidebar__button sidebar__button-dropdown"></button>
      </div>

      <div className="sidebar__form-wrapper sidebar__price-wrapper">
        <p className="sidebar__price sidebar__price-from">от: {minValue} ₸</p>
        <p className="sidebar__price sidebar__price-to">до: {maxValue} ₸</p>
      </div>

      <div className="multi-range-slider-container">
        <MultiRangeSlider
          barInnerColor="grey"
          stepOnly={true}
          ruler={false}
          min={10000}
          max={100000}
          step={1000}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e: ChangeResult) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
        ></MultiRangeSlider>
      </div>
    </div>
  );
};

export default FilterPrice;
