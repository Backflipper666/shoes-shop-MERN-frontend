import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { Shoe } from '../../interfaces/shoe';
interface ShoesItemProps {
  shoe: Shoe;
}
const ShoesItem: React.FC = () => {
  const { id } = useParams();
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const dispatch = useDispatch();
  console.log("well isn't my id ", id);

  return <div>Shoes item sfc yo!</div>;
};

export default ShoesItem;
