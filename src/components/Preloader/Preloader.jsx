import preloaderStyle from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={preloaderStyle.preloader}>
      <div className={preloaderStyle.container}>
        <span className={preloaderStyle.loader} />
      </div>
    </div>
  );
};

export default Preloader;
