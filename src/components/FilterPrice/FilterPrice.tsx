//FilterPrice.tsx
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState } from 'react';
import './MultiRangeSlider.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange, setShoesToBeRendered } from '../../store/slices';
import { RootState } from '../../store/store';
import { ChangeEvent, useEffect } from 'react';
import { filterShoes } from '../../utils/utils';

const FilterPrice = () => {
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const priceRange = useSelector((state: RootState) => state.shoes.priceRange);
  const isOnSaleChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isOnSaleChecked
  );
  const isNewCollectionChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isNewCollectionChecked
  );
  const isNikeChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isNikeChecked
  );
  const isPumaChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isPumaChecked
  );
  const isAdidasChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isAdidasChecked
  );
  const isFilaChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isFilaChecked
  );

  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(100000);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredShoes = filterShoes(
      allShoes,
      isOnSaleChecked,
      isNewCollectionChecked,
      isNikeChecked,
      isPumaChecked,
      isAdidasChecked,
      isFilaChecked,
      priceRange
    );

    dispatch(setShoesToBeRendered(filteredShoes));
  }, [
    priceRange,
    allShoes,
    dispatch,
    isOnSaleChecked,
    isNewCollectionChecked,
    isNikeChecked,
    isPumaChecked,
    isAdidasChecked,
    isFilaChecked,
  ]);

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

            dispatch(setPriceRange({ min: e.minValue, max: e.maxValue }));

            // Call the filterShoes function or dispatch an action to filter shoes based on price range
          }}
        ></MultiRangeSlider>
      </div>
    </div>
  );
};

export default FilterPrice;
