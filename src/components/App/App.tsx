import React from 'react';
import appStyle from './App.module.css'
import { AppHeader } from '../AppHeader/AppHeader';

function App() {
  return (
    <div className={appStyle.page}>
      <AppHeader />
    </div>
  );
}

export default App;
