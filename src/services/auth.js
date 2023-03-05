import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const AuthContext = createContext(undefined);

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const { user } = useSelector((store) => store.user);
  return { user };
};

ProvideAuth.propTypes = {
  children: PropTypes.element.isRequired,
};
