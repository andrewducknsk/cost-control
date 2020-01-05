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
	addingExpenses: {
		title: 'Добавь свой расход',
		expenseNameLabel: 'Название расхода',
		expenseNamePlaceholder: 'Например: Купил еды',
		expenseTypeLabel: 'Категория расхода',
		buttonLabel: 'Отправить',
	},
};
