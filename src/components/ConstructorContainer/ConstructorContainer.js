import {
  ConstructorElement,
  DragIcon,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import constructorContainerStyle from './ConstructorContainer.module.css';
import {
  dataPropTypes,
} from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useDrag, useDrop } from '../../../node_modules/react-dnd/dist/index';
import { Reorder } from 'framer-motion';
import PropTypes from 'prop-types';
import { CONSTRUCTOR_DELETE, CONSTRUCTOR_REORDER } from '../../services/action/BurgerConstructor';

const ConstructorContainer = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const ingredientRef = useRef(null);

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
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ingredientRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
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

  const deleteIngredient = (index) => {
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
      id={ingredient}
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

ConstructorContainer.propTypes = {
  ingredient: dataPropTypes.isRequired,
  index: PropTypes.number.isRequired,
};
