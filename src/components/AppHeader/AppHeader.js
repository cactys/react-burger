import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import React from 'react';
import headerStyle from './AppHeader.module.css';

export const AppHeader = () => {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.container}>
        <ul className={headerStyle.navigate}>
          <li className='pl-5 pr-5 pb-4 pt-4'>
            <a className={headerStyle.link} href='/'>
              <BurgerIcon type='primary' />
              <p className='text text_type_main-default'>Конструктор</p>
            </a>
          </li>
          <li className='pl-5 pr-5 pb-4 pt-4'>
            <a className={headerStyle.link} href='/'>
              <ListIcon type='secondary' />
              <p className='text text_type_main-default text_color_inactive'>
                Лента заказов
              </p>
            </a>
          </li>
        </ul>
        <Logo />
        <div className={headerStyle.profile}>
          <a className={`${headerStyle.link} pl-5 pr-5 pb-4 pt-4`} href='/'>
            <ProfileIcon type='secondary' />
            <p className='text text_type_main-default text_color_inactive'>
              Личный кабинет
            </p>
          </a>
        </div>
      </nav>
    </header>
  );
};
