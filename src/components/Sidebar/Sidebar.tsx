import './Sidebar.scss';
//components
import FilterMain from '../FilterMain/FilterMain';
import FilterBrands from '../FilterBrands/FilterBrands';
import FilterPrice from '../FilterPrice/FilterPrice';
import FilterSize from '../FilterSize/FilterSize';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <FilterMain />
        <FilterBrands />
        <FilterPrice />
        <FilterSize />
      </div>
    </div>
  );
};

export default Sidebar;
