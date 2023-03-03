import appStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from '../../../node_modules/react-router-dom/dist/index';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/Profile/Profile';

const App = () => {
  return (
    <div className={appStyle.page}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
