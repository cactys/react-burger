import PropTypes from 'prop-types';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import { data, dataPropTypes } from '../../utils/data';

const BurgerConstructor = () => {
  const bun = data.filter((i) => i.type === 'bun');
  const sauce = data.filter((i) => i.type === 'sauce');
  const main = data.filter((i) => i.type === 'main');

  return (
    <section className={burgerConstructorStyle.container}>
      <div className={burgerConstructorStyle.constructorContainer}>
        <div className='pl-8'>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={`${bun[0].name} (верх)`}
            price={bun[0].price}
            thumbnail={bun[0].image}
          />
        </div>
        <ul className={burgerConstructorStyle.constructorList}>
          <li className={burgerConstructorStyle.listElement}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={sauce[1].name}
              price={sauce[1].price}
              thumbnail={sauce[1].image}
            />
          </li>
          <li className={burgerConstructorStyle.listElement}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={main[2].name}
              price={main[2].price}
              thumbnail={main[2].image}
            />
          </li>
          <li className={burgerConstructorStyle.listElement}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={main[3].name}
              price={main[3].price}
              thumbnail={main[3].image}
            />
          </li>
          <li className={burgerConstructorStyle.listElement}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={main[4].name}
              price={main[4].price}
              thumbnail={main[4].image}
            />
          </li>
          <li className={burgerConstructorStyle.listElement}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={main[4].name}
              price={main[4].price}
              thumbnail={main[4].image}
            />
          </li>
          <li className={burgerConstructorStyle.listElement}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={main[6].name}
              price={main[6].price}
              thumbnail={main[6].image}
            />
          </li>
        </ul>
        <div className='pl-8'>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={`${bun[0].name} (низ)`}
            price={bun[0].price}
            thumbnail={bun[0].image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyle.containerOrder}>
        <div className={burgerConstructorStyle.containerPrice}>
          <span className='mr-2 text text_type_digits-medium'>610</span>
          <div className={burgerConstructorStyle.icon}>
            <CurrencyIcon type='primary' />
          </div>
        </div>
        <Button htmlType='button' type='primary' size='large'>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;

BurgerConstructor.propType = {
  bun: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  sauce: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  main: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
