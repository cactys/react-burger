import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import React from 'react';

export const AppHeader = () => {
  return (
    <div>
      <BurgerIcon type='primary' />
      <p className='text text_type_main-default'>Конструктор</p>
      <ListIcon type='secondary' />
      <p className='text text_type_main-default text_color_inactive'>
        Лента заказов
      </p>
      <Logo />
      <ProfileIcon type='secondary' />
      <p className='text text_type_main-default text_color_inactive'>Личный кабинет</p>
    </div>
  );
};
