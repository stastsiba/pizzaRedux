import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTypes, getSum } from '../redux/reducers/products';
import { getItems } from '../redux/reducers/products';
import { getSize } from '../redux/reducers/products';
import './card.scss';

export const Card = () => {
  const { card, filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let newCard =
    filter.category === 'All' ? card : card.filter((elem) => elem.category === filter.category);
  if (filter.rating === 'Price') {
    newCard = [...newCard].sort((x, y) => x.price - y.price);
  } else if (filter.rating === 'Alphabet') {
    newCard = [...newCard].sort((x, y) => x.title.localeCompare(y.title));
  } else if (filter.rating === 'Popularity') {
    newCard = [...newCard].sort((x, y) => x.rating - y.rating);
  }
  const addPizzas = (item) => {
    dispatch(
      getItems({
        id: item.id,
        img: item.imageUrl,
        title: item.title,
        price: item.price,
        size: filter.sizes,
        types: item.types,
        count: 1,
      }),
    );
    dispatch(getSum(item.price));
  };
  return (
    <section className="card">
      {newCard.map((item) => (
        <div key={item.id} className="card__contauner">
          <img className="card__image" src={item.imageUrl} alt="Pizza" />
          <h2 className="card__name">{item.title}</h2>
          <div className="card__pizza-setting-wrapper">
            <div className="card__sort-block">
              <div type="button" className="card__sort-thin">
                {item.types.map((elem) => (elem === 0 ? 'thin' : ''))}
              </div>
              <div
                onClick={() => dispatch(changeTypes(item.types))}
                className="card__sort-traditional">
                {item.types.map((elem) => (elem === 1 ? 'traditional' : ''))}
              </div>
            </div>
            <div className="card__width-block">
              {item.sizes.map((el, i) => (
                <div onClick={() => dispatch(getSize(el))} key={i} className="card__width-min">
                  {el}cm.
                </div>
              ))}
            </div>
          </div>
          <div className="card__bottom-block">
            <div className="card__bottom-price">{item.price} ₴</div>
            <div onClick={() => addPizzas(item)} className="card__bottom-button-block">
              <div className="card__bottom-button-plus">+</div>
              <div className="card__bottom-button-add">Add pizza </div>
              <div className="card__bottom-button-sum">0</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
