import {
  ConstructorElement,
  DragIcon,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import constructorContainerStyle from './ConstructorContainer.module.css';
import { dataPropTypes, SORT_BURGER_INGREDIENT } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { useDrag, useDrop } from '../../../node_modules/react-dnd/dist/index';
import { deleteBurgerIngredient } from '../../services/action/BurgerConstructor';
import { Reorder } from 'framer-motion';

const ConstructorContainer = ({ ingredient }) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.constructorIngredient);
  const ingredientRef = useRef(null);

  const moveIngredient = (item) => {
    const ingredientIndex = ingredients.findIndex(
      (element) => element.uuid === ingredient.uuid
    );
    const newIngredientPosition = ingredients.filter(
      (element) => element.uuid !== item.uuid
    );

    newIngredientPosition.splice(ingredientIndex, 0, item);
    dispatch({
      type: SORT_BURGER_INGREDIENT,
      payload: newIngredientPosition,
    });
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredients',
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: 'ingredients',
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() };
    },
    hover(item, monitor) {
      if (!ingredientRef.current) return;

      const dragIndex = ingredients.findIndex(
        (element) => element.uuid === item.uuid
      );
      const hoverIndex = ingredients.findIndex(
        (element) => element.uuid === ingredient.uuid
      );

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ingredientRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveIngredient(item);
      item.index = hoverIndex;
    },
  });

  const deleteIngredient = (uuid) => {
    dispatch(deleteBurgerIngredient(uuid));
  };

  dragRef(dropRef(ingredientRef));

  const cn = isDrag
    ? constructorContainerStyle.opacity
    : constructorContainerStyle.listElement;

  return (
    <Reorder.Item
      value={ingredient}
      id={ingredient}
      transition={{ type: 'spring' }}
      className={cn}
      ref={ingredientRef}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => deleteIngredient(ingredient.uuid)}
      />
    </Reorder.Item>
  );
};

export default ConstructorContainer;

ConstructorContainer.propTypes = {
  ingredient: dataPropTypes.isRequired,
};
