import { ReactElement, ReactNode } from 'react';
import { TIngredientItem, TOrder } from '../types';

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

interface IOrderFeeds {
  orders: IOrderMessage[];
  status?: string;
  total: number;
  totalToday: number;
}

interface IOrderFeedsContainer
  extends Omit<IOrderFeeds, 'total' | 'totalToday'> {
  ingredients: TIngredientItem[];
  profile?: boolean;
}

interface IImageIcon {
  image: string;
  alt: string;
  number?: number;
}

interface IIngredientDetails {
  background?: boolean;
}

interface IOrderFeedsCard {
  order: IOrderMessage;
  ingredients: TIngredientItem[];
}

interface IOrderFeedsInfoItem {
  ingredient?: TIngredientItem;
  count: number;
}

interface IUseForm {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
  enable?: boolean;
  message?: string;
}

interface IFetchWithRefresh {
  success: boolean;
  refreshToken: string;
  accessToken: string;
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
  IOrderFeeds,
  IOrderFeedsContainer,
  IImageIcon,
  IIngredientDetails,
  IOrderFeedsCard,
  IOrderFeedsInfoItem,
  IUseForm,
  IFetchWithRefresh,
};
