import './Sidebar.scss';
//components
import FilterMain from '../FilterMain/FilterMain';
import FilterBrands from '../FilterBrands/FilterBrands';
import FilterPrice from '../FilterPrice/FilterPrice';
import FilterGender from '../FilterGender/FilterGender';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <FilterMain />
        <FilterGender />
        <FilterBrands />
        <FilterPrice />
      </div>
    </div>
  );
};

export default Sidebar;
