import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IFormFooter } from '../../services/interfaces';

import formFooterStyle from './FormFooter.module.css';

const FormFooter: FC<IFormFooter> = ({ text, linkText, path }) => {
  return (
    <div className={`mb-4 ${formFooterStyle.formFooter}`}>
      <p className="text text_type_main-default text_color_inactive">{text}</p>
      <Link
        to={path}
        className={`text text_type_main-default ${formFooterStyle.linkFormFooter}`}
      >
        {linkText}
      </Link>
    </div>
  );
};

export { FormFooter };
