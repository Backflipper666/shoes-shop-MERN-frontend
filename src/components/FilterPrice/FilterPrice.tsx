//FilterPrice.tsx
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange, setShoesToBeRendered } from '../../store/slices';
import { RootState } from '../../store/store';
import { filterShoes } from '../../utils/utils';
import { debounce } from 'lodash';
import './MultiRangeSlider.scss';

const FilterPrice = () => {
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const priceRange = useSelector((state: RootState) => state.shoes.priceRange);
  const checkedFields = useSelector(
    (state: RootState) => state.shoes.checkedFields
  );

  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(100000);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredShoes = filterShoes(
      allShoes,
      checkedFields.isOnSaleChecked,
      checkedFields.isNewCollectionChecked,
      checkedFields.isNikeChecked,
      checkedFields.isPumaChecked,
      checkedFields.isAdidasChecked,
      checkedFields.isFilaChecked,
      priceRange
    );

    dispatch(setShoesToBeRendered(filteredShoes));
  }, [priceRange, allShoes, checkedFields, dispatch]);

  // Create a debounced version of the onInput handler
  const debouncedOnInput = useCallback(
    debounce((minValue: number, maxValue: number) => {
      dispatch(setPriceRange({ min: minValue, max: maxValue }));
    }, 500),
    [dispatch]
  );

  const handleSliderChange = useCallback(
    (e: ChangeResult) => {
      setMinValue(e.minValue);
      setMaxValue(e.maxValue);

      debouncedOnInput(e.minValue, e.maxValue);
    },
    [debouncedOnInput]
  );

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
          onInput={handleSliderChange}
        ></MultiRangeSlider>
      </div>
    </div>
  );
};

export default FilterPrice;
