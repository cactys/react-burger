import { FC } from 'react';
import { IImageIcon } from '../../services/interfaces';

import imageIconStyle from './ImageIcon.module.css';


const ImageIcon: FC<IImageIcon> = ({ image, alt, number }) => {
  return (
    <li className={imageIconStyle.imageContainer}>
      <picture className={imageIconStyle.imageBox}>
        <source srcSet={image} />
        {number ? (
          <>
            <div className={imageIconStyle.overflow}>
              <p className="text text_type_main-small">+{number}</p>
            </div>
            <img className={imageIconStyle.image} src={image} alt={alt} />
          </>
        ) : (
          <>
            <img className={imageIconStyle.image} src={image} alt={alt} />
          </>
        )}
      </picture>
    </li>
  );
};

export { ImageIcon };
