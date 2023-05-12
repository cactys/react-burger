import { ReactElement, ReactNode } from 'react';
import { TIngredientItem, TOrder, TOrderFeeds } from '../types';

interface IApiProps {
  baseUrl: string;
  header?: HeadersInit;
}

interface IConstructorContainer {
  key: string;
  ingredient: TIngredientItem;
  index: number;
}

interface IFormFooter {
  text: string;
  path: string;
  linkText: string;
}

interface IInformMessage {
  message: string | null;
}

interface IPreloader {
  isOverflow?: boolean;
}

interface IProtectedRoute {
  element: ReactElement;
}

interface IIngredientCard {
  ingredient: TIngredientItem;
  onIngredientClick: (ingredient: TIngredientItem) => void;
  count: number;
}

interface IIngredientGroup {
  data: TIngredientItem[];
  onIngredientClick: (ingredient: TIngredientItem) => void;
}

interface IModal {
  isOpen?: boolean;
  title?: string;
  onClose: () => void;
  children?: ReactNode;
}

interface IOrderMessage
  extends Omit<TOrder, 'ingredients' | 'owner' | 'price'> {
  ingredients: string[];
  status: string;
}

interface IOrderFeedsContainer
  extends Omit<TOrderFeeds, 'total' | 'totalToday'> {
  ingredients: TIngredientItem[];
  profile?: boolean;
}

export type {
  IApiProps,
  IFormFooter,
  IConstructorContainer,
  IInformMessage,
  IPreloader,
  IProtectedRoute,
  IIngredientCard,
  IIngredientGroup,
  IModal,
  IOrderMessage,
  IOrderFeedsContainer,
};
