import appStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import { api } from '../../utils/api';
import { useEffect, useState } from 'react';

const App = () => {
  // const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   api
  //     .getIngredient()
  //     .then((res) => {
  //       if (res.success === true) {
  //         setIngredients(res.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // const bun = ingredients.filter((i) => i.type === 'bun');
  // const sauce = ingredients.filter((i) => i.type === 'sauce');
  // const main = ingredients.filter((i) => i.type === 'main');

  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Main />{' '}
      {/* ingredients={ingredients} bun={bun} sauce={sauce} main={main} /> */}
    </div>
  );
};

export default App;
