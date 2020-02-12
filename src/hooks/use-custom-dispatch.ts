import { useDispatch } from 'react-redux';

// TODO: types
const useCustomDispatch = () => {
  const dispatch = useDispatch();

  return (type: string, payload = {}) => dispatch({ type, payload });
};

export default useCustomDispatch;
