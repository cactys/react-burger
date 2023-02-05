import React from 'react';
import appStyle from './App.module.css'
import { AppHeader } from '../AppHeader/AppHeader';
import { Main } from '../Main/Main';
import { data } from '../../utils/data'

function App() {
  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Main data={data} />
    </div>
  );
}

export default App;
