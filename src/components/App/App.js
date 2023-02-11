import appStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import { api } from '../../utils/api';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const [isIngredientDetailsOpen, setIsIngredientDetailsOpen] = useState(false);

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

  const closeAllPopups = () => {
    setIsOrderDetailsOpen(false);
    setIsIngredientDetailsOpen(false);
  };

  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Main ingredients={ingredients} />
      <Modal>
        <OrderDetails />
      </Modal>
    </div>
  );
};

export default App;
