import { useDispatch } from 'react-redux';

// TODO: types
const useCustomDispatch: () => (type: string, payload?: object) => void = () => {
  const dispatch = useDispatch();

  return (type, payload = {}) => dispatch({ type, payload });
};

export default useCustomDispatch;
