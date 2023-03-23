import { FC } from 'react';
import { IPreloader } from '../../services/interfaces';
import preloaderStyle from './Preloader.module.css';

const Preloader: FC<IPreloader> = ({ isOverflow }) => {
  return (
    <>
      {isOverflow ? (
        <div className={preloaderStyle.preloader}>
          <div className={preloaderStyle.container}>
            <span className={preloaderStyle.loader} />
          </div>
        </div>
      ) : (
        <div className={preloaderStyle.container}>
          <span className={preloaderStyle.loader} />
        </div>
      )}
    </>
  );
};

export default Preloader;
