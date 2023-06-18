//FilterBrands.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState, ChangeEvent, useEffect } from 'react';
import {
  shoesFilteredOnSale,
  shoesFilteredByNewCollection,
  setIsOnSaleChecked,
  setIsNewCollectionChecked,
  setShoesToBeRendered,
  setIsNikeChecked,
  setIsPumaChecked,
  setIsAdidasChecked,
  setIsFilaChecked,
} from '../../store/slices';

const FilterBrands = () => {
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

  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterShoes = () => {
      let filteredShoes = allShoes;

      if (isOnSaleChecked) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.onSale);
      }

      if (isNewCollectionChecked) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.newCollection);
      }

      if (
        isNikeChecked &&
        !isPumaChecked &&
        !isAdidasChecked &&
        !isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Nike');
      }

      if (
        !isNikeChecked &&
        isPumaChecked &&
        !isAdidasChecked &&
        !isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Puma');
      }

      if (
        !isNikeChecked &&
        !isPumaChecked &&
        isAdidasChecked &&
        !isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Adidas');
      }

      if (
        !isNikeChecked &&
        !isPumaChecked &&
        !isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'FILA');
      }

      if (
        isNikeChecked &&
        isPumaChecked &&
        !isAdidasChecked &&
        !isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Nike' || shoe.brand === 'Puma'
        );
      }

      if (
        isNikeChecked &&
        !isPumaChecked &&
        isAdidasChecked &&
        !isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Nike' || shoe.brand === 'Adidas'
        );
      }

      if (
        isNikeChecked &&
        !isPumaChecked &&
        !isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Nike' || shoe.brand === 'FILA'
        );
      }

      if (
        !isNikeChecked &&
        isPumaChecked &&
        isAdidasChecked &&
        !isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Puma' || shoe.brand === 'Adidas'
        );
      }

      if (
        !isNikeChecked &&
        isPumaChecked &&
        !isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Puma' || shoe.brand === 'FILA'
        );
      }

      if (
        !isNikeChecked &&
        !isPumaChecked &&
        isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Adidas' || shoe.brand === 'FILA'
        );
      }

      if (isNikeChecked && isPumaChecked && isAdidasChecked && !isFilaChecked) {
        filteredShoes = filteredShoes.filter(
          (shoe) =>
            shoe.brand === 'Nike' ||
            shoe.brand === 'Puma' ||
            shoe.brand === 'Adidas'
        );
      }

      if (isNikeChecked && isPumaChecked && !isAdidasChecked && isFilaChecked) {
        filteredShoes = filteredShoes.filter(
          (shoe) =>
            shoe.brand === 'Nike' ||
            shoe.brand === 'Puma' ||
            shoe.brand === 'FILA'
        );
      }

      if (isNikeChecked && !isPumaChecked && isAdidasChecked && isFilaChecked) {
        filteredShoes = filteredShoes.filter(
          (shoe) =>
            shoe.brand === 'Nike' ||
            shoe.brand === 'Adidas' ||
            shoe.brand === 'FILA'
        );
      }

      if (!isNikeChecked && isPumaChecked && isAdidasChecked && isFilaChecked) {
        filteredShoes = filteredShoes.filter(
          (shoe) =>
            shoe.brand === 'Puma' ||
            shoe.brand === 'Adidas' ||
            shoe.brand === 'FILA'
        );
      }

      if (
        isNikeChecked &&
        !isPumaChecked &&
        !isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Nike' || shoe.brand === 'FILA'
        );
      }

      if (
        !isNikeChecked &&
        isPumaChecked &&
        !isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Puma' || shoe.brand === 'FILA'
        );
      }

      if (
        !isNikeChecked &&
        !isPumaChecked &&
        isAdidasChecked &&
        isFilaChecked
      ) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Adidas' || shoe.brand === 'FILA'
        );
      }

      if (isNikeChecked && isPumaChecked && isAdidasChecked && isFilaChecked) {
        filteredShoes = filteredShoes.filter(
          (shoe) =>
            shoe.brand === 'Nike' ||
            shoe.brand === 'Puma' ||
            shoe.brand === 'Adidas' ||
            shoe.brand === 'FILA'
        );
      }

      dispatch(setShoesToBeRendered(filteredShoes));
    };

    filterShoes();
  }, [
    isOnSaleChecked,
    isNewCollectionChecked,
    isNikeChecked,
    isPumaChecked,
    isAdidasChecked,
    isFilaChecked,
    allShoes,
    dispatch,
  ]);

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
        <span className="sidebar__number">22</span>
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
        <span className="sidebar__number">22</span>
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
        <span className="sidebar__number">22</span>
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
        <span className="sidebar__number">20</span>
      </div>
      <button className="sidebar__show-more-button">Показать ещё</button>
    </div>
  );
};

export default FilterBrands;
