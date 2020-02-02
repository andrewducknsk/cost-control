export default ({ length, message = 'Слишком длинное значение' }) => {
	return value => {
		if (value.length > length) {
			return { status: 'error', message };
		}

		return { status: '', message: '' };
	};
};
