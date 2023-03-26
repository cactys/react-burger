import { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { Reorder } from 'framer-motion';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_REORDER,
} from '../../services/action/BurgerConstructor';
import constructorContainerStyle from './ConstructorContainer.module.css';
import { IConstructorContainer } from '../../services/interfaces';

const ConstructorContainer: FC<IConstructorContainer> = ({ ingredient, index }) => {
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
    hover(item: any, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect: any = ingredientRef.current?.getBoundingClientRect() || 0;
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch({
        type: CONSTRUCTOR_REORDER,
        payload: {
          from: dragIndex,
          to: hoverIndex,
        },
      });

      item.index = hoverIndex;
    },
  });

  const deleteIngredient = (index: number) => {
    dispatch({
      type: CONSTRUCTOR_DELETE,
      payload: index,
    });
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

export default ConstructorContainer;
