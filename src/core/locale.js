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
				route: '/debts',
				label: 'Долги',
			},
			{
				route: '/income',
				label: 'Доходы',
			},
		],
	},
	greeting: {
		title: 'Приветсвую',
		description:
			'Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-Бла-',
		buttonLabel: 'Добавь свои расходы',
	},
	addingExpenses: {
		title: 'Добавь свой расход',
		expenseNameLabel: 'Название расхода',
		expenseNamePlaceholder: 'Например: Купил еды',
		expenseTypeLabel: 'Категория расходов',
		expenseDateLabel: 'Дата расходов',
		expenseAmountLabel: 'Сумма',
		expenseAmountPlaceholder: 'Например: 1000',
		buttonLabel: 'Отправить',
	},
};
