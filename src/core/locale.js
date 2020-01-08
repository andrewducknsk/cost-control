export default {
	header: {
		title: 'Контроль расходов',
	},
	navigation: {
		links: [
			{
				route: '/',
				label: 'Главная',
			},
			{
				route: '/history',
				label: 'История',
			},
		],
	},
	greeting: {
		title: 'Приветсвую',
		description:
			'Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-',
		buttonLabel: 'Добавь свои расходы',
	},
	addingNote: {
		title: 'Добавь свой расход',
		expenseNameLabel: 'Название расхода',
		expenseNamePlaceholder: 'Например: Купил еды',
		expenseTypeLabel: 'Категория расходов',
		expenseDateLabel: 'Дата расходов',
		expenseAmountLabel: 'Сумма',
		expenseAmountPlaceholder: 'Например: 1000',
		buttonLabel: 'Отправить',
	},
	settingBar: {
		title: 'Фильтры',
		buttons: [
			{
				label: 'Расходы',
				action: 'expenses',
				styleType: 'secondary',
			},
			{
				label: 'Доходы',
				action: 'income',
				styleType: 'secondary',
			},
			{
				label: 'Сброс',
				action: '',
				styleType: 'secondary',
			},
		],
	},
};
