//FilterGender.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ChangeEvent } from 'react';
import { setIsForMenChecked, setIsForWomenChecked } from '../../store/slices';
import { countShoesForMen, countShoesForWomen } from '../../utils/utils';

const FilterGender = () => {
  const allShoes = useSelector((state: RootState) => state.shoes.list);

  const isForMenChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isForMenChecked
  );

  const isForWomenChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isForWomenChecked
  );

  const dispatch = useDispatch();

  const handleForMenChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsForMenChecked(checked));
  };

  const handleForWomenChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsForWomenChecked(checked));
  };

  return (
    <div className="sidebar__filter sidebar__filter-container">
      <div className="sidebar__header-container">
        <h4 className="sidebar__header">Пол</h4>
        <button className="sidebar__button">свернуть</button>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="formen"
          id="formenId"
          className="sidebar__form sidebar__checkbox"
          checked={isForMenChecked}
          onChange={handleForMenChange}
        />
        <label htmlFor="formenId" className="sidebar__form sidebar__label">
          Мужчинам
        </label>
        <span className="sidebar__number">{countShoesForMen(allShoes)}</span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="forwomen"
          id="forwomenId"
          className="sidebar__form sidebar__checkbox"
          checked={isForWomenChecked}
          onChange={handleForWomenChange}
        />
        <label htmlFor="forwomenId" className="sidebar__form sidebar__label">
          Женщинам
        </label>
        <span className="sidebar__number">{countShoesForWomen(allShoes)}</span>
      </div>
    </div>
  );
};

export default FilterGender;
