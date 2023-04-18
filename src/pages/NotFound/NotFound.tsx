import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import notFoundStyle from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className={notFoundStyle.container}>
      <h2 className={`text text_type_digits-large ${notFoundStyle.code}`}>
        404
      </h2>
      <div className={`mt-5 mb-5 ${notFoundStyle.line}`} />
      <p className="text text_type_main-large pt-8 pb-4">Страница не найдена</p>
      <Button
        htmlType="button"
        type="secondary"
        size="large"
        onClick={handleBack}
      >
        &lArr; назад
      </Button>
    </main>
  );
};

export { NotFound };
