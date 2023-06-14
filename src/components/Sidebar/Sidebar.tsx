import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import './Sidebar.scss';
import './MultiRangeSlider.scss';

const Sidebar = () => {
  const [rangeValue, setRangeValue] = useState(10000);
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__filter sidebar__filter-container">
          <div className="sidebar__header-container">
            <h4 className="sidebar__header">Фильтр</h4>
            <button className="sidebar__button">свернуть</button>
          </div>
          <div className="sidebar__form-wrapper">
            <input
              type="checkbox"
              name="discount"
              id="discountId"
              className="sidebar__form sidebar__checkbox"
            />
            <label
              htmlFor="discountId"
              className="sidebar__form sidebar__label"
            >
              Скидки
            </label>{' '}
            <span className="sidebar__number">22</span>
          </div>
          <div className="sidebar__form-wrapper">
            <input
              type="checkbox"
              name="newCollection"
              id="newCollectionId"
              className="sidebar__form sidebar__checkbox"
            />
            <label
              htmlFor="newCollectionId"
              className="sidebar__form sidebar__label"
            >
              Новая коллекция
            </label>
            <span className="sidebar__number">22</span>
          </div>
        </div>
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
            />
            <label htmlFor="pumaId" className="sidebar__form sidebar__label">
              Puma
            </label>
            <span className="sidebar__number">22</span>
          </div>
          <div className="sidebar__form-wrapper">
            <input
              type="checkbox"
              name="newBalance"
              id="newBalanceId"
              className="sidebar__form sidebar__checkbox"
            />
            <label
              htmlFor="newBalanceId"
              className="sidebar__form sidebar__label"
            >
              New Balance
            </label>
            <span className="sidebar__number">12</span>
          </div>
          <div className="sidebar__form-wrapper">
            <input
              type="checkbox"
              name="fila"
              id="filaId"
              className="sidebar__form sidebar__checkbox"
            />
            <label htmlFor="filaId" className="sidebar__form sidebar__label">
              FILA
            </label>
            <span className="sidebar__number">20</span>
          </div>
          <button className="sidebar__show-more-button">Показать ещё</button>
        </div>
        <div className="sidebar__brand sidebar__filter-container">
          <div className="sidebar__header-container">
            <h4 className="sidebar__header sidebar__brand-header">ЦЕНА</h4>
            <button className="sidebar__button sidebar__button-dropdown"></button>
          </div>

          <div className="sidebar__form-wrapper sidebar__price-wrapper">
            <p className="sidebar__price sidebar__price-from">
              от: {minValue} ₸
            </p>
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
        </div>{' '}
        <div className="sidebar__brand sidebar__filter-container">
          <div className="sidebar__header-container">
            <h4 className="sidebar__header sidebar__brand-header sidebar__size-header">
              РАЗМЕР
            </h4>
            <button className="sidebar__button sidebar__button-dropdown"></button>
          </div>

          <div className="sidebar__form-wrapper sidebar__price-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>
                    <button>35</button>
                  </td>
                  <td>
                    <button>35.5</button>
                  </td>
                  <td>
                    <button>36</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>36.5</button>
                  </td>
                  <td>
                    <button>37</button>
                  </td>
                  <td>
                    <button>37.5</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>38</button>
                  </td>
                  <td>
                    <button>38.5</button>
                  </td>
                  <td>
                    <button>39</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>39.5</button>
                  </td>
                  <td>
                    <button>40</button>
                  </td>
                  <td>
                    <button>40.5</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>41</button>
                  </td>
                  <td>
                    <button>41.5</button>
                  </td>
                  <td>
                    <button>42</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>42.5</button>
                  </td>
                  <td>
                    <button>43</button>
                  </td>
                  <td>
                    <button>43.5</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>44</button>
                  </td>
                  <td>
                    <button>44.5</button>
                  </td>
                  <td>
                    <button>45</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>45.5</button>
                  </td>
                  <td>
                    <button>46</button>
                  </td>
                  <td>
                    <button>46.5</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>47</button>
                  </td>
                  <td>
                    <button>47.5</button>
                  </td>
                  <td>
                    <button>48</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
