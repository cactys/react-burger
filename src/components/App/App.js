import appStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import { api } from '../../utils/api';
import { useCallback, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { MODAL } from '../../utils/constant';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const [isIngredientDetailsOpen, setIsIngredientDetailsOpen] = useState(false);
  const [selectIngredient, setSelectIngredient] = useState(null);

  const isOpenPopup =
    isOrderDetailsOpen || isIngredientDetailsOpen || selectIngredient;

  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };

    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpenPopup]);

  useEffect(() => {
    api
      .getIngredient()
      .then((res) => {
        if (res.success === true) {
          setIngredients(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleIngredientClick = useCallback((selectIngredient) => {
    setIsIngredientDetailsOpen(true);
    setSelectIngredient(selectIngredient);
  });

  const handleOrderButtonClick = useCallback(() => {
    setIsOrderDetailsOpen(true);
  });

  const closeAllPopups = useCallback(() => {
    setIsOrderDetailsOpen(false);
    setIsIngredientDetailsOpen(false);
    setSelectIngredient(false);
  });

  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Main
        ingredients={ingredients}
        onIngredientClick={handleIngredientClick}
        onOrderButtonClick={handleOrderButtonClick}
      />
      <Modal isOpen={isOrderDetailsOpen} closePopup={closeAllPopups}>
        <OrderDetails orderDetails={MODAL.ORDER_DETAILS} />
      </Modal>
      <Modal
        title={MODAL.INGREDIENT_TITLE}
        isOpen={isIngredientDetailsOpen}
        closePopup={closeAllPopups}
      >
        <IngredientDetails
          ingredient={selectIngredient}
          ingredientDetails={MODAL.INGREDIENT_DETAILS}
        />
      </Modal>
    </div>
  );
};

export default App;
