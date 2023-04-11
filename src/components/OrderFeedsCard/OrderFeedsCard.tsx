import { FC } from 'react';
import { IOrderMessage } from '../../services/interfaces';

const OrderFeedsCard = ({ order }: { order: IOrderMessage }) => {
  return <div>{order}</div>;
};

export { OrderFeedsCard };
