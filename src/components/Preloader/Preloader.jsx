import PropTypes from 'prop-types';
import preloaderStyle from './Preloader.module.css';

const Preloader = ({ isOverflow }) => {
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

Preloader.propTypes = {
  isOverflow: PropTypes.bool,
};
