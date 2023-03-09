import { InfoIcon } from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import informMessageStyle from './InformMessage.module.css';
import PropTypes from 'prop-types';

const InformMessage = ({ message }) => {
  return (
    <p className={`text text_type_main-default ${informMessageStyle.error}`}>
      {message}
      <InfoIcon type="error" />
    </p>
  );
};

InformMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default InformMessage;
