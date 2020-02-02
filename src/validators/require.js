export default (message = 'Обязательное поле') => {
	return value => {
		if (value.length === 0) {
			return { status: 'error', message };
		}

		return { status: '', message: '' };
	};
};
