//FilterBrands.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ChangeEvent } from 'react';
import {
  setIsNikeChecked,
  setIsPumaChecked,
  setIsAdidasChecked,
  setIsFilaChecked,
} from '../../store/slices';
import { countBrands } from '../../utils/utils';

const FilterBrands = () => {
  const allShoes = useSelector((state: RootState) => state.shoes.list);

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

  const dispatch = useDispatch();

  const handlePumaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsPumaChecked(checked));
  };

  const handleNikeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsNikeChecked(checked));
  };

  const handleAdidasChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsAdidasChecked(checked));
  };

  const handleFilaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsFilaChecked(checked));
  };

  return (
    <div className="sidebar__brand sidebar__filter-container">
      <div className="sidebar__header-container">
        <h4 className="sidebar__header sidebar__brand-header">Бренд</h4>
        <button className="sidebar__button sidebar__button-dropdown"></button>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="adidas"
          id="adidasId"
          className="sidebar__form sidebar__checkbox"
          checked={isAdidasChecked}
          onChange={handleAdidasChange}
        />
        <label htmlFor="adidasId" className="sidebar__form sidebar__label">
          Adidas
        </label>
        <span className="sidebar__number">
          {countBrands(allShoes, 'Adidas')}
        </span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="nike"
          id="nikeId"
          className="sidebar__form sidebar__checkbox"
          checked={isNikeChecked}
          onChange={handleNikeChange}
        />
        <label htmlFor="nikeId" className="sidebar__form sidebar__label">
          Nike
        </label>
        <span className="sidebar__number">{countBrands(allShoes, 'Nike')}</span>
      </div>

      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="puma"
          id="pumaId"
          className="sidebar__form sidebar__checkbox"
          checked={isPumaChecked}
          onChange={handlePumaChange}
        />
        <label htmlFor="pumaId" className="sidebar__form sidebar__label">
          Puma
        </label>
        <span className="sidebar__number">{countBrands(allShoes, 'Puma')}</span>
      </div>

      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="fila"
          id="filaId"
          className="sidebar__form sidebar__checkbox"
          checked={isFilaChecked}
          onChange={handleFilaChange}
        />
        <label htmlFor="filaId" className="sidebar__form sidebar__label">
          FILA
        </label>
        <span className="sidebar__number">{countBrands(allShoes, 'FILA')}</span>
      </div>
      <button className="sidebar__show-more-button">Показать ещё</button>
    </div>
  );
};

export default FilterBrands;
