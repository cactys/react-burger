import { Link } from 'react-router-dom';
import formFooterStyle from './FormFooter.module.css';
import PropTypes from 'prop-types';

const FormFooter = ({ text, linkText, path }) => {
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

FormFooter.propTypes = {
  text: PropTypes.string,
  linkText: PropTypes.string,
  path: PropTypes.string,
};

export default FormFooter;
