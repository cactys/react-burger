import { FC, useMemo, ReactNode } from 'react';
import { TIngredientItem, TOrderFeeds } from '../../services/types';

import orderFeedsCardStyle from './OrderFeedsCard.module.css';
import { ImageIcon } from '../ImageIcon/ImageIcon';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderFeedsCard: FC<TOrderFeeds> = ({ order, ingredients }) => {
  // setLength(order.ingredients.length);

  // console.log(ingredients);

  // const [src, setSrc] = useState('');

  const currentDate = (currentDate: string) => {
    const date = new Date(currentDate);
    const month = date.getMonth();
    const currentMonth = new Date().getMonth();
    let weekDay = '';

    if (month !== currentMonth) return 'В этом году';

    const day = date.getDate();
    const currentDay = new Date().getDate();
    const difference = currentDay - day;

    if (difference === 0) weekDay = 'Сегодня';
    else if (difference === 1) weekDay = 'Вчера';
    else if (difference === 2) weekDay = '2 дня назад';
    else if (difference >= 3 && difference <= 7) weekDay = 'На этой неделе';
    else return 'В этом месяце';

    const hours = date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return `${weekDay}, ${hours}:${minutes}`;
  };

  const getImages = (ingredientIds: string[]) => {
    let currentImages: TIngredientItem[] = [];
    ingredientIds.map((id) => {
      currentImages = [
        ...currentImages,
        ...ingredients.filter((item) => item._id === id),
      ];
    });
    return currentImages;
  };

  const getImag = getImages(order.ingredients);

  const renderImage = getImag
    .map(
      (el: TIngredientItem, index: number): ReactNode => (
        <ImageIcon key={index} image={el.image_mobile} alt={el.name} />
      )
    )
    .reverse();

  const renderImageWithNumber = (): ReactNode => {
    const number = getImag.length - 5;
    const newArray = getImag.slice(0, 5);
    return (
      <>
        <ImageIcon
          number={number}
          image={getImag[5].image_mobile}
          alt={getImag[5].name}
        />
        {newArray
          .map((el: TIngredientItem, index: number) => (
            <ImageIcon key={index} image={el.image_mobile} alt={el.name} />
          ))
          .reverse()}
      </>
    );
  };

  const feedSum = useMemo(() => {
    return (
      (getImag)
    )
  }, []);

  return (
    <li className={orderFeedsCardStyle.container}>
      <div className={orderFeedsCardStyle.header}>
        <p className="text text_type_digits-default">&#35;{order.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {currentDate(order.createdAt)}
        </p>
      </div>
      <h2 className={`text text_type_main-medium ${orderFeedsCardStyle.title}`}>
        {order.name}
      </h2>
      <div className={orderFeedsCardStyle.infoOrder}>
        <ul className={orderFeedsCardStyle.imageList}>
          {order.ingredients.length <= 6
            ? renderImage
            : renderImageWithNumber()}
        </ul>
        <div className={orderFeedsCardStyle.priceOrder}>
          <p className="text text_type_digits-default">1568</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export { OrderFeedsCard };
