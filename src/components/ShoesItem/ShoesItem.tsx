//ShoesItem.tsx
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';
import './ShoesItem.scss';
import { Button, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Shoe, AllUsers, User } from '../../interfaces/shoe';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ShoesItem: React.FC = () => {
  const { id } = useParams();
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const shoe = allShoes.filter((shoe) => shoe._id.toString() === id)[0];
  const user = useSelector<RootState, string | User | null>(
    (state) => state.users.user
  );
  const navigate = useNavigate();
  const shoeId = shoe._id.toString();

  const {
    addItem,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    inCart,
    getItem,
  } = useCart();

  const shoeInCart = getItem(shoeId) ? getItem(shoeId) : null;
  console.log('shuhe', shoeInCart);

  console.log('_____v', shoeInCart?.__v);

  const handleAddItem = () => {
    if (!user) {
      navigate('/login');
    } else {
      addItem({ ...shoe, id: shoeId });
    }
  };

  return (
    <div className="shoes-item">
      <div className="shoes-item__wrapper">
        <h1 className="shoes-item__title">{shoe.title}</h1>
        <div className="shoes-item__images">
          <img
            className="shoes-item__image"
            src={`data:${shoe.image.contentType};base64,${shoe.image.data}`}
            width="300px"
            alt={shoe.title}
          />
          <img
            className="shoes-item__image"
            src={`data:${shoe.image2?.contentType};base64,${shoe.image2?.data}`}
            width="300px"
            alt={shoe.title}
          />
          <img
            className="shoes-item__image"
            src={`data:${shoe.image3?.contentType};base64,${shoe.image3?.data}`}
            width="300px"
            alt={shoe.title}
          />
          <img
            className="shoes-item__image"
            src={`data:${shoe.image4?.contentType};base64,${shoe.image4?.data}`}
            width="300px"
            alt={shoe.title}
          />
        </div>
        <Space wrap>
          {inCart(shoeId) ? (
            <div className="shoes-item__in-cart-wrapper">
              <div className="shoes-item__quantity">
                <RemoveIcon
                  onClick={() =>
                    updateItemQuantity(
                      shoeId,
                      shoeInCart.quantity ? shoeInCart.quantity - 1 : 0
                    )
                  }
                />
                <span className="shoes-item__quantity-middle">
                  {shoeInCart?.quantity} шт.
                </span>{' '}
                <AddIcon
                  onClick={() =>
                    updateItemQuantity(
                      shoeId,
                      shoeInCart.quantity ? shoeInCart.quantity + 1 : 0
                    )
                  }
                />
              </div>
              <Button
                type="primary"
                onClick={() => addItem({ ...shoe, id: shoeId })}
                style={{ backgroundColor: 'green' }}
                className="shoes-item__in-cart"
              >
                Товар в корзине!
              </Button>
            </div>
          ) : (
            <Button type="primary" onClick={handleAddItem}>
              Добавить в корзину
            </Button>
          )}
          {inCart(shoeId) ? (
            <Button
              type="primary"
              danger
              onClick={() => removeItem(shoe._id.toString())}
            >
              Удалить из корзины
            </Button>
          ) : null}
        </Space>
        <p className="shoes-item__brand">{shoe.brand}</p>
        <p className="shoes-item__description">{shoe.description}</p>
        <p className="shoes-item__color">{shoe.color}</p>

        <p className="shoes-item__price">{shoe.price}</p>
        <p className="shoes-item__material">{shoe.material}</p>
        <p className="shoes-item__season">{shoe.season}</p>
        <p className="shoes-item__size">{shoe.size}</p>
      </div>
    </div>
  );
};

export default ShoesItem;
