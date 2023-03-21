import { RingSpinner } from 'react-spinners-kit';
import preloaderStyle from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={preloaderStyle.preloader}>
      <div className={preloaderStyle.container}>
        <span className={preloaderStyle.round}>
          {/* <RingSpinner size={100} color="#3333ff" /> */}
        </span>
      </div>
    </div>
  );
};

export default Preloader;
