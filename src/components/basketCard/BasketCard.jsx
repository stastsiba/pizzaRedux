import { useSelector, useDispatch } from 'react-redux';
import { getEmptyBasket, getItems } from '../redux/reducers/products';
import { getSum } from '../redux/reducers/products';
import './basketCard.scss';

export const BasketCard = () => {
  const { basketItem } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const deleteItem = (id, price, count) => {
    dispatch(getEmptyBasket(basketItem.filter((elem) => elem.id !== id)));
    let amount = price * count;
    dispatch(getSum(amount));
  };

  const toggleCount = (item, countAction) => {
    dispatch(
      getItems({
        id: item.id,
        img: item.imageUrl,
        title: item.title,
        price: item.price,
        types: item.types,
        countAction,
      }),
    );
  };

  return (
    <section>
      <div className="basketCard__top-line"></div>
      {basketItem.map((i, idx) => (
        <div key={idx} className="basketCard__wrapper">
          <div className="basketCard__container-title">
            <img className="basketCard__image" src={i.img} alt="pizza" />
            <div className="basketCard__title-block">
              <div className="basketCard__title">{i.title}</div>
              <div className="basketCard__title-subtitle">
                Size: {i.size}
                <br />
                Thickness: {i.types}
              </div>
            </div>
          </div>
          <div className="basketCard__button-counter-block">
            <button onClick={() => toggleCount(i, 'remove')} className="basketCard__button-minus">
              -
            </button>
            <div className="basketCard__counter">{i.count}</div>
            <button onClick={() => toggleCount(i, 'add')} className="basketCard__button-plus">
              +
            </button>
          </div>
          <div className="basketCard__price">{i.price * i.count} ₴</div>
          <button
            onClick={() => deleteItem(i.id, i.price, i.count)}
            className="basketCard__button-delete-pizza">
            x
          </button>
        </div>
      ))}
    </section>
  );
};
