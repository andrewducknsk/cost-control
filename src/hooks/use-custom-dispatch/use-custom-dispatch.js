import { useDispatch } from 'react-redux';

const useCustomDispatch = () => {
	const dispatch = useDispatch();

	return (type, payload) => dispatch({ type, payload });
};

export default useCustomDispatch;
