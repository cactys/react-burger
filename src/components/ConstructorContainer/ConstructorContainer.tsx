import { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Reorder } from 'framer-motion';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  constructorDelete,
  constructorReorder,
} from '../../services/constants';
import { IConstructorContainer } from '../../services/interfaces';
import { useDispatch } from '../../services/hooks';

import constructorContainerStyle from './ConstructorContainer.module.css';

const ConstructorContainer: FC<IConstructorContainer> = ({
  ingredient,
  index,
}) => {
  const dispatch = useDispatch();
  const ingredientRef = useRef<HTMLElement>(null);

  const [{ isDrag }, dragRef] = useDrag({
    type: 'SORT_INGREDIENT',
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: ['SORT_INGREDIENT'],
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hover(item: any, monitor) {
      const dragIndex = item.index;
      const hoverIndex: number = index;

      if (dragIndex === hoverIndex) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hoverBoundingRect: any =
        ingredientRef.current?.getBoundingClientRect() || 0;
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch(
        constructorReorder({
          from: dragIndex,
          to: hoverIndex,
        })
      );

      item.index = hoverIndex;
    },
  });

  const deleteIngredient = (index: number) => {
    dispatch(constructorDelete(index));
  };

  dragRef(dropRef(ingredientRef));

  const cn = isDrag
    ? constructorContainerStyle.opacity
    : constructorContainerStyle.listElement;

return (
  <Reorder.Item
    value={ingredient}
    id={ingredient._id}
    transition={{ type: 'spring', duration: 0.8 }}
    className={cn}
    ref={ingredientRef}
    data-handler-id={handlerId}
  >
    <DragIcon type="primary" />
    <ConstructorElement
      text={ingredient.name}
      price={ingredient.price}
      thumbnail={ingredient.image}
      handleClose={() => deleteIngredient(index)}
    />
  </Reorder.Item>
);
};

export { ConstructorContainer };
