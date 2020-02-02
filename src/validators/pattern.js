export default ({ pattern, message = 'Используются запрещенные символы' }) => {
	return value => {
		const valueContainsPattern = value.search(pattern);

		if (valueContainsPattern !== -1) {
			return { status: 'error', message };
		}

		return { status: '', message: '' };
	};
};
