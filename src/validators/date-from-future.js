export default (message = 'Укажите корректную дату') => {
	return value => {
		const currentDate = new Date().getTime();
		const receivedDate = new Date(value).getTime();

		if (receivedDate > currentDate) {
			return { status: 'error', message };
		}

		return { status: '', message: '' };
	};
};
