import imageIconStyle from './ImageIcon.module.css';

const ImageIcon = ({ image }: { image: string }) => {
  return (
    <div className={imageIconStyle.circle}>
      <div className={imageIconStyle.box}>
        <img src={image} alt="Ингредиент" height="52px" />
      </div>
    </div>
  );
};

export { ImageIcon };
