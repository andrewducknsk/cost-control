import { useState } from 'react';

const useOutClickElementClosing = () => {
	const [path, setPath] = useState();

	console.log(
		'%c use-out-click-element-closing ',
		'color: #000; background-color: #95B46A',
		'useOutClickElementClosing',
		path
	);

	return [setPath];
};

export default useOutClickElementClosing;
