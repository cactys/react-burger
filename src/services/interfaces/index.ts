import { ReactNode } from 'react';
import { TIngredientItem } from '../types';

interface IApiProps {
  baseUrl: string;
  header?: HeadersInit;
}

interface IConstructorContainer {
  key: number;
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
  element: ReactNode;
}

interface IIngredientCard {
  ingredient: TIngredientItem;
  onIngredientClick(ingredient: TIngredientItem): TIngredientItem;
  count: number;
}

interface IIngredientGroup {
  data: TIngredientItem[];
  onIngredientClick(ingredient: TIngredientItem): TIngredientItem;
}

interface IModal {
  isOpen?: boolean;
  title?: string;
  onClose: () => void;
  children?: ReactNode;
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
};
