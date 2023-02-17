import appStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';

const App = () => {

  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Main />
    </div>
  );
};

export default App;
